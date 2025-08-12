declare function require(path: string): any;
export const Images = {
  home: require("@/assets/images/home.png"),
  profile: require("@/assets/images/profile.png"),
  save: require("@/assets/images/save.png"),
  search: require("@/assets/images/search.png"),
} as const;
