// 2026 정보보호 업무 실무편람 포털 — OpenAI Layout, Navigation & Inspector Drawer Architecture

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
  currentView: "overview",
  manualPart: "제1장 정보보안",
  scheduleFilter: "all",
  auditFilter: "all",
  formFilter: "all",
  contactFilter: "all",
  slideIndex: 0,
  searchQuery: ""
};

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
  if (window.innerWidth <= 900) {
    document.body.classList.toggle("sidebar-mobile-open");
  } else {
    document.body.classList.toggle("sidebar-collapsed");
  }
}

function updateSidebarProfile() {
  const s = state.schoolInfo;
  document.getElementById("sidebar-avatar").textContent = (s.schoolName || "전")[0];
  document.getElementById("sidebar-school-name").textContent = s.schoolName;
  document.getElementById("sidebar-manager-name").textContent = `${s.managerRole} ${s.managerName}`;
}

// OpenAI Slide-Over Inspector Drawer (우측 상세 슬라이드 패널)
function openFormInspector(formId) {
  const form = MANUAL_DATA.forms.find(f => f.id === formId);
  if (!form) return;
  document.getElementById("inspector-badge").textContent = `${form.badge} · ${form.page}`;

  let contentHtml = "";
  if (form.type === "draft") {
    const resolvedTitle = applyTemplateVars(form.draftTitle);
    const resolvedBody = applyTemplateVars(form.draftBody);
    contentHtml = `
      <div class="alert-box">
        <strong>결재 · 보안 설정 기준</strong>
        <div style="margin-top:4px; color:var(--text-secondary);">${applyTemplateVars(form.securityConfig)}</div>
      </div>
      <div style="margin-top:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <div style="font-size:0.9rem;"><strong>제목:</strong> <span id="insp-draft-title">${resolvedTitle}</span></div>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-sm" onclick="copyText(document.getElementById('insp-draft-title').textContent, '제목이 복사되었습니다.')">제목 복사</button>
            <button class="btn btn-sm btn-primary" onclick="copyText(document.getElementById('insp-draft-body').value, '기안문 본문이 복사되었습니다.')">본문 전체 복사</button>
          </div>
        </div>
        <textarea id="insp-draft-body" class="draft-textarea">${resolvedBody}</textarea>
      </div>
    `;
  } else {
    contentHtml = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin:16px 0 10px;">
        <span style="font-size:0.8rem; color:var(--text-muted);">${state.schoolInfo.schoolName} 기준 자동 기입 양식</span>
        <a class="btn btn-sm btn-primary" href="https://tims.jne.go.kr" target="_blank" rel="noopener">TIMS 원본 다운로드 ↗</a>
      </div>
      <div style="overflow-x:auto;">
        <table class="manual-table">
          <thead><tr>${form.headers.map(h => `<th>${h}</th>`).join("")}</tr></thead>
          <tbody>
            ${form.sampleRows.map(r => `<tr>${r.map(c => `<td>${applyTemplateVars(c)}</td>`).join("")}</tr>`).join("")}
            <tr>${form.headers.map(() => `<td style="height:34px;"></td>`).join("")}</tr>
          </tbody>
        </table>
      </div>
    `;
  }

  document.getElementById("inspector-body").innerHTML = `
    <div style="font-family:var(--font-mono); font-size:0.74rem; color:var(--text-muted); margin-bottom:6px;">${form.category}</div>
    <h2 style="font-size:1.45rem; font-weight:600; letter-spacing:-0.03em; margin-bottom:10px;">${form.title}</h2>
    <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:6px;"><strong>작성 시기:</strong> ${form.when}</p>
    <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:16px;">${form.description}</p>
    ${contentHtml}
  `;

  document.getElementById("inspector-backdrop").classList.add("open");
  document.getElementById("inspector-drawer").classList.add("open");
}

function openChapterInspector(chapterId) {
  const ch = MANUAL_DATA.chapters.find(c => c.id === chapterId);
  if (!ch) return;
  document.getElementById("inspector-badge").textContent = `${ch.part} · ${ch.pages}`;
  document.getElementById("inspector-body").innerHTML = `
    <h2 style="font-size:1.5rem; font-weight:600; letter-spacing:-0.03em; margin-bottom:8px;">${ch.title}</h2>
    <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:24px;">${ch.summary}</p>
    ${ch.sections.map(sec => `
      <div class="manual-section">
        <h3>${sec.heading}</h3>
        <div>${applyTemplateVars(sec.content)}</div>
      </div>
    `).join("")}
  `;
  document.getElementById("inspector-backdrop").classList.add("open");
  document.getElementById("inspector-drawer").classList.add("open");
}

function closeInspector() {
  document.getElementById("inspector-backdrop").classList.remove("open");
  document.getElementById("inspector-drawer").classList.remove("open");
}

// 뷰 네비게이션
function navigateView(viewId) {
  state.currentView = viewId;
  document.body.classList.remove("sidebar-mobile-open");
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === viewId);
  });
  renderCanvas();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigateManualPart(partName) {
  state.manualPart = partName;
  const viewKey = partName.includes("제1장") ? "manual-ch1" : partName.includes("제2장") ? "manual-ch2" : "manual-ch3";
  state.currentView = viewKey;
  document.body.classList.remove("sidebar-mobile-open");
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === viewKey);
  });
  renderCanvas();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function focusPromptSearch() {
  if (state.currentView !== "overview") navigateView("overview");
  setTimeout(() => {
    const inp = document.getElementById("prompt-search-input");
    if (inp) inp.focus();
  }, 60);
}

// 상태 토글 핸들러
function toggleScheduleTask(id) {
  state.scheduleChecks[id] = !state.scheduleChecks[id];
  saveState(STORAGE_KEYS.SCHEDULE_CHECKS, state.scheduleChecks);
  renderCanvas();
}

function toggleCsdTask(month, idx) {
  const key = `${month}-${idx}`;
  state.csdChecks[key] = !state.csdChecks[key];
  saveState(STORAGE_KEYS.CSD_CHECKS, state.csdChecks);
  renderCanvas();
}

function toggleAuditItem(auditId, idx) {
  const key = `${auditId}-${idx}`;
  state.auditChecks[key] = !state.auditChecks[key];
  saveState(STORAGE_KEYS.AUDIT_CHECKS, state.auditChecks);
  renderCanvas();
}

// 중앙 캔버스 렌더링 (OpenAI 스타일 페이지 구조)
function renderCanvas() {
  updateSidebarProfile();
  const canvas = document.getElementById("main-canvas");
  const breadcrumb = document.getElementById("topbar-breadcrumb");

  if (state.currentView === "overview") {
    breadcrumb.textContent = "Overview";
    renderOverviewCanvas(canvas);
  } else if (state.currentView === "csd") {
    breadcrumb.textContent = "Overview / 사이버보안 진단의 날 (2026)";
    renderCsdCanvas(canvas);
  } else if (state.currentView === "schedule") {
    breadcrumb.textContent = "Operations / 시기별 추진 체크리스트";
    renderScheduleCanvas(canvas);
  } else if (state.currentView === "audit") {
    breadcrumb.textContent = "Operations / 감사 중점 자가진단";
    renderAuditCanvas(canvas);
  } else if (state.currentView.startsWith("manual-")) {
    breadcrumb.textContent = `Manual Handbook / ${state.manualPart}`;
    renderManualCanvas(canvas);
  } else if (state.currentView === "training") {
    breadcrumb.textContent = "Manual Handbook / 제4장 교직원 연수 슬라이드";
    renderTrainingCanvas(canvas);
  } else if (state.currentView === "forms") {
    breadcrumb.textContent = "Templates / 별지서식 · 기안문 생성기 (26종)";
    renderFormsCanvas(canvas);
  } else if (state.currentView === "contacts") {
    breadcrumb.textContent = "Directory / 비상연락처 · 시스템";
    renderContactsCanvas(canvas);
  }
}

// 1. Overview (OpenAI 홈 스타일: 중앙 프롬프트 검색바 + Bento Grid + 에디토리얼 리스트)
function renderOverviewCanvas(canvas) {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const csdCurrent = MANUAL_DATA.cyberSecurityDays2026.find(d => d.month === currentMonth) || MANUAL_DATA.cyberSecurityDays2026[0];
  const csdDone = csdCurrent.tasks.filter((_, i) => state.csdChecks[`${csdCurrent.month}-${i}`]).length;

  const totalSched = MANUAL_DATA.scheduleTasks.length;
  const doneSched = MANUAL_DATA.scheduleTasks.filter(t => state.scheduleChecks[t.id]).length;
  const schedPct = Math.round((doneSched / totalSched) * 100);

  let totalAudit = 0, doneAudit = 0;
  MANUAL_DATA.auditChecklist.forEach(a => a.items.forEach((_, i) => {
    totalAudit++;
    if (state.auditChecks[`${a.id}-${i}`]) doneAudit++;
  }));
  const auditPct = Math.round((doneAudit / totalAudit) * 100);

  canvas.innerHTML = `
    <div class="hero-block">
      <div class="hero-eyebrow">2026 SECURITY &amp; PRIVACY OPERATIONS</div>
      <h1 class="hero-title">무엇을 찾고 계신가요?</h1>
      <p class="hero-subtitle">2026년도 정보보호 업무 실무편람의 모든 규정, 시기별 체크리스트, 감사 지적사항, 26종 별지서식 및 내부결재 기안문을 즉시 검색하고 실행하세요.</p>

      <!-- OpenAI Prompt Style Search Box -->
      <div class="prompt-bar">
        <div class="prompt-input-row">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--text-muted);">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input id="prompt-search-input" type="search" placeholder="키워드 입력 (예: 에듀파인 비공개, 내PC지키미, 위탁계약서, CCTV 30일, 인증서...)" value="${state.searchQuery}" autocomplete="off" />
        </div>
        <div class="prompt-chips">
          <button class="prompt-chip" onclick="triggerQuickQuery('비공개')">K-에듀파인 비공개·열람제한</button>
          <button class="prompt-chip" onclick="triggerQuickQuery('내PC지키미')">내PC지키미 관리자</button>
          <button class="prompt-chip" onclick="triggerQuickQuery('위탁')">개인정보 제3자 제공 vs 위탁</button>
          <button class="prompt-chip" onclick="openFormInspector('form-sec-2')">정보보안담당관 지정 기안문</button>
          <button class="prompt-chip" onclick="openFormInspector('form-pi-2')">개인정보 처리방침 개정 기안문</button>
          <button class="prompt-chip" onclick="openFormInspector('form-app-1')">교직원 정보보호 교육 기안문</button>
        </div>
      </div>
      <div id="prompt-search-results" style="margin-top:14px;"></div>
    </div>

    <!-- Bento Grid 3 Cards -->
    <div class="bento-grid-3">
      <div class="bento-card clickable" onclick="navigateView('csd')">
        <div>
          <div class="card-meta"><span>CYBER SECURITY DAY</span><span>${currentMonth}월 3주 수요일</span></div>
          <div class="card-metric">${csdCurrent.label}</div>
          <div class="card-desc">내PC지키미 100점 조치 · USB 점검대장 · CCTV 30일 주기 자동삭제 확인</div>
        </div>
        <div>
          <div class="progress-track"><div class="progress-fill" style="width:${Math.round((csdDone / csdCurrent.tasks.length) * 100)}%"></div></div>
          <div style="display:flex; justify-content:space-between; font-size:0.78rem; color:var(--text-muted);">
            <span>이달의 점검 현황</span>
            <span>${csdDone} / ${csdCurrent.tasks.length} 완료 →</span>
          </div>
        </div>
      </div>

      <div class="bento-card clickable" onclick="navigateView('schedule')">
        <div>
          <div class="card-meta"><span>ANNUAL ROADMAP</span><span>${doneSched} / ${totalSched} TASKS</span></div>
          <div class="card-metric">${schedPct}%</div>
          <div class="card-desc">2~3월 학기초 동의서·서약서, 분기별 SW 대장, 학기중 개인정보파일 일제정비</div>
        </div>
        <div>
          <div class="progress-track"><div class="progress-fill" style="width:${schedPct}%"></div></div>
          <div style="display:flex; justify-content:space-between; font-size:0.78rem; color:var(--text-muted);">
            <span>시기별 필수 과업</span>
            <span>체크리스트 열기 →</span>
          </div>
        </div>
      </div>

      <div class="bento-card clickable" onclick="navigateView('audit')">
        <div>
          <div class="card-meta"><span>AUDIT READINESS</span><span>${doneAudit} / ${totalAudit} CHECKS</span></div>
          <div class="card-metric">${auditPct}%</div>
          <div class="card-desc">정보보안(7개 영역) · 개인정보보호(9개 영역) · 교육 · 정품SW · 유지관리</div>
        </div>
        <div>
          <div class="progress-track"><div class="progress-fill" style="width:${auditPct}%"></div></div>
          <div style="display:flex; justify-content:space-between; font-size:0.78rem; color:var(--text-muted);">
            <span>감사 중점 18개 영역</span>
            <span>자가진단 시작 →</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 감사 최다 지적 5대 핵심 수칙 (OpenAI Editorial List) -->
    <div style="margin-bottom:44px;">
      <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:14px;">
        <h2 style="font-size:1.25rem; font-weight:600; letter-spacing:-0.025em;">감사 최다 지적 Top 5 핵심 수칙</h2>
        <span class="badge badge-danger">MUST CHECK</span>
      </div>
      <div class="editorial-list">
        <div class="editorial-row">
          <div class="row-left">
            <span class="row-tag">01 · K-에듀파인</span>
            <div>
              <div class="row-title">개인정보 포함 공문서 「대국민 비공개(6호)」 + 「직원열람제한: 영구」 동시 설정</div>
              <div class="row-desc">대국민 비공개만 설정하고 직원열람제한을 누락하는 사례가 최다 지적됩니다. (전년도 결재문서는 당해 5월까지만 문서등록대장에서 수정 가능)</div>
            </div>
          </div>
          <div class="row-actions">
            <button class="btn btn-sm" onclick="openChapterInspector('ch2-4')">매뉴얼 보기</button>
          </div>
        </div>
        <div class="editorial-row">
          <div class="row-left">
            <span class="row-tag">02 · 공직자메일</span>
            <div>
              <div class="row-title">K-에듀파인 공문서 하단 상용메일(네이버·다음·지메일) 기재 절대 금지</div>
              <div class="row-desc">K-에듀파인 &gt; 개인설정 &gt; 개인정보관리에서 이메일을 반드시 공직자통합메일(@korea.kr)로 수정하고 업무 소통에 사용하세요.</div>
            </div>
          </div>
          <div class="row-actions">
            <button class="btn btn-sm" onclick="openChapterInspector('ch1-2')">매뉴얼 보기</button>
          </div>
        </div>
        <div class="editorial-row">
          <div class="row-left">
            <span class="row-tag">03 · 매월 3주 수요일</span>
            <div>
              <div class="row-title">사이버보안 진단의 날 3대 점검 (내PC지키미 + USB점검대장 + CCTV 자동삭제 기록)</div>
              <div class="row-desc">CCTV가 30일 주기 자동 삭제로 설정되어 있어도 매월 점검일시를 [개인정보 별지 11] 개인영상정보 관리대장에 기록하고 교장 확인을 받아야 합니다.</div>
            </div>
          </div>
          <div class="row-actions">
            <button class="btn btn-sm" onclick="openFormInspector('form-pi-11')">별지 11 열기</button>
          </div>
        </div>
        <div class="editorial-row">
          <div class="row-left">
            <span class="row-tag">04 · 채용·수집</span>
            <div>
              <div class="row-title">채용공고 시 주민등록번호(등본 포함)·가족사항 등 과도한 개인정보 수집 금지</div>
              <div class="row-desc">주민등록번호는 정보주체 동의를 받아도 수집 불가(법정주의)하며, 법령 근거 외 수집·보유 시 5년 이하 징역 또는 5천만원 이하 벌금 대상입니다.</div>
            </div>
          </div>
          <div class="row-actions">
            <button class="btn btn-sm" onclick="openChapterInspector('ch2-3')">매뉴얼 보기</button>
          </div>
        </div>
        <div class="editorial-row">
          <div class="row-left">
            <span class="row-tag">05 · 정품 SW</span>
            <div>
              <div class="row-title">알집·알PDF·포토샵·NesPDF·V3 등 비인가 소프트웨어 설치 금지</div>
              <div class="row-desc">도교육청 일괄보급 정품은 알약 5.0, MS-EES, 한컴오피스 2024 EDU 3종입니다. 분기별 소프트웨어 관리대장을 작성·보관하세요.</div>
            </div>
          </div>
          <div class="row-actions">
            <button class="btn btn-sm" onclick="openFormInspector('form-etc-1')">SW 대장 열기</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 미완료 필수 업무 리스트 -->
    <div>
      <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:14px;">
        <h2 style="font-size:1.25rem; font-weight:600; letter-spacing:-0.025em;">우선 추진 필수 업무</h2>
        <button class="btn btn-sm" onclick="navigateView('schedule')">전체 일정 보기 →</button>
      </div>
      <div class="editorial-list">
        ${MANUAL_DATA.scheduleTasks.slice(0, 8).map(t => {
          const done = !!state.scheduleChecks[t.id];
          return `
            <div class="editorial-row ${done ? 'completed' : ''}">
              <div class="row-left">
                <input type="checkbox" class="row-checkbox" ${done ? "checked" : ""} onchange="toggleScheduleTask('${t.id}')" />
                <span class="row-tag">${t.period} · ${t.category}</span>
                <div>
                  <div class="row-title">${t.title}</div>
                  <div class="row-desc">${t.description}</div>
                </div>
              </div>
              <div class="row-actions">
                ${t.formId ? `<button class="btn btn-sm btn-primary" onclick="openFormInspector('${t.formId}')">기안문·서식</button>` : ""}
                ${t.chapterId ? `<button class="btn btn-sm" onclick="openChapterInspector('${t.chapterId}')">매뉴얼</button>` : ""}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;

  const searchInp = document.getElementById("prompt-search-input");
  if (searchInp) {
    searchInp.addEventListener("input", e => {
      state.searchQuery = e.target.value;
      renderInlineSearchResults(state.searchQuery);
    });
    if (state.searchQuery) renderInlineSearchResults(state.searchQuery);
  }
}

function triggerQuickQuery(q) {
  state.searchQuery = q;
  const inp = document.getElementById("prompt-search-input");
  if (inp) {
    inp.value = q;
    renderInlineSearchResults(q);
  }
}

function renderInlineSearchResults(query) {
  const container = document.getElementById("prompt-search-results");
  if (!container) return;
  const q = query.trim().toLowerCase();
  if (!q) {
    container.innerHTML = "";
    return;
  }

  const hits = [];
  MANUAL_DATA.chapters.forEach(ch => {
    ch.sections.forEach(sec => {
      const plain = sec.content.replace(/<[^>]+>/g, " ");
      if (ch.title.toLowerCase().includes(q) || sec.heading.toLowerCase().includes(q) || plain.toLowerCase().includes(q)) {
        hits.push({ tag: "매뉴얼", title: `${ch.title} — ${sec.heading}`, onClick: `openChapterInspector('${ch.id}')` });
      }
    });
  });
  MANUAL_DATA.forms.forEach(f => {
    if (f.title.toLowerCase().includes(q) || f.badge.toLowerCase().includes(q) || f.description.toLowerCase().includes(q)) {
      hits.push({ tag: f.badge, title: f.title, onClick: `openFormInspector('${f.id}')` });
    }
  });
  MANUAL_DATA.contacts.forEach(c => {
    if (c.name.toLowerCase().includes(q) || c.phone.toLowerCase().includes(q)) {
      hits.push({ tag: c.phone, title: `${c.name} (${c.org})`, onClick: `navigateView('contacts')` });
    }
  });

  if (!hits.length) {
    container.innerHTML = `<div class="alert-box">검색 결과가 없습니다. 다른 키워드를 입력해 보세요.</div>`;
    return;
  }

  container.innerHTML = `
    <div class="editorial-list" style="background:var(--surface); border:1px solid var(--border-strong); border-radius:16px; padding:4px 12px;">
      ${hits.slice(0, 8).map(h => `
        <div class="editorial-row" style="padding:12px 6px; cursor:pointer;" onclick="${h.onClick}">
          <div class="row-left">
            <span class="row-tag">${h.tag}</span>
            <div class="row-title" style="margin:0;">${h.title}</div>
          </div>
          <span class="badge">열기 →</span>
        </div>
      `).join("")}
    </div>
  `;
}

// 2. 사이버보안 진단의 날 12개월 뷰
function renderCsdCanvas(canvas) {
  const currentMonth = new Date().getMonth() + 1;
  canvas.innerHTML = `
    <div class="hero-block">
      <div class="hero-eyebrow">MONTHLY CYBER SECURITY DAY</div>
      <h1 class="hero-title">2026년 사이버보안 진단의 날 트래커</h1>
      <p class="hero-subtitle">매월 세 번째 수요일(공휴일인 경우 익일)에 이행해야 할 3대 정기 점검(내PC지키미 100점 조치 · 휴대용 저장매체 점검대장 · 개인영상정보 관리대장 30일 자동삭제 확인) 기록표입니다.</p>
      <div style="margin-top:18px; display:flex; gap:8px; flex-wrap:wrap;">
        <a class="btn btn-primary" href="https://172.16.100.30/mc" target="_blank" rel="noopener">내PC지키미 관리자 페이지 접속 ↗</a>
        <button class="btn" onclick="openFormInspector('form-sec-4')">휴대용 저장매체 점검대장 [별지 4-2]</button>
        <button class="btn" onclick="openFormInspector('form-pi-11')">개인영상정보 관리대장 [별지 11]</button>
      </div>
    </div>

    <div class="bento-grid-3">
      ${MANUAL_DATA.cyberSecurityDays2026.map(d => {
        const allDone = d.tasks.every((_, i) => state.csdChecks[`${d.month}-${i}`]);
        return `
          <div class="bento-card" style="${d.month === currentMonth ? 'border-color:var(--primary);' : ''}">
            <div>
              <div class="card-meta">
                <span>2026 · ${d.month}월</span>
                <span class="badge ${allDone ? 'badge-success' : ''}">${allDone ? '점검완료' : d.month === currentMonth ? '이번 달' : '예정'}</span>
              </div>
              <div class="card-heading" style="margin-bottom:14px;">${d.label}</div>
              <div style="display:flex; flex-direction:column; gap:10px;">
                ${d.tasks.map((t, idx) => {
                  const checked = !!state.csdChecks[`${d.month}-${idx}`];
                  return `
                    <label style="display:flex; align-items:flex-start; gap:9px; font-size:0.83rem; cursor:pointer; ${checked ? 'text-decoration:line-through; color:var(--text-muted);' : ''}">
                      <input type="checkbox" class="row-checkbox" ${checked ? 'checked' : ''} onchange="toggleCsdTask(${d.month}, ${idx})" />
                      <span>${t}</span>
                    </label>
                  `;
                }).join("")}
              </div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

// 3. 시기별 추진 체크리스트 뷰
function renderScheduleCanvas(canvas) {
  const periods = ["all", "2월~3월", "3월", "학기 초", "매월", "분기", "학기 중", "연중"];
  const list = MANUAL_DATA.scheduleTasks.filter(t => state.scheduleFilter === "all" || t.period === state.scheduleFilter);

  canvas.innerHTML = `
    <div class="hero-block">
      <div class="hero-eyebrow">ANNUAL SCHEDULE CHECKLIST</div>
      <h1 class="hero-title">시기별 정보보호 업무 추진 일정</h1>
      <p class="hero-subtitle">실무편람 p.6 기준 시기별 필수 이행사항입니다. 우측 버튼을 누르면 화면 이동 없이 슬라이드 패널에서 기안문과 매뉴얼을 바로 확인할 수 있습니다.</p>
    </div>

    <div class="filter-bar">
      ${periods.map(p => `
        <button class="filter-pill ${state.scheduleFilter === p ? 'active' : ''}" onclick="state.scheduleFilter='${p}'; renderCanvas();">
          ${p === "all" ? "전체 시기 (16)" : p}
        </button>
      `).join("")}
    </div>

    <div class="editorial-list">
      ${list.map(t => {
        const done = !!state.scheduleChecks[t.id];
        return `
          <div class="editorial-row ${done ? 'completed' : ''}">
            <div class="row-left">
              <input type="checkbox" class="row-checkbox" ${done ? "checked" : ""} onchange="toggleScheduleTask('${t.id}')" />
              <span class="row-tag">${t.period}<br><span style="opacity:0.7;">${t.category}</span></span>
              <div>
                <div class="row-title">
                  ${t.title}
                  ${t.important ? `<span class="badge badge-danger" style="margin-left:6px;">필수</span>` : ""}
                </div>
                <div class="row-desc">${t.description}</div>
                <div style="font-size:0.78rem; color:var(--text-muted); margin-top:6px;">관련 대장/서식: ${t.ledger}</div>
              </div>
            </div>
            <div class="row-actions">
              ${t.formId ? `<button class="btn btn-sm btn-primary" onclick="openFormInspector('${t.formId}')">기안문 · 서식</button>` : ""}
              ${t.chapterId ? `<button class="btn btn-sm" onclick="openChapterInspector('${t.chapterId}')">매뉴얼</button>` : ""}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

// 4. 감사 중점 점검사항 자가진단 뷰
function renderAuditCanvas(canvas) {
  const domains = ["all", "정보보안", "개인정보 보호", "교육", "정품 S/W", "기타"];
  const list = MANUAL_DATA.auditChecklist.filter(a => state.auditFilter === "all" || a.domain === state.auditFilter);

  canvas.innerHTML = `
    <div class="hero-block">
      <div class="hero-eyebrow">AUDIT SELF-DIAGNOSIS</div>
      <h1 class="hero-title">감사 중점 점검사항 자가진단 (18개 영역)</h1>
      <p class="hero-subtitle">실무편람 p.7 감사 중점 점검사항 전체 항목입니다. 각 점검사항을 체크하여 우리 학교의 감사 대비 상태를 점검하세요.</p>
    </div>

    <div class="filter-bar">
      ${domains.map(d => `
        <button class="filter-pill ${state.auditFilter === d ? 'active' : ''}" onclick="state.auditFilter='${d}'; renderCanvas();">
          ${d === "all" ? "전체 영역 (18)" : d}
        </button>
      `).join("")}
    </div>

    <div style="display:flex; flex-direction:column; gap:18px;">
      ${list.map(a => {
        const doneCount = a.items.filter((_, i) => state.auditChecks[`${a.id}-${i}`]).length;
        const allDone = doneCount === a.items.length;
        return `
          <div class="bento-card">
            <div class="card-meta">
              <span>${a.domain} · ${a.note}</span>
              <span class="badge ${allDone ? 'badge-success' : ''}">${doneCount} / ${a.items.length} 완료</span>
            </div>
            <div class="card-heading" style="margin-bottom:12px;">${a.area}</div>
            <div class="editorial-list">
              ${a.items.map((itemText, idx) => {
                const checked = !!state.auditChecks[`${a.id}-${idx}`];
                return `
                  <label class="editorial-row ${checked ? 'completed' : ''}" style="padding:12px 4px; cursor:pointer;">
                    <div class="row-left">
                      <input type="checkbox" class="row-checkbox" ${checked ? 'checked' : ''} onchange="toggleAuditItem('${a.id}', ${idx})" />
                      <div class="row-title" style="font-weight:450; margin:0;">${itemText}</div>
                    </div>
                  </label>
                `;
              }).join("")}
            </div>
            <div class="alert-box" style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap; margin-top:14px;">
              <span style="color:var(--text-secondary);"><strong style="color:var(--text);">감사 포인트:</strong> ${a.warning}</span>
              ${a.formId ? `<button class="btn btn-sm btn-primary" onclick="openFormInspector('${a.formId}')">관련 서식 열기 →</button>` : ""}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

// 5. 실무 매뉴얼 백과 뷰 (제1장, 제2장, 제3장)
function renderManualCanvas(canvas) {
  const chapters = MANUAL_DATA.chapters.filter(c => c.part === state.manualPart);
  canvas.innerHTML = `
    <div class="hero-block">
      <div class="hero-eyebrow">MANUAL HANDBOOK</div>
      <h1 class="hero-title">${state.manualPart}</h1>
      <p class="hero-subtitle">2026년도 정보보호 업무 실무편람의 상세 지침, 표찰 규격, 시스템 설정 경로 및 단계별 업무 절차를 안내합니다.</p>
    </div>

    <div style="display:flex; flex-direction:column; gap:28px;">
      ${chapters.map(ch => `
        <div class="bento-card">
          <div class="card-meta">
            <span>${ch.part}</span>
            <span>${ch.pages}</span>
          </div>
          <h2 style="font-size:1.35rem; font-weight:600; letter-spacing:-0.025em; margin-bottom:6px;">${ch.title}</h2>
          <p class="card-desc" style="margin-bottom:20px;">${ch.summary}</p>
          ${ch.sections.map(sec => `
            <div class="manual-section">
              <h3>${sec.heading}</h3>
              <div>${applyTemplateVars(sec.content)}</div>
            </div>
          `).join("")}
        </div>
      `).join("")}
    </div>
  `;
}

// 6. 별지서식 & 내부결재 기안문 빌더 뷰
function renderFormsCanvas(canvas) {
  const cats = ["all", "정보보안 서식", "개인정보 서식", "기타·부록 서식"];
  const list = MANUAL_DATA.forms.filter(f => state.formFilter === "all" || f.category === state.formFilter);

  canvas.innerHTML = `
    <div class="hero-block">
      <div class="hero-eyebrow">TEMPLATES &amp; DRAFTS</div>
      <h1 class="hero-title">별지 서식 &amp; 내부결재 기안문 생성기</h1>
      <p class="hero-subtitle">항목을 클릭하면 우측 인스펙터 패널에서 우리 학교 정보(${state.schoolInfo.schoolName})가 자동 반영된 기안문과 대장 양식을 복사·인쇄할 수 있습니다.</p>
    </div>

    <div class="filter-bar">
      ${cats.map(c => `
        <button class="filter-pill ${state.formFilter === c ? 'active' : ''}" onclick="state.formFilter='${c}'; renderCanvas();">
          ${c === "all" ? "전체 서식 (26)" : c}
        </button>
      `).join("")}
    </div>

    <div class="editorial-list">
      ${list.map(f => `
        <div class="editorial-row" style="cursor:pointer;" onclick="openFormInspector('${f.id}')">
          <div class="row-left">
            <span class="row-tag">${f.badge}<br><span style="opacity:0.65;">${f.page}</span></span>
            <div>
              <div class="row-title">${f.title}</div>
              <div class="row-desc">${f.when}</div>
            </div>
          </div>
          <div class="row-actions">
            <span class="badge">${f.type === "draft" ? "기안문/서약서" : "관리대장"}</span>
            <button class="btn btn-sm btn-primary">열기 →</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

// 7. 제4장 부록 교직원 연수 슬라이드 뷰
function changeSlide(delta) {
  const total = MANUAL_DATA.trainingSlides.length;
  state.slideIndex = (state.slideIndex + delta + total) % total;
  renderCanvas();
}

function renderTrainingCanvas(canvas) {
  const total = MANUAL_DATA.trainingSlides.length;
  const slide = MANUAL_DATA.trainingSlides[state.slideIndex];

  canvas.innerHTML = `
    <div class="hero-block" style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:16px;">
      <div>
        <div class="hero-eyebrow">STAFF TRAINING PRESENTATION</div>
        <h1 class="hero-title">교직원 정보보호 연수 슬라이드</h1>
        <p class="hero-subtitle">실무편람 제4장 부록(p.103~113) 교육자료입니다. 교직원 회의 시 바로 화면에 띄워 연수를 진행하세요.</p>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-sm" onclick="openFormInspector('form-app-1')">교육 실시 기안문</button>
        <button class="btn btn-sm btn-primary" onclick="openFormInspector('form-app-2')">교육 결과보고 기안문</button>
      </div>
    </div>

    <div class="bento-card" style="min-height:420px; padding:36px;">
      <div>
        <div class="card-meta">
          <span>${slide.category}</span>
          <span>SLIDE 0${slide.slideNo} / 0${total} · ${state.schoolInfo.schoolName}</span>
        </div>
        <h2 style="font-size:1.65rem; font-weight:600; letter-spacing:-0.03em; margin:12px 0 24px;">${slide.title}</h2>
        <div class="editorial-list">
          ${slide.points.map((pt, i) => `
            <div class="editorial-row" style="padding:14px 4px;">
              <div class="row-left">
                <span class="row-tag" style="min-width:48px;">0${i + 1}</span>
                <div style="font-size:0.96rem; font-weight:450;">${pt}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:32px; padding-top:18px; border-top:1px solid var(--border);">
        <button class="btn" onclick="changeSlide(-1)">← 이전 슬라이드</button>
        <div style="display:flex; gap:6px;">
          ${MANUAL_DATA.trainingSlides.map((s, idx) => `
            <button class="btn btn-sm ${idx === state.slideIndex ? 'btn-primary' : ''}" onclick="state.slideIndex=${idx}; renderCanvas();">${s.slideNo}</button>
          `).join("")}
        </div>
        <button class="btn btn-primary" onclick="changeSlide(1)">다음 슬라이드 →</button>
      </div>
    </div>
  `;
}

// 8. 비상연락처 & 시스템 디렉토리 뷰
function renderContactsCanvas(canvas) {
  const cats = ["all", "학교지원/인프라", "업무포털/메신저", "인증서(EPKI)", "학내망/보안관제", "SW/보안솔루션", "홈페이지/개인정보", "나이스(NEIS)"];
  const list = MANUAL_DATA.contacts.filter(c => state.contactFilter === "all" || c.category === state.contactFilter);

  canvas.innerHTML = `
    <div class="hero-block">
      <div class="hero-eyebrow">CONTACTS &amp; SYSTEMS</div>
      <h1 class="hero-title">시스템 및 업무 관련 연락처 디렉토리</h1>
      <p class="hero-subtitle">실무편람 p.96~97 기준 장애 신고, 인증서, 스쿨넷, 보안관제, 정품 SW, 나이스 상담센터 직통 연락처입니다.</p>
    </div>

    <div class="filter-bar">
      ${cats.map(c => `
        <button class="filter-pill ${state.contactFilter === c ? 'active' : ''}" onclick="state.contactFilter='${c}'; renderCanvas();">
          ${c === "all" ? "전체 연락처 (24)" : c}
        </button>
      `).join("")}
    </div>

    <div class="editorial-list">
      ${list.map(c => `
        <div class="editorial-row">
          <div class="row-left">
            <span class="row-tag">${c.category}</span>
            <div>
              <div class="row-title">${c.name}</div>
              <div class="row-desc">${applyTemplateVars(c.org)}</div>
            </div>
          </div>
          <div class="row-actions">
            <span style="font-family:var(--font-mono); font-size:0.86rem; font-weight:600; margin-right:6px;">${c.phone}</span>
            <button class="btn btn-sm" onclick="copyText('${c.phone}', '연락처가 복사되었습니다.')">복사</button>
            ${c.url ? `<a class="btn btn-sm btn-primary" href="${c.url}" target="_blank" rel="noopener">접속 ↗</a>` : ""}
          </div>
        </div>
      `).join("")}
    </div>
  `;
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
  renderCanvas();
  showToast("학교 및 담당자 설정이 반영되었습니다.");
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
  renderCanvas();

  // 단축키 지원: ⌘K 검색, Esc 드로어/모달 닫기, ←/→ 슬라이드 이동
  document.addEventListener("keydown", e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      focusPromptSearch();
    } else if (e.key === "Escape") {
      closeInspector();
      closeSchoolModal();
    } else if (state.currentView === "training" && e.key === "ArrowRight") {
      changeSlide(1);
    } else if (state.currentView === "training" && e.key === "ArrowLeft") {
      changeSlide(-1);
    }
  });
});
