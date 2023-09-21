import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    activeUserId: null,
  },
  reducers: {
    addUser: (state, action) => {
      const newItem = action.payload;
      state.users.push(newItem);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    addCommentToUser: (state, action) => {
      const { userId, comment } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        if (!user.comments) {
          user.comments = [];
        }
        user.comments.push(comment);
      }
    },
    setActiveUser: (state, action) => {
      state.activeUserId = action.payload;
    },
  },
});

export const { addUser, deleteUser, addCommentToUser, setActiveUser } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;
