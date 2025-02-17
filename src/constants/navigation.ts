export const NAVIGATION_KEYS = {
  EXCHANGES: "navigation.exchanges",
  ABOUT: "navigation.about",
} as const;

const navigation = [
  { name: NAVIGATION_KEYS.EXCHANGES, path: "/exchanges" },
  { name: NAVIGATION_KEYS.ABOUT, path: "/about" },
];

export default navigation;
