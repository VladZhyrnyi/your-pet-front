export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectMyPets = state => state.auth.pets;

export const selectIsLoadingUser = state => state.isLoading;

export const selectIsError = state => state.auth.isError;

export const selectErrorMessage = state => state.auth.errorMessage;
