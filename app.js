// 2026 정보보호 업무 실무편람 — ChatGPT 대화형 스트림 + 우측 Split Canvas (채팅 입력창 제외 버전)

const STORAGE_KEYS = {
  SCHOOL_INFO: "info_sec_2026_school_info",
  SCHEDULE_CHECKS: "info_sec_2026_schedule_checks",
  CSD_CHECKS: "info_sec_2026_csd_checks",
  AUDIT_CHECKS: "info_sec_2026_audit_checks",
  THEME: "info_sec_2026_theme"
};

let state = {
  schoolInfo: {
    schoolName: "전남○○학교",
    eduOfficeName: "전라남도○○교육지원청",
    principalName: "김교장",
    vicePrincipalName: "이교감",
    adminHeadName: "박실장",
    managerRole: "정보부장 교사",
    managerName: "홍길동",
    masterId: "jn000000"
  },
  scheduleChecks: {},
  csdChecks: {},
  auditChecks: {},
  activeSidebarId: "home",
  activeCanvasFormId: null,
  slideIndex: 0
};

const OPENAI_LOGO_SVG = `
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4"/>
  </svg>
`;

function loadState() {
  try {
    const savedSchool = localStorage.getItem(STORAGE_KEYS.SCHOOL_INFO);
    if (savedSchool) state.schoolInfo = { ...state.schoolInfo, ...JSON.parse(savedSchool) };
    const savedSched = localStorage.getItem(STORAGE_KEYS.SCHEDULE_CHECKS);
    if (savedSched) state.scheduleChecks = JSON.parse(savedSched);
    const savedCsd = localStorage.getItem(STORAGE_KEYS.CSD_CHECKS);
    if (savedCsd) state.csdChecks = JSON.parse(savedCsd);
    const savedAudit = localStorage.getItem(STORAGE_KEYS.AUDIT_CHECKS);
    if (savedAudit) state.auditChecks = JSON.parse(savedAudit);
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme === "dark") document.documentElement.setAttribute("data-theme", "dark");
  } catch (e) {
    console.error(e);
  }
}

function saveState(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
}

function applyTemplateVars(str) {
  if (!str) return "";
  const s = state.schoolInfo;
  return str
    .replace(/\{schoolName\}/g, s.schoolName || "○○학교")
    .replace(/\{eduOfficeName\}/g, s.eduOfficeName || "전라남도○○교육지원청")
    .replace(/\{principalName\}/g, s.principalName || "○○○")
    .replace(/\{vicePrincipalName\}/g, s.vicePrincipalName || "○○○")
    .replace(/\{adminHeadName\}/g, s.adminHeadName || "○○○")
    .replace(/\{managerRole\}/g, s.managerRole || "정보부장")
    .replace(/\{managerName\}/g, s.managerName || "○○○")
    .replace(/\{masterId\}/g, s.masterId || "jn000000");
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function copyText(text, label = "클립보드에 복사되었습니다.") {
  navigator.clipboard.writeText(text).then(() => showToast(label));
}

function toggleSidebar() {
  document.body.classList.toggle("sidebar-closed");
}

// 좌측 사이드바 렌더링 (ChatGPT 대화/주제 목록 스타일)
function renderSidebar() {
  const s = state.schoolInfo;
  document.getElementById("sidebar-avatar").textContent = (s.schoolName || "전")[0];
  document.getElementById("sidebar-school").textContent = s.schoolName;
  document.getElementById("sidebar-manager").textContent = `${s.managerRole} ${s.managerName}`;

  const el = document.getElementById("sidebar-menu-list");
  el.innerHTML = `
    <div class="sidebar-section-label">주요 실행 메뉴</div>
    <button class="sidebar-item ${state.activeSidebarId === 'home' ? 'active' : ''}" onclick="resetStreamToHome()">
      <span class="sidebar-item-dot"></span><span>홈 · 전체 주제 선택</span>
    </button>
    <button class="sidebar-item ${state.activeSidebarId === 'top5' ? 'active' : ''}" onclick="askTop5AuditRules()">
      <span class="sidebar-item-dot"></span><span>감사 최다 지적 Top 5 수칙</span>
    </button>
    <button class="sidebar-item ${state.activeSidebarId === 'csd' ? 'active' : ''}" onclick="askCyberSecurityDay()">
      <span class="sidebar-item-dot"></span><span>사이버보안 진단의 날 (12개월)</span>
    </button>
    <button class="sidebar-item ${state.activeSidebarId === 'schedule' ? 'active' : ''}" onclick="askScheduleChecklist('all')">
      <span class="sidebar-item-dot"></span><span>시기별 업무 추진 체크리스트</span>
    </button>
    <button class="sidebar-item ${state.activeSidebarId === 'audit' ? 'active' : ''}" onclick="askAuditChecklist('all')">
      <span class="sidebar-item-dot"></span><span>감사 중점 점검 자가진단 (18영역)</span>
    </button>
    <button class="sidebar-item ${state.activeSidebarId === 'training' ? 'active' : ''}" onclick="askTrainingSlides()">
      <span class="sidebar-item-dot"></span><span>교직원 연수 슬라이드 (부록)</span>
    </button>
    <button class="sidebar-item ${state.activeSidebarId === 'contacts' ? 'active' : ''}" onclick="askContactsDirectory()">
      <span class="sidebar-item-dot"></span><span>비상연락처 · 나이스 상담센터</span>
    </button>

    <div class="sidebar-section-label">실무편람 매뉴얼 (제1장~제3장)</div>
    ${MANUAL_DATA.chapters.map(ch => `
      <button class="sidebar-item ${state.activeSidebarId === ch.id ? 'active' : ''}" onclick="askChapter('${ch.id}')">
        <span class="sidebar-item-dot"></span><span>${ch.title}</span>
      </button>
    `).join("")}

    <div class="sidebar-section-label">별지서식 · 내부결재 기안문 (26종)</div>
    ${MANUAL_DATA.forms.map(f => `
      <button class="sidebar-item ${state.activeSidebarId === f.id ? 'active' : ''}" onclick="askForm('${f.id}')">
        <span class="sidebar-item-dot"></span><span>[${f.badge}] ${f.title}</span>
      </button>
    `).join("")}
  `;
}

// 초기 홈 화면 (중앙 채팅 입력창 없이 ChatGPT 웰컴 로고 + 스타터 카드 + 주제 칩으로 구성)
function renderWelcomeSection() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const csdCurrent = MANUAL_DATA.cyberSecurityDays2026.find(d => d.month === currentMonth) || MANUAL_DATA.cyberSecurityDays2026[0];

  const welcomeEl = document.getElementById("welcome-section");
  welcomeEl.innerHTML = `
    <div class="welcome-hero">
      <div class="openai-emblem">${OPENAI_LOGO_SVG}</div>
      <h1 class="welcome-title">무엇을 도와드릴까요?</h1>
      <p class="welcome-sub">원하시는 실무 주제나 기안문·대장을 선택하시면 대화창에 안내가 출력되고 우측 <strong>Canvas</strong>에 문서가 열립니다.</p>
    </div>

    <div class="starter-grid">
      <button class="starter-card" onclick="askTop5AuditRules()">
        <div class="starter-card-title">감사 최다 지적 Top 5 핵심 수칙</div>
        <div class="starter-card-desc">K-에듀파인 비공개(6호)+직원열람제한(영구), 공직자통합메일 설정 등</div>
      </button>
      <button class="starter-card" onclick="askCyberSecurityDay()">
        <div class="starter-card-title">이달의 사이버보안 진단의 날 (${csdCurrent.label})</div>
        <div class="starter-card-desc">내PC지키미 100점 조치 · USB 점검대장 · CCTV 30일 자동삭제 기록</div>
      </button>
      <button class="starter-card" onclick="askScheduleChecklist('all')">
        <div class="starter-card-title">시기별 정보보호 업무 추진 체크리스트</div>
        <div class="starter-card-desc">2~3월 학기초 동의서·서약서, 분기별 SW 대장, 학기중 일제정비</div>
      </button>
      <button class="starter-card" onclick="askAuditChecklist('all')">
        <div class="starter-card-title">감사 중점 점검사항 18개 영역 자가진단</div>
        <div class="starter-card-desc">정보보안(7개 영역) · 개인정보보호(9개 영역) · 교육 · 정품SW</div>
      </button>
    </div>

    <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center; margin-bottom:24px;">
      <button class="chip-btn" onclick="askForm('form-sec-2')">정보보안담당관 지정 기안문</button>
      <button class="chip-btn" onclick="askForm('form-pi-2')">개인정보 처리방침 개정 기안문</button>
      <button class="chip-btn" onclick="askForm('form-app-1')">교직원 정보보호 교육 실시 기안문</button>
      <button class="chip-btn" onclick="askForm('form-pi-11')">개인영상정보(CCTV) 관리대장</button>
      <button class="chip-btn" onclick="askChapter('ch2-5')">제3자 제공 vs 처리 위탁 비교</button>
      <button class="chip-btn" onclick="askTrainingSlides()">교직원 연수용 슬라이드 열기</button>
    </div>
  `;
}

// 대화 스트림에 새 Turn(질문 버블 + AI 응답 + 후속 추천 버튼) 추가
function appendConversationTurn(userPromptText, assistantHtml, followupButtonsHtml = "") {
  // 웰컴 영역은 축소하거나 숨겨서 실제 ChatGPT 대화 화면처럼 전환
  document.getElementById("welcome-section").style.display = "none";

  const stream = document.getElementById("conversation-stream");
  const turn = document.createElement("div");
  turn.className = "turn-block";
  turn.innerHTML = `
    <div class="user-turn">
      <div class="user-bubble">${userPromptText}</div>
    </div>
    <div class="assistant-turn">
      <div class="assistant-avatar">${OPENAI_LOGO_SVG}</div>
      <div class="assistant-body">
        ${assistantHtml}
        ${followupButtonsHtml ? `<div class="followup-chips">${followupButtonsHtml}</div>` : ""}
      </div>
    </div>
  `;
  stream.appendChild(turn);

  setTimeout(() => {
    turn.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
}

function resetStreamToHome() {
  state.activeSidebarId = "home";
  closeCanvas();
  renderSidebar();
  document.getElementById("conversation-stream").innerHTML = "";
  const welcomeEl = document.getElementById("welcome-section");
  welcomeEl.style.display = "block";
  renderWelcomeSection();
  document.getElementById("chat-scroll-area").scrollTo({ top: 0, behavior: "smooth" });
}

// 1. 감사 최다 지적 Top 5 수칙 출력
function askTop5AuditRules() {
  state.activeSidebarId = "top5";
  renderSidebar();
  appendConversationTurn(
    "종합감사 및 보안감사에서 가장 많이 지적되는 핵심 수칙 5가지를 정리해 줘.",
    `
      <p style="margin-bottom:12px;"><strong>2026년도 정보보호 업무 실무편람</strong> 기준 감사 최다 지적 Top 5 핵심 사항입니다. 아래 문서 카드를 클릭하면 우측 <strong>Canvas</strong>에서 기안문과 대장을 바로 작성할 수 있습니다.</p>
      <div class="alert-box danger">
        <strong>1. K-에듀파인 개인정보 포함 문서 보안설정 누락 (감사 지적 1순위)</strong>
        <p style="margin-top:4px;">개인정보(주민번호, 계좌번호, 연락처 등)가 포함된 공문서는 반드시 <strong>「대국민 공개여부: 비공개(6호)」</strong>와 <strong>「학교내 직원열람제한: 영구」</strong>를 동시에 설정해야 합니다. (전년도 결재 문서는 당해년도 5월까지만 문서등록대장에서 수정 가능)</p>
      </div>
      <div class="alert-box">
        <strong>2. K-에듀파인 공문서 하단 상용메일 기재 금지</strong>
        <p style="margin-top:4px;"><code>K-에듀파인 &gt; 개인설정 &gt; 개인정보관리</code>에서 이메일을 반드시 <strong>공직자통합메일(@korea.kr)</strong>로 수정하세요. 상용 메신저(카카오톡·밴드)를 통한 업무 소통 및 생성형 AI 민감정보 입력도 금지됩니다.</p>
      </div>
      <div class="alert-box">
        <strong>3. 매월 세 번째 수요일 「사이버보안 진단의 날」 3대 점검 세트</strong>
        <p style="margin-top:4px;">매월 3주 수요일마다 ① 내PC지키미 100점 조치, ② 휴대용 저장매체 점검대장([별지 4-2]), ③ 개인영상정보 관리대장([별지 11] - 30일 자동삭제 주기적 점검일시 기록 및 교장 확인)을 함께 이행해야 합니다.</p>
      </div>
      <div class="alert-box">
        <strong>4. 채용공고 시 주민등록번호·가족사항 등 과도한 개인정보 수집 금지</strong>
        <p style="margin-top:4px;">주민등록번호는 정보주체 동의를 받아도 수집 불가(법정주의)하며, 법령 근거 외 수집·보유 시 5년 이하 징역 또는 5천만원 이하 벌금 대상입니다.</p>
      </div>
      <div class="alert-box">
        <strong>5. 알집·알PDF·포토샵·NesPDF 등 비인가 SW 설치 금지</strong>
        <p style="margin-top:4px;">도교육청 일괄보급 정품은 <strong>알약 5.0, MS-EES, 한컴오피스 2024 EDU</strong>입니다. 분기별로 소프트웨어 관리대장을 작성·보관하세요.</p>
      </div>
    `,
    `
      <button class="chip-btn primary" onclick="openFormInCanvas('form-pi-11')">Canvas 열기: 개인영상정보 관리대장 [별지 11]</button>
      <button class="chip-btn" onclick="openFormInCanvas('form-sec-4')">Canvas 열기: 휴대용 저장매체 대장 [별지 4]</button>
      <button class="chip-btn" onclick="askChapter('ch2-4')">K-에듀파인 보안설정 매뉴얼 보기</button>
    `
  );
}

// 2. 사이버보안 진단의 날 12개월 트래커 출력
function askCyberSecurityDay() {
  state.activeSidebarId = "csd";
  renderSidebar();
  const currentMonth = new Date().getMonth() + 1;

  const html = `
    <p style="margin-bottom:14px;"><strong>2026년 매월 세 번째 수요일 「사이버보안 진단의 날」</strong> 연간 점검표입니다. 각 항목을 체크하면 자동 저장됩니다.</p>
    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:10px;">
      ${MANUAL_DATA.cyberSecurityDays2026.map(d => `
        <div class="info-card" style="${d.month === currentMonth ? 'border-color:var(--primary);' : ''}">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <strong>${d.month}월 진단의 날</strong>
            <span class="badge">${d.label}</span>
          </div>
          ${d.tasks.map((t, idx) => {
            const checked = !!state.csdChecks[`${d.month}-${idx}`];
            return `
              <label style="display:flex; align-items:flex-start; gap:8px; font-size:0.8rem; margin-bottom:6px; cursor:pointer; ${checked ? 'text-decoration:line-through; opacity:0.6;' : ''}">
                <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleCsdCheck(${d.month}, ${idx}, this)" />
                <span>${t}</span>
              </label>
            `;
          }).join("")}
        </div>
      `).join("")}
    </div>
  `;

  appendConversationTurn(
    "2026년 매월 세 번째 수요일 '사이버보안 진단의 날' 일정과 체크리스트를 보여줘.",
    html,
    `
      <a class="chip-btn primary" href="https://172.16.100.30/mc" target="_blank" rel="noopener">내PC지키미 관리자 접속 (172.16.100.30/mc) ↗</a>
      <button class="chip-btn" onclick="openFormInCanvas('form-sec-4')">휴대용 저장매체 점검대장 [별지 4-2]</button>
      <button class="chip-btn" onclick="openFormInCanvas('form-pi-11')">개인영상정보 관리대장 [별지 11]</button>
    `
  );
}

function toggleCsdCheck(month, idx, inputEl) {
  const key = `${month}-${idx}`;
  state.csdChecks[key] = inputEl.checked;
  saveState(STORAGE_KEYS.CSD_CHECKS, state.csdChecks);
  const label = inputEl.closest("label");
  if (label) {
    label.style.textDecoration = inputEl.checked ? "line-through" : "none";
    label.style.opacity = inputEl.checked ? "0.6" : "1";
  }
}

// 3. 시기별 추진 체크리스트 출력
function askScheduleChecklist(periodFilter = "all") {
  state.activeSidebarId = "schedule";
  renderSidebar();
  const list = MANUAL_DATA.scheduleTasks.filter(t => periodFilter === "all" || t.period === periodFilter);

  const html = `
    <p style="margin-bottom:12px;">실무편람 p.6 기준 <strong>${periodFilter === 'all' ? '전체 시기별' : periodFilter} 정보보호 업무 추진 체크리스트</strong>입니다. 우측 버튼을 클릭하면 <strong>Canvas</strong>에 해당 기안문/서식이 열립니다.</p>
    <div>
      ${list.map(t => {
        const done = !!state.scheduleChecks[t.id];
        return `
          <div class="check-row ${done ? 'done' : ''}">
            <label style="display:flex; align-items:flex-start; gap:10px; flex:1; cursor:pointer;">
              <input type="checkbox" style="margin-top:4px;" ${done ? 'checked' : ''} onchange="toggleSchedCheck('${t.id}', this)" />
              <div>
                <div class="check-title" style="font-weight:600; font-size:0.9rem;">
                  <span class="badge">${t.period} · ${t.category}</span> ${t.title}
                </div>
                <div style="font-size:0.82rem; color:var(--text-secondary); margin-top:3px;">${t.description}</div>
              </div>
            </label>
            <div style="display:flex; gap:6px; flex-shrink:0;">
              ${t.formId ? `<button class="chip-btn primary" onclick="openFormInCanvas('${t.formId}')">Canvas 서식</button>` : ""}
              ${t.chapterId ? `<button class="chip-btn" onclick="askChapter('${t.chapterId}')">매뉴얼</button>` : ""}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;

  appendConversationTurn(
    `${periodFilter === 'all' ? '연간 시기별 정보보호 업무 추진 일정 전체' : periodFilter + ' 정보보호 추진 업무'} 체크리스트를 보여줘.`,
    html,
    `
      <button class="chip-btn" onclick="askScheduleChecklist('2월~3월')">2월~3월 신학기</button>
      <button class="chip-btn" onclick="askScheduleChecklist('매월')">매월 정기점검</button>
      <button class="chip-btn" onclick="askScheduleChecklist('분기')">분기별 업무</button>
      <button class="chip-btn" onclick="askScheduleChecklist('학기 중')">학기 중 일제정비</button>
      <button class="chip-btn" onclick="askScheduleChecklist('연중')">연중 상시업무</button>
    `
  );
}

function toggleSchedCheck(id, inputEl) {
  state.scheduleChecks[id] = inputEl.checked;
  saveState(STORAGE_KEYS.SCHEDULE_CHECKS, state.scheduleChecks);
  const row = inputEl.closest(".check-row");
  if (row) row.classList.toggle("done", inputEl.checked);
}

// 4. 감사 중점 점검사항 자가진단 출력
function askAuditChecklist(domainFilter = "all") {
  state.activeSidebarId = "audit";
  renderSidebar();
  const list = MANUAL_DATA.auditChecklist.filter(a => domainFilter === "all" || a.domain === domainFilter);

  const html = `
    <p style="margin-bottom:12px;">실무편람 p.7 <strong>감사 중점 점검사항 (${domainFilter === 'all' ? '전 영역 18개' : domainFilter})</strong> 자가진단표입니다.</p>
    ${list.map(a => `
      <div style="border:1px solid var(--border); border-radius:12px; padding:16px; margin-bottom:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <strong>[${a.domain}] ${a.area}</strong>
          <span class="badge">${a.note}</span>
        </div>
        ${a.items.map((itemText, idx) => {
          const checked = !!state.auditChecks[`${a.id}-${idx}`];
          return `
            <label style="display:flex; align-items:flex-start; gap:9px; font-size:0.86rem; margin-bottom:6px; cursor:pointer; ${checked ? 'text-decoration:line-through; opacity:0.6;' : ''}">
              <input type="checkbox" style="margin-top:4px;" ${checked ? 'checked' : ''} onchange="toggleAuditCheck('${a.id}', ${idx}, this)" />
              <span>${itemText}</span>
            </label>
          `;
        }).join("")}
        <div class="alert-box" style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap; margin-top:10px; margin-bottom:0;">
          <span style="font-size:0.8rem; color:var(--text-secondary);">💡 ${a.warning}</span>
          ${a.formId ? `<button class="chip-btn primary" onclick="openFormInCanvas('${a.formId}')">Canvas에서 서식 열기</button>` : ""}
        </div>
      </div>
    `).join("")}
  `;

  appendConversationTurn(
    `감사 중점 점검사항 (${domainFilter === 'all' ? '전체 18개 영역' : domainFilter}) 자가진단 체크리스트를 실행해 줘.`,
    html,
    `
      <button class="chip-btn" onclick="askAuditChecklist('정보보안')">정보보안 (7개 영역)</button>
      <button class="chip-btn" onclick="askAuditChecklist('개인정보 보호')">개인정보 보호 (9개 영역)</button>
      <button class="chip-btn" onclick="askAuditChecklist('정품 S/W')">정품 S/W · 교육 · 기타</button>
    `
  );
}

function toggleAuditCheck(auditId, idx, inputEl) {
  const key = `${auditId}-${idx}`;
  state.auditChecks[key] = inputEl.checked;
  saveState(STORAGE_KEYS.AUDIT_CHECKS, state.auditChecks);
  const label = inputEl.closest("label");
  if (label) {
    label.style.textDecoration = inputEl.checked ? "line-through" : "none";
    label.style.opacity = inputEl.checked ? "0.6" : "1";
  }
}

// 5. 매뉴얼 챕터 질문 & 출력
function askChapter(chapterId) {
  const ch = MANUAL_DATA.chapters.find(c => c.id === chapterId);
  if (!ch) return;
  state.activeSidebarId = ch.id;
  renderSidebar();

  const html = `
    <div style="margin-bottom:10px;">
      <span class="badge">${ch.part}</span> <span class="badge">${ch.pages}</span>
    </div>
    <h2 style="font-size:1.25rem; font-weight:600; margin-bottom:14px;">${ch.title}</h2>
    ${ch.sections.map(sec => `
      <div class="manual-section">
        <h3>${sec.heading}</h3>
        <div>${applyTemplateVars(sec.content)}</div>
      </div>
    `).join("")}
  `;

  appendConversationTurn(
    `${ch.part} — 「${ch.title}」 상세 실무 지침을 알려줘.`,
    html,
    `
      <button class="chip-btn" onclick="askScheduleChecklist('all')">시기별 체크리스트 보기</button>
      <button class="chip-btn" onclick="askAuditChecklist('all')">감사 자가진단 보기</button>
    `
  );
}

// 6. 별지서식 & 내부결재 기안문 질문 → 대화 스트림 안내 + 우측 Split Canvas 자동 오픈!
function askForm(formId) {
  const form = MANUAL_DATA.forms.find(f => f.id === formId);
  if (!form) return;
  state.activeSidebarId = form.id;
  renderSidebar();

  const html = `
    <p>요청하신 <strong>[${form.badge}] ${form.title}</strong> (${form.page}) 양식을 우측 <strong>Canvas</strong>에 열었습니다.</p>
    <p style="font-size:0.86rem; color:var(--text-secondary); margin-top:4px;">• <strong>작성 시기:</strong> ${form.when}<br>• <strong>설명:</strong> ${form.description}</p>

    <div class="canvas-trigger-card" onclick="openFormInCanvas('${form.id}')">
      <div class="canvas-trigger-left">
        <div class="canvas-doc-icon">📄</div>
        <div>
          <div style="font-weight:600; font-size:0.92rem;">[${form.badge}] ${form.title}</div>
          <div style="font-size:0.78rem; color:var(--text-muted);">${state.schoolInfo.schoolName} 정보가 자동 반영된 ${form.type === 'draft' ? '기안문/서약서' : '관리대장'} Canvas</div>
        </div>
      </div>
      <span class="chip-btn primary">Canvas 열기 →</span>
    </div>
  `;

  appendConversationTurn(
    `[${form.badge}] ${form.title} 양식을 우리 학교(${state.schoolInfo.schoolName}) 정보로 작성해 줘.`,
    html
  );

  openFormInCanvas(form.id);
}

// 우측 Split Canvas 열기 (ChatGPT Canvas 작동 방식 그대로!)
function openFormInCanvas(formId) {
  const form = MANUAL_DATA.forms.find(f => f.id === formId);
  if (!form) return;
  state.activeCanvasFormId = formId;

  document.getElementById("canvas-badge").textContent = form.badge;
  document.getElementById("canvas-title").textContent = form.title;

  let bodyHtml = "";
  if (form.type === "draft") {
    const resolvedTitle = applyTemplateVars(form.draftTitle);
    const resolvedBody = applyTemplateVars(form.draftBody);
    bodyHtml = `
      <div class="canvas-paper">
        <div class="alert-box" style="margin-top:0;">
          <strong>결재 · 보안 설정 기준:</strong> ${applyTemplateVars(form.securityConfig)}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-top:14px;">
          <div style="font-size:0.9rem;"><strong>제목:</strong> <span id="canvas-draft-title">${resolvedTitle}</span></div>
          <div style="display:flex; gap:6px;">
            <button class="chip-btn" onclick="copyText(document.getElementById('canvas-draft-title').textContent, '제목이 복사되었습니다.')">제목 복사</button>
            <button class="chip-btn primary" onclick="copyText(document.getElementById('canvas-draft-textarea').value, '기안문 본문이 복사되었습니다.')">본문 전체 복사</button>
          </div>
        </div>
        <textarea id="canvas-draft-textarea" class="draft-textarea">${resolvedBody}</textarea>
      </div>
    `;
  } else {
    bodyHtml = `
      <div class="canvas-paper">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
          <span style="font-size:0.82rem; color:var(--text-secondary);">${state.schoolInfo.schoolName} 자동 반영 관리대장 양식</span>
          <a class="chip-btn primary" href="https://tims.jne.go.kr" target="_blank" rel="noopener">TIMS 원본 서식 다운로드 ↗</a>
        </div>
        <div style="overflow-x:auto;">
          <table class="manual-table">
            <thead><tr>${form.headers.map(h => `<th>${h}</th>`).join("")}</tr></thead>
            <tbody>
              ${form.sampleRows.map(r => `<tr>${r.map(c => `<td>${applyTemplateVars(c)}</td>`).join("")}</tr>`).join("")}
              <tr>${form.headers.map(() => `<td style="height:36px;"></td>`).join("")}</tr>
              <tr>${form.headers.map(() => `<td style="height:36px;"></td>`).join("")}</tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  document.getElementById("canvas-body").innerHTML = `
    <div style="margin-bottom:14px;">
      <div style="font-size:0.78rem; color:var(--text-muted);">${form.category} · ${form.page}</div>
      <h2 style="font-size:1.35rem; font-weight:600; margin:4px 0 6px;">${form.title}</h2>
      <p style="font-size:0.84rem; color:var(--text-secondary);">${form.description}</p>
    </div>
    ${bodyHtml}
  `;

  document.body.classList.add("canvas-open");
}

function closeCanvas() {
  document.body.classList.remove("canvas-open");
  state.activeCanvasFormId = null;
}

// 7. 교직원 연수 슬라이드 → 우측 Canvas에 프레젠테이션 오픈
function askTrainingSlides() {
  state.activeSidebarId = "training";
  renderSidebar();
  state.slideIndex = 0;

  appendConversationTurn(
    "전 교직원 대상 정보보안 및 개인정보보호 연수 교육자료(제4장 부록) 슬라이드와 내부결재 기안문을 열어줘.",
    `
      <p>제4장 부록(p.103~113) <strong>교직원 연수용 프레젠테이션 슬라이드(총 8장)</strong>를 우측 <strong>Canvas</strong>에 열었습니다. 연수 전·후에 필요한 내부결재 기안문도 아래 버튼으로 바로 전환할 수 있습니다.</p>
    `,
    `
      <button class="chip-btn primary" onclick="openSlidesInCanvas()">슬라이드 Canvas 열기</button>
      <button class="chip-btn" onclick="openFormInCanvas('form-app-1')">교육 실시 내부결재 기안문</button>
      <button class="chip-btn" onclick="openFormInCanvas('form-app-2')">교육 결과보고 내부결재 기안문</button>
    `
  );

  openSlidesInCanvas();
}

function changeCanvasSlide(delta) {
  const total = MANUAL_DATA.trainingSlides.length;
  state.slideIndex = (state.slideIndex + delta + total) % total;
  openSlidesInCanvas();
}

function openSlidesInCanvas() {
  const total = MANUAL_DATA.trainingSlides.length;
  const slide = MANUAL_DATA.trainingSlides[state.slideIndex];

  document.getElementById("canvas-badge").textContent = `Slide ${slide.slideNo} / ${total}`;
  document.getElementById("canvas-title").textContent = "교직원 정보보호 연수자료";

  document.getElementById("canvas-body").innerHTML = `
    <div class="canvas-paper" style="min-height:420px; display:flex; flex-direction:column; justify-content:space-between;">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span class="badge">${slide.category}</span>
          <span style="font-size:0.78rem; color:var(--text-muted);">${state.schoolInfo.schoolName} 연수자료</span>
        </div>
        <h2 style="font-size:1.45rem; font-weight:600; margin-bottom:20px;">${slide.title}</h2>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${slide.points.map((pt, i) => `
            <div style="padding:12px 14px; border-radius:10px; background:var(--surface-alt); border:1px solid var(--border); font-size:0.9rem;">
              <strong>0${i + 1}.</strong> ${pt}
            </div>
          `).join("")}
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:28px; padding-top:16px; border-top:1px solid var(--border);">
        <button class="chip-btn" onclick="changeCanvasSlide(-1)">← 이전</button>
        <div style="display:flex; gap:4px;">
          ${MANUAL_DATA.trainingSlides.map((s, idx) => `
            <button class="chip-btn ${idx === state.slideIndex ? 'primary' : ''}" onclick="state.slideIndex=${idx}; openSlidesInCanvas();">${s.slideNo}</button>
          `).join("")}
        </div>
        <button class="chip-btn primary" onclick="changeCanvasSlide(1)">다음 →</button>
      </div>
    </div>
  `;

  document.body.classList.add("canvas-open");
}

// 8. 비상연락처 & 시스템 디렉토리 출력
function askContactsDirectory() {
  state.activeSidebarId = "contacts";
  renderSidebar();

  const html = `
    <p style="margin-bottom:12px;">실무편람 p.96~97 기준 <strong>업무별·시스템별 콜센터 연락처 및 바로가기</strong>입니다.</p>
    <div style="overflow-x:auto;">
      <table class="manual-table">
        <thead>
          <tr><th>분류</th><th>업무 / 시스템</th><th>연락처</th><th>담당기관</th><th>링크</th></tr>
        </thead>
        <tbody>
          ${MANUAL_DATA.contacts.map(c => `
            <tr>
              <td><span class="badge">${c.category}</span></td>
              <td><strong>${c.name}</strong></td>
              <td>
                <span style="font-family:var(--font-mono); font-weight:600;">${c.phone}</span>
                <button class="chip-btn" style="padding:2px 8px; font-size:0.72rem; margin-left:4px;" onclick="copyText('${c.phone}', '연락처가 복사되었습니다.')">복사</button>
              </td>
              <td>${applyTemplateVars(c.org)}</td>
              <td>${c.url ? `<a class="chip-btn primary" style="padding:3px 10px; font-size:0.74rem; text-decoration:none;" href="${c.url}" target="_blank" rel="noopener">접속 ↗</a>` : "-"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;

  appendConversationTurn(
    "시스템 장애 신고, 인증서, 스쿨넷, 보안관제, 나이스 상담센터 연락처와 접속 링크를 보여줘.",
    html
  );
}

// 학교 설정 모달
function openSchoolModal() {
  const s = state.schoolInfo;
  document.getElementById("inp-schoolName").value = s.schoolName;
  document.getElementById("inp-eduOfficeName").value = s.eduOfficeName;
  document.getElementById("inp-principalName").value = s.principalName;
  document.getElementById("inp-vicePrincipalName").value = s.vicePrincipalName;
  document.getElementById("inp-adminHeadName").value = s.adminHeadName;
  document.getElementById("inp-managerRole").value = s.managerRole;
  document.getElementById("inp-managerName").value = s.managerName;
  document.getElementById("inp-masterId").value = s.masterId;
  document.getElementById("school-modal").classList.add("open");
}

function closeSchoolModal() {
  document.getElementById("school-modal").classList.remove("open");
}

function saveSchoolInfoForm(e) {
  e.preventDefault();
  state.schoolInfo = {
    schoolName: document.getElementById("inp-schoolName").value.trim() || "전남○○학교",
    eduOfficeName: document.getElementById("inp-eduOfficeName").value.trim() || "전라남도○○교육지원청",
    principalName: document.getElementById("inp-principalName").value.trim() || "김교장",
    vicePrincipalName: document.getElementById("inp-vicePrincipalName").value.trim() || "이교감",
    adminHeadName: document.getElementById("inp-adminHeadName").value.trim() || "박실장",
    managerRole: document.getElementById("inp-managerRole").value.trim() || "정보부장 교사",
    managerName: document.getElementById("inp-managerName").value.trim() || "홍길동",
    masterId: document.getElementById("inp-masterId").value.trim() || "jn000000"
  };
  saveState(STORAGE_KEYS.SCHOOL_INFO, state.schoolInfo);
  closeSchoolModal();
  renderSidebar();
  if (state.activeCanvasFormId) openFormInCanvas(state.activeCanvasFormId);
  showToast("학교 및 담당자 정보가 저장되었습니다.");
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem(STORAGE_KEYS.THEME, "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem(STORAGE_KEYS.THEME, "dark");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderSidebar();
  renderWelcomeSection();

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeCanvas();
      closeSchoolModal();
    }
  });
});
