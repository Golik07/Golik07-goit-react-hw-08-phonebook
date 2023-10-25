export const getLogin = state => state.auth.isLoggedIn;

export const getUser = state => state.auth.user;

export const getRefreshing = state => state.auth.isRefreshing;
