// 2026년도 정보보호 업무 실무편람 올인원 웹포털 애플리케이션 로직

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
  activeTab: "dashboard",
  scheduleFilter: "all",
  auditFilter: "all",
  activeChapterId: "ch1-1",
  formFilter: "all",
  selectedFormId: "form-sec-2",
  slideIndex: 0,
  contactFilter: "all",
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
  setTimeout(() => toast.classList.remove("show"), 2400);
}

function copyText(text, label = "클립보드에 복사되었습니다.") {
  navigator.clipboard.writeText(text).then(() => showToast(label));
}

// 탭 전환
function switchTab(tabId) {
  state.activeTab = tabId;
  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === `panel-${tabId}`);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToChapter(chapterId) {
  state.activeChapterId = chapterId;
  switchTab("manual");
  renderManual();
}

function goToForm(formId) {
  if (!formId) return;
  state.selectedFormId = formId;
  state.formFilter = "all";
  switchTab("forms");
  renderForms();
}

// 1. 대시보드 렌더링
function renderDashboard() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;

  // 학교 정보 배너
  document.getElementById("header-school-badge").textContent = `${state.schoolInfo.schoolName} (${state.schoolInfo.managerName})`;

  // 진행률 계산
  const totalSched = MANUAL_DATA.scheduleTasks.length;
  const doneSched = MANUAL_DATA.scheduleTasks.filter(t => state.scheduleChecks[t.id]).length;
  const schedPct = Math.round((doneSched / totalSched) * 100);

  let totalAuditItems = 0;
  let doneAuditItems = 0;
  MANUAL_DATA.auditChecklist.forEach(a => {
    a.items.forEach((_, idx) => {
      totalAuditItems++;
      if (state.auditChecks[`${a.id}-${idx}`]) doneAuditItems++;
    });
  });
  const auditPct = Math.round((doneAuditItems / totalAuditItems) * 100);

  const csdCurrent = MANUAL_DATA.cyberSecurityDays2026.find(d => d.month === currentMonth) || MANUAL_DATA.cyberSecurityDays2026[0];
  const csdDoneCount = csdCurrent.tasks.filter((_, idx) => state.csdChecks[`${csdCurrent.month}-${idx}`]).length;

  document.getElementById("dash-summary-cards").innerHTML = `
    <div class="card">
      <div class="card-header">
        <span class="card-title">🛡️ 이달의 사이버보안 진단의 날</span>
        <span class="badge badge-primary">${currentMonth}월 3주 수요일</span>
      </div>
      <p style="font-size:1.15rem; font-weight:800; color:var(--primary); margin-bottom:6px;">${csdCurrent.label}</p>
      <p class="muted">내PC지키미 100점 조치 · USB 점검대장 · CCTV 30일 자동삭제 점검 기록</p>
      <div class="progress-wrap">
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:4px;">
          <span>이달의 진단 완료율</span>
          <strong>${csdDoneCount} / ${csdCurrent.tasks.length} 완료</strong>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${Math.round((csdDoneCount / csdCurrent.tasks.length) * 100)}%"></div></div>
      </div>
      <div class="mt-2" style="display:flex; gap:8px;">
        <button class="btn btn-sm btn-primary" onclick="switchTab('schedule')">월별 진단 체크하기</button>
        <a class="btn btn-sm" href="https://172.16.100.30/mc" target="_blank" rel="noopener">내PC지키미 관리자 ↗</a>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <span class="card-title">📅 시기별 필수 업무 달성률</span>
        <span class="badge badge-accent">${doneSched} / ${totalSched} 건</span>
      </div>
      <p style="font-size:1.5rem; font-weight:800;">${schedPct}%</p>
      <p class="muted">학기초 동의서·서약서, 분기별 SW 점검, 학기중 개인정보파일 일제정비 등</p>
      <div class="progress-wrap">
        <div class="progress-bar"><div class="progress-fill" style="width:${schedPct}%"></div></div>
      </div>
      <div class="mt-2">
        <button class="btn btn-sm" onclick="switchTab('schedule')">시기별 업무 체크리스트 →</button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <span class="card-title">✅ 감사 중점 점검 자가진단</span>
        <span class="badge ${auditPct >= 80 ? 'badge-success' : 'badge-warning'}">${doneAuditItems} / ${totalAuditItems} 항목</span>
      </div>
      <p style="font-size:1.5rem; font-weight:800;">${auditPct}%</p>
      <p class="muted">정보보안(7개 영역)·개인정보보호(9개 영역)·교육·SW·유지관리 총 18개 감사 영역</p>
      <div class="progress-wrap">
        <div class="progress-bar"><div class="progress-fill" style="width:${auditPct}%"></div></div>
      </div>
      <div class="mt-2">
        <button class="btn btn-sm" onclick="switchTab('audit')">감사 대비 자가진단 →</button>
      </div>
    </div>
  `;

  // 감사 최다 지적 Top 5 핵심 경고 카드
  const urgentTasks = MANUAL_DATA.scheduleTasks.filter(t => t.important && !state.scheduleChecks[t.id]).slice(0, 6);
  document.getElementById("dash-urgent-tasks").innerHTML = urgentTasks.length
    ? urgentTasks.map(t => `
        <div class="task-item">
          <input type="checkbox" class="task-checkbox" ${state.scheduleChecks[t.id] ? "checked" : ""} onchange="toggleScheduleTask('${t.id}')" />
          <div class="task-body">
            <div class="task-title">
              <span class="badge ${t.category === '정보보안' ? 'badge-primary' : 'badge-accent'}">${t.period} · ${t.category}</span>
              ${t.title}
            </div>
            <div class="task-desc">${t.description}</div>
            <div class="task-meta">
              <span>📋 ${t.ledger}</span>
              ${t.formId ? `<button class="btn btn-sm" onclick="goToForm('${t.formId}')">서식/기안문 보기</button>` : ""}
              ${t.chapterId ? `<button class="btn btn-sm" onclick="goToChapter('${t.chapterId}')">매뉴얼 보기</button>` : ""}
            </div>
          </div>
        </div>
      `).join("")
    : `<p class="muted">🎉 모든 주요 필수 업무를 완료하셨습니다!</p>`;
}

// 2. 시기별 업무 달력 & 사이버보안 진단의 날 렌더링
function toggleScheduleTask(id) {
  state.scheduleChecks[id] = !state.scheduleChecks[id];
  saveState(STORAGE_KEYS.SCHEDULE_CHECKS, state.scheduleChecks);
  renderDashboard();
  renderSchedule();
}

function toggleCsdTask(month, idx) {
  const key = `${month}-${idx}`;
  state.csdChecks[key] = !state.csdChecks[key];
  saveState(STORAGE_KEYS.CSD_CHECKS, state.csdChecks);
  renderDashboard();
  renderSchedule();
}

function setScheduleFilter(filter) {
  state.scheduleFilter = filter;
  renderSchedule();
}

function renderSchedule() {
  const periods = ["all", "2월~3월", "3월", "학기 초", "매월", "분기", "학기 중", "연중"];
  document.getElementById("schedule-filter-bar").innerHTML = periods.map(p => `
    <button class="filter-pill ${state.scheduleFilter === p ? 'active' : ''}" onclick="setScheduleFilter('${p}')">
      ${p === "all" ? "전체 시기 보기" : p}
    </button>
  `).join("");

  const filtered = MANUAL_DATA.scheduleTasks.filter(t => state.scheduleFilter === "all" || t.period === state.scheduleFilter);
  document.getElementById("schedule-task-list").innerHTML = filtered.map(t => {
    const done = !!state.scheduleChecks[t.id];
    return `
      <div class="task-item ${done ? 'completed' : ''}">
        <input type="checkbox" class="task-checkbox" ${done ? "checked" : ""} onchange="toggleScheduleTask('${t.id}')" />
        <div class="task-body">
          <div class="task-title">
            <span class="badge ${t.category === '정보보안' ? 'badge-primary' : t.category === '개인정보 보호' ? 'badge-accent' : 'badge-warning'}">${t.period} · ${t.category}</span>
            ${t.important ? `<span class="badge badge-danger">필수</span>` : ""}
            ${t.title}
          </div>
          <div class="task-desc">${t.description}</div>
          <div class="task-meta">
            <span>📁 관련 대장/서식: <strong>${t.ledger}</strong></span>
            ${t.formId ? `<button class="btn btn-sm btn-primary" onclick="goToForm('${t.formId}')">서식·기안문 열기</button>` : ""}
            ${t.chapterId ? `<button class="btn btn-sm" onclick="goToChapter('${t.chapterId}')">매뉴얼 상세</button>` : ""}
          </div>
        </div>
      </div>
    `;
  }).join("");

  // 2026년 12개월 사이버보안 진단의 날 캘린더
  const currentMonth = new Date().getMonth() + 1;
  document.getElementById("csd-calendar-grid").innerHTML = MANUAL_DATA.cyberSecurityDays2026.map(d => {
    const allDone = d.tasks.every((_, i) => state.csdChecks[`${d.month}-${i}`]);
    return `
      <div class="csd-card ${d.month === currentMonth ? 'current-month' : ''}">
        <div class="csd-header">
          <span>${d.month}월 진단의 날</span>
          <span class="badge ${allDone ? 'badge-success' : 'badge-primary'}">${allDone ? '점검완료' : d.label}</span>
        </div>
        <div class="csd-tasks">
          ${d.tasks.map((taskText, idx) => {
            const checked = !!state.csdChecks[`${d.month}-${idx}`];
            return `
              <label style="${checked ? 'text-decoration:line-through; color:var(--text-muted);' : ''}">
                <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleCsdTask(${d.month}, ${idx})" />
                <span>${taskText}</span>
              </label>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
}

// 3. 감사 중점 점검사항 자가진단 렌더링
function toggleAuditItem(auditId, idx) {
  const key = `${auditId}-${idx}`;
  state.auditChecks[key] = !state.auditChecks[key];
  saveState(STORAGE_KEYS.AUDIT_CHECKS, state.auditChecks);
  renderDashboard();
  renderAudit();
}

function setAuditFilter(domain) {
  state.auditFilter = domain;
  renderAudit();
}

function renderAudit() {
  const domains = ["all", "정보보안", "개인정보 보호", "교육", "정품 S/W", "기타"];
  document.getElementById("audit-filter-bar").innerHTML = domains.map(d => `
    <button class="filter-pill ${state.auditFilter === d ? 'active' : ''}" onclick="setAuditFilter('${d}')">
      ${d === "all" ? "전체 영역 (18개)" : d}
    </button>
  `).join("");

  const list = MANUAL_DATA.auditChecklist.filter(a => state.auditFilter === "all" || a.domain === state.auditFilter);
  document.getElementById("audit-checklist-container").innerHTML = list.map(a => {
    const doneCount = a.items.filter((_, idx) => state.auditChecks[`${a.id}-${idx}`]).length;
    const isAllDone = doneCount === a.items.length;
    return `
      <div class="card mb-2">
        <div class="card-header">
          <div class="card-title">
            <span class="badge ${a.domain === '정보보안' ? 'badge-primary' : a.domain === '개인정보 보호' ? 'badge-accent' : 'badge-warning'}">${a.domain}</span>
            <span>${a.area}</span>
          </div>
          <div style="display:flex; gap:8px; align-items:center;">
            <span class="badge ${isAllDone ? 'badge-success' : 'badge-danger'}">${doneCount}/${a.items.length} 점검</span>
            <span class="muted">${a.note}</span>
          </div>
        </div>
        <div class="task-list">
          ${a.items.map((itemText, idx) => {
            const checked = !!state.auditChecks[`${a.id}-${idx}`];
            return `
              <label class="task-item ${checked ? 'completed' : ''}" style="cursor:pointer; padding:12px;">
                <input type="checkbox" class="task-checkbox" ${checked ? 'checked' : ''} onchange="toggleAuditItem('${a.id}', ${idx})" />
                <div class="task-body">
                  <div class="task-title" style="font-size:0.92rem; margin:0;">${itemText}</div>
                </div>
              </label>
            `;
          }).join("")}
        </div>
        <div class="alert-box warning mt-2" style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <span>💡 <strong>감사 포인트:</strong> ${a.warning}</span>
          ${a.formId ? `<button class="btn btn-sm btn-primary" onclick="goToForm('${a.formId}')">관련 서식/기안문 →</button>` : ""}
        </div>
      </div>
    `;
  }).join("");
}

// 4. 실무 매뉴얼 백과 렌더링
function selectChapter(id) {
  state.activeChapterId = id;
  renderManual();
}

function renderManual() {
  const navEl = document.getElementById("manual-chapter-nav");
  let lastPart = "";
  let navHtml = "";
  MANUAL_DATA.chapters.forEach(ch => {
    if (ch.part !== lastPart) {
      lastPart = ch.part;
      navHtml += `<div class="chapter-nav-part">${ch.part}</div>`;
    }
    navHtml += `
      <button class="chapter-nav-item ${state.activeChapterId === ch.id ? 'active' : ''}" onclick="selectChapter('${ch.id}')">
        ${ch.title}
      </button>
    `;
  });
  navEl.innerHTML = navHtml;

  const ch = MANUAL_DATA.chapters.find(c => c.id === state.activeChapterId) || MANUAL_DATA.chapters[0];
  document.getElementById("manual-content-view").innerHTML = `
    <div class="card">
      <div class="card-header">
        <div>
          <span class="badge badge-primary">${ch.part}</span>
          <h2 style="font-size:1.35rem; margin-top:6px;">${ch.title}</h2>
          <p class="muted">${ch.summary}</p>
        </div>
        <span class="badge badge-accent">${ch.pages}</span>
      </div>
      <hr style="border:none; border-top:1px solid var(--border); margin:16px 0;" />
      ${ch.sections.map(sec => `
        <div class="manual-section">
          <h3>${sec.heading}</h3>
          <div>${applyTemplateVars(sec.content)}</div>
        </div>
      `).join("")}
    </div>
  `;
}

// 5. 별지 서식 & 내부결재 기안문 빌더 렌더링
function setFormFilter(cat) {
  state.formFilter = cat;
  const matching = MANUAL_DATA.forms.filter(f => cat === "all" || f.category === cat);
  if (matching.length && !matching.some(f => f.id === state.selectedFormId)) {
    state.selectedFormId = matching[0].id;
  }
  renderForms();
}

function selectFormItem(formId) {
  state.selectedFormId = formId;
  renderForms();
}

function renderForms() {
  const cats = ["all", "정보보안 서식", "개인정보 서식", "기타·부록 서식"];
  document.getElementById("forms-filter-bar").innerHTML = cats.map(c => `
    <button class="filter-pill ${state.formFilter === c ? 'active' : ''}" onclick="setFormFilter('${c}')">
      ${c === "all" ? "전체 서식·기안문 (26종)" : c}
    </button>
  `).join("");

  const list = MANUAL_DATA.forms.filter(f => state.formFilter === "all" || f.category === state.formFilter);
  document.getElementById("forms-sidebar-list").innerHTML = list.map(f => `
    <button class="chapter-nav-item ${state.selectedFormId === f.id ? 'active' : ''}" onclick="selectFormItem('${f.id}')">
      <div style="font-size:0.74rem; opacity:0.85;">[${f.badge}]</div>
      <div>${f.title}</div>
    </button>
  `).join("");

  const form = MANUAL_DATA.forms.find(f => f.id === state.selectedFormId) || list[0];
  if (!form) return;

  let bodyHtml = "";
  if (form.type === "draft") {
    const resolvedTitle = applyTemplateVars(form.draftTitle);
    const resolvedBody = applyTemplateVars(form.draftBody);
    bodyHtml = `
      <div class="alert-box">
        <strong>📌 결재·보안 설정 안내:</strong> ${applyTemplateVars(form.securityConfig)}
      </div>
      <div class="draft-box">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
          <div><strong>제목:</strong> <span id="current-draft-title">${resolvedTitle}</span></div>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-sm" onclick="copyText(document.getElementById('current-draft-title').textContent, '기안문 제목이 복사되었습니다.')">제목 복사</button>
            <button class="btn btn-sm btn-primary" onclick="copyText(document.getElementById('current-draft-textarea').value, '기안문 본문이 클립보드에 복사되었습니다!')">📋 기안문 본문 전체 복사</button>
            <button class="btn btn-sm" onclick="window.print()">🖨️ 인쇄/PDF 저장</button>
          </div>
        </div>
        <textarea id="current-draft-textarea" class="draft-textarea">${resolvedBody}</textarea>
      </div>
    `;
  } else {
    bodyHtml = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
        <span class="muted">* 내 학교 설정(${state.schoolInfo.schoolName})이 자동 반영된 예시 양식입니다.</span>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-sm btn-primary" onclick="window.print()">🖨️ 대장 양식 인쇄</button>
          <a class="btn btn-sm" href="https://tims.jne.go.kr" target="_blank" rel="noopener">TIMS 원본 서식 다운로드 ↗</a>
        </div>
      </div>
      <div style="overflow-x:auto;">
        <table class="manual-table">
          <thead>
            <tr>${form.headers.map(h => `<th>${h}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${form.sampleRows.map(row => `
              <tr>${row.map(cell => `<td>${applyTemplateVars(cell)}</td>`).join("")}</tr>
            `).join("")}
            <tr>${form.headers.map(() => `<td style="height:36px;"></td>`).join("")}</tr>
            <tr>${form.headers.map(() => `<td style="height:36px;"></td>`).join("")}</tr>
          </tbody>
        </table>
      </div>
    `;
  }

  document.getElementById("forms-detail-view").innerHTML = `
    <div class="card">
      <div class="card-header">
        <div>
          <span class="badge badge-primary">${form.badge}</span>
          <span class="badge badge-accent">${form.page}</span>
          <h2 style="font-size:1.3rem; margin-top:6px;">${form.title}</h2>
        </div>
        <button class="btn btn-sm" onclick="openSchoolModal()">⚙️ 학교/담당자 정보 변경</button>
      </div>
      <p class="muted mb-2"><strong>작성 시기:</strong> ${form.when}</p>
      <p style="font-size:0.92rem; margin-bottom:14px;">${form.description}</p>
      ${bodyHtml}
    </div>
  `;
}

// 6. 교직원 연수 슬라이드 렌더링
function changeSlide(delta) {
  const total = MANUAL_DATA.trainingSlides.length;
  state.slideIndex = (state.slideIndex + delta + total) % total;
  renderSlides();
}

function renderSlides() {
  const total = MANUAL_DATA.trainingSlides.length;
  const slide = MANUAL_DATA.trainingSlides[state.slideIndex];
  document.getElementById("training-slide-container").innerHTML = `
    <div class="slide-viewer">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="badge badge-primary">${slide.category}</span>
          <span class="badge badge-accent">Slide ${slide.slideNo} / ${total} (${state.schoolInfo.schoolName} 교직원 연수자료)</span>
        </div>
        <h2 class="slide-title">${slide.title}</h2>
        <ul class="slide-points">
          ${slide.points.map(pt => `<li>✔ ${pt}</li>`).join("")}
        </ul>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:28px; padding-top:16px; border-top:1px solid var(--border);">
        <button class="btn" onclick="changeSlide(-1)">◀ 이전 슬라이드</button>
        <div style="display:flex; gap:6px;">
          ${MANUAL_DATA.trainingSlides.map((s, idx) => `
            <button class="btn btn-sm ${idx === state.slideIndex ? 'btn-primary' : ''}" onclick="state.slideIndex=${idx}; renderSlides();">${s.slideNo}</button>
          `).join("")}
        </div>
        <button class="btn btn-primary" onclick="changeSlide(1)">다음 슬라이드 ▶</button>
      </div>
    </div>
  `;
}

// 7. 비상 연락처 & 시스템 디렉토리 렌더링
function setContactFilter(cat) {
  state.contactFilter = cat;
  renderContacts();
}

function renderContacts() {
  const cats = ["all", "학교지원/인프라", "업무포털/메신저", "인증서(EPKI)", "학내망/보안관제", "SW/보안솔루션", "홈페이지/개인정보", "나이스(NEIS)"];
  document.getElementById("contact-filter-bar").innerHTML = cats.map(c => `
    <button class="filter-pill ${state.contactFilter === c ? 'active' : ''}" onclick="setContactFilter('${c}')">
      ${c === "all" ? "전체 연락처" : c}
    </button>
  `).join("");

  const list = MANUAL_DATA.contacts.filter(c => state.contactFilter === "all" || c.category === state.contactFilter);
  document.getElementById("contacts-table-body").innerHTML = list.map(c => `
    <tr>
      <td><span class="badge badge-primary">${c.category}</span></td>
      <td><strong>${c.name}</strong></td>
      <td>
        <span style="font-weight:800; color:var(--primary);">${c.phone}</span>
        <button class="btn btn-sm" style="margin-left:6px;" onclick="copyText('${c.phone}', '전화번호가 복사되었습니다.')">복사</button>
      </td>
      <td>${applyTemplateVars(c.org)}</td>
      <td>${c.url ? `<a class="btn btn-sm btn-primary" href="${c.url}" target="_blank" rel="noopener">바로가기 ↗</a>` : "-"}</td>
    </tr>
  `).join("");
}

// 통합 검색 모달/뷰
function handleGlobalSearch(query) {
  state.searchQuery = query.trim().toLowerCase();
  const box = document.getElementById("global-search-results");
  if (!state.searchQuery) {
    box.style.display = "none";
    return;
  }

  const results = [];
  MANUAL_DATA.chapters.forEach(ch => {
    ch.sections.forEach(sec => {
      const plain = sec.content.replace(/<[^>]+>/g, " ");
      if (ch.title.toLowerCase().includes(state.searchQuery) || sec.heading.toLowerCase().includes(state.searchQuery) || plain.toLowerCase().includes(state.searchQuery)) {
        results.push({
          type: "매뉴얼",
          title: `${ch.title} > ${sec.heading}`,
          action: () => { box.style.display = "none"; goToChapter(ch.id); }
        });
      }
    });
  });

  MANUAL_DATA.forms.forEach(f => {
    if (f.title.toLowerCase().includes(state.searchQuery) || f.badge.toLowerCase().includes(state.searchQuery) || f.description.toLowerCase().includes(state.searchQuery)) {
      results.push({
        type: "별지서식",
        title: `[${f.badge}] ${f.title}`,
        action: () => { box.style.display = "none"; goToForm(f.id); }
      });
    }
  });

  MANUAL_DATA.contacts.forEach(c => {
    if (c.name.toLowerCase().includes(state.searchQuery) || c.phone.toLowerCase().includes(state.searchQuery)) {
      results.push({
        type: `연락처 (${c.phone})`,
        title: `${c.name} - ${c.org}`,
        action: () => { box.style.display = "none"; switchTab("contacts"); }
      });
    }
  });

  box.style.display = "block";
  if (!results.length) {
    box.innerHTML = `<div style="padding:14px;" class="muted">'${query}'에 대한 검색 결과가 없습니다.</div>`;
    return;
  }

  box.innerHTML = results.slice(0, 10).map((r, i) => `
    <div class="search-result-row" data-idx="${i}" style="padding:10px 14px; border-bottom:1px solid var(--border); cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <span class="badge badge-primary" style="margin-right:6px;">${r.type}</span>
        <span style="font-size:0.88rem; font-weight:600;">${r.title}</span>
      </div>
      <span class="muted">이동 →</span>
    </div>
  `).join("");

  box.querySelectorAll(".search-result-row").forEach((el, idx) => {
    el.addEventListener("click", results[idx].action);
  });
}

// 학교 정보 설정 모달
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
  renderAll();
  showToast("학교 및 담당자 정보가 모든 기안문·대장에 반영되었습니다.");
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

function renderAll() {
  renderDashboard();
  renderSchedule();
  renderAudit();
  renderManual();
  renderForms();
  renderSlides();
  renderContacts();
}

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderAll();

  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  const searchInput = document.getElementById("global-search-input");
  searchInput.addEventListener("input", e => handleGlobalSearch(e.target.value));
  document.addEventListener("click", e => {
    if (!e.target.closest(".global-search-wrap")) {
      document.getElementById("global-search-results").style.display = "none";
    }
  });
});
