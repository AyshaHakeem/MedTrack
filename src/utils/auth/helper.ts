export const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("medtrack_token", accessToken);
  localStorage.setItem("medtrack_refresh_token", refreshToken);
};
