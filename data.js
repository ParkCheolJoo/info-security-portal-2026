// 2026년도 정보보호 업무 실무편람 전체 데이터셋 (전라남도교육지원청 기준)

const MANUAL_DATA = {
  // 2026년 매월 세 번째 수요일 (사이버보안 진단의 날) 일정
  cyberSecurityDays2026: [
    { month: 1, date: "2026-01-21", label: "1월 21일 (수)", tasks: ["내PC지키미 실행 및 취약점 조치(100점)", "휴대용 저장매체(USB) 월례 점검 및 대장 기록", "개인영상정보(CCTV) 관리대장 기록 및 30일 자동삭제 확인"] },
    { month: 2, date: "2026-02-18", label: "2월 18일 (수) [설 연휴 시 익일 2.19.(목)]", tasks: ["내PC지키미 실행 및 취약점 조치(100점)", "휴대용 저장매체(USB) 월례 점검 및 대장 기록", "개인영상정보(CCTV) 관리대장 기록 및 30일 자동삭제 확인"] },
    { month: 3, date: "2026-03-18", label: "3월 18일 (수)", tasks: ["내PC지키미 실행 및 취약점 조치(100점)", "신학기 현원수 대비 내PC지키미 설치 확인", "휴대용 저장매체 점검대장 기록", "개인영상정보(CCTV) 관리대장 기록"] },
    { month: 4, date: "2026-04-15", label: "4월 15일 (수)", tasks: ["내PC지키미 실행 및 취약점 조치(100점)", "휴대용 저장매체(USB) 월례 점검 및 대장 기록", "개인영상정보(CCTV) 관리대장 기록 및 30일 자동삭제 확인"] },
    { month: 5, date: "2026-05-20", label: "5월 20일 (수)", tasks: ["내PC지키미 실행 및 취약점 조치(100점)", "전년도 K-에듀파인 결재문서 공개여부/열람제한 수정 마감(~5월)", "휴대용 저장매체 점검대장 기록", "개인영상정보 관리대장 기록"] },
    { month: 6, date: "2026-06-17", label: "6월 17일 (수)", tasks: ["내PC지키미 실행 및 취약점 조치(100점)", "2분기 상용 소프트웨어 점검 및 관리대장 결재", "휴대용 저장매체 점검대장 기록", "개인영상정보 관리대장 기록"] },
    { month: 7, date: "2026-07-15", label: "7월 15일 (수)", tasks: ["내PC지키미 실행 및 취약점 조치(100점)", "여름방학 전 PC·네트워크 보안 점검", "휴대용 저장매체 점검대장 기록", "개인영상정보 관리대장 기록"] },
    { month: 8, date: "2026-08-19", label: "8월 19일 (수)", tasks: ["내PC지키미 실행 및 취약점 조치(100점)", "2학기 대비 정보시스템 및 무선AP 점검", "휴대용 저장매체 점검대장 기록", "개인영상정보 관리대장 기록"] },
    { month: 9, date: "2026-09-16", label: "9월 16일 (수)", tasks: ["내PC지키미 실행 및 취약점 조치(100점)", "3분기 상용 소프트웨어 점검 및 관리대장 결재", "휴대용 저장매체 점검대장 기록", "개인영상정보 관리대장 기록"] },
    { month: 10, date: "2026-10-21", label: "10월 21일 (수)", tasks: ["내PC지키미 실행 및 취약점 조치(100점)", "개인정보보호 실태 자체 점검 확인", "휴대용 저장매체 점검대장 기록", "개인영상정보 관리대장 기록"] },
    { month: 11, date: "11월 18일 (수)", date: "2026-11-18", label: "11월 18일 (수)", tasks: ["내PC지키미 실행 및 취약점 조치(100점)", "교직원 및 정보보안 담당자(15시간) 교육 이수 현황 점검", "휴대용 저장매체 점검대장 기록", "개인영상정보 관리대장 기록"] },
    { month: 12, date: "2026-12-16", label: "12월 16일 (수)", tasks: ["내PC지키미 실행 및 취약점 조치(100점)", "4분기 상용 소프트웨어 점검 및 관리대장 결재", "연말 각종 정보보호 대장 마감 점검", "개인영상정보 관리대장 기록"] }
  ],

  // 시기별 정보보호 업무 추진 일정 (p.6)
  scheduleTasks: [
    {
      id: "sch-1",
      category: "개인정보 보호",
      period: "2월~3월",
      title: "신입생·재학생 개인정보 수집·이용 일괄 동의서 징구",
      description: "신입생 반 배정, 학생기초자료 조사, 홈페이지 사진 게시, SMS 안내 등 업무별·목적별·시기별 동의서 징구 (만 14세 미만은 법정대리인 동의 필수)",
      ledger: "개인정보 수집·이용 일괄 동의서 [개인정보 별지 13-1]",
      formId: "form-pi-13",
      chapterId: "ch2-3",
      important: true
    },
    {
      id: "sch-2",
      category: "개인정보 보호",
      period: "2월~3월",
      title: "홈페이지 반 편성 게시 시 개인정보 제외 및 채용공고 과도한 수집 금지",
      description: "홈페이지 반 편성 정보 게시 시 개인정보 제외. 채용공고 시 법적 근거 없는 주민등록번호(등본 포함) 및 가족 학력·직장 등 과도한 개인정보 수집 절대 금지",
      ledger: "각급학교 개인정보 수집업무 길잡이",
      chapterId: "ch2-3",
      important: true
    },
    {
      id: "sch-3",
      category: "개인정보 보호",
      period: "2월~3월",
      title: "전입 및 신규 교직원 개인정보보호 서약서 및 일괄동의서 징구",
      description: "해당 기관 근무 동안 1회 제출(기존 직원 완료 시 신규·전입 직원만 추가 징구). 비상연락망·지문인식·학교홍보 동의서 함께 징구",
      ledger: "개인정보보호 서약서 [개인정보 별지 12], 교직원 일괄동의서 [별지 13-2]",
      formId: "form-pi-12",
      chapterId: "ch2-4",
      important: true
    },
    {
      id: "sch-4",
      category: "정보보안",
      period: "3월",
      title: "정보보안담당관 및 통제구역(전산실) 출입인가자 지정",
      description: "정보부장(또는 학교장 지정자)을 정보보안담당관으로 지정하고, 전산실(서버실) 관리책임자 및 출입인가자 지정 내부결재 실시",
      ledger: "내부결재 기안문 [정보보안 별지 2]",
      formId: "form-sec-2",
      chapterId: "ch1-1",
      important: true
    },
    {
      id: "sch-5",
      category: "개인정보 보호",
      period: "학기 초",
      title: "CCTV 운영 현황 등록 및 담당자 현행화 (개인정보보호 종합지원시스템)",
      description: "개인정보보호 종합지원시스템(intra.privacy.go.kr)에 접속하여 인사발령에 따른 CPO(교장)·총괄관리자(담당자) 등록 및 CCTV 운영 현황 등록",
      ledger: "개인정보보호 종합지원시스템 등록 매뉴얼 [개인정보 별지 14]",
      formId: "form-pi-14",
      chapterId: "ch2-8",
      important: true
    },
    {
      id: "sch-6",
      category: "기타 정보업무",
      period: "학기 초",
      title: "신규·전입 직원 업무포털(NEIS, K-에듀파인, 전남메신저) 권한 부여 및 공직자통합메일 설정",
      description: "NEIS 인사등재 → EPKI 인증서 발급 → 아이디 생성 → 나이스/에듀파인 권한 및 과제카드 부여 → K-에듀파인 개인정보관리 이메일을 공직자통합메일(@korea.kr)로 설정",
      ledger: "업무포털 이용 매뉴얼 (제3장 Ⅵ~Ⅷ)",
      chapterId: "ch3-6",
      important: false
    },
    {
      id: "sch-7",
      category: "정보보안",
      period: "매월",
      title: "내PC지키미 점검 (매월 세 번째 수요일 '사이버보안 진단의 날')",
      description: "업무용 PC 전체 내PC지키미 실행 및 취약점 보완(100점 조치). 관리자 페이지(https://172.16.100.30/mc)에서 학교 현원수 대비 미점검자·취약자 확인 및 메시지 발송",
      ledger: "내PC지키미 관리자 시스템",
      chapterId: "ch1-1",
      important: true
    },
    {
      id: "sch-8",
      category: "정보보안",
      period: "매월",
      title: "휴대용 저장매체(USB·외장HDD) 월례 점검 실시",
      description: "월 1회 휴대용 저장매체 보유 수량 및 보관상태를 점검하고 점검대장에 기록·서명",
      ledger: "휴대용 저장매체 점검대장 [정보보안 별지 4-2]",
      formId: "form-sec-4",
      chapterId: "ch1-2",
      important: true
    },
    {
      id: "sch-9",
      category: "개인정보 보호",
      period: "매월",
      title: "개인영상정보(CCTV) 관리대장 기록 (30일 주기 자동 삭제 여부 점검)",
      description: "매월 사이버보안 진단의 날 등에 CCTV 녹화장비 30일 주기 자동 삭제 여부를 점검하고 개인영상정보 관리대장에 주기적 점검일시 기록 및 교장 확인",
      ledger: "개인영상정보 관리대장 [개인정보 별지 11]",
      formId: "form-pi-11",
      chapterId: "ch2-11",
      important: true
    },
    {
      id: "sch-10",
      category: "정보보안",
      period: "분기",
      title: "상용 소프트웨어 점검 및 소프트웨어 관리대장 결재 (분기별)",
      description: "도교육청 일괄 보급 SW(알약 5.0, MS-EES, 한컴오피스 2024 EDU) 및 학교 자체 구입 SW 현황을 TIMS에서 확인·작성하여 분기별 보관",
      ledger: "소프트웨어 관리대장 [기타 별지 1]",
      formId: "form-etc-1",
      chapterId: "ch3-3",
      important: false
    },
    {
      id: "sch-11",
      category: "정보보안",
      period: "분기",
      title: "PC·업무시스템 비밀번호 정기 변경 (분기 1회 이상) 및 PC 내 개인정보 파일 정비",
      description: "CMOS, 윈도우 로그온, 화면보호기(10분) 비밀번호 점검 및 MarkAny(Privacy SAFER) 수동검사로 불필요한 주민등록번호 포함 파일 즉시 삭제",
      ledger: "개인정보 감사 솔루션(MarkAny)",
      chapterId: "ch2-8",
      important: false
    },
    {
      id: "sch-12",
      category: "개인정보 보호",
      period: "학기 중",
      title: "개인정보파일 일제정비 (개인정보보호 종합지원시스템 등록·변경·파기)",
      description: "학교 표준목록(17종)에 근거하여 종합지원시스템(intra.privacy.go.kr)에 신규등록·변경(현 업무담당자명, 정보주체건수 현행화)·파기 신청 후 대장 출력 보관",
      ledger: "개인정보파일대장 [개인정보 별지 3], 파기 관리대장 [별지 9]",
      formId: "form-pi-3",
      chapterId: "ch2-8",
      important: true
    },
    {
      id: "sch-13",
      category: "개인정보 보호",
      period: "학기 중",
      title: "개인정보보호 실태 자체 점검 및 K-에듀파인 전년도 문서 공개설정 점검(~5월)",
      description: "K-에듀파인 개인정보 포함 문서는 '대국민 비공개(6호) + 직원열람제한(영구)' 설정 필수. 전년도 결재문서는 당해년도 5월까지만 문서등록대장에서 수정 가능!",
      ledger: "K-에듀파인 문서등록대장",
      chapterId: "ch2-4",
      important: true
    },
    {
      id: "sch-14",
      category: "정보보안",
      period: "연중",
      title: "전 직원 대상 정보보안·개인정보보호·정품SW 교육 실시 (연 1회 이상) 및 담당자 15시간 이수",
      description: "자체 교육계획 내부결재 후 전 직원 교육 실시(등록부·사진·교육자료 포함 결과보고 내부결재). 정보보안 담당자는 연간 15시간 이상 원격/집합 교육 이수 필수",
      ledger: "교육 실시/결과 기안문 [부록], 교육자료 및 참석 등록부",
      formId: "form-app-1",
      chapterId: "ch1-1",
      important: true
    },
    {
      id: "sch-15",
      category: "정보보안",
      period: "연중",
      title: "정보시스템 관리대장, 휴대용저장매체 반출·입대장, 전산실 출입통제대장 상시 관리",
      description: "장비 변동 시 정보시스템 관리대장(TIMS) 현행화, 교원용 노트북/태블릿 장기·수시 대여 시 반출입대장 기록, 비인가자(유지보수 등) 전산실 출입 시 출입통제대장 기록",
      ledger: "정보보안 별지 1, 3, 4-1, 4-3",
      formId: "form-sec-3",
      chapterId: "ch1-2",
      important: false
    },
    {
      id: "sch-16",
      category: "개인정보 보호",
      period: "연중",
      title: "사안 발생 시 내부 관리계획·개인정보 처리방침·CCTV 운영방침 현행화 및 위탁/제3자 제공 관리",
      description: "CPO(교장)나 담당자 변경, CCTV 수량 변경 시 내부결재 후 홈페이지 하단 처리방침/운영방침 즉시 현행화(이전 방침 이력 유지). 용역·위탁계약 시 표준위탁계약서·보안서약서·교육·파기확인서 징구",
      ledger: "개인정보 별지 1, 2, 4, 5, 6, 7, 10",
      formId: "form-pi-2",
      chapterId: "ch2-4",
      important: true
    }
  ],

  // 감사 중점 점검사항 (p.7)
  auditChecklist: [
    {
      id: "aud-1",
      domain: "정보보안",
      area: "전산실(서버실) 보안관리",
      items: [
        "전산실 출입인가자 지정 및 관리 여부 (내부결재 [별지 2])",
        "비인가자 출입 시 출입통제대장([별지 1]) 기록 및 보관 여부",
        "통제구역/제한구역 표지판(적색 사선 2줄) 및 관리책임자 표지 부착, 이중 잠금장치 설치 여부"
      ],
      note: "매년 3월 / 상시",
      warning: "유지보수 기사 등 외부인 출입 시 반드시 출입통제대장에 입회자(교직원)와 함께 기록해야 합니다.",
      formId: "form-sec-2"
    },
    {
      id: "aud-2",
      domain: "정보보안",
      area: "내PC지키미 점검",
      items: [
        "매월 세 번째 수요일(사이버보안 진단의 날) 내PC지키미 실행 및 취약점 100점 보완 여부",
        "학교 현원수만큼 내PC지키미 에이전트 설치 및 미점검자 관리 여부"
      ],
      note: "매월 3주 수요일",
      warning: "관리자 페이지(https://172.16.100.30/mc)에서 미점검 PC 및 100점 미만 취약 PC가 없는지 확인하세요.",
      formId: null
    },
    {
      id: "aud-3",
      domain: "정보보안",
      area: "인증서 관리",
      items: [
        "타인의 교육행정전자서명(EPKI) 인증서 보관 및 양도·대여 여부",
        "이메일, 웹하드, 클라우드 등 온라인상 인증서 보관 금지 준수 여부",
        "인사이동·퇴직 시 공용/이전 PC 내 인증서(C:\\GPKI) 완전 삭제 여부"
      ],
      note: "전자서명법 위반 주의",
      warning: "타인에게 인증서를 양도·대여하거나 임의 이용할 경우 3년 이하 징역 또는 3천만원 이하 벌금 대상입니다.",
      formId: "form-etc-2"
    },
    {
      id: "aud-4",
      domain: "정보보안",
      area: "사용자계정 관리",
      items: [
        "업무분장에 따른 나이스(NEIS) 및 K-에듀파인 권한의 적절성 여부",
        "전출·휴직·퇴직자 권한 회수 및 장기미접속자 잠금 관리 여부",
        "K-에듀파인 기관관리자(업무/재정) 지정 시 내부결재 공문번호 입력 여부"
      ],
      note: "인사발령 시",
      warning: "K-에듀파인 기관관리자 등록 시 공문번호를 입력하지 않으면 3일 후 권한이 자동 만료됩니다.",
      formId: null
    },
    {
      id: "aud-5",
      domain: "정보보안",
      area: "전자우편 보안대책",
      items: [
        "K-에듀파인 공문서 하단 이메일에 공직자통합메일(@korea.kr) 설정 여부 (상용메일 기재 금지)",
        "업무자료 소통 시 공직자통합메일만 사용하고 상용 메신저(카카오톡·밴드 등) 업무 소통 금지 준수 여부"
      ],
      note: "감사 빈출 지적!",
      warning: "K-에듀파인 > 개인설정 > 개인정보관리에서 이메일이 상용메일(naver, daum, gmail 등)로 되어 있으면 감사 지적 대상입니다!",
      formId: null
    },
    {
      id: "aud-6",
      domain: "정보보안",
      area: "휴대용 저장매체 보안",
      items: [
        "휴대용 저장매체 관리대장([별지 4-1]) 등록 및 매체 라벨 부착 여부",
        "휴대용 저장매체(노트북·태블릿 등 전산장비 포함) 반출·입대장([별지 4-3]) 기록 여부",
        "휴대용 저장매체 점검대장([별지 4-2]) 매월 점검 실시 및 서명 여부"
      ],
      note: "매월 점검 실시",
      warning: "중·고교 성적처리용 USB 및 교원 장기대여 노트북/태블릿도 빠짐없이 대장에 등재해야 합니다.",
      formId: "form-sec-4"
    },
    {
      id: "aud-7",
      domain: "정보보안",
      area: "저장매체 불용처리",
      items: [
        "정보시스템(PC, 노트북, 디지털복합기 등) 불용·폐기·반납·교체 시 저장매체 자료 완전 삭제 여부",
        "교육지원청 저장자료 삭제 요청 공문([별지 5]) 및 저장자료삭제확인서 보관 여부"
      ],
      note: "자체 폐기·교체 시",
      warning: "디지털복합기 임대 반납·교체 시에도 내장 HDD/SSD 저장자료 완전삭제 조치를 반드시 확인해야 합니다.",
      formId: "form-sec-5"
    },
    {
      id: "aud-8",
      domain: "개인정보 보호",
      area: "개인정보 내부 관리계획 수립",
      items: [
        "개인정보 내부 관리계획 수립 및 개정 이력 관리 여부 (내부결재 [개인정보 별지 1])"
      ],
      note: "변경 시",
      warning: "도교육청 내부 관리계획 변경 알림 공문 시 학교 실정에 맞게 개정하여 내부결재합니다.",
      formId: "form-pi-1"
    },
    {
      id: "aud-9",
      domain: "개인정보 보호",
      area: "개인정보처리방침 수립·공개",
      items: [
        "개인정보 처리방침 수립(내부결재 [개인정보 별지 2]) 및 학교 홈페이지 메인화면 하단 공개 여부",
        "인사발령에 따른 개인정보 보호책임자(교장)·담당자 성명 현행화 및 이전 처리방침 이력 관리 여부",
        "보유 개인정보파일 목록과 홈페이지 처리방침 내 파일명 일치 여부"
      ],
      note: "인사발령·변경 시",
      warning: "교장선생님이나 개인정보 담당자가 바뀌었을 때 홈페이지 하단 개인정보 처리방침을 개정하지 않는 사례가 많습니다.",
      formId: "form-pi-2"
    },
    {
      id: "aud-10",
      domain: "개인정보 보호",
      area: "개인정보보호 관련 대장",
      items: [
        "개인정보파일대장([별지 3] - 종합지원시스템 엑셀 출력 보관) 비치 여부",
        "개인정보의 목적 외 이용 및 제3자 제공 대장([별지 4]) 기록·보관 여부",
        "개인정보파일 파기 요청서([별지 8]) 및 파기 관리대장([별지 9]) 작성 여부"
      ],
      note: "상시 관리",
      warning: "열람창구(행정실/교무실)에 개인정보파일대장과 민원용 열람·정정·삭제 요구서 서식을 비치해야 합니다.",
      formId: "form-pi-3"
    },
    {
      id: "aud-11",
      domain: "개인정보 보호",
      area: "개인정보 수집 및 제3자 제공",
      items: [
        "법령 근거 없는 개인정보 수집 시 정보주체(만 14세 미만은 법정대리인) 동의 및 4대 고지항목 안내 여부",
        "목적 외 제3자 제공 시 공문 접수, 안전성 확보조치 회신 문구 명시, 대장([별지 4]) 기록 여부",
        "목적 외 제공 후 30일 이내에 10일 이상 학교 홈페이지 공개 여부 (별도 동의 및 범죄수사 제외)"
      ],
      note: "사안 발생 시",
      warning: "채용공고 시 응시원서에 주민등록번호(등본 포함), 출생지, 가족 학력·직장 등을 요구하면 법 위반입니다!",
      formId: "form-pi-4"
    },
    {
      id: "aud-12",
      domain: "개인정보 보호",
      area: "개인정보 위탁",
      items: [
        "위탁계약 체결 시 표준 개인정보처리 위탁 계약서([별지 5]) 작성 및 보관 여부",
        "위탁업무 내용 및 수탁자 명칭을 학교 홈페이지(개인정보 처리방침)에 지속 공개 여부",
        "수탁자 교육 실시 및 관리·감독([별지 6]), 계약 종료 시 개인정보 파기 확인서([별지 7]) 징구 여부"
      ],
      note: "앨범·알리미·유지보수 등",
      warning: "졸업앨범, 학생증, 알리미앱, 방과후강사, 여행사(체험학습), PC/CCTV 유지보수 등은 모두 개인정보 처리 위탁 대상입니다!",
      formId: "form-pi-5"
    },
    {
      id: "aud-13",
      domain: "개인정보 보호",
      area: "고유식별정보 처리 및 공문서 안전성 확보",
      items: [
        "K-에듀파인 개인정보 포함 문서 기안·접수 시 「대국민 비공개(6호)」 및 「직원열람제한: 영구」 동시 설정 여부",
        "공문서 제목, 첨부파일명, 수신자란, 본문에 개인정보 미기재 여부 (첨부문서로 작성)",
        "주민등록번호 등 고유식별정보 포함 문서 PC 저장 시 암호화(MarkAny DRM) 및 목적 달성 후 즉시 삭제 여부"
      ],
      note: "최다 감사 지적 항목!",
      warning: "대국민 공개여부만 '비공개(6호)'로 하고 '직원열람제한(영구)'을 설정하지 않아 감사에 지적되는 사례가 가장 많습니다! (전년도 문서는 당해 5월까지 수정 가능)",
      formId: null
    },
    {
      id: "aud-14",
      domain: "개인정보 보호",
      area: "개인정보 취급자 관리",
      items: [
        "전 교직원(신규·전입 직원 포함) 개인정보보호 서약서([별지 12]) 징구 여부"
      ],
      note: "전입·신규 시 추가",
      warning: "해당 학교 근무 기간 중 1회 징구하면 되므로 매년 전 직원에게 다시 받을 필요 없이 신규·전입자만 누락 없이 징구하세요.",
      formId: "form-pi-12"
    },
    {
      id: "aud-15",
      domain: "개인정보 보호",
      area: "CCTV (영상정보처리기기) 운영·관리",
      items: [
        "고정형 영상정보처리기기 운영·관리방침 수립(내부결재 [별지 10]) 및 홈페이지 공개·현행화 여부",
        "CCTV 상황실 보호구역(제한·통제구역) 지정 및 출입통제, CCTV 설치 안내판 필수항목 부착 여부",
        "개인영상정보 관리대장([별지 11]) 매월 작성(30일 주기 자동삭제 확인 기록 포함) 여부",
        "(고등학교 해당) CCTV 설치·교체 시 보안대책 수립 및 TTA 인증제품 도입 여부"
      ],
      note: "변경 시 / 매월",
      warning: "CCTV 영상이 30일 주기로 자동 삭제되도록 설정된 경우에도 매월 점검일시를 [별지 11] 관리대장에 기록해야 합니다.",
      formId: "form-pi-11"
    },
    {
      id: "aud-16",
      domain: "교육",
      area: "정보보안, 개인정보보호, 소프트웨어 교육",
      items: [
        "전 직원 대상 정보보안·개인정보보호·정품SW 교육 연 1회 이상 실시 여부 (계획/결과 내부결재, 교육자료, 참석 등록부, 미참석자 별도 교육)",
        "정보보안 담당자 연간 15시간 이상 정보보안(개인정보보호 포함) 전문교육 이수 여부"
      ],
      note: "연 1회 이상 필수",
      warning: "출장·연가 등으로 교육에 불참한 직원에 대해서도 교육자료 배포 및 별도 교육 조치를 결과보고서에 명시해야 합니다.",
      formId: "form-app-1"
    },
    {
      id: "aud-17",
      domain: "정품 S/W",
      area: "소프트웨어 관리대장 및 정품 사용",
      items: [
        "소프트웨어 관리대장([기타 별지 1]) 분기별 작성·보관 여부 (TIMS 활용 가능)",
        "개인용 무료이나 기관 유료인 불법 SW(알집, 알PDF, NesPDF, 포토샵, V3 등) 설치·사용 금지 준수 여부"
      ],
      note: "분기별 / 연 1회 점검",
      warning: "도교육청 일괄 보급 SW는 알약 5.0, MS-EES, 한컴오피스 2024 EDU입니다. 알집·알PDF·포토샵 등은 별도 라이선스 증서가 없으면 불법입니다!",
      formId: "form-etc-1"
    },
    {
      id: "aud-18",
      domain: "기타",
      area: "정보화기기 유지관리 용역 보안",
      items: [
        "정보화기기 유지관리 용역 계약 시 대상장비 목록, 표준 개인정보처리 위탁계약서([개인정보 별지 5]) 구비 여부",
        "용역업체 대표자 및 참여인력 보안서약서([정보보안 별지 7]), 보안교육 일지([별지 9]) 작성 여부",
        "사업 완료 시 보안확약서([정보보안 별지 8]) 및 수탁자 개인정보 파기확인서([개인정보 별지 7]) 징구 여부"
      ],
      note: "용역 계약·종료 시",
      warning: "개인정보를 처리하는 용역(PC 유지보수, 지문인식기 등)은 정보보안 서류와 개인정보 위탁 서류를 모두 징구해야 합니다.",
      formId: "form-sec-7"
    }
  ],

  // 제1장 ~ 제4장 실무 매뉴얼 상세 콘텐츠
  chapters: [
    {
      id: "ch1-1",
      part: "제1장 정보보안",
      title: "Ⅰ. 정보보안 기본활동",
      pages: "p.3 ~ p.5 (PDF 11~13쪽)",
      summary: "지도·감독 체계, 정보보안담당관 지정, 교육 이수(전직원 연 1회 / 담당자 15시간), 사이버보안진단의 날(내PC지키미), 전산실 통제구역 관리",
      sections: [
        {
          heading: "1. 정보보안 지도·감독 체계 및 정보보안담당관 지정",
          content: `
            <ul class="manual-list">
              <li><strong>도교육청 감독 대상:</strong> 직속기관, 교육지원청, 고등학교, 특수학교, 평생교육시설, 각종학교</li>
              <li><strong>교육지원청 감독 대상:</strong> 소속기관, 유치원, 초등학교, 중학교, 각종학교</li>
              <li><strong>정보보안담당관 지정:</strong> 각급학교는 <strong>정보부장</strong>(정보부장이 없는 학교는 학교장이 지정한 자), 교육지원청 소속기관은 보안담당관이 겸임</li>
              <li><strong>지정(변경) 시 조치:</strong> 매년 3월(또는 인사발령 시) <code>[정보보안 별지 2]</code> 서식으로 정보보안담당관 및 통제구역 출입인가자 지정 <strong>내부결재</strong> 등록</li>
            </ul>
          `
        },
        {
          heading: "2. 정보보안 교육 실시 기준",
          content: `
            <div class="info-grid">
              <div class="info-card">
                <h4>교직원 전체 교육 (연 1회 이상)</h4>
                <p>자체 정보보안·개인정보보호·SW 교육계획을 수립하여 연 1회 이상 전 직원 대상 실시 후 <strong>교육계획·등록부·사진을 포함하여 내부결재</strong> 등록</p>
                <p class="muted">* 교육자료: 통합정보관리시스템(TIMS) - 정보보호서식 - 학교업무공유 참조</p>
              </div>
              <div class="info-card">
                <h4>정보보안 담당자 교육 (연간 15시간 이상)</h4>
                <p>정보보안 담당자는 연간 <strong>15시간 이상</strong> 정보보안 교육(개인정보보호 교육 포함) 필수 이수</p>
                <p class="muted">* 교육부 정보보호 교육센터(<code>https://sec.keris.or.kr</code>) 또는 전라남도교육연수포털(<code>https://www.jnstudy.kr</code>)</p>
              </div>
            </div>
          `
        },
        {
          heading: "3. 「사이버보안진단의 날」 및 내PC지키미 관리",
          content: `
            <ul class="manual-list">
              <li><strong>일시:</strong> <strong>매월 세 번째 수요일</strong> (공휴일인 경우 다음날)</li>
              <li><strong>주요 이행사항:</strong> 업무용 PC 전체 「내PC지키미」 실행 및 발견된 취약점 개선(<strong>100점 조치</strong>)</li>
              <li><strong>관리자 페이지 접속:</strong> <code>https://172.16.100.30/mc</code>
                <br>• 관리자 ID: <strong>업무포털 기관마스터ID</strong> / 초기비밀번호: <strong>기관마스터ID!</strong> (예: <code>jn000000!</code>)
              </li>
              <li><strong>내PC지키미 미점검자·취약자 메시지 전송 절차 (8단계):</strong>
                <div class="step-flow">
                  <span>① 보안점검</span> → <span>② 개인별점검결과(월별)</span> → <span>③ 취약자선택</span> → <span>④ 작업선택</span> → <span>⑤ 메시지전송</span> → <span>⑥ 메시지 입력</span> → <span>⑦ PC점검창 실행</span> → <span>⑧ 보내기</span>
                </div>
              </li>
              <li><strong>사용자 설치 경로:</strong> <code>http://a.jne.go.kr</code> 접속 → 해당지역 Agent 설치 (학교별 현원수만큼 설치 필요 / 관리예외 PC ID: <code>edu_청번호</code>)</li>
            </ul>
          `
        },
        {
          heading: "4. 정보통신시설(전산실·CCTV 상황실 등) 보호지역 관리",
          content: `
            <table class="manual-table">
              <thead>
                <tr><th>구분</th><th>내용</th><th>지정장소</th><th>표찰 규격 (출입문 중앙부 게시)</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>제한구역</strong></td>
                  <td>비인가자의 접근을 방지하기 위해 출입에 안내가 요구되는 구역</td>
                  <td>통신실, 전산실(관제실), CCTV 상황실</td>
                  <td>백색 바탕, 적색 사선 2줄, 흑색 문자<br><code>제한구역</code> (15cm×30cm)<br><code>관계직원외 출입을 금함</code> (10cm×30cm)</td>
                </tr>
                <tr>
                  <td><strong>통제구역</strong></td>
                  <td>비인가자의 출입이 금지되는 보안상 극히 중요한 구역</td>
                  <td>전산실(서버실), CCTV 상황실<br><small>* 방화벽 등 주요 정보통신장비 설치 장소</small></td>
                  <td>백색 바탕, 적색 사선 2줄, 흑색 문자<br><code>통제구역</code> (15cm×30cm)<br><code>비인가자는 출입을 금함</code> (10cm×30cm)</td>
                </tr>
              </tbody>
            </table>
            <p class="mt-2"><strong>필수 이행사항:</strong> 보호지역 관리책임자 표지(정/부, <code>3cm×9cm</code>) 부착, 상시 출입문 한 곳 지정 및 <strong>이중 잠금장치·출입문 보안장치</strong> 설치, 비인가자 출입 시 <code>[별지 1] 출입통제대장</code> 작성, 전산실 출입인가자 지정(<code>[별지 2]</code>)</p>
          `
        }
      ]
    },
    {
      id: "ch1-2",
      part: "제1장 정보보안",
      title: "Ⅱ. 정보시스템 보안",
      pages: "p.5 ~ p.9 (PDF 13~17쪽)",
      summary: "정보시스템 관리대장, PC·노트북 보안 및 필수 프로그램 4종, 공직자통합메일·생성형 AI 보안, 휴대용 저장매체 대장 3종, 저장매체 불용처리",
      sections: [
        {
          heading: "1. 정보시스템 관리대장 및 정보통신망 현황 관리",
          content: `
            <ul class="manual-list">
              <li><strong>대상 장비:</strong> PC, 노트북, 태블릿, 방화벽, 네트워크장비(스위치허브), 디지털복합기, 무선AP 등</li>
              <li><strong>정보시스템 관리대장 작성 (<code>[별지 3]</code>):</strong> 통합정보관리시스템(TIMS)을 활용하여 최종 현황 유지·관리
                <br>• <em>팁:</em> 도교육청 일괄 보급 태블릿은 개별 등록하지 않고 비고란에 도입 수량(예: 10대)을 기재하여 한 건으로 등재 가능
                <br>• 단말기(PC, 노트북, 스마트패드 등) 보안은 취급자가 일체 책임을 짐
              </li>
              <li><strong>정보통신망 현황 자료:</strong> 학내망 구성도, IP주소 할당현황 자료는 <strong>비공개 대상 정보</strong>로 지정·관리 (IP주소 현황은 정보시스템 관리대장에 포함 관리 가능)</li>
            </ul>
          `
        },
        {
          heading: "2. PC·노트북 보안관리 및 필수 설치 프로그램 4종",
          content: `
            <ul class="manual-list">
              <li><strong>비밀번호 3중 설정:</strong> ① 부팅(CMOS) 시, ② 윈도우 로그온 시, ③ 화면보호기(<strong>10분 이상 미사용 시</strong>)에 영문·숫자·특수문자 혼합 비밀번호 설정 및 <strong>분기 1회 이상</strong> 정기 변경</li>
              <li><strong>업무용 vs 교육용 PC 필수 설치 프로그램 비교 (다운로드: <code>http://a.jne.go.kr</code>):</strong></li>
            </ul>
            <table class="manual-table">
              <thead>
                <tr><th>구분</th><th>업무용 PC</th><th>교육용 PC</th><th>비고 (역할)</th></tr>
              </thead>
              <tbody>
                <tr><td>① 백신/패치</td><td>백신(알약) 및 패치관리시스템(PMS)</td><td>백신(알약) 및 패치관리시스템(PMS)</td><td>윈도우, 한글 등 보안패치 적용 (알약 콜센터: 1544-9744)</td></tr>
                <tr><td>② 위협대응</td><td>지능형위협대응시스템(EDR)</td><td>지능형위협대응시스템(EDR)</td><td>랜섬웨어 등 악성코드 탐지</td></tr>
                <tr><td>③ 보안진단/차단</td><td><strong>내PC지키미</strong></td><td><strong>유해차단 PC가드</strong></td><td>업무용은 월례 보안진단 / 교육용은 유해 동영상 실행 차단</td></tr>
                <tr><td>④ 개인정보보호</td><td><strong>개인정보 DRM (MarkAny)</strong></td><td>-</td><td>개인정보(주민등록번호) 저장 시 자동 암호화</td></tr>
              </tbody>
            </table>
          `
        },
        {
          heading: "3. 전자우편, 모바일 메신저 및 생성형 AI(ChatGPT, Gemini 등) 보안",
          content: `
            <div class="info-grid">
              <div class="info-card">
                <h4>전자우편 보안 (공직자통합메일 필수)</h4>
                <p>• 업무자료 소통은 반드시 <strong>공직자통합메일(<code>mail.korea.kr</code>)</strong>만 사용</p>
                <p>• <strong>K-에듀파인 공문서 상용메일 기재 금지!</strong><br>경로: <code>K-에듀파인 > 개인설정 > 개인정보관리 > 이메일</code>을 공직자통합메일로 수정</p>
              </div>
              <div class="info-card">
                <h4>모바일 메신저 & 생성형 AI 주의사항</h4>
                <p>• 카카오톡·밴드 등 상용 메신저/SNS로 업무 소통 금지</p>
                <p>• ChatGPT, Gemini 등 생성형 AI에 <strong>비공개 정보·개인정보 등 민감정보 입력 절대 금지</strong></p>
                <p>• AI 보안 설정에서 <strong>'입력데이터를 AI 성능개선·학습데이터로 활용 차단'</strong> 설정 및 계정 보안 강화</p>
              </div>
            </div>
          `
        },
        {
          heading: "4. 휴대용 저장매체 보안관리 (대장 3종) 및 저장매체 불용처리",
          content: `
            <ul class="manual-list">
              <li><strong>휴대용 저장매체 관리자:</strong> 각 부서의 장 (교감, 행정실장 등)</li>
              <li><strong>필수 대장 3종:</strong>
                <br>① <code>[별지 4-1] 휴대용 저장매체 관리대장</code>: USB(성적처리용 USB 포함), 외장HDD 등 등록 및 라벨 부착 (HDD: 2.5cm×5cm / USB·CD: 1cm×3cm)
                <br>② <code>[별지 4-2] 휴대용 저장매체 점검대장</code>: <strong>월 1회</strong> 수량 및 보관상태 점검
                <br>③ <code>[별지 4-3] 휴대용 저장매체(전산장비 포함) 반출·입 대장</code>: USB, 외장HDD, 노트북, 태블릿 외부 반출·입 및 교원 연구용 장기대여 시 기록
              </li>
              <li><strong>저장매체 불용처리 절차 (교육지원청 삭제 장비 이용 시):</strong>
                <div class="step-flow">
                  <span>① 학교 → 교육지원청 공문 신청 (<code>[별지 5]</code>)</span> → <span>② 저장매체 송부 및 협의</span> → <span>③ 교육지원청 저장자료 완전 삭제</span> → <span>④ 삭제 확인 공문 발송 및 보관</span>
                </div>
                <small>* 수리를 위해 외부 반출 시에는 업체로부터 <code>[별지 7] 보안서약서</code> 징구</small>
              </li>
            </ul>
          `
        }
      ]
    },
    {
      id: "ch1-3",
      part: "제1장 정보보안",
      title: "Ⅲ. 주요 상황별 보안대책 & Ⅳ. 사이버침해사고 대응",
      pages: "p.9 ~ p.12 (PDF 17~20쪽)",
      summary: "무선랜(SSID 구분), 디지털복합기 보안, 학내망 장비 구성, 정보화 용역사업 구비 서류, 보안성 검토, 침해사고 신고(061-260-5635)",
      sections: [
        {
          heading: "1. 무선랜 및 디지털복합기 보안관리",
          content: `
            <ul class="manual-list">
              <li><strong>학교 무선랜 보안:</strong> 유선망(업무망, 교육망)과 분리 구축, 학교 자체 무선AP 도입 시 교육지원청 사전 협의 필수
                <br>• 교원/학생 단말기: <code>jnedu_5G</code> (수업용 태블릿 권장), <code>jnedu_2.4G</code>, <code>jnedu_g</code>
                <br>• IoT기기(스마트TV, 로봇 등) 전용 SSID: <strong><code>AI_xx</code> (xx는 지역청 번호, 2.4G 전용)</strong>
              </li>
              <li><strong>디지털복합기 보안관리:</strong>
                <br>• 저장매체 내장/장착 복합기 도입 시 <strong>자료 완전삭제 또는 디스크 암호화 기능 탑재(CC인증 제품)</strong> 도입 및 <code>정보시스템 관리대장</code>에 등록
                <br>• 암호화 저장 설정, 정기적 작업내용 완전 삭제, 공유저장소 제한, 고정 IP 설정, <strong>불필요 서비스(USB출력, Wi-Fi, 블루투스, 이메일 발송 등) 금지</strong>, 기본(default) 비밀번호 변경
                <br>• 폐기·양여·임대반납·교체 시 저장매체 완전 삭제(불용처리 절차 준수)
              </li>
            </ul>
          `
        },
        {
          heading: "2. 학내망 구성 및 장비 관리 유의사항",
          content: `
            <ul class="manual-list">
              <li><strong>학내망 분리:</strong> 유선망(업무망, 학생망), 무선망, 전화망으로 분리 구성</li>
              <li><strong>방화벽 재부팅 주의:</strong> 정전 등 장애 발생으로 방화벽(NGF 800ED, TG 200E 등)을 재부팅할 경우 <strong>최소 20분 이상 소요</strong>됨을 숙지</li>
            </ul>
          `
        },
        {
          heading: "3. 정보화 용역사업 보안관리 및 구비(징구) 서류",
          content: `
            <table class="manual-table">
              <thead>
                <tr><th>구분</th><th>개인정보를 처리하지 않는 정보화 사업</th><th>개인정보를 처리하는 정보화 사업</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>대상 사업 예시</strong></td>
                  <td>학내전산망(네트워크) 유지관리 등</td>
                  <td>PC 유지관리, 지문인식기 도입/유지관리, 홈페이지/학사시스템 등</td>
                </tr>
                <tr>
                  <td><strong>필수 징구 서류</strong></td>
                  <td>
                    • <strong>보안서약서</strong> (대표자, 참여인력) <code>[정보보안 별지 7]</code><br>
                    • <strong>보안확약서</strong> (대표자 - 완료 시) <code>[정보보안 별지 8]</code><br>
                    • <strong>보안 관련 교육일지</strong> <code>[정보보안 별지 9]</code>
                  </td>
                  <td>
                    • <strong>보안서약서</strong> (대표자, 참여인력) <code>[정보보안 별지 7]</code><br>
                    • <strong>보안확약서</strong> (대표자 - 완료 시) <code>[정보보안 별지 8]</code><br>
                    • <strong>표준 개인정보처리 위탁 계약서</strong> <code>[개인정보 별지 5]</code><br>
                    • <strong>보안 및 개인정보보호 수탁자 교육자료/일지</strong> <code>[개인정보 별지 6]</code><br>
                    • <strong>수탁자 개인정보 파기 확인서</strong> (완료 시) <code>[개인정보 별지 7]</code>
                  </td>
                </tr>
              </tbody>
            </table>
            <p class="mt-2"><strong>보안성 검토:</strong> 정보화 사업 추진(계획) 시 <strong>사업 공고 전</strong> 교육지원청(유·초·중·도서관) 또는 도교육청 글로컬미래교육과(직·고·특)에 사전협의 및 보안성 검토 의뢰</p>
          `
        },
        {
          heading: "4. 사이버침해사고 발생 시 대응 절차",
          content: `
            <div class="step-flow">
              <span><strong>① 초동조치 (학교/기관)</strong><br>침해사고 신고(관제센터 ☎061-260-5635), 증적자료 보존, 확산방지 조치 (유·초·중은 교육지원청 경유)</span> →
              <span><strong>② 대응조치 (통합보안관제센터·학교)</strong><br>침해사고 조사 실시 및 시스템 복구</span> →
              <span><strong>③ 후속조치 (통합보안관제센터·학교)</strong><br>결과종합 및 보고, 재발방지 대책 수립</span>
            </div>
          `
        }
      ]
    },
    {
      id: "ch2-1",
      part: "제2장 개인정보 보호",
      title: "Ⅰ. 개인정보 보호 개요 & Ⅱ. 처리 단계별 이행사항",
      pages: "p.29 ~ p.31 (PDF 37~39쪽)",
      summary: "관련 법령, 개인정보·가명정보 개념, 담당자 역할(CPO 교장), 5단계(수집·저장·제공·위탁·파기) 핵심 의무",
      sections: [
        {
          heading: "1. 개인정보 보호 조직 및 기본 활동",
          content: `
            <table class="manual-table">
              <thead>
                <tr><th>구분</th><th>담당자</th><th>주요 역할</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>개인정보 보호책임자 (CPO)</strong></td><td>교(원)장</td><td>개인정보 보호 업무 총괄 (종합지원시스템 등록 시 상위기관 승인)</td></tr>
                <tr><td><strong>개인정보 보호담당자 (총괄관리자)</strong></td><td>CPO가 지정한 자</td><td>개인정보 보호책임자가 위임한 업무 수행</td></tr>
                <tr><td><strong>개인정보취급자</strong></td><td>업무담당자 (전 교직원)</td><td>업무수행을 위해 개인정보를 취급하는 자 (민원/CCTV/생기부 담당 등)</td></tr>
              </tbody>
            </table>
            <ul class="manual-list mt-2">
              <li><strong>내부 관리계획 수립(<code>[별지 1]</code>):</strong> 도교육청 내부 관리계획 변경 시 학교 계획 개정(내부결재)</li>
              <li><strong>개인정보 처리방침 수립·공개(<code>[별지 2]</code>):</strong> 내부결재 후 <strong>학교 홈페이지 메인화면 하단</strong>에 공개 및 변경 이력 관리</li>
              <li><strong>개인정보파일 등록:</strong> 보유 중인 개인정보파일은 개인정보보호 종합지원시스템(<code>https://intra.privacy.go.kr</code>)에 등록·관리</li>
            </ul>
          `
        },
        {
          heading: "2. 개인정보 처리 5단계별 핵심 이행사항",
          content: `
            <div class="step-flow">
              <span><strong>① 수집·이용</strong><br>최소 수집 원칙, 만 14세 미만 법정대리인 동의, 민감·고유식별정보 제한, 주민번호 법정주의</span> →
              <span><strong>② 저장·관리</strong><br>CPO 지정, 처리방침 공개, 암호화 등 안전조치, 내부관리계획, 파일 등록, CCTV 운영</span> →
              <span><strong>③ 제공</strong><br>정보주체 동의(5대 고지), 목적 외 제공 제한(홈페이지 공개 및 제3자 제공 대장 작성)</span> →
              <span><strong>④ 위탁</strong><br>표준 위탁계약서 작성, 수탁자 교육 및 관리·감독, 위탁내역 홈페이지 공개</span> →
              <span><strong>⑤ 파기</strong><br>목적 달성 시 5일 이내 영구 삭제, 파기계획 및 파기관리대장 작성</span>
            </div>
          `
        }
      ]
    },
    {
      id: "ch2-3",
      part: "제2장 개인정보 보호",
      title: "Ⅲ. 개인정보 수집·이용 (동의·민감정보·주민번호 제한)",
      pages: "p.32 ~ p.34 (PDF 40~42쪽)",
      summary: "필수 고지항목 4가지, 중요 내용 강조 표기, 법령 근거 무동의 수집 예시, 민감정보 vs 고유식별정보, 주민등록번호 법정주의",
      sections: [
        {
          heading: "1. 정보주체 동의 시 필수 고지항목 (4가지) 및 중요 내용 표기법",
          content: `
            <div class="info-grid">
              <div class="info-card">
                <h4>필수 고지항목 4가지 (위반 시 1천만원 이하 과태료)</h4>
                <ol>
                  <li>개인정보 <strong>수집·이용 목적</strong></li>
                  <li>수집하려는 <strong>개인정보의 항목</strong> (필수/선택항목 구분)</li>
                  <li>개인정보 <strong>보유 및 이용기간</strong></li>
                  <li><strong>동의를 거부할 권리</strong>가 있다는 사실 및 동의 거부에 따른 <strong>불이익 내용</strong></li>
                </ol>
              </div>
              <div class="info-card">
                <h4>중요 내용 알아보기 쉽게 표기 (색깔·굵기·밑줄·크기)</h4>
                <p>• <strong>항목:</strong> 민감정보, 여권번호, 운전면허번호, 외국인등록번호</p>
                <p>• <strong>목적:</strong> 홍보 및 판매권유 목적 연락</p>
                <p>• <strong>기간:</strong> 보유 및 이용기간</p>
                <p>• <strong>제3자 제공 시:</strong> 제공받는 자, 제공받는 자의 이용목적, 보유 및 이용기간</p>
              </div>
            </div>
            <p class="mt-2">※ <strong>만 14세 미만 아동</strong>은 반드시 법정대리인(보호자)의 동의를 받아야 하며, 학생 개인정보 일괄 동의 시에도 업무별(목적별)·시기별로 구분하여 동의를 받아야 합니다.</p>
          `
        },
        {
          heading: "2. 정보주체 동의 없이 수집·처리할 수 있는 경우 (법령 근거 예시)",
          content: `
            <ul class="manual-list">
              <li><strong>법률에 특별한 규정이 있거나 법령상 의무 준수:</strong>
                <br>• 학교생활기록부, 학생건강기록부 (초·중등교육법, 학교보건법)
                <br>• 결석신고서 (교육기본법 제23조의3, 초·중등교육법 제25조, 제30조의4)
                <br>• 취학 전 예방접종 및 건강정보조사서 (학교보건법 제7조, 감염병예방법 제31조)
                <br>• 학교폭력사고발생 확인서 (학교안전사고 예방 및 보상에 관한 법률 시행규칙 제9조의3)
                <br>• 학교발전기금기탁서 (초·중등교육법 제33조 및 시행령 제64조, 시행규칙 제52조)
              </li>
              <li><strong>정보주체와의 계약 체결 및 이행:</strong> 기간제 교원·강사·비공무원 채용 시 인사기록, 학교 시설 사용 신청서 등
                <br><strong class="text-danger">※ 주의:</strong> 교직원 채용 응시원서에 법적 근거 없는 주민등록번호(등본 포함), 출생지, 등록기준지, 가족 학력·직장 등을 수집하면 감사 지적!
              </li>
            </ul>
          `
        },
        {
          heading: "3. 민감정보 vs 고유식별정보 및 주민등록번호 법정주의",
          content: `
            <table class="manual-table">
              <thead>
                <tr><th>구분</th><th>해당 정보</th><th>처리 기준</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>민감정보</strong></td>
                  <td>사상·신념, 노조·정당 가입·탈퇴, <strong>건강</strong>, 성생활, 유전정보, 범죄경력자료, <strong>생체인식정보(지문·홍채 등)</strong></td>
                  <td>원칙적 금지 / <strong>별도 동의</strong>를 받거나 법령(학교보건법 등)에서 허용한 경우 가능 (암호화 필수)</td>
                </tr>
                <tr>
                  <td><strong>고유식별정보</strong> (주민번호 외)</td>
                  <td>여권번호, 운전면허번호, 외국인등록번호</td>
                  <td>원칙적 금지 / <strong>별도 동의</strong>를 받거나 법령에서 허용한 경우 가능 (암호화 필수)</td>
                </tr>
                <tr>
                  <td><strong>주민등록번호</strong></td>
                  <td>주민등록번호</td>
                  <td><strong>동의에 의한 처리 절대 불가 (법정주의)!</strong><br>법률·대통령령(초·중등교육법 시행령 생기부·교육비 지원 등)에 구체적 근거가 있거나 급박한 생명·신체·재산 이익 보호 시에만 가능.<br><span class="text-danger">* 법령 근거 외 수집·보유 또는 유출 시: 5년 이하 징역 또는 5천만원 이하 벌금</span></td>
                </tr>
              </tbody>
            </table>
          `
        }
      ]
    },
    {
      id: "ch2-4",
      part: "제2장 개인정보 보호",
      title: "Ⅳ. 개인정보 저장·관리 (K-에듀파인·홈페이지·PC 보안)",
      pages: "p.35 ~ p.36 (PDF 43~44쪽)",
      summary: "암호화 대상, 서약서 징구, 홈페이지 노출 예방(엑셀 차단), K-에듀파인 비공개(6호)+직원열람제한(영구) 설정 및 전년도 문서 수정",
      sections: [
        {
          heading: "1. K-에듀파인 개인정보 포함 공문서 보안 설정 (감사 최다 지적!)",
          content: `
            <div class="alert-box danger">
              <strong>🚨 감사 최다 지적 사례: 대국민 공개여부만 '비공개'로 설정하고 '직원열람제한'을 미설정한 경우!</strong>
              <p>개인정보(고유식별정보, 주민등록번호, 신용카드번호, 계좌번호, 민감정보 등)가 포함된 공문서는 반드시 아래 2가지를 동시에 설정해야 합니다.</p>
              <ul>
                <li><strong>대국민 공개여부:</strong> <code>비공개 (6호)</code> 체크</li>
                <li><strong>학교내 직원열람제한:</strong> <code>영구</code> (또는 지정날짜) 선택</li>
                <li><strong>제목·첨부파일명·수신자·본문 주의:</strong> 공문 제목이나 첨부파일명, 수신자란에 성명 등 개인정보 기재 금지. 부분공개 시 본문(기안문)은 원문 공개되므로 개인정보는 반드시 <strong>첨부 문서</strong>에 기재하고 비공개(6호) 설정!</li>
              </ul>
            </div>
            <p class="mt-2"><strong>기결 문서 사후 수정 방법:</strong> <code>문서등록대장 → 문서선택 → 수정 → 대국민공개여부/직원열람제한 변경 → 저장</code> (기안자, 처리과문서담당자만 수정 가능 / <strong>전년도 결재 문서는 당해년도 5월까지만 수정 가능, 이후 수정 불가!</strong>)</p>
          `
        },
        {
          heading: "2. 홈페이지 개인정보 노출 방지 및 PC 내 파일 관리",
          content: `
            <ul class="manual-list">
              <li><strong>홈페이지 게시 주의:</strong> 게시 전 개인정보(연락처, 계좌번호 등) 포함 여부 철저 검사, 사진·동영상 탑재 시 <strong>수집·이용 동의 및 제3자 제공 동의</strong> 모두 필요</li>
              <li><strong>홈페이지 엑셀파일 탑재 차단:</strong> 엑셀 취약점(외부링크 연결 등)으로 인한 개인정보 노출 예방을 위해 학교 홈페이지에 <strong>엑셀(.xls, .xlsx) 탑재 차단</strong> → 한글(HWP) 또는 <strong>PDF로 변환</strong>하여 탑재</li>
              <li><strong>PC 내 개인정보 파일:</strong> 공문 기안용으로 작성한 개인정보 파일은 <strong>공문 첨부(기안) 후 PC에서 즉시 삭제</strong>! 부득이 보관 시 내부결재 후 MarkAny DRM으로 암호화 보관</li>
            </ul>
          `
        }
      ]
    },
    {
      id: "ch2-5",
      part: "제2장 개인정보 보호",
      title: "Ⅴ. 개인정보 제3자 제공 & Ⅵ. 개인정보 처리 위탁",
      pages: "p.37 ~ p.40 (PDF 45~48쪽)",
      summary: "목적 내 vs 목적 외 제3자 제공, 회신 공문 문안 예시, 홈페이지 공개, 위탁 계약 전·중·후 절차, 제공 vs 위탁 비교표",
      sections: [
        {
          heading: "1. 목적 외 제3자 제공 4단계 절차 및 회신 공문 문안",
          content: `
            <div class="step-flow">
              <span><strong>① 제공요청 접수</strong><br>요청 목적 및 법률 근거를 명시한 공문 접수</span> →
              <span><strong>② 타당성 검토</strong><br>법률 근거와 이용 목적 정당성 검토</span> →
              <span><strong>③ 안전한 제공</strong><br>파일 암호화 및 공문에 안전성 확보조치 문구 명시</span> →
              <span><strong>④ 홈페이지 공개 & 대장 기록</strong><br>제공 후 30일 이내 10일 이상 홈페이지 게재(별도 동의·범죄수사 제외) 및 <code>[별지 4]</code> 대장 작성</span>
            </div>
            <div class="code-copy-box mt-2">
              <strong>📋 목적 외 제3자 제공 시 공문 회신 필수 문안 (클릭하여 복사 가능):</strong>
              <pre id="third-party-reply-text">- 요청 목적 외의 용도로 이용하거나, 정보주체의 동의 없이 다른 기관에 재제공하는 행위는 금지됩니다.
- 개인정보를 제공받은 목적이 달성된 후에는 반드시 완전 파기하는 등 개인정보 보호법에 따라 안전성 확보를 위한 조치를 해주시기 바랍니다.</pre>
            </div>
          `
        },
        {
          heading: "2. 개인정보 제3자 제공 vs 개인정보 처리 위탁 완벽 비교 (p.40)",
          content: `
            <table class="manual-table">
              <thead>
                <tr><th>구분</th><th>제3자 제공 (목적 내)</th><th>제3자 제공 (목적 외)</th><th>개인정보 처리 위탁</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>목적</strong></td><td colspan="2">제공받는 자(제3자)의 목적 달성을 위해</td><td>위탁하는 자(<strong>학교</strong>)의 목적 달성을 위해</td></tr>
                <tr><td><strong>형식</strong></td><td colspan="2">공문으로 요청받아 공문으로 제공</td><td><strong>표준 개인정보처리 위탁 계약서(<code>[별지 5]</code>)</strong> 작성</td></tr>
                <tr><td><strong>동의 여부</strong></td><td>동의(5대 고지) 또는 법령 근거</td><td>별도 동의 또는 법률 근거</td><td><strong>위탁 동의 필요 없음</strong> (단, 홈페이지 공개 필수)</td></tr>
                <tr><td><strong>관리·감독</strong></td><td colspan="2">안전성 확보조치 마련을 공문으로 요청</td><td><strong>수탁자 교육(<code>[별지 6]</code>) 및 관리·감독, 종료 시 파기확인서(<code>[별지 7]</code>)</strong></td></tr>
                <tr><td><strong>홈페이지 공개</strong></td><td>해당 없음</td><td><strong>제공 후 30일 이내 10일 이상 공개</strong><br><small>(별도 동의 및 범죄수사 목적은 제외)</small></td><td><strong>홈페이지(처리방침)에 위탁업무·수탁자 지속 공개</strong></td></tr>
                <tr><td><strong>대장 작성</strong></td><td>해당 없음</td><td><strong>목적 외 이용 및 제3자 제공 대장(<code>[별지 4]</code>)</strong></td><td>해당 없음 (계약서·교육자료·파기확인서 보관)</td></tr>
                <tr><td><strong>손해배상 책임</strong></td><td colspan="2">제공받는 자 (제3자)</td><td><strong>위탁자 (학교 - 수탁자를 소속 직원으로 봄)</strong></td></tr>
                <tr><td><strong>학교 주요 사례</strong></td><td>• 단체여행 여행자보험 가입(학교 직접)<br>• 장학금 대상자 명단 추천</td><td>• 경찰서·세무서 등에 학생/교직원 정보 제공<br>• 감사요구자료, 국회요구자료 제출</td><td>• 여행사 대행 현장체험학습<br>• PC 유지관리, 무인경비(CCTV·지문인식)<br>• 학생증·졸업앨범·홍보영상 외주 제작<br>• 방과후 강사 계약, 알리미앱(e알리미, 학교종이)<br>• 외부 지능·적성검사, 에듀택시, 방학중 우유급식</td></tr>
              </tbody>
            </table>
          `
        }
      ]
    },
    {
      id: "ch2-8",
      part: "제2장 개인정보 보호",
      title: "Ⅶ. 개인정보 파기 & Ⅷ. 개인정보파일 등록(일제정비)",
      pages: "p.41 ~ p.44 (PDF 49~52쪽)",
      summary: "5일 이내 파기 원칙, 개인정보보호 종합지원시스템 파기 절차, 학교 개인정보파일 표준목록 17종, MarkAny(Privacy SAFER) 수동검사 및 삭제",
      sections: [
        {
          heading: "1. 개인정보 파기 원칙 및 절차",
          content: `
            <ul class="manual-list">
              <li><strong>파기 시기:</strong> 보유기간 경과, 처리목적 달성 등 불필요하게 되었을 때 <strong>지체 없이(5일 이내)</strong> 복원 불가능한 방법으로 파기 (서면은 파쇄·소각, 전자파일은 영구삭제)</li>
              <li><strong>종합지원시스템 등재 개인정보파일 파기 절차:</strong>
                <div class="step-flow">
                  <span>① 파기요청서 작성 (내부결재 <code>[별지 8]</code>)</span> →
                  <span>② 종합지원시스템에서 파기 요청 (학교)</span> →
                  <span>③ 파기 승인 (교육지원청/도교육청)</span> →
                  <span>④ 개인정보파일 파기 관리대장 작성 (학교 <code>[별지 9]</code>)</span>
                </div>
              </li>
              <li><strong>일반 개인정보 파기 예시:</strong> 홈페이지 졸업생 회원정보, 지문인식시스템 전출·퇴직자 정보 등 → <code>[별지 8] 파기 요청서</code> 및 <code>[별지 9] 파기 관리대장</code> 작성</li>
            </ul>
          `
        },
        {
          heading: "2. 학교 개인정보파일 표준목록 (17종 - p.42)",
          content: `
            <p>학교에서 보유 중인 개인정보파일은 개인정보보호 종합지원시스템(<code>https://intra.privacy.go.kr</code>)에 등록·관리하며, 취급자·정보주체건수 변경 시 변경 신청 후 <code>[별지 3] 개인정보파일대장</code>을 엑셀로 출력하여 보관합니다.</p>
            <table class="manual-table">
              <thead>
                <tr><th>연번</th><th>업무분야</th><th>개인정보파일명</th><th>연번</th><th>업무분야</th><th>개인정보파일명</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>교무</td><td>학교생활기록부</td><td>10</td><td>체육</td><td>학교운동부관리</td></tr>
                <tr><td>2</td><td>학부모서비스</td><td>학부모서비스신청자명단</td><td>11</td><td>인사</td><td>초등교원인사</td></tr>
                <tr><td>3</td><td>보건</td><td>학생건강기록부관리</td><td>12</td><td>인사</td><td>중등교원인사</td></tr>
                <tr><td>4</td><td>발전기금</td><td>발전기금기탁자관리</td><td>13</td><td>인사</td><td>지방공무원인사</td></tr>
                <tr><td>5</td><td>홈페이지</td><td>홈페이지회원정보</td><td>14</td><td>인사</td><td>교육공무직등인사</td></tr>
                <tr><td>6</td><td>민원</td><td>민원처리부</td><td>15</td><td>내부행정</td><td>공무원급여정보</td></tr>
                <tr><td>7</td><td>위원회</td><td>학교운영위원회 명부</td><td>16</td><td>내부행정</td><td>교육공무직등급여정보</td></tr>
                <tr><td>8</td><td>회계</td><td>스쿨뱅킹(CMS)정보</td><td>17</td><td>내부행정</td><td>직원비상연락망</td></tr>
                <tr><td>9</td><td>도서관</td><td>도서관대출관리</td><td>-</td><td>-</td><td>-</td></tr>
              </tbody>
            </table>
          `
        },
        {
          heading: "3. 개인정보 감사 솔루션(MarkAny / Privacy SAFER) 설치 및 수동검사 방법",
          content: `
            <ul class="manual-list">
              <li><strong>설치 방법:</strong> K-에듀파인 우측 <code>Quick Link > DRM설치파일</code> 다운로드</li>
              <li><strong>암호화 해제 방법:</strong> 암호화된 파일 마우스 우클릭 → <code>추가 옵션 표시 > 암호화 파일 관리툴 > 암호화 해제</code></li>
              <li><strong>PC 내 개인정보(주민등록번호) 수동검사 및 삭제:</strong>
                <div class="step-flow">
                  <span>① 작업표시줄 트레이 <code>Keris DRM Agent</code> 우클릭 → <code>개인정보 수동검사</code></span> →
                  <span>② <code>[검사]</code> 탭 → 전체드라이브 선택 → <code>검사 시작</code></span> →
                  <span>③ <code>[검사결과]</code> 탭 → 갱신 → 더블클릭하여 검출 현황 확인</span> →
                  <span>④ <code>[개인정보현황]</code> 탭 → 상세정보 → 갱신 → 불필요 파일 선택 후 <code>삭제(완전삭제)</code></span>
                </div>
              </li>
            </ul>
          `
        }
      ]
    },
    {
      id: "ch2-11",
      part: "제2장 개인정보 보호",
      title: "Ⅸ. 권리보장 · Ⅹ. 유출사고 대응 · Ⅺ. CCTV 설치·운영",
      pages: "p.45 ~ p.48 (PDF 53~56쪽)",
      summary: "열람·정정·삭제 요구(10일 이내), 개인정보 유출 72시간 이내 통지·신고 기준, 고정형·이동형 영상정보처리기기(CCTV) 운영 및 30일 주기 파기 기록",
      sections: [
        {
          heading: "1. 정보주체 권리보장 및 개인정보 유출사고 대응 (72시간 골든타임!)",
          content: `
            <ul class="manual-list">
              <li><strong>열람·정정·삭제·처리정지 요구:</strong> 요구받은 날로부터 <strong>10일 이내</strong> 조치. 열람창구에 <code>개인정보파일대장</code> 및 민원용 서식(요구서, 위임장) 비치</li>
              <li><strong>개인정보 유출 시 정보주체 통지 (72시간 이내, 1명 이상 유출 시):</strong>
                <br>• <strong>5대 필수 통지항목:</strong> ① 유출된 개인정보 항목, ② 유출 시점과 경위, ③ 피해 최소화를 위해 정보주체가 할 수 있는 방법, ④ 개인정보처리자의 대응조치 및 피해구제 절차, ⑤ 피해 신고·상담 부서 및 연락처
              </li>
              <li><strong>유출 신고 기준 (72시간 이내, 상급기관 경유):</strong></li>
            </ul>
            <table class="manual-table">
              <thead>
                <tr><th>신고처</th><th>신고 대상 기준</th><th>신고 시기 및 후속 보고</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>교육부</strong> (상급기관 경유)<br><code>privacy.moe.go.kr</code></td>
                  <td><strong>개인정보 1명 이상</strong> 유출 시 무조건 신고</td>
                  <td rowspan="2">• 유출 인지 후 <strong>72시간 이내</strong> 신고 (양식: 개인정보 유출등 신고서)<br>• 신고 후 <strong>1주일 이내</strong> 결과보고서 제출 (양식: 개인정보 유출등 신고 조치확인서)</td>
                </tr>
                <tr>
                  <td><strong>개인정보보호위원회 / KISA</strong><br><code>privacy.go.kr</code></td>
                  <td>① 개인정보 <strong>1천명 이상</strong> 유출<br>② <strong>민감정보·고유식별정보 1명(1건) 이상</strong> 유출<br>③ <strong>외부 불법적 접근(해킹 등)에 의한 1건 이상</strong> 유출</td>
                </tr>
              </tbody>
            </table>
          `
        },
        {
          heading: "2. 고정형·이동형 영상정보처리기기(CCTV) 설치·운영 및 열람 절차",
          content: `
            <ul class="manual-list">
              <li><strong>설치·운영 필수사항:</strong>
                <br>• 이해관계자 의견 수렴(학운위 심의, 설문조사 등) / 고등학교 CCTV 교체 시 <strong>TTA 인증제품</strong> 구입 및 자체 보안대책 수립
                <br>• <strong>CCTV 상황실 보호구역(제한·통제구역)</strong> 지정 및 접근통제
                <br>• <strong>안내판 필수 기재사항:</strong> 설치 목적 및 장소, 촬영 범위 및 시간, 관리책임자 연락처, (위탁 시) 수탁자 명칭 및 연락처(교육지원청 통합 유지관리 시 <code>○○교육지원청</code> 기재 가능)
                <br>• <strong>고정형 영상정보처리기기 운영·관리 방침(<code>[별지 10]</code>):</strong> 내부결재 후 홈페이지 공개, <strong>보유기간 30일 이내</strong> 지정 (개정 시 최소 7일 전 공지)
              </li>
              <li><strong>개인영상정보 관리대장(<code>[별지 11]</code>) 매월 기록:</strong>
                <br>• 열람·제공뿐만 아니라 <strong>30일 주기 자동 삭제 설정된 경우에도 매월 주기적 점검일시(사이버보안 진단의 날 등)에 파기 내역을 기록하고 교장 확인</strong> 필수!
                <br>• 열람·제공 시 제3자 영상은 모자이크/마스킹 처리 후 제공
              </li>
            </ul>
          `
        }
      ]
    },
    {
      id: "ch3-1",
      part: "제3장 기타 정보업무",
      title: "Ⅰ. 학교정보화지원센터·테크센터 & Ⅱ. 스쿨넷 & Ⅲ. 정품 SW",
      pages: "p.75 ~ p.78 (PDF 83~86쪽)",
      summary: "학교정보화지원센터(유선·PC) vs 테크센터(무선·디바이스), 스쿨넷 속도 및 유지보수 장비, 도교육청 일괄 보급 SW 3종 및 불법복제 주의 SW",
      sections: [
        {
          heading: "1. 학교정보화지원센터 vs 테크센터 및 장애 접수 절차",
          content: `
            <table class="manual-table">
              <thead>
                <tr><th>구분</th><th>학교정보화지원센터</th><th>테크센터</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>대상 학교</strong></td><td>유·초·중</td><td>유·초·중·고</td></tr>
                <tr><td><strong>지원 대상</strong></td><td>PC, 노트북, 네트워크(<strong>유선</strong>)</td><td>디지털 인프라 (디바이스·네트워크(<strong>무선</strong>))</td></tr>
                <tr><td><strong>주요 지원 내용</strong></td><td>• PC·노트북·유선망 장애 조치 및 OS 설치<br>• 부품 지원(SSD/HDD, 메모리, 파워, 랜카드 등)<br>• 소규모 케이블(1~2회선) 및 감사장 네트워크 설치<br>• 정보화기기 자원 파악 및 TIMS 대장 입력<br>• 신규교사 보안감사 1:1 컨설팅 및 교직원 연수 지원</td><td>• 무선망(PoE스위치, 무선AP) 정기 방문 진단·속도 측정<br>• 무선AP 재배치 등 환경 개선<br>• 디바이스 장애 시 통합콜센터(☎1566-6269) 접수 대행 및 1차/2차 장애처리 연계</td></tr>
              </tbody>
            </table>
          `
        },
        {
          heading: "2. 스쿨넷서비스 운영 (~2026. 12. 31.) 및 유지관리 대상 장비",
          content: `
            <ul class="manual-list">
              <li><strong>스쿨넷 콜센터:</strong> <code>061-260-5630</code> (교육연구정보원) / 통신망 이설 신청 시 <strong>최소 2주 이전</strong> 신청</li>
              <li><strong>학급 규모별 속도:</strong> 10G 무선망 청약교(2.5G/5G, LGU+) / 25학급 이상·교육지원청(1G, KT) / 7~24학급(400M) / 6학급 이하(200M) / 단설유치원·분교장(60M)</li>
              <li><strong>통신사(KT) 소유 무상 유지관리 장비 (물품등재 금지! 종료 후 반납 대상):</strong>
                <br>• 방화벽(씨큐아이 NGF 800ED), NAC센서 모듈(넷맨), L2보안스위치(파이오링크 CS2728G), 무선AP(대유플러스 DWA 168), L2스위치(대유플러스 DSW2828G)
              </li>
            </ul>
          `
        },
        {
          heading: "3. 정품 소프트웨어 일괄 보급 현황 및 불법복제 주의사항",
          content: `
            <table class="manual-table">
              <thead>
                <tr><th>구분</th><th>제품명 (구성내역)</th><th>사용기간</th><th>사용범위 및 주의사항</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>백신</strong></td><td>알약 5.0</td><td>2022. 1. 1. ~ 2026. 12. 31.</td><td rowspan="3">도교육청 및 산하기관(학교 포함) 전체<br><strong>※ 민간참여 컴퓨터실 제외</strong><br>* <code>[기타 별지 1] 소프트웨어 관리대장</code> 분기별 작성·보관 (TIMS 활용 가능, 설치현황표는 생략)</td></tr>
                <tr><td><strong>MS</strong></td><td>MS EES (윈도우 업그레이드, MS 오피스, Office 365 등)</td><td>2025. 6. 1. ~ 2026. 5. 31.</td></tr>
                <tr><td><strong>한글</strong></td><td>한컴오피스 2024 EDU (한글, 한PDF, 한컴 개인정보탐색기 등)</td><td>2026. 1. 1. ~ 2026. 12. 31.</td></tr>
              </tbody>
            </table>
            <div class="alert-box warning mt-2">
              <strong>⚠️ 불법 소프트웨어 단속 주의!</strong>
              <p>• <strong>알집, 알PDF, NesPDF, Ghost, Photoshop(포토샵), V3, 알툴즈</strong> 등은 개인에게만 무료이거나 상용 SW이므로 학교에서 별도 라이선스 증서 없이 설치하면 <strong>불법복제(저작권법 위반: 5년 이하 징역 또는 5천만원 이하 벌금 / 양벌규정 3천만원 이하 과태료)</strong>에 해당합니다!</p>
              <p>• 쿨메신저, PC키퍼 등 다수가 접속하는 프로그램 설치 시 PC용 OS(Windows 7/8/10/11) 사용 금지 (서버용 OS 구입 필수)</p>
            </div>
          `
        }
      ]
    },
    {
      id: "ch3-6",
      part: "제3장 기타 정보업무",
      title: "Ⅳ~Ⅹ. 홈페이지·EPKI 인증서·나이스·K-에듀파인·메신저·TIMS",
      pages: "p.79 ~ p.89 (PDF 87~97쪽)",
      summary: "EPKI 인증서 발급·갱신·폐지, 신규/겸임 직원 업무포털 권한 절차, 나이스(행공·결재선·EVPN·병설유치원), K-에듀파인(기관관리자·잠금해제), TIMS 활용",
      sections: [
        {
          heading: "1. 교육행정전자서명(EPKI) 인증서 발급 및 관리 (https://www.epki.go.kr)",
          content: `
            <ul class="manual-list">
              <li><strong>신청 수신처:</strong> 유·초·중·소속도서관 → <strong>교육지원청(행정지원과)</strong> / 직속기관·고·특·각종학교 → <strong>도교육청(글로컬미래교육과)</strong></li>
              <li><strong>기안 시 보안설정 필수:</strong> 인증서 신청 공문 기안 시 반드시 <strong>비공개(6항), 열람제한(영구)</strong> 설정! (임시비밀번호는 <strong>반드시 8자리 숫자</strong>만 기입, 영문자 불가)</li>
              <li><strong>인사이동 시:</strong> 도내 소속 학교 변경 시 인증서 재발급 불필요(기존 인증서 그대로 사용). 단, <strong>기관용 인증서</strong>는 담당자 변경 시 전임자 폐지(<code>[별지 2-1]</code>) 및 신임자 신규발급(<code>[별지 2-2]</code>) 신청</li>
              <li><strong>인증서 유효기간 및 갱신:</strong> 개인용 2년 3개월, 특수목적용 1년 3개월 (만료 90일 전부터 갱신 가능 / 키갱신 시 다른 매체에 백업된 인증서는 자동 폐지됨)</li>
            </ul>
          `
        },
        {
          heading: "2. 신규직원 및 타 기관(분교·유치원·순회교사) 사용자 업무포털 등록 절차",
          content: `
            <div class="step-flow">
              <span><strong>① NEIS 인사정보 등재</strong><br>기간제교사: 교감 / 공무직: 인사권한자 (소속 불일치 시 [연계재전송])</span> →
              <span><strong>② EPKI 인증서 발급</strong><br>공문 신청 → 참조번호/인가코드로 발급</span> →
              <span><strong>③ 사용자 등록</strong><br>업무포털 첫화면 [사용자 등록] (기존 NEIS 이력 시 기존 ID 사용)</span> →
              <span><strong>④ 권한 및 과제카드 부여</strong><br>나이스/에듀파인 권한 부여 + <strong>과제카드 담당자 등록</strong>(미등록 시 지출품의 세부항목 안 보임)</span> →
              <span><strong>⑤ 개인환경설정</strong><br>K-에듀파인 이메일(공직자통합메일), 결재직위명 설정</span>
            </div>
            <p class="mt-2"><strong>겸임 미처리 타 기관 사용자:</strong> NEIS <code>학교업무분장 > 발령전임시교원등록 > 사용자가져오기</code> / K-에듀파인 <code>서비스공통 > 조직및사용자 > (업무)사용자관리 > 사용자관리 > 자료권한 신청</code>(겸임 기관 승인)</p>
          `
        },
        {
          heading: "3. 나이스(NEIS) & K-에듀파인 핵심 권한 관리 팁",
          content: `
            <div class="info-grid">
              <div class="info-card">
                <h4>나이스(NEIS) 주요 권한 경로</h4>
                <p>• <strong>공통관리 권한 등록:</strong> 학교업무분장관리담당자 로그인 > 부서관리 > <code>[공통관리]</code> 생성 후 <code>[시스템관리, 업무승인관리, 학교업무분장]</code> 부여</p>
                <p>• <strong>행공(행정정보공동이용):</strong> <code>[공통관리]-[시스템관리]-[사용자관리]-[사용자 조회]</code> → '행공' 체크</p>
                <p>• <strong>결재선 사용자 순서 조정:</strong> <code>[공통관리]-[업무승인관리]-[결재경로관리]-[조직별 결재선 지정]</code></p>
                <p>• <strong>원격업무(EVPN) 승인자 지정:</strong> <code>[공통관리]-[업무승인관리]-[결재경로관리]-[결재선관리]-[권한조직]</code> → 문서명 'evpn사용자 접속승인요청' 조회 → 결재선명 'evpn승인' 등록 및 적용대상자 추가</p>
                <p>• <strong>병설유치원 행정실 직원 권한:</strong> ① 교육지원청 지방공무원 인사담당자가 병설유치원 겸임 처리 → ② 유치원 업무분장담당자가 권한 부여</p>
              </div>
              <div class="info-card">
                <h4>K-에듀파인 & 전남메신저 & TIMS 핵심 팁</h4>
                <p>• <strong>기관관리자(업무/재정) 지정:</strong> 기관인증서 로그인 > <code>서비스공통 > 권한관리 > 총괄/기관관리자그룹별담당자관리</code> → 행추가 → <strong>오른쪽에 내부결재 공문번호 반드시 입력 후 저장 (미입력 시 3일 후 자동 만료!)</strong></p>
                <p>• <strong>30일 장기미접속 잠금 해제:</strong> 기관관리자 로그인 > <code>서비스공통 > 조직및사용자 > (업무)사용자관리 > 계정잠금사용자관리</code> → <strong>잠금해제 처리한 당일에 반드시 접속해야 함(미접속 시 익일 재잠금)</strong></p>
                <p>• <strong>전남메신저 관리도구:</strong> 조직도 체크(V) 및 그룹 Drag&Drop 이동·겸직 처리 후 <strong>[조직도 적용] 클릭 시 서버에 익일 반영</strong></p>
                <p>• <strong>통합정보관리시스템(TIMS, <code>https://tims.jne.go.kr</code>):</strong> 학교관리자 ID는 <code>기관마스터ID+01</code>, 학교사용자 ID는 <code>기관마스터ID+02</code> (정보보호서식 80여종은 로그인 없이 다운로드 가능)</p>
              </div>
            </div>
          `
        }
      ]
    }
  ],

  // 별지 서식 및 기안문 템플릿 (총 26종 + 부록 교육 기안문 2종)
  forms: [
    // 정보보안 별지 1~9
    {
      id: "form-sec-1",
      category: "정보보안 서식",
      badge: "정보보안 별지 1",
      title: "출입통제대장",
      page: "p.15 (PDF 23쪽)",
      type: "ledger",
      when: "비인가자(유지보수 업체 등)가 제한구역·통제구역(전산실, CCTV 상황실) 출입 시",
      description: "전산실(서버실) 등 보호구역에 외부 유지보수 인력 등 비인가자가 출입할 때 출입·퇴실 시간과 입회자(담당 교직원)를 기록하는 대장입니다.",
      headers: ["년 월 일", "출입시간", "퇴실시간", "용무", "출입자 소속", "출입자 성명", "입회자 직급", "입회자 성명", "비고"],
      sampleRows: [
        ["2026. 1. 29.", "15:20", "15:50", "학내전산망 장비 유지관리", "(주)○○정보", "김기술", "교사", "{managerName}", ""],
        ["2026. 2. 5.", "10:05", "10:55", "노후스위치 교체 설치", "(주)○○네트워크", "박설치", "교사", "{managerName}", ""],
        ["2026. 3. 24.", "10:10", "11:40", "스쿨넷 전산장비 장애 처리", "KT 스쿨넷", "이점검", "교사", "{managerName}", ""]
      ]
    },
    {
      id: "form-sec-2",
      category: "정보보안 서식",
      badge: "정보보안 별지 2",
      title: "정보보안담당관 지정 및 통제구역 출입인가자 지정 기안문",
      page: "p.16 (PDF 24쪽)",
      type: "draft",
      when: "매년 3월 학기 초 또는 인사발령으로 담당자 변경 시 (내부결재, 비공개)",
      description: "학교 정보보안담당관(정보부장)과 전산실(서버실) 관리책임자 및 출입인가자를 지정하는 내부결재 기안문입니다.",
      securityConfig: "수신: 내부결재 / 공개여부: 비공개",
      draftTitle: "2026학년도 정보보안담당관 및 통제구역 출입 인가자 지정",
      draftBody: `1. 관련: 전라남도교육청 정보보안 기본지침 제5조(정보보안담당관 운영), 제84조(정보통신시설 보호대책)

2. 우리 학교 정보보안담당관 지정 및 전산실(서버실) 관리책임자 및 출입인가자를 지정하여 보안 관리에 만전을 기하고자 합니다.

  가. 정보보안담당관 지정
    - 구분: 정보보안담당관 / 직위(급): {managerRole} / 성명: {managerName}

  나. 전산실(서버실) 출입인가자 지정
    - 통제구역: 본관 전산실(서버실)
    - 관리책임자: {managerRole} {managerName}
    - 출입인가자 지정 내역
      1) 교장 {principalName} (학교 총괄)
      2) 행정실장 {adminHeadName} (보안담당관)
      3) 교감 {vicePrincipalName} (분임보안담당관)
      4) {managerRole} {managerName} (정보보안담당관)
      5) 주무관 ○○○ (보안담당자)
      6) 교무행정사 ○○○ (정보업무 지원)
  ※ 인사발령 또는 관련 업무 등 변경 시에는 업무분장에 따름.  끝.`
    },
    {
      id: "form-sec-3",
      category: "정보보안 서식",
      badge: "정보보안 별지 3",
      title: "정보시스템 관리대장",
      page: "p.17 (PDF 25쪽)",
      type: "ledger",
      when: "연중 상시 관리 (통합정보관리시스템 TIMS에서 자동 작성·출력 가능)",
      description: "방화벽, 보안스위치, 무선AP, PC, 노트북, 태블릿, 디지털복합기 등 교내 모든 정보시스템 현황과 IP주소를 관리하는 대장입니다. (일괄 보급 태블릿은 비고란에 수량 기재하여 1건 등재 가능)",
      headers: ["연번", "관리번호", "소속", "취급자 성명", "종류", "제조사", "모델명", "도입일자", "IP주소", "비고"],
      sampleRows: [
        ["1", "{schoolName}-방화벽-01", "정보실", "{managerName}", "방화벽", "SECUI", "NGF 800ED", "2021.12.", "10.100.x.x", "스쿨넷"],
        ["2", "{schoolName}-스위치-01", "정보실", "{managerName}", "보안스위치", "파이오링크", "CS2728G", "2021.12.", "10.100.x.x", "업무망"],
        ["3", "{schoolName}-AP-01", "1-1", "{managerName}", "무선AP", "Aruba", "AP555", "2023.03.", "10.100.x.x", "무선망"],
        ["4", "{schoolName}-PC-01", "교장실", "교장", "PC", "삼성", "DM500", "2022.05.", "10.100.1.10", "업무용"],
        ["5", "{schoolName}-태블릿-01", "정보실", "{managerName}", "태블릿", "삼성", "갤럭시탭", "2026.01.", "-", "10대(일괄보급)"]
      ]
    },
    {
      id: "form-sec-4",
      category: "정보보안 서식",
      badge: "정보보안 별지 4 (4-1, 4-2, 4-3)",
      title: "휴대용 저장매체 관리대장 · 점검대장 · 반출입대장 (3종)",
      page: "p.18 ~ p.19 (PDF 26~27쪽)",
      type: "ledger",
      when: "매체 등록 시(4-1), 매월 사이버보안 진단의 날 점검 시(4-2), 노트북·USB 반출입 및 장기대여 시(4-3)",
      description: "USB(성적처리용 포함)·외장HDD 등록 관리대장(4-1), 월 1회 보유수량 및 이상유무 점검대장(4-2), 노트북·태블릿·USB 외부 반출입 및 장기대여 대장(4-3)입니다. (관리자: 교감 또는 부서장)",
      headers: ["대장 구분", "일자/관리번호", "매체/장비명", "취급자/사용자", "주요 내용(수량/용도/상태)", "담당자 확인", "관리자(교감) 확인"],
      sampleRows: [
        ["[4-1 관리대장]", "교무-일반-01 (S/N)", "USB", "교사 김유신", "등록: 2025.3.2. / 보관중", "{managerName}", "{vicePrincipalName}"],
        ["[4-2 점검대장]", "2026. 3. 18.", "일반 저장매체", "보유수량: 3개", "점검결과: 이상없음", "{managerName}", "{vicePrincipalName}"],
        ["[4-3 반출입대장]", "{schoolName}-노트북-01", "노트북", "교사 김○○", "교원용 노트북 배부 (장기대여)", "{managerName}", "{vicePrincipalName}"]
      ]
    },
    {
      id: "form-sec-5",
      category: "정보보안 서식",
      badge: "정보보안 별지 5",
      title: "정보시스템 저장자료 삭제 요청 기안문 및 요청서",
      page: "p.20 ~ p.21 (PDF 28~29쪽)",
      type: "draft",
      when: "PC, 노트북, 서버, 디지털복합기 등 불용·폐기·교체 시 교육지원청에 저장자료 삭제 요청 (비공개 공문)",
      description: "불용 정보시스템의 하드디스크(HDD)·SSD에 저장된 자료가 유출되지 않도록 교육지원청에 완전 삭제(디가우징/천공 등)를 요청하는 공문 및 붙임 요청서입니다.",
      securityConfig: "수신: {eduOfficeName}교육장(행정지원과장) / 공개여부: 비공개",
      draftTitle: "정보시스템 저장자료 삭제 요청",
      draftBody: `1. 관련: 전라남도교육청 정보보안기본지침 제59조(저장매체 불용처리)

2. 위 호와 관련하여 정보시스템 저장자료 삭제를 붙임과 같이 요청합니다.

붙임  정보시스템 저장자료 삭제 요청서 1부.  끝.

--------------------------------------------------
[붙임] 정보시스템 저장자료 삭제 요청서 요약
- 희망삭제일자: 2026. ○. ○.
- 삭제대상: PC / 노트북 / 서버 (매체형태: HDD / SSD, 시리얼번호 기재)
- 삭제요청방법: 저장매체 완전삭제(매체불용) 또는 저장자료 완전포맷(매체 재사용)
- 요청자: {managerRole} {managerName} / {schoolName}장 (공문요청 시 직인 생략 가능)`
    },
    {
      id: "form-sec-6",
      category: "정보보안 서식",
      badge: "정보보안 별지 6",
      title: "차단 사이트 허용 신청서",
      page: "p.22 (PDF 30쪽)",
      type: "draft",
      when: "교과수업 및 창의적 체험활동 등 교육 목적으로 차단된 사이트(예: 마인크래프트 등) 허용이 필요한 경우 (사용일 3일 전까지 전라남도교육청교육연구정보원으로 공문 신청)",
      description: "교육연구정보원(사전 문의: ☎061-260-5630 / 260-5633)으로 사용일 기준 3일 전까지 전자문서(공문)로 신청하는 서식입니다.",
      securityConfig: "수신: 전라남도교육청교육연구정보원장 / 사용일 3일 전까지 공문 신청",
      draftTitle: "차단 사이트 허용 신청",
      draftBody: `[차단 사이트 허용 신청서 내용]
1. 관련 근거: 2026년 {schoolName} 창의적 체험활동(또는 교과수업) 계획
2. 신청 구분: [✔] 신규  [ ] 변경  [ ] 기간연장
3. 허용 사이트(또는 APP/서비스): (예: minecraft.com 마인크래프트)
4. 허용 기간: 2026. ○. ○. 09:00 ~ 17:00
5. 허용 IP: 10.100.xx.5 ~ 10.100.xx.25 (지도교사PC 1대, 실습실PC 20대)
6. 사용 목적: 교과수업 및 창의적 체험활동에 활용
7. 자체보안대책:
   가. 최신 OS 및 응용 프로그램 업데이트
   나. 백신 소프트웨어 설치 및 실시간 탐지 적용
   다. 이용자 PC 보안 관리 철저
8. 신청자: {schoolName} {managerRole} {managerName}`
    },
    {
      id: "form-sec-7",
      category: "정보보안 서식",
      badge: "정보보안 별지 7",
      title: "보안 서약서 (용역사업 대표자 및 참여인력용)",
      page: "p.23 (PDF 31쪽)",
      type: "draft",
      when: "정보화기기 유지보수, 네트워크 공사, 지문인식기 등 외부 용역사업 착수 시 및 정보시스템 외부 수리 반출 시",
      description: "용역사업 대표자 및 참여인력 전원으로부터 기밀 누설 금지 및 보안 관계규정 준수를 서약받는 문서입니다.",
      securityConfig: "용역 착수 시 대표자 및 참여인력 전원 징구 보관",
      draftTitle: "서 약 서 (용역사업 대표자 및 참여인력용)",
      draftBody: `본인은 2026년 ○월 ○일부로 「{schoolName} 정보화기기 유지보수」와 관련한 업무(용역, 연구개발, 제작, 입찰, 그밖의 업무)를 수행함에 있어 다음 사항을 준수할 것을 엄숙히 서약합니다.

1. 본인은 「{schoolName} 정보화기기 유지보수」 용역 사업과 관련된 소관업무가 국가 기밀 사항임을 인정하고 제반 보안 관계규정 및 지침을 성실히 준수한다.
2. 나는 이 기밀을 누설함이 이적행위가 됨을 명심하고 재직 중은 물론 퇴직 후에도 알게 된 모든 기밀사항을 일절 타인에게 누설하지 아니한다. 단, 「부패방지권익위법」 및 「공익신고자 보호법」에 따른 신고의 경우는 비밀·보안준수 의무를 위반하지 않은 것으로 본다.
3. 나는 이 기밀을 누설한 때에는 아래 법령 위반으로 처벌될 수 있음을 확인한다.
   가. 「국가보안법」 제4조 제1항 제2호·제5호(국가기밀 누설 등)
   나. 「형법」 제99조(일반이적) 및 제127조(공무상 비밀의 누설)

2026년  ○월  ○일
- 서약자: 소속 (업체명) / 직급(직위) / 성명 (서명/인)
- 서약집행자: 소속 {schoolName} / 직급(직위) {managerRole} / 성명 {managerName} (서명/인)`
    },
    {
      id: "form-sec-8",
      category: "정보보안 서식",
      badge: "정보보안 별지 8",
      title: "보안 확약서 (용역사업 완료 시 업체 대표자용)",
      page: "p.24 (PDF 32쪽)",
      type: "draft",
      when: "정보화 용역사업 완료 시 (제반자료 반환·삭제 및 복사본 미보관 확약)",
      description: "용역사업 완료 시 업체 대표자로부터 용역 관련 모든 자료의 반환·삭제 및 복사본 미보관을 확약받는 서식입니다.",
      securityConfig: "용역 완료 시 업체 대표자 징구 보관",
      draftTitle: "보 안 확 약 서",
      draftBody: `본인은 2026년 ○월 ○일부로 「{schoolName} 정보화기기 유지보수 용역」을 완료하였음에 있어 용역사업과 관련한 제반자료, 장비, 서류, 중간·최종 산출물 등 용역과 관련된 모든 자료 등에 대하여 다음과 같이 이행하였음을 확약합니다.

1. 용역사업(업무)과 관련한 모든 제반자료를 발주처에 반환
2. 용역사업(업무)과 관련한 모든 제반자료를 삭제
3. 용역사업(업무)과 관련한 모든 사업산출물 복사본 등을 별도 보관하지 않음
4. 본인은 위 사항이 거짓일 경우 관계법규(국가보안법 제4조, 형법 제99조 및 제127조)에 따라 엄중히 처벌을 받을 것을 서약한다.

2026년  ○월  ○일
- 서약자(업체 대표): 업체명 / 직위 / 성명 (서명/인)
- 서약집행자(담당공무원): 기관명 {schoolName} / 직위 {managerRole} / 성명 {managerName} (서명/인)`
    },
    {
      id: "form-sec-9",
      category: "정보보안 서식",
      badge: "정보보안 별지 9",
      title: "용역업체 직원 보안교육 일지",
      page: "p.25 (PDF 33쪽)",
      type: "draft",
      when: "정보화 용역사업 수행 직원을 대상으로 보안 관리 및 준수사항 교육 실시 시",
      description: "용역업체 직원에게 자료 무단 반출 금지, 노트북 반출입 대장 기재, 원격 유지보수 금지, 누출금지 정보 안내를 교육하고 서명받는 일지입니다.",
      securityConfig: "용역업체 참여인력 서명 징구 및 담당자 결재 보관",
      draftTitle: "용역업체 직원 보안교육 일지",
      draftBody: `• 교육일시: 2026. ○. ○.(○) 10:00 / 교육장소: {schoolName} 정보실(또는 행정실)
• 강사명: {managerRole} {managerName}
• 교육명: 정보화사업 용역업체 보안 관리 및 준수사항

[주요 교육 내용]
1. 자료에 대한 보안관리 조치 (무단 복사·외부 반출 금지, 개인 PC·메일함·공유사이트 보관 불가, 완료 시 전량 반납 및 보안확약서 제출)
2. 전산장비의 반출·입 시 자료 유출 확인 등 보안 조치 (노트북 등 반출입 대장 기재, 반출 시 데이터 완전 삭제, 악성코드 수시 확인)
3. 정보시스템의 원격 유지보수 금지 (원격 접속·정비 금지, 부득이한 경우 방화벽 등 보안대책 강구 및 승인 후 한시적 허용)
4. 누출금지 정보 안내 (지방계약법 시행령 제92조에 의거 누출금지 대상 정보 누출 시 부정당업자 제재조치)

"위 내용을 모두 이해하였으며, 성실히 이행하겠습니다."
- 참석자: 용역업체 ○○○○ / 직위 ○○ / 성명 ○○○ (인)`
    },

    // 개인정보 보호 별지 1~14
    {
      id: "form-pi-1",
      category: "개인정보 서식",
      badge: "개인정보 별지 1",
      title: "개인정보 내부 관리계획 변경 기안문 및 계획서",
      page: "p.51 ~ p.53 (PDF 59~61쪽)",
      type: "draft",
      when: "도교육청 내부 관리계획 변경 공문 시 또는 학교 개인정보 보호담당자·절차 변경 시 (내부결재, 공개)",
      description: "개인정보 보호법 제29조 및 안전성 확보조치 기준 제4조에 따라 학교의 개인정보 내부 관리계획을 변경·현행화하는 내부결재 기안문입니다.",
      securityConfig: "수신: 내부결재 / 공개여부: 공개",
      draftTitle: "개인정보 내부 관리계획 변경",
      draftBody: `1. 관련
  가. 개인정보 보호법 제29조(안전조치의무) 및 같은 법 시행령 제30조(개인정보의 안전성 확보조치)
  나. 개인정보의 안전성 확보조치 기준 제4조(내부 관리계획의 수립·시행)
  다. 글로컬미래교육과-xxxx(2026. x. x.)「개인정보 내부 관리계획 변경 알림」

2. 개인정보의 안전한 관리 및 처리를 위하여 {schoolName} 개인정보 내부 관리계획을 붙임과 같이 변경하여 시행하고자 합니다.

붙임  {schoolName} 개인정보 내부 관리계획 1부.  끝.`
    },
    {
      id: "form-pi-2",
      category: "개인정보 서식",
      badge: "개인정보 별지 2",
      title: "개인정보 처리방침 개정 기안문 및 홈페이지 공개안",
      page: "p.54 ~ p.55 (PDF 62~63쪽)",
      type: "draft",
      when: "인사발령으로 교장(CPO) 또는 개인정보 보호담당자 변경 시, 개인정보파일·위탁업무 변동 시 (내부결재 후 홈페이지 메인 하단 공개)",
      description: "인사발령 등에 따라 개인정보 보호책임자(교장) 및 담당자를 변경하고 학교 홈페이지 하단 개인정보 처리방침을 현행화하는 내부결재 기안문입니다.",
      securityConfig: "수신: 내부결재 / 공개여부: 공개 (결재 후 학교 홈페이지 하단 게재 및 이전 방침 이력 연결)",
      draftTitle: "{schoolName} 개인정보 처리방침 개정",
      draftBody: `1. 관련: 개인정보 보호법 제30조(개인정보 처리방침의 수립 및 공개)

2. 2026. 3. 1.자 인사발령에 따른 개인정보 보호책임자(CPO) 및 개인정보 보호담당자 변경으로 붙임과 같이 개인정보 처리방침을 개정하고, 학교 홈페이지에 공개하고자 합니다.

  가. 변경내용
    - 개인정보 보호책임자: (당초) 교장 ○○○ → (변경) 교장 {principalName}
    - 개인정보 보호담당자: (당초) ○○○ → (변경) {managerRole} {managerName}
  나. 세부내용: [붙임] 참조 (주요 개인정보 처리 라벨링 6종 및 제1조~제15조 현행화)
  다. 시행일: 2026. 3. ○.

붙임  {schoolName} 개인정보처리방침 1부.  끝.`
    },
    {
      id: "form-pi-3",
      category: "개인정보 서식",
      badge: "개인정보 별지 3",
      title: "개인정보파일대장",
      page: "p.56 (PDF 64쪽)",
      type: "ledger",
      when: "개인정보파일 일제정비 후 개인정보보호 종합지원시스템(intra.privacy.go.kr)에서 엑셀 변환·출력하여 열람창구에 보관",
      description: "종합지원시스템 [개인정보파일 - 개인정보파일처리 - 소속기관 파일목록 - 파일명 클릭 - 하단 엑셀변환]으로 출력하여 보관하는 대장입니다.",
      headers: ["항목", "기재 내용 (예시: 학교생활기록부)", "비고"],
      sampleRows: [
        ["공공기관 명칭 / 부서명 / 취급담당자", "{schoolName} / 교무부 / {managerName}", "현 업무담당자명으로 현행화"],
        ["개인정보파일의 명칭 / 운영 근거", "학교생활기록부 / 초·중등교육법 제25조", "표준목록(17종) 기준"],
        ["기록되는 개인정보 항목 / 보유기간", "성명, 주민등록번호, 주소, 학적, 출결, 성적 등 / 준영구", "정보주체 수 정확히 명시"],
        ["열람 요구 접수·처리 부서", "{schoolName} 교무실(또는 행정실)", "열람창구에 대장 및 청구서식 비치"]
      ]
    },
    {
      id: "form-pi-4",
      category: "개인정보 서식",
      badge: "개인정보 별지 4",
      title: "개인정보의 목적 외 이용 및 제3자 제공 대장",
      page: "p.57 (PDF 65쪽)",
      type: "ledger",
      when: "경찰서(학교폭력·수사), 세무서, 감사·국회 요구 등으로 수집 목적 외로 제3자에게 개인정보를 제공한 경우",
      description: "목적 외 제3자 제공 시 반드시 기록·보관해야 하는 대장입니다. (제공 후 30일 이내 홈페이지에 10일 이상 공개하되, 정보주체 별도 동의 및 범죄수사·공소제기 목적은 공개 제외)",
      headers: ["개인정보파일명", "구분", "제공받는 기관(담당자)", "제공일자/형태", "법적 근거", "제공 목적", "제공 항목", "안전조치 요청 내용"],
      sampleRows: [
        ["학생정보 (2명)", "목적 외 제3자 제공", "○○경찰서 (홍길동 061-xxx-xxxx)", "2026. 3. 10. / 공문·엑셀(암호화)", "형사소송법 제199조", "학교폭력 조사", "학생 성명·연락처, 보호자 성명·연락처", "목적 외 이용·재제공 금지 및 목적 달성 후 완전 파기 요청"]
      ]
    },
    {
      id: "form-pi-5",
      category: "개인정보 서식",
      badge: "개인정보 별지 5",
      title: "표준 개인정보처리 위탁 계약서",
      page: "p.58 (PDF 66쪽)",
      type: "draft",
      when: "졸업앨범, 학생증, 알리미앱, 여행사 체험학습, PC/CCTV/지문인식 유지보수, 방과후강사 등 개인정보 처리 위탁계약 체결 시",
      description: "개인정보 보호법 제26조제1항에 따라 위탁계약 체결 시 2부를 작성하여 학교(위탁자)와 업체(수탁자)가 각 1부씩 보관하는 필수 계약서입니다.",
      securityConfig: "계약서 2부 작성 후 학교·수탁자 각 1부 보관 + 홈페이지 처리방침에 위탁내역 공개",
      draftTitle: "표준 개인정보처리 위탁 계약서",
      draftBody: `{schoolName}(이하 "위탁자"라 한다)과 ○○○업체(이하 "수탁자"라 한다)는 "위탁자"의 개인정보 처리업무를 "수탁자"에게 위탁함에 있어 다음과 같은 내용으로 본 업무위탁계약을 체결한다.

제1조 (목적) 이 계약은 "위탁자"가 개인정보 처리업무를 "수탁자"에게 위탁하고, "수탁자"는 이를 승낙하여 성실하게 업무를 완성하도록 하는데 필요한 사항을 정함을 목적으로 한다.
제3조 (위탁업무의 목적 및 범위) "수탁자"는 계약이 정하는 바에 따라 ( 예: 졸업앨범 제작 / PC 유지보수 ) 목적으로 개인정보 처리 업무를 수행한다.
제4조 (위탁업무 기간) 2026년 ○월 ○일 ~ 2027년 ○월 ○일
제12조 (손해배상) "수탁자"가 이 계약에 따른 의무를 위반하여 정보주체 또는 제3자에게 손해가 발생할 경우 "위탁자"와 "수탁자"는 공동으로 손해를 배상하기로 한다.

본 계약의 내용을 증명하기 위하여 계약서 2부를 작성하고 서명 또는 날인한 후 각 1부씩 보관한다.
2026. ○. ○.
- 위탁자: 학교명 {schoolName} / 대표자 성명 {principalName} (직인)
- 수탁자: 기관(회사)명 ○○○ / 대표자 성명 ○○○ (인)`
    },
    {
      id: "form-pi-6",
      category: "개인정보 서식",
      badge: "개인정보 별지 6",
      title: "개인정보 처리 위탁에 따른 수탁자 교육자료 (및 확인서)",
      page: "p.59 (PDF 67쪽)",
      type: "draft",
      when: "개인정보 처리 위탁 계약 기간 중 수탁자 교육 및 실태 점검 시",
      description: "수탁자에게 개인정보보호법 준용 조항, 재위탁 금지, 암호화 등 안전성 확보조치, 사업 완료 시 반납·파기 의무를 교육하고 서명받는 자료입니다.",
      securityConfig: "수탁업체 참석자 서명 후 학교 담당자 결재 보관",
      draftTitle: "개인정보 처리 위탁에 따른 수탁자 교육자료",
      draftBody: `• 교육일자: 2026. ○. ○. / 교육담당자: {schoolName} {managerRole} {managerName}
1. 「개인정보보호법」 조항 준용 (제15조~제25조, 제27조~제31조, 제33조~제38조 및 제59조 준용)
2. 개인정보 처리 현황 및 안전성 점검 (계약 해지·종료 시 즉시 파기 또는 반납, 목적 외 이용·제3자 제공·재위탁 금지)
3. 개인정보 안전성 확보 조치 (내부관리계획 수립, 접근권한·비밀번호 관리, 개인정보 암호화, 보관시설 잠금장치)
4. 사업 완료 시 제반자료 전량 반납 및 복사본 별도 보관 금지

"위와 같이 교육을 받았으며, 교육내용을 준수하겠습니다."
- 교육참석자 소속(업체명): ○○○ / 성명: ○○○ (서명)`
    },
    {
      id: "form-pi-7",
      category: "개인정보 서식",
      badge: "개인정보 별지 7",
      title: "수탁자 개인정보 파기 확인서",
      page: "p.60 (PDF 68쪽)",
      type: "draft",
      when: "개인정보 처리 위탁업무(졸업앨범, 체험학습, 유지보수 등) 계약 종료 시 수탁자로부터 징구",
      description: "위탁업무 종료 후 수탁자가 보유했던 모든 개인정보를 완전 삭제·파쇄하였음을 확인받는 필수 징구 서식입니다.",
      securityConfig: "위탁사업 종료 시 업체 대표자 서명 징구 보관",
      draftTitle: "개인정보처리위탁업무 자료 파기확인서",
      draftBody: `1. 위탁업무명: (예: 2026학년도 졸업앨범 제작 / 정보화기기 유지보수)
2. 위탁대상인원: ○○명
3. 파기방법: 시스템, PC에서 데이터 완전 삭제, 문서 파쇄
4. 파기일자: 2026년 ○월 ○일

위탁업무를 완료하였으며 위탁 관련 자료는 파기하였습니다.

- 확약자(업체대표): 업체명 ○○○ / 성명 ○○○ (서명)
{schoolName}장 귀하`
    },
    {
      id: "form-pi-8",
      category: "개인정보 서식",
      badge: "개인정보 별지 8 & 9",
      title: "개인정보 파기 요청서 [별지 8] 및 개인정보파일 파기 관리대장 [별지 9]",
      page: "p.61 ~ p.62 (PDF 69~70쪽)",
      type: "ledger",
      when: "보유기간 만료(졸업생 홈페이지 회원정보, 전출·퇴직자 지문정보 등) 또는 종합지원시스템 등재 개인정보파일 파기 시",
      description: "개인정보 파기 전 승인자(CPO 교장) 결재를 받는 파기 요청서([별지 8])와 파기 완료 후 기록하는 파기 관리대장([별지 9])입니다.",
      headers: ["번호", "개인정보파일명", "자료의 종류", "생성일", "폐기일", "폐기사유", "처리담당자", "처리부서장"],
      sampleRows: [
        ["1", "학교 홈페이지 회원정보", "회원DB", "2021. 3. 2.", "2026. 3. 5.", "졸업생 회원정보 삭제(보유기간 만료)", "{managerName}", "교감 {vicePrincipalName}"],
        ["2", "발전기금 기탁자 관리", "파일", "2021. 3. 2.", "2026. 3. 10.", "보유기간 동안 정보주체건수 없음", "나발전", "행정실장 {adminHeadName}"]
      ]
    },
    {
      id: "form-pi-10",
      category: "개인정보 서식",
      badge: "개인정보 별지 10",
      title: "고정형 영상정보처리기기(CCTV) 운영·관리 방침",
      page: "p.63 (PDF 71쪽)",
      type: "draft",
      when: "CCTV 설치 대수·위치 변경 또는 관리책임자·접근권한자 변경 시 (내부결재 후 시행 최소 7일 전 홈페이지 공지)",
      description: "개인정보 보호법 제25조에 따라 학교 CCTV 설치 목적, 대수, 위치, 촬영시간, 보관기간(30일 이내), 관리책임자를 명시하여 홈페이지에 공개하는 방침입니다.",
      securityConfig: "내부결재 후 학교 홈페이지 공개 (변경 시 최소 7일 전 공지 및 이전 방침 이력 연결)",
      draftTitle: "{schoolName} 고정형 영상정보처리기기 운영·관리 방침",
      draftBody: `본 {schoolName}(이하 본 기관이라 함)는 고정형 영상정보처리기기 운영·관리 방침을 통해 본 기관에서 처리하는 영상정보가 어떠한 용도와 방식으로 이용·관리되고 있는지 알려드립니다.

- 제1조(설치 근거 및 목적): 「개인정보 보호법」 제25조제1항에 따라 시설안전 및 관리, 화재 예방, 학생안전, 학교폭력 등 범죄 예방 목적
- 제2조(설치 대수, 위치 및 촬영범위): 총 ○○대 (출입구, 복도, 운동장 등)
- 제3조(관리책임자 및 접근권한자): 관리책임자 행정실장 {adminHeadName}(또는 교감 {vicePrincipalName}) / 접근권한자 ○○○
- 제4조(촬영시간, 보관기간, 보관장소 및 처리방법): 24시간 촬영 / 보관기간 30일 이내 / 자동 삭제
- 제9조(방침 변경에 관한 사항): 시행하기 최소 7일 전에 본 기관 홈페이지를 통해 공지`
    },
    {
      id: "form-pi-11",
      category: "개인정보 서식",
      badge: "개인정보 별지 11",
      title: "개인영상정보 관리대장 (CCTV 월례 파기점검 및 열람 기록)",
      page: "p.64 (PDF 72쪽)",
      type: "ledger",
      when: "매월 사이버보안 진단의 날(30일 주기 자동삭제 여부 기록) 및 경찰서 등 CCTV 열람·제공 발생 시",
      description: "개인영상정보를 이용·제공·열람·파기할 때 기록하는 대장입니다. 시스템상 30일 자동 삭제되는 경우에도 매월 주기적 점검일시를 기록하고 교장 확인을 받아야 합니다!",
      headers: ["번호", "구분", "일시", "파일명/형태", "담당자", "목적/사유", "제3자/열람요구자", "근거/형태", "파기주기/예정일", "확인(교장)"],
      sampleRows: [
        ["1", "[✔] 파기", "2026. 1. 21.", "cctv영상", "나영상", "보존기간 경과파일 삭제", "-", "-", "30일 주기 자동 파기", "교장 확인"],
        ["2", "[✔] 열람", "2026. 2. 9.", "2026.2.9. 1,2번 cctv영상", "나영상", "범죄수사, 도난확인 등", "○○경찰서 / 홍길동", "수사법 / 영상열람", "○월 ○일 ○시", "교장 확인"],
        ["3", "[✔] 파기", "2026. 2. 18.", "cctv영상", "나영상", "보존기간 경과파일 삭제", "-", "-", "30일 주기 자동 파기", "교장 확인"],
        ["4", "[✔] 파기", "2026. 3. 18.", "cctv영상", "나영상", "보존기간 경과파일 삭제", "-", "-", "30일 주기 자동 파기", "교장 확인"]
      ]
    },
    {
      id: "form-pi-12",
      category: "개인정보 서식",
      badge: "개인정보 별지 12",
      title: "개인정보보호 서약서 (교직원용)",
      page: "p.65 (PDF 73쪽)",
      type: "draft",
      when: "해당 학교 근무 기간 중 1회 제출 (매년 받을 필요 없으며, 2~3월 신규 및 전입 직원만 추가 징구)",
      description: "교직원(개인정보취급자)이 업무 중 알게 된 개인정보의 비밀 유지 및 무단 조회·유출 금지를 서약하는 문서입니다.",
      securityConfig: "신규·전입 교직원 징구 보관",
      draftTitle: "개인정보보호 서약서",
      draftBody: `나 (              )는 업무 중에 알게 된 개인정보 및 {schoolName}의 업무와 관련된 정보에 대하여 업무 수행중이나 업무 수행 후에도 비밀을 지킬 것을 서약합니다.

또한, {schoolName}에서 수집한 개인정보의 보호를 위해 {schoolName}에서 정하는 개인정보 보호 관리 규정을 준수할 것이며, 적정한 절차 없이 개인정보를 무단으로 조회, 누출하지 않을 것을 서약합니다.

개인정보 보호와 관련한 비밀의 준수와 개인정보보호를 위한 법적 준수기준인 "개인정보 보호법"에 명시된 모든 조항과 {schoolName}의 개인정보보호 관리 규정 등 관련된 모든 조항이 포함된다는 것을 충분히 설명 받고 숙지하였습니다.

만약, 이러한 서약에도 불구하고 업무상 알게 된 사항에 대하여 비밀을 누설하거나 정당한 사유 없이 조회, 유출, 오용할 경우, 형사상 민사상의 법률 조항에 의거하여 제재를 받을 수 있음을 통고 받았으며, 이러한 제재에 대하여 이의를 제기하지 않을 것을 본인의 자의로 서약합니다.

일 시 : 2026년  3월  ○일
소 속 : {schoolName}
성 명 :                 (인)

{schoolName}장 귀하`
    },
    {
      id: "form-pi-13",
      category: "개인정보 서식",
      badge: "개인정보 별지 13 (13-1, 13-2)",
      title: "개인정보 수집·이용·제공 일괄 동의서 (학생·학부모용 / 교직원용)",
      page: "p.66 ~ p.70 (PDF 74~78쪽)",
      type: "draft",
      when: "매년 2~3월 신학기 학생·학부모 동의 징구(13-1) 및 신규·전입 교직원 동의 징구(13-2)",
      description: "법령 근거에 따른 무동의 수집 고지(생기부, 건강기록부)와 선택적 동의 항목(학생기초자료, 건강민감정보, 홈페이지 사진, 홍보, SMS, 알리미앱, 동아리, 학생증 / 교직원 비상연락망, 지문인식, 홍보)을 구분한 표준 동의서입니다.",
      securityConfig: "만 14세 미만 아동은 반드시 학생 본인과 보호자(법정대리인) 서명 동시 징구",
      draftTitle: "개인정보 수집·이용·제공 고지 및 동의 안내",
      draftBody: `[학생·학부모용 (별지 13-1) 구성 항목]
1. 법령 근거 무동의 고지사항: 학교생활기록부(준영구), 학생건강기록부(졸업 후 5년)
2. 동의 징구 항목 (각 항목별 [동의합니다 / 동의하지 않습니다] 개별 체크 필수):
   - [전학년] 학생기초자료 조사 (필수/선택 구분, 건강정보 민감정보 별도 동의, 보유 1년)
   - 학교 홈페이지 사진(영상) 정보 (수집·이용 동의 + 제3자 제공 동의 별도 체크, 보유 5년)
   - [전학년] 교육활동 홍보 (수집·이용 5년 + 언론사 등 제3자 제공 1년 별도 체크)
   - [전학년] 휴대전화 문자서비스(SMS) (보유 1년)
   - [전학년] 사설 알림서비스 앱(e알리미, 학교종이 등 서면동의 시, 보유 1년)
   - [해당학교] 동아리 가입 (보유 5년) / [중·고] 학생증 발급 (보유 5년)

[교직원용 (별지 13-2) 구성 항목]
1. 비상연락망 구축 (성명, 주소, 전화번호, 이메일, 차량정보 / 재직기간)
2. 지문인식시스템 운영 (일반개인정보 + 민감정보[지문] 별도 동의 / 재직기간)
3. 학교 홍보 (사진·동영상 수집 5년 + 언론사·홈페이지 제3자 제공 목적 달성시까지)`
    },
    {
      id: "form-pi-14",
      category: "개인정보 서식",
      badge: "개인정보 별지 14",
      title: "개인정보보호 종합지원시스템 등록·변경·파기 매뉴얼 요약",
      page: "p.71 (PDF 79쪽)",
      type: "draft",
      when: "학기 초 담당자 변경 및 학기 중 개인정보파일 일제정비 시 (http://intra.privacy.go.kr)",
      description: "개인정보보호 종합지원시스템 접속, 담당자 등록(인사발령 시 탈퇴 후 재등록), 소속기관 파일목록 변경 및 파기 신청 절차 요약입니다.",
      securityConfig: "공인인증서 로그인 필수 (https://intra.privacy.go.kr)",
      draftTitle: "개인정보보호 종합지원시스템 등록 매뉴얼 핵심 요약",
      draftBody: `1. 접속 및 담당자 등록 (https://intra.privacy.go.kr)
   - 개인정보보호 담당자: '개인정보보호총괄관리자'로 등록 / 교장: '개인정보보호책임자'로 등록
   - 인사발령으로 소속학교가 변경된 경우: [로그인 → 마이페이지 → 탈퇴] 후 새 학교 담당자로 등록
2. 등록된 개인정보파일 변경
   - 메뉴: [개인정보파일 → 개인정보파일 처리 → 소속기관 파일목록] → 파일명 클릭 → 하단 [변경]
   - 주요 확인: 모든 보유 파일의 '취급담당자', '정보주체수' 현행화, 표준목록 운영 근거 및 홈페이지 처리방침 파일명 일치 확인
   - 승인 절차: 변경신청("보유중(변경신청중)") → 교육지원청 승인 시 "보유중(변경완료)" (취급자가 신청한 경우 학교 총괄관리자 승인 후 교육지원청 승인)
3. 개인정보파일 파기
   - 내부결재([별지 8]) 후 [소속기관 파일목록]에서 파기 대상 선택 → 하단 [파기] → 교육지원청 승인 시 파기 완료 → 파기 관리대장([별지 9]) 기록`
    },

    // 기타 정보업무 별지 1~3 & 부록 기안문 2종
    {
      id: "form-etc-1",
      category: "기타·부록 서식",
      badge: "기타 별지 1",
      title: "소프트웨어 관리 대장",
      page: "p.93 (PDF 101쪽)",
      type: "ledger",
      when: "분기별 작성·보관 (통합정보관리시스템 TIMS에서 자동 작성·조회 가능)",
      description: "도교육청 일괄 보급 SW 3종(MS-EES, 한컴오피스 2024 EDU, 알약 5.0)과 학교 자체 구입 SW를 등재하여 분기별로 관리담당자·관리책임자 확인을 받는 대장입니다.",
      headers: ["SW 고유번호", "소프트웨어 및 버전", "제작사", "시리얼넘버", "라이선스 유형", "도입일자", "설치수량", "라이선스 기간", "운영부서"],
      sampleRows: [
        ["1", "MS-EES (Windows 10/11 Edu, MS Office 2024, CAL)", "Microsoft", "HT6NC-RYX98-... / 77VYB-JNP7H-...", "증서", "2025. 6.", "전 직원", "2025.6. ~ 2026.5.", "{schoolName}"],
        ["2", "한컴오피스 2024 EDU (한글, 한PDF 등)", "한글과컴퓨터", "DVH6H-64YTR-E9WPT-7Q3DY", "증서", "2026. 1.", "전 직원", "2026.1. ~ 2026.12.", "{schoolName}"],
        ["3", "알약 5.0", "이스트소프트", "AHK6-HES9-NWHP-U67L", "증서", "2022. 1.", "전 직원", "2022.1. ~ 2026.12.", "{schoolName}"]
      ]
    },
    {
      id: "form-etc-2",
      category: "기타·부록 서식",
      badge: "기타 별지 2 (2-1 ~ 2-4)",
      title: "교육행정전자서명 인증서 신청서 (기관용·특수목적용 폐지 및 신규발급)",
      page: "p.94 ~ p.95 (PDF 102~103쪽)",
      type: "draft",
      when: "인사발령 등으로 기관용(전자관인용) 또는 특수목적용(업무용) 인증서 관리담당자 변경 시",
      description: "담당자 변경 시 전임 담당자 정보로 [폐지] 신청서(2-1, 2-3)와 신임 담당자 정보로 [신규] 신청서(2-2, 2-4)를 함께 작성하여 공문(비공개 6항, 열람제한 영구)으로 신청합니다.",
      securityConfig: "공문 기안 시 반드시 대국민 비공개(6항) + 직원열람제한(영구) 설정!",
      draftTitle: "교육행정전자서명 인증서(기관용/특수목적용) 신청 작성 요령",
      draftBody: `[필수 체크 포인트]
1. 수신처: 유·초·중·도서관 → {eduOfficeName}(행정지원과) / 직·고·특 → 도교육청(글로컬미래교육과)
2. 담당자 변경 시 제출 서류 (2부 동시 제출):
   - [폐지 신청서]: 인증서관리담당란에 '전임 담당자' 성명·이메일·연락처 기입, 신청종류 [✔ 폐지], 사유 [✔ 기타(담당자 변경)]
   - [신규 신청서]: 인증서관리담당란에 '신임 담당자' 성명·이메일·연락처 기입, 신청종류 [✔ 신규], 사유 [✔ 기타(담당자 변경)]
3. 특수목적용 신청 시 주의: '업무명'란에 반드시 업무명만 기입 (개인명칭 포함 절대 금지!)
4. 임시비밀번호: 반드시 8자리 숫자만 기입 (영문자 사용 불가)`
    },
    {
      id: "form-app-1",
      category: "기타·부록 서식",
      badge: "부록 기안문 1",
      title: "정보보안 및 개인정보 보호 교육 실시 기안문 (내부결재)",
      page: "p.101 (PDF 109쪽)",
      type: "draft",
      when: "연 1회 이상 전 교직원 대상 정보보안·개인정보보호·정품SW 교육 실시 전",
      description: "전 직원 대상 자체 정보보안 및 개인정보보호 교육 계획을 수립하는 내부결재 기안문입니다.",
      securityConfig: "수신: 내부결재 / 공개여부: 비공개",
      draftTitle: "2026년 정보보안 및 개인정보 보호 교육 실시",
      draftBody: `1. 관련
  가. 전라남도교육청 정보보안기본지침 제9조(정보보안 교육)
  나. 개인정보 보호법 제28조(개인정보취급자에 대한 감독)
  다. 공공기관의 소프트웨어 관리에 관한 규정 제7조(소프트웨어 관리에 관한 교육 등)

2. 정보보안 의식을 고취하고 개인정보 유·노출 및 오·남용 방지를 통한 개인정보의 안전한 관리를 위하여 전 직원에 대한 정보보안 및 개인정보보호 교육을 아래와 같이 실시하고자 합니다.
  가. 교육일시: 2026. ○. ○.(○) 15:00 ~ 16:00
  나. 교육장소: {schoolName} 교무실(또는 시청각실)
  다. 교육대상: 교직원 전체
  라. 교육내용
    - 정보보안(PC보안, 인증서관리, 전자우편 및 메신저·생성형AI 보안관리)
    - 개인정보보호(개인정보 수집·이용, 제공 및 위탁, K-에듀파인 보안설정, 유출사고 단계적 조치사항 등)
    - 기타(정품 소프트웨어 관리, 무선인터넷 및 통합정보관리시스템 사용법)
  마. 교육자료: 붙임

붙임  2026년도 정보보안 및 개인정보보호 교육자료 1부.  끝.`
    },
    {
      id: "form-app-2",
      category: "기타·부록 서식",
      badge: "부록 기안문 2",
      title: "정보보안 및 개인정보 보호 교육 결과 보고 기안문 (내부결재)",
      page: "p.102 (PDF 110쪽)",
      type: "draft",
      when: "전 교직원 대상 정보보안 및 개인정보보호 교육 실시 완료 후 (등록부·사진 첨부)",
      description: "교육 실시 후 참석자 수, 미참석자(출장·연가 등)에 대한 별도 교육 조치, 참석 등록부 및 교육 사진을 첨부하여 내부결재하는 결과보고 기안문입니다.",
      securityConfig: "수신: 내부결재 / 공개여부: 비공개 (등록부 및 사진 첨부 필수)",
      draftTitle: "2026년 정보보안 및 개인정보 보호 교육 결과",
      draftBody: `1. 관련: {schoolName}-○○○(2026. ○. ○.)호

2. 2026년 전 직원 대상 정보보안 및 개인정보 보호 교육결과를 아래와 같이 보고합니다.
  가. 교육일시: 2026. ○. ○.(○) 15:00 ~ 16:00
  나. 교육장소: {schoolName} 교무실(또는 시청각실)
  다. 참석자: 교직원 ○○명([붙임] 등록부 및 사진 참조)
    - 미참석자: ○명(출장 ○명, 연가 ○명)
  라. 교육내용
    - 정보보안(PC보안, 인증서관리, 전자우편 및 메신저·생성형AI 보안관리)
    - 개인정보보호(개인정보 수집·이용, 제공 및 위탁, 유출사고 단계적 조치사항 등)
    - 기타(정품 소프트웨어 관리, 통합정보관리시스템 사용법)
  마. 미참석자는 교육자료 배포 및 별도 교육 실시

붙임  1. 정보보안 및 개인정보보호 교육실시 결과(등록부 및 사진) 1부.
      2. 정보보안 및 개인정보보호 교육자료 1부.  끝.`
    }
  ],

  // 제4장 부록: 교직원 연수용 슬라이드 (p.103 ~ p.113)
  trainingSlides: [
    {
      slideNo: 1,
      category: "Ⅰ. 정보보안",
      title: "1. PC 보안관리 및 필수 보안프로그램 4종",
      points: [
        "필수 보안프로그램 설치 확인 (다운로드: http://a.jne.go.kr 또는 업무포털 하단 배너)",
        "업무용 PC 4종: ① 백신(알약) 및 패치관리(PMS), ② 지능형위협대응(EDR), ③ 내PC지키미, ④ 개인정보 DRM(MarkAny)",
        "교육용 PC 3종: ① 백신 및 패치관리, ② 지능형위협대응, ③ 유해차단 PC가드",
        "매월 세 번째 수요일 「사이버보안 진단의 날」: 내PC지키미 실행 후 [취약] 항목을 [바로조치]하여 100점 달성!",
        "로그인 패스워드 3중 설정: ① 부팅(CMOS), ② 윈도우 로그온, ③ 화면보호기(10분 이상 미사용 시) / 분기 1회 변경",
        "상용 메신저·P2P·웹하드 등 비인가 프로그램 설치 금지 및 게임·도박·증권 등 업무 무관 사이트 접근 금지"
      ]
    },
    {
      slideNo: 2,
      category: "Ⅰ. 정보보안",
      title: "2. 교육행정전자서명(EPKI) 공인인증서 관리",
      points: [
        "가입자는 인증서가 분실·도난·유출되지 않도록 안전하게 관리할 법적 의무가 있음",
        "타인에게 인증서를 양도·대여하거나 임의 이용할 경우: 전자서명법 제19조·제24조에 따라 3년 이하 징역 또는 3천만원 이하 벌금!",
        "인증서를 이메일함, 웹하드, 클라우드 저장소에 절대 보관 금지 및 공공장소(PC방 등) 사용 자제",
        "타인의 컴퓨터에 부득이 설치한 경우 업무 종료 시 반드시 삭제 (경로: C:\\GPKI\\certificate\\class2\\본인이름 포함 파일 삭제)",
        "유효기간(개인용 2년 3개월) 만료 90일 전부터 업무포털 첫화면 [전자서명인증센터]에서 갱신"
      ]
    },
    {
      slideNo: 3,
      category: "Ⅰ. 정보보안",
      title: "3. 전자우편, 메신저 및 생성형 AI(ChatGPT, Gemini) 보안",
      points: [
        "[전자우편] 업무자료 소통은 반드시 공직자통합메일(http://mail.korea.kr)만 사용!",
        "[전자우편] 기안문 하단 및 명함에 상용메일(네이버, 다음 등) 주소 표기 금지 (K-에듀파인 개인정보관리에서 수정)",
        "[메신저] 카카오톡·밴드 등 상용 메신저·SNS를 통한 업무 관련 소통 금지 및 스마트폰에 업무자료 저장 금지",
        "[생성형 AI] ChatGPT, Gemini 등에 비공개 정보, 학생·교직원 개인정보 등 민감정보 입력 절대 금지!",
        "[생성형 AI] AI 서비스 보안 설정에서 '입력데이터를 AI 성능개선·학습데이터로 활용 차단' 활성화"
      ]
    },
    {
      slideNo: 4,
      category: "Ⅱ. 개인정보 보호",
      title: "4. 개인정보 수집·이용 원칙 및 주민등록번호 처리 제한",
      points: [
        "동의 받을 때 필수 고지사항 4가지(위반 시 1천만원 이하 과태료): ① 수집·이용 목적, ② 수집항목, ③ 보유·이용기간, ④ 동의거부권 및 불이익",
        "민감정보(건강, 지문 등) 및 고유식별정보(여권, 운전면허, 외국인등록번호): 원칙적 처리 금지 (별도 동의 또는 법령 근거 시에만 가능, 암호화 필수)",
        "주민등록번호 법정주의: 정보주체의 동의를 받아도 처리 불가! 오직 법률·대통령령에 구체적 근거가 있는 경우에만 가능",
        "법령 근거 외 주민등록번호 수집·보유 또는 유출 시: 5년 이하 징역 또는 5천만원 이하 벌금!",
        "교직원 채용 응시원서에 주민등록번호(등본 포함), 출생지, 등록기준지, 가족사항 등 과도한 개인정보 수집 금지"
      ]
    },
    {
      slideNo: 5,
      category: "Ⅱ. 개인정보 보호",
      title: "5. 개인정보 제3자 제공 vs 업무 위탁 & 개인정보 파기",
      points: [
        "[제3자 제공] 제3자의 목적 달성을 위해 공문으로 요청받아 제공 (목적 외 제공 시 공문에 안전조치 요구 명시, 대장 작성, 30일 이내 홈페이지 10일 이상 공개)",
        "[업무 위탁] 학교의 업무 목적 달성을 위해 외부 업체에 위탁 (졸업앨범, 학생증, 알리미앱, 여행사 체험학습, PC/CCTV 유지보수, 방과후강사 등)",
        "[위탁 필수 3요소] ① 표준 개인정보처리 위탁계약서 작성, ② 홈페이지에 위탁내역 공개, ③ 수탁자 교육 및 종료 시 파기확인서 징구",
        "[개인정보 파기] 보유기간 경과 또는 목적 달성 시 5일 이내 복원 불가능한 방법으로 영구 삭제(전자파일) 또는 파쇄·소각(서면)",
        "[CCTV 영상 파기] 30일 주기 자동 삭제 설정 및 매월 '개인영상정보 관리대장'에 주기적 점검일시 기록"
      ]
    },
    {
      slideNo: 6,
      category: "Ⅱ. 개인정보 보호",
      title: "6. K-에듀파인 공문서·PC·홈페이지 개인정보 안전성 확보",
      points: [
        "[K-에듀파인 감사 1순위] 개인정보 포함 공문서는 반드시 「대국민 공개여부: 비공개(6호)」 + 「직원열람제한: 영구」 동시 선택!",
        "[원문정보 공개 주의] 부분공개 시 본문(기안문)은 대국민 공개되므로 본문에 개인정보 작성 금지 (반드시 첨부문서에 기재)",
        "[PC 내 파일 관리] 공문 기안용으로 작성한 개인정보 파일은 기안 후 즉시 삭제! 보유 필요 시 개인정보감사솔루션(MarkAny)으로 암호화",
        "[홈페이지 노출 예방] 게시 전 계좌번호·연락처 포함 여부 철저 검사, 학교 홈페이지 엑셀파일 탑재 차단(PDF·한글로 변환 탑재)"
      ]
    },
    {
      slideNo: 7,
      category: "Ⅱ. 개인정보 보호",
      title: "7. 개인정보 유출사고 단계별 조치사항 (72시간 골든타임)",
      points: [
        "① 사고인지 및 긴급조치: 유출 의심 시 즉시 개인정보 보호담당자 → 책임자(교장) 보고, 노출자료 삭제·차단",
        "② 정보주체 통지 (72시간 이내): 1명 이상 유출 시 5대 필수 통지항목(유출항목, 시점·경위, 피해최소화 방법, 대응·구제절차, 담당부서) 통지",
        "③ 유출 신고 (72시간 이내): 1명 이상 유출 시 교육부(privacy.moe.go.kr) 신고 / 1천명 이상, 민감·고유식별 1건 이상, 해킹 1건 이상 시 개인정보보호위원회(privacy.go.kr) 동시 신고",
        "④ 사고분석 및 민원대응 → ⑤ 유출 신고 후 1주일 이내 결과보고서(조치확인서) 제출 → ⑥ 재발방지 대책 및 교육"
      ]
    },
    {
      slideNo: 8,
      category: "Ⅲ. 기타사항",
      title: "8. 정품 소프트웨어 사용 · 학내 무선망 · TIMS 활용",
      points: [
        "[정품 SW] 학교 보유 정품은 한글(한컴오피스 2024 EDU), MS-Office(MS-EES), 알약 5.0",
        "[불법 SW 주의] 알집, 알PDF, NesPDF, 포토샵, V3 등은 개인에게만 무료이거나 유료이므로 라이선스 증서 없이 학교 PC 설치 시 불법(5년 이하 징역/5천만원 이하 벌금, 양벌규정 3천만원 과태료)",
        "[무선인터넷 SSID] 교원·학생: jnedu_5G(수업용 태블릿 권장), jnedu_2.4G, jnedu_g / IoT기기(스마트TV·로봇): AI_xx(청번호, 2.4G 전용)",
        "[통합정보관리시스템 TIMS] https://tims.jne.go.kr 접속 → 로그인 없이 [통합정보 보안서식 바로가기]에서 보안서식 및 개인정보 동의서 80여종 다운로드 가능!"
      ]
    }
  ],

  // 시스템 및 업무 관련 연락처 (p.96 ~ p.97)
  contacts: [
    { category: "학교지원/인프라", name: "학교정보화지원센터 (유선망·PC 유지관리·자원파악)", phone: "교육지원청별 안내번호", org: "○○교육지원청", url: "https://tims.jne.go.kr" },
    { category: "학교지원/인프라", name: "디지털 인프라 통합콜센터 (스마트기기·디바이스 장애 접수)", phone: "1566-6269", org: "통합콜센터 / 테크센터", url: "http://a.jne.go.kr" },
    { category: "업무포털/메신저", name: "K-에듀파인 콜센터", phone: "1566-0066", org: "K-에듀파인 상담센터", url: "" },
    { category: "업무포털/메신저", name: "전남메신저 문의", phone: "061-260-0666", org: "도교육청 총무과", url: "http://a.jne.go.kr" },
    { category: "업무포털/메신저", name: "공직자통합메일(mail.korea.kr) 사용자 승인", phone: "061-260-0192", org: "도교육청 글로컬미래교육과", url: "https://mail.korea.kr" },
    { category: "인증서(EPKI)", name: "교육부 행정전자서명인증센터 (고·특·각종학교)", phone: "061-260-0190", org: "도교육청 글로컬미래교육과 (초·중은 교육지원청 행정지원과)", url: "https://www.epki.go.kr" },
    { category: "학내망/보안관제", name: "기관 내 부분 네트워크 장애(유선망) / 스쿨넷 콜센터 / 사이트 차단해제 사전문의", phone: "061-260-5630", org: "전라남도교육청교육연구정보원", url: "" },
    { category: "학내망/보안관제", name: "PC 및 스마트기기 인터넷 접속 장애(무선망) / 차단사이트 허용 신청 문의", phone: "061-260-5633", org: "전라남도교육청교육연구정보원", url: "" },
    { category: "학내망/보안관제", name: "통합보안관제센터 (사이버침해사고 신고)", phone: "061-260-5635", org: "전라남도교육청 통합보안관제센터", url: "" },
    { category: "SW/보안솔루션", name: "윈도우, MS-오피스, 한글2024 라이선스·설치 문의", phone: "062-606-1200", org: "닷넷소프트", url: "http://a.jne.go.kr" },
    { category: "SW/보안솔루션", name: "소프트웨어 저작권 상담", phone: "1800-5455", org: "한국저작권위원회", url: "" },
    { category: "SW/보안솔루션", name: "알약(백신) 고객지원", phone: "1544-9744", org: "이스트시큐리티", url: "" },
    { category: "SW/보안솔루션", name: "개인정보 감사 솔루션 (MarkAny DRM / 문서 암호화)", phone: "1544-1204", org: "마크애니 고객지원", url: "" },
    { category: "SW/보안솔루션", name: "내PC지키미 관리자 페이지", phone: "교육지원청 보안담당", org: "○○교육지원청", url: "https://172.16.100.30/mc" },
    { category: "홈페이지/개인정보", name: "학교홈페이지 운영지원센터 (평일 09:00~18:00)", phone: "1660-4727", org: "전라남도교육청교육연구정보원", url: "https://help.jne.kr" },
    { category: "홈페이지/개인정보", name: "개인정보보호 종합지원시스템 (개인정보파일 등록·일제정비)", phone: "시스템 문의", org: "개인정보보호위원회", url: "https://intra.privacy.go.kr" },
    { category: "홈페이지/개인정보", name: "교육부 개인정보보호포털 (개인정보 1명 이상 유출 신고)", phone: "유출신고 창구", org: "교육부", url: "https://privacy.moe.go.kr" },
    { category: "나이스(NEIS)", name: "나이스 교무업무 / 대국민 / EVPN / 일반 행정영역(학운위·돌봄·방과후·학폭 등)", phone: "061-260-5641 ~ 5643", org: "나이스콜센터 (교육연구정보원)", url: "" },
    { category: "나이스(NEIS)", name: "나이스 행정영역 (교원인사 / 급식 / 교원 온라인 채용)", phone: "061-260-5772", org: "나이스콜센터 (교육연구정보원)", url: "" },
    { category: "나이스(NEIS)", name: "나이스 행정영역 (지방공무원·교육공무직 인사 / 급여 / 복무 / 민원 / 시스템·권한관리)", phone: "061-260-5773", org: "나이스콜센터 (교육연구정보원)", url: "" },
    { category: "나이스(NEIS)", name: "나이스 교육복지 (교육비, 교육급여)", phone: "061-260-0316 ~ 0317", org: "교육복지콜센터 (학령인구정책과)", url: "" },
    { category: "나이스(NEIS)", name: "나이스 학교 정보공시", phone: "061-260-0665", org: "학교정보공시 콜센터 (총무과)", url: "" },
    { category: "나이스(NEIS)", name: "나이스 대국민서비스 (학부모서비스, 나이스플러스, 교육디지털원패스)", phone: "1600-7440", org: "교육부 중앙상담센터", url: "" },
    { category: "나이스(NEIS)", name: "유아 나이스 중앙상담센터 (유치원교무학사, 유아학비 등)", phone: "1600-6565", org: "교육부, KERIS", url: "" }
  ]
};
