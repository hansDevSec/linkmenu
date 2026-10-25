export type Profile = {
  name: string;
  bio: string;
  /** 프로필 사진 경로. 없으면 이름 첫 글자를 보여준다. */
  image?: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// TODO: 아래 값은 모두 자리 채우기용 더미입니다. 실제 내용으로 교체하세요.
export const profile: Profile = {
  name: "Hans",
  bio: "Hans Daiso",
  image: "/dummy-profile.svg",
};

export const links: LinkItem[] = [
  { id: "daiso", title: "다이소 공식 홈페이지", url: "https://www.daiso.co.kr" },
  { id: "daisomall", title: "다이소몰", url: "https://www.daisomall.co.kr" },
  { id: "daiso-japan", title: "다이소 일본 (DAISO Sangyo)", url: "https://www.daiso-sangyo.co.jp" },
];
