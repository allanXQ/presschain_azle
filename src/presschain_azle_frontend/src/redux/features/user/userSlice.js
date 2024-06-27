import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  status: "idle",
  error: null,
  username: "",
  email: "",
  type: "",
  isReviewer: "",
  articles: [],
  reviews: [],
};
export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      Object.assign(state, action.payload);
    },
    loginFailed(state, action) {
      state.isLoggedIn = false;
      state.error = action.payload.error;
    },
    logout(state) {
      Object.assign(state, initialState);
    },
    updateUser(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.startsWith("api/call/pending"),
        (state, action) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) => action.type.startsWith("api/call/fulfilled"),
        (state, action) => {
          state.status = "succeeded";
          switch (action.meta.arg.endpoint) {
            case "user/user-info":
              Object.keys(action.payload.data.user).forEach((key) => {
                state[key] = action.payload.data.user[key];
              });
              break;
            default:
              break;
          }
        }
      )
      .addMatcher(
        (action) => action.type.startsWith("api/call/rejected"),
        (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

export const selectUser = (state) => state.user;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectIsRegistered = (state) => state.user.isRegistered;
export const selectUserStatus = (state) => state.user.status;
export const selectUserError = (state) => state.user.error;

export const { loginSuccess, loginFailed, updateUser, logout } =
  userSlice.actions;
export default userSlice.reducer;
