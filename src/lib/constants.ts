export const APP_NAME = "FindJob";

export const SESSION_COOKIE = "findjob_session";
export const SESSION_MAX_AGE = 60 * 60 * 8; // 8 horas

export const ROUTES = {
  home: "/",
  login: "/login",
  jobs: "/jobs",
  jobDetail: (id: number) => `/jobs/${id}`,
} as const;

export const THEME_COOKIE = "findjob_theme";
export const THEME_MAX_AGE = 60 * 60 * 24 * 365; // 1 año
