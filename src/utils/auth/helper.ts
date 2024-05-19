const isLoggedIn = () => {
  // const token = localStorage.getItem('medtrack_token');
  const token = "";
  return !!token; // Return true if token exists, false otherwise
};

export const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("medtrack_token", accessToken);
  localStorage.setItem("medtrack_refresh_token", refreshToken);
};

export default isLoggedIn;
