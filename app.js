// 2026 정보보호 업무 실무편람 — openai.com 공식 홈페이지 레이아웃 & 인터랙션 구현

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
  scheduleFilter: "all",
  formFilter: "all",
  auditFilter: "all",
  slideIndex: 0,
  theme: "dark"
};

function applyTheme(theme) {
  state.theme = theme;
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  const label = document.getElementById("theme-toggle-label");
  if (label) {
    label.textContent = theme === "dark" ? "☀️ 라이트 모드" : "🌙 다크 모드";
  }
}

function toggleTheme() {
  const next = state.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, next);
  } catch (e) {
    console.error(e);
  }
}

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
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || "dark";
    applyTheme(savedTheme);
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

// 1. 비대칭 메인 쇼케이스 카드 (openai.com 하단 화이트 빅 카드 + 우측 웜 그라데이션 카드)
function renderFeaturedShowcase() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const csdCurrent = MANUAL_DATA.cyberSecurityDays2026.find(d => d.month === currentMonth) || MANUAL_DATA.cyberSecurityDays2026[0];

  const totalSched = MANUAL_DATA.scheduleTasks.length;
  const doneSched = MANUAL_DATA.scheduleTasks.filter(t => state.scheduleChecks[t.id]).length;
  const schedPct = Math.round((doneSched / totalSched) * 100);

  let totalAudit = 0, doneAudit = 0;
  MANUAL_DATA.auditChecklist.forEach(a => a.items.forEach((_, i) => {
    totalAudit++;
    if (state.auditChecks[`${a.id}-${i}`]) doneAudit++;
  }));
  const auditPct = Math.round((doneAudit / totalAudit) * 100);

  const el = document.querySelector(".featured-bento");
  el.innerHTML = `
    <!-- 좌측 화이트 인터랙티브 쇼케이스 카드 -->
    <div class="showcase-white-card" onclick="openTop5Modal()">
      <div class="showcase-ui-mock">
        <div>
          <div class="mock-widget-pink">
            <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
              <span>SECURITY &amp; AUDIT</span>
              <span>${schedPct}% DONE</span>
            </div>
            <div style="font-size:0.9rem; font-weight:700; font-family:var(--font-sans); margin-bottom:8px;">
              K-에듀파인 비공개(6호) + 직원열람제한(영구)
            </div>
            <div style="height:4px; background:rgba(0,0,0,0.12); border-radius:99px; overflow:hidden;">
              <div style="width:${Math.max(25, schedPct)}%; height:100%; background:#111;"></div>
            </div>
          </div>

          <div class="mock-pill-floating">이달의 진단의 날: ${csdCurrent.label}</div>

          <div class="mock-widget-purple">
            <div style="font-size:0.72rem; opacity:0.85; font-family:var(--font-mono);">AUDIT READINESS · 18 DOMAINS</div>
            <div style="font-size:1.35rem; font-weight:700; margin-top:4px;">감사 자가진단 ${auditPct}% (${doneAudit}/${totalAudit})</div>
          </div>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:flex-end; gap:20px; flex-wrap:wrap;">
        <div>
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:#666; margin-bottom:6px;">2026 HANDBOOK OVERVIEW</div>
          <div class="showcase-big-headline">2026 정보보호 실무편람<br>핵심 감사 수칙 &amp; 자동화</div>
        </div>
        <span style="background:#000; color:#fff; padding:10px 20px; border-radius:999px; font-size:0.84rem; font-weight:600;">감사 Top 5 수칙 열기 →</span>
      </div>
    </div>

    <!-- 우측 웜 그라데이션 쇼케이스 카드 -->
    <div class="showcase-gradient-card" onclick="openFormModal('form-sec-2')">
      <div>
        <div style="font-family:var(--font-mono); font-size:0.75rem; font-weight:600; opacity:0.75;">TEMPLATES &amp; DRAFTS · 26종</div>
        <h3 style="font-size:1.85rem; font-weight:700; letter-spacing:-0.03em; line-height:1.2; margin-top:12px;">
          별지서식 &amp; 내부결재<br>기안문 원클릭 생성
        </h3>
        <p style="font-size:0.9rem; margin-top:12px; opacity:0.82;">
          정보보안담당관 지정, 개인정보 처리방침 개정, CCTV 관리대장, 위탁계약서 등 26종 서식에 <strong>${state.schoolInfo.schoolName}</strong> 정보가 자동 기입됩니다.
        </p>
      </div>

      <div style="display:flex; flex-direction:column; gap:8px;">
        <div style="background:rgba(255,255,255,0.65); backdrop-filter:blur(8px); padding:12px 16px; border-radius:12px; font-size:0.83rem; font-weight:600;">
          [별지 2] 정보보안담당관 및 통제구역 출입인가자 지정 →
        </div>
        <div style="background:rgba(255,255,255,0.65); backdrop-filter:blur(8px); padding:12px 16px; border-radius:12px; font-size:0.83rem; font-weight:600;" onclick="event.stopPropagation(); openFormModal('form-pi-2')">
          [개인정보 별지 2] 개인정보 처리방침 개정 기안문 →
        </div>
        <div style="background:rgba(255,255,255,0.65); backdrop-filter:blur(8px); padding:12px 16px; border-radius:12px; font-size:0.83rem; font-weight:600;" onclick="event.stopPropagation(); openFormModal('form-app-1')">
          [부록] 전 교직원 정보보호 교육 실시 기안문 →
        </div>
      </div>
    </div>
  `;
}

// 2. 실무편람 매뉴얼 카드 그리드 (제1장~제3장)
function renderManualsGrid() {
  const grads = ["visual-grad-1", "visual-grad-2", "visual-grad-3", "visual-grad-4", "visual-grad-5", "visual-grad-6"];
  const grid = document.getElementById("manuals-card-grid");
  grid.innerHTML = MANUAL_DATA.chapters.map((ch, idx) => `
    <article class="media-card" onclick="openChapterModal('${ch.id}')">
      <div class="media-card-visual ${grads[idx % grads.length]}">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="outline-pill" style="padding:3px 10px; font-size:0.7rem;">${ch.part}</span>
          <span style="font-family:var(--font-mono); font-size:0.72rem; opacity:0.8;">${ch.pages}</span>
        </div>
        <div style="font-size:1.18rem; font-weight:600; letter-spacing:-0.02em;">${ch.title}</div>
      </div>
      <div class="media-card-body">
        <p class="media-desc">${ch.summary}</p>
        <div style="margin-top:16px; font-size:0.8rem; font-weight:600; color:#fff;">자세히 보기 →</div>
      </div>
    </article>
  `).join("");
}

// 3. 사이버보안 진단의 날 12개월 카드 그리드
function renderCsdGrid() {
  const currentMonth = new Date().getMonth() + 1;
  const grid = document.getElementById("csd-card-grid");
  grid.innerHTML = MANUAL_DATA.cyberSecurityDays2026.map(d => {
    const doneCount = d.tasks.filter((_, i) => state.csdChecks[`${d.month}-${i}`]).length;
    const allDone = doneCount === d.tasks.length;
    return `
      <div class="media-card" style="cursor:default; ${d.month === currentMonth ? 'border-color:#ffffff;' : ''}">
        <div class="media-card-body">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <span class="media-eyebrow" style="margin:0;">2026 · ${d.month}월 진단의 날</span>
              <span class="outline-pill" style="padding:2px 10px; font-size:0.7rem; ${allDone ? 'background:#10a37f; border-color:#10a37f; color:#fff;' : ''}">
                ${allDone ? "점검완료" : d.label}
              </span>
            </div>
            <div style="display:flex; flex-direction:column; gap:8px; margin-top:12px;">
              ${d.tasks.map((t, idx) => {
                const checked = !!state.csdChecks[`${d.month}-${idx}`];
                return `
                  <label style="display:flex; align-items:flex-start; gap:9px; font-size:0.82rem; cursor:pointer; ${checked ? 'text-decoration:line-through; opacity:0.5;' : ''}">
                    <input type="checkbox" class="dark-checkbox" ${checked ? "checked" : ""} onchange="toggleCsdTask(${d.month}, ${idx})" />
                    <span>${t}</span>
                  </label>
                `;
              }).join("")}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function toggleCsdTask(month, idx) {
  const key = `${month}-${idx}`;
  state.csdChecks[key] = !state.csdChecks[key];
  saveState(STORAGE_KEYS.CSD_CHECKS, state.csdChecks);
  renderCsdGrid();
}

// 4. 시기별 정보보호 업무 추진 일정
function renderScheduleSection() {
  const periods = ["all", "2월~3월", "3월", "학기 초", "매월", "분기", "학기 중", "연중"];
  document.getElementById("schedule-filter-pills").innerHTML = periods.map(p => `
    <button class="outline-pill ${state.scheduleFilter === p ? 'active' : ''}" style="padding:6px 14px; font-size:0.78rem;" onclick="state.scheduleFilter='${p}'; renderScheduleSection();">
      ${p === "all" ? "전체 (16)" : p}
    </button>
  `).join("");

  const list = MANUAL_DATA.scheduleTasks.filter(t => state.scheduleFilter === "all" || t.period === state.scheduleFilter);
  document.getElementById("schedule-list-container").innerHTML = list.map(t => {
    const done = !!state.scheduleChecks[t.id];
    return `
      <div class="dark-row ${done ? 'done' : ''}">
        <div class="dark-row-left">
          <input type="checkbox" class="dark-checkbox" ${done ? "checked" : ""} onchange="toggleScheduleTask('${t.id}')" />
          <div>
            <div style="font-family:var(--font-mono); font-size:0.74rem; color:var(--text-muted); margin-bottom:4px;">
              ${t.period} · ${t.category} ${t.important ? "· [필수]" : ""}
            </div>
            <div class="dark-row-title">${t.title}</div>
            <div class="dark-row-desc">${t.description}</div>
            <div style="font-size:0.78rem; color:var(--text-muted); margin-top:6px;">관련 대장/서식: ${t.ledger}</div>
          </div>
        </div>
        <div style="display:flex; gap:8px; flex-shrink:0;">
          ${t.formId ? `<button class="btn-white-pill" onclick="openFormModal('${t.formId}')">기안문·서식</button>` : ""}
          ${t.chapterId ? `<button class="btn-dark-pill" onclick="openChapterModal('${t.chapterId}')">매뉴얼</button>` : ""}
        </div>
      </div>
    `;
  }).join("");
}

function toggleScheduleTask(id) {
  state.scheduleChecks[id] = !state.scheduleChecks[id];
  saveState(STORAGE_KEYS.SCHEDULE_CHECKS, state.scheduleChecks);
  renderFeaturedShowcase();
  renderScheduleSection();
}

// 5. 별지 서식 & 기안문 26종 그리드
function renderFormsSection() {
  document.getElementById("forms-school-indicator").textContent = state.schoolInfo.schoolName;
  const cats = ["all", "정보보안 서식", "개인정보 서식", "기타·부록 서식"];
  document.getElementById("forms-filter-pills").innerHTML = cats.map(c => `
    <button class="outline-pill ${state.formFilter === c ? 'active' : ''}" style="padding:6px 14px; font-size:0.78rem;" onclick="state.formFilter='${c}'; renderFormsSection();">
      ${c === "all" ? "전체 (26)" : c}
    </button>
  `).join("");

  const list = MANUAL_DATA.forms.filter(f => state.formFilter === "all" || f.category === state.formFilter);
  document.getElementById("forms-card-grid").innerHTML = list.map(f => `
    <article class="media-card" onclick="openFormModal('${f.id}')">
      <div class="media-card-body">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span class="media-eyebrow" style="margin:0;">${f.badge} · ${f.page}</span>
            <span class="outline-pill" style="padding:2px 10px; font-size:0.7rem;">${f.type === "draft" ? "기안문/서약서" : "관리대장"}</span>
          </div>
          <div class="media-title">${f.title}</div>
          <p class="media-desc">${f.when}</p>
        </div>
        <div style="margin-top:18px; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.78rem; color:var(--text-muted);">${state.schoolInfo.schoolName} 자동 반영</span>
          <span style="font-size:0.82rem; font-weight:600;">작성 · 복사 →</span>
        </div>
      </div>
    </article>
  `).join("");
}

// 6. 감사 중점 점검사항 18개 영역 그리드
function renderAuditSection() {
  const domains = ["all", "정보보안", "개인정보 보호", "교육", "정품 S/W", "기타"];
  document.getElementById("audit-filter-pills").innerHTML = domains.map(d => `
    <button class="outline-pill ${state.auditFilter === d ? 'active' : ''}" style="padding:6px 14px; font-size:0.78rem;" onclick="state.auditFilter='${d}'; renderAuditSection();">
      ${d === "all" ? "전체 영역 (18)" : d}
    </button>
  `).join("");

  const list = MANUAL_DATA.auditChecklist.filter(a => state.auditFilter === "all" || a.domain === state.auditFilter);
  document.getElementById("audit-card-grid").innerHTML = list.map(a => {
    const doneCount = a.items.filter((_, i) => state.auditChecks[`${a.id}-${i}`]).length;
    return `
      <div class="media-card" style="cursor:default;">
        <div class="media-card-body">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="media-eyebrow" style="margin:0;">${a.domain} · ${a.note}</span>
              <span class="outline-pill" style="padding:2px 10px; font-size:0.7rem;">${doneCount} / ${a.items.length} 완료</span>
            </div>
            <div class="media-title" style="margin-bottom:12px;">${a.area}</div>
            <div style="display:flex; flex-direction:column; gap:8px;">
              ${a.items.map((itemText, idx) => {
                const checked = !!state.auditChecks[`${a.id}-${idx}`];
                return `
                  <label style="display:flex; align-items:flex-start; gap:9px; font-size:0.83rem; cursor:pointer; ${checked ? 'text-decoration:line-through; opacity:0.5;' : ''}">
                    <input type="checkbox" class="dark-checkbox" ${checked ? "checked" : ""} onchange="toggleAuditItem('${a.id}', ${idx})" />
                    <span>${itemText}</span>
                  </label>
                `;
              }).join("")}
            </div>
          </div>
          <div style="margin-top:16px; padding-top:12px; border-top:1px solid var(--border); font-size:0.78rem; color:var(--text-secondary); display:flex; justify-content:space-between; align-items:center; gap:10px;">
            <span>⚠️ ${a.warning}</span>
            ${a.formId ? `<button class="btn-white-pill" style="flex-shrink:0; padding:5px 12px; font-size:0.74rem;" onclick="openFormModal('${a.formId}')">서식 →</button>` : ""}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function toggleAuditItem(auditId, idx) {
  const key = `${auditId}-${idx}`;
  state.auditChecks[key] = !state.auditChecks[key];
  saveState(STORAGE_KEYS.AUDIT_CHECKS, state.auditChecks);
  renderFeaturedShowcase();
  renderAuditSection();
}

// 7. 비상연락처 디렉토리
function renderContactsSection() {
  document.getElementById("contacts-list-container").innerHTML = MANUAL_DATA.contacts.map(c => `
    <div class="dark-row">
      <div class="dark-row-left">
        <div>
          <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--text-muted);">${c.category} · ${applyTemplateVars(c.org)}</div>
          <div class="dark-row-title">${c.name}</div>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-family:var(--font-mono); font-size:0.92rem; font-weight:600;">${c.phone}</span>
        <button class="btn-dark-pill" onclick="copyText('${c.phone}', '연락처가 복사되었습니다.')">복사</button>
        ${c.url ? `<a class="btn-white-pill" href="${c.url}" target="_blank" rel="noopener">접속 ↗</a>` : ""}
      </div>
    </div>
  `).join("");
}

// 상세 모달 열기: 매뉴얼 / 기안문 / 슬라이드 / Top 5
function openChapterModal(chapterId) {
  const ch = MANUAL_DATA.chapters.find(c => c.id === chapterId);
  if (!ch) return;
  document.getElementById("detail-modal-badge").textContent = `${ch.part} · ${ch.pages}`;
  document.getElementById("detail-modal-title").textContent = ch.title;
  document.getElementById("detail-modal-body").innerHTML = `
    <p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:24px;">${ch.summary}</p>
    ${ch.sections.map(sec => `
      <div class="manual-section">
        <h3>${sec.heading}</h3>
        <div>${applyTemplateVars(sec.content)}</div>
      </div>
    `).join("")}
  `;
  document.getElementById("detail-modal").classList.add("open");
}

function openFormModal(formId) {
  const form = MANUAL_DATA.forms.find(f => f.id === formId);
  if (!form) return;
  document.getElementById("detail-modal-badge").textContent = `${form.badge} · ${form.page}`;
  document.getElementById("detail-modal-title").textContent = form.title;

  let bodyHtml = "";
  if (form.type === "draft") {
    const resolvedTitle = applyTemplateVars(form.draftTitle);
    const resolvedBody = applyTemplateVars(form.draftBody);
    bodyHtml = `
      <div class="alert-box">
        <strong>결재 · 보안 설정 기준:</strong> ${applyTemplateVars(form.securityConfig)}
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-top:16px;">
        <div><strong>제목:</strong> <span id="modal-draft-title">${resolvedTitle}</span></div>
        <div style="display:flex; gap:8px;">
          <button class="btn-dark-pill" onclick="copyText(document.getElementById('modal-draft-title').textContent, '제목이 복사되었습니다.')">제목 복사</button>
          <button class="btn-white-pill" onclick="copyText(document.getElementById('modal-draft-textarea').value, '기안문 본문이 복사되었습니다.')">본문 전체 복사</button>
        </div>
      </div>
      <textarea id="modal-draft-textarea" class="draft-textarea">${resolvedBody}</textarea>
    `;
  } else {
    bodyHtml = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <span style="font-size:0.84rem; color:var(--text-secondary);">${state.schoolInfo.schoolName} 자동 반영 관리대장 양식</span>
        <a class="btn-white-pill" href="https://tims.jne.go.kr" target="_blank" rel="noopener">TIMS 원본 서식 다운로드 ↗</a>
      </div>
      <div style="overflow-x:auto;">
        <table class="manual-table">
          <thead><tr>${form.headers.map(h => `<th>${h}</th>`).join("")}</tr></thead>
          <tbody>
            ${form.sampleRows.map(r => `<tr>${r.map(c => `<td>${applyTemplateVars(c)}</td>`).join("")}</tr>`).join("")}
            <tr>${form.headers.map(() => `<td style="height:36px;"></td>`).join("")}</tr>
          </tbody>
        </table>
      </div>
    `;
  }

  document.getElementById("detail-modal-body").innerHTML = `
    <p style="font-size:0.86rem; color:var(--text-secondary); margin-bottom:6px;"><strong>작성 시기:</strong> ${form.when}</p>
    <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:18px;">${form.description}</p>
    ${bodyHtml}
  `;
  document.getElementById("detail-modal").classList.add("open");
}

function openTop5Modal() {
  document.getElementById("detail-modal-badge").textContent = "CRITICAL AUDIT RULES";
  document.getElementById("detail-modal-title").textContent = "감사 최다 지적 Top 5 핵심 수칙";
  document.getElementById("detail-modal-body").innerHTML = `
    <div class="alert-box danger">
      <strong>01. K-에듀파인 개인정보 포함 문서 보안설정 누락 (감사 지적 1순위)</strong>
      <p style="margin-top:6px;">개인정보가 포함된 공문서는 반드시 <strong>「대국민 공개여부: 비공개(6호)」 + 「직원열람제한: 영구」</strong>를 동시에 설정해야 합니다. (전년도 결재 문서는 당해년도 5월까지만 문서등록대장에서 수정 가능)</p>
    </div>
    <div class="alert-box">
      <strong>02. K-에듀파인 공문서 하단 상용메일 기재 금지</strong>
      <p style="margin-top:6px;"><code>K-에듀파인 &gt; 개인설정 &gt; 개인정보관리</code>에서 이메일을 반드시 <strong>공직자통합메일(@korea.kr)</strong>로 수정하세요.</p>
    </div>
    <div class="alert-box">
      <strong>03. 매월 세 번째 수요일 「사이버보안 진단의 날」 3대 점검 세트</strong>
      <p style="margin-top:6px;">매월 3주 수요일마다 ① 내PC지키미 100점 조치, ② 휴대용 저장매체 점검대장([별지 4-2]), ③ 개인영상정보 관리대장([별지 11] - 30일 자동삭제 주기적 점검일시 기록 및 교장 확인)을 함께 이행하세요.</p>
    </div>
    <div class="alert-box">
      <strong>04. 채용공고 시 주민등록번호·가족사항 등 과도한 개인정보 수집 금지</strong>
      <p style="margin-top:6px;">주민등록번호는 정보주체 동의를 받아도 수집 불가(법정주의)하며, 법령 근거 외 수집·보유 시 5년 이하 징역 또는 5천만원 이하 벌금 대상입니다.</p>
    </div>
    <div class="alert-box">
      <strong>05. 알집·알PDF·포토샵·NesPDF 등 비인가 SW 설치 금지</strong>
      <p style="margin-top:6px;">도교육청 일괄보급 정품은 <strong>알약 5.0, MS-EES, 한컴오피스 2024 EDU</strong>입니다. 분기별로 소프트웨어 관리대장을 작성·보관하세요.</p>
    </div>
  `;
  document.getElementById("detail-modal").classList.add("open");
}

function openSlidesModal() {
  const total = MANUAL_DATA.trainingSlides.length;
  const slide = MANUAL_DATA.trainingSlides[state.slideIndex];
  document.getElementById("detail-modal-badge").textContent = `Slide ${slide.slideNo} / ${total}`;
  document.getElementById("detail-modal-title").textContent = `교직원 정보보호 연수자료 (${state.schoolInfo.schoolName})`;

  document.getElementById("detail-modal-body").innerHTML = `
    <div style="min-height:360px; display:flex; flex-direction:column; justify-content:space-between;">
      <div>
        <div style="font-family:var(--font-mono); font-size:0.78rem; color:var(--text-muted); margin-bottom:8px;">${slide.category}</div>
        <h2 style="font-size:1.55rem; font-weight:600; margin-bottom:20px;">${slide.title}</h2>
        <div class="dark-list">
          ${slide.points.map((pt, i) => `
            <div class="dark-row" style="padding:14px 18px;">
              <div><strong>0${i + 1}.</strong> ${pt}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:28px; padding-top:18px; border-top:1px solid var(--border); flex-wrap:wrap; gap:10px;">
        <button class="btn-dark-pill" onclick="state.slideIndex=(state.slideIndex-1+${total})%${total}; openSlidesModal();">← 이전 슬라이드</button>
        <div style="display:flex; gap:6px;">
          <button class="btn-dark-pill" onclick="openFormModal('form-app-1')">교육 실시 기안문</button>
          <button class="btn-dark-pill" onclick="openFormModal('form-app-2')">교육 결과보고 기안문</button>
        </div>
        <button class="btn-white-pill" onclick="state.slideIndex=(state.slideIndex+1)%${total}; openSlidesModal();">다음 슬라이드 →</button>
      </div>
    </div>
  `;
  document.getElementById("detail-modal").classList.add("open");
}

function closeDetailModal() {
  document.getElementById("detail-modal").classList.remove("open");
}

// 검색 오버레이
function toggleSearchOverlay() {
  const el = document.getElementById("search-overlay");
  el.classList.toggle("open");
  if (el.classList.contains("open")) {
    setTimeout(() => document.getElementById("global-search-input").focus(), 50);
  }
}

function handleSearchInput(query) {
  const q = query.trim().toLowerCase();
  const box = document.getElementById("global-search-results");
  if (!q) {
    box.innerHTML = "";
    return;
  }

  const hits = [];
  MANUAL_DATA.chapters.forEach(ch => {
    ch.sections.forEach(sec => {
      const plain = sec.content.replace(/<[^>]+>/g, " ");
      if (ch.title.toLowerCase().includes(q) || sec.heading.toLowerCase().includes(q) || plain.toLowerCase().includes(q)) {
        hits.push({ tag: ch.part, title: `${ch.title} — ${sec.heading}`, action: () => { toggleSearchOverlay(); openChapterModal(ch.id); } });
      }
    });
  });
  MANUAL_DATA.forms.forEach(f => {
    if (f.title.toLowerCase().includes(q) || f.badge.toLowerCase().includes(q) || f.description.toLowerCase().includes(q)) {
      hits.push({ tag: f.badge, title: f.title, action: () => { toggleSearchOverlay(); openFormModal(f.id); } });
    }
  });

  if (!hits.length) {
    box.innerHTML = `<div style="color:var(--text-secondary); padding:12px;">검색 결과가 없습니다.</div>`;
    return;
  }

  box.innerHTML = `<div class="dark-list">${hits.slice(0, 8).map((h, i) => `
    <div class="dark-row search-hit-item" data-idx="${i}" style="cursor:pointer; padding:14px 18px;">
      <div>
        <span style="font-family:var(--font-mono); font-size:0.74rem; color:var(--text-muted); margin-right:10px;">${h.tag}</span>
        <strong>${h.title}</strong>
      </div>
      <span class="btn-white-pill" style="padding:4px 12px; font-size:0.75rem;">열기 →</span>
    </div>
  `).join("")}</div>`;

  box.querySelectorAll(".search-hit-item").forEach((el, idx) => {
    el.addEventListener("click", hits[idx].action);
  });
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
  renderAll();
  showToast("학교 및 담당자 설정이 저장되었습니다.");
}

function renderAll() {
  document.getElementById("header-school-label").textContent = `${state.schoolInfo.schoolName} (${state.schoolInfo.managerName})`;
  renderFeaturedShowcase();
  renderManualsGrid();
  renderCsdGrid();
  renderScheduleSection();
  renderFormsSection();
  renderAuditSection();
  renderContactsSection();
}

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderAll();

  const searchInp = document.getElementById("global-search-input");
  if (searchInp) {
    searchInp.addEventListener("input", e => handleSearchInput(e.target.value));
  }

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeDetailModal();
      closeSchoolModal();
      document.getElementById("search-overlay").classList.remove("open");
    } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      toggleSearchOverlay();
    }
  });
});
