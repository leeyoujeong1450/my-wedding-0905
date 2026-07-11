/**
 * Modern Minimal Wedding Invitation Configuration
 *
 * Edit the values below to customize your wedding invitation.
 * Image files should be placed in the corresponding images/ subfolders
 * using sequential filenames (1.jpg, 2.jpg, ...).
 * The code auto-detects images by trying sequential filenames.
 *
 * Image folder conventions:
 *   images/hero/1.jpg       - Main wedding photo (single file)
 *   images/story/1.jpg, ... - Story section photos (auto-detected)
 *   images/gallery/1.jpg, . - Gallery photos (auto-detected)
 *   images/location/1.jpg   - Venue/map image (single file)
 *   images/og/1.jpg         - Kakao share thumbnail (single file)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "한기탁",
    nameEn: "한기탁",
    father: "한재현",
    mother: "장연옥",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이유정",
    nameEn: "이유정",
    father: "이상돈",
    mother: "김윤숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-09-05",
    time: "11:00",
    venue: "라온웨딩홀",
    hall: "23F 단독홀",
    address: "부산광역시 부산진구 중앙대로 640 ABL 부산타워 23층 (범천동 862-1)",
    tel: "051-631-2121",
    mapLinks: {
      kakao: "https://kko.to/ad5qyWwoa9",
      naver: "https://naver.me/FgHDI7TP"
    }
  },

  // ── 인사말 ──
  invitation: {
    title: "소중한 분들을 초대합니다",
    message: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n두 사람의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "한기탁", bank: "부산은행", number: "112-2008-8781-09" },
      { role: "아버지", name: "한재현", bank: "부산은행", number: "026-02-022562-8" },
      { role: "어머니", name: "장연옥", bank: "부산은행", number: "110-12-012345-8" }
    ],
    bride: [
      { role: "신부", name: "이유정", bank: "국민은행", number: "106902-04-236970" },
      { role: "아버지", name: "이상돈", bank: "신한은행", number: "984-04-018662" },
      { role: "어머니", name: "김윤숙", bank: "국민은행", number: "106-24-0280693" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "결혼식에 초대합니다",
    description: ""
  }
};
