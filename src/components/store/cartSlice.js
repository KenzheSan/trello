import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../general";
const initialState = {
  items: [
    {
      title: "title",
      innerTasks: [],
    },
  ],
};
export const postUser = createAsyncThunk(
  "user/postUser",
  async (data, { rejectWithValue }) => {
    await fetch(`${BASE_URL}users.json`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return data;
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addValue(state, action) {
      state.items.push(action.payload);
    },
    addListTodo(state, action) {
      const { id, value, desId, checked, subArray } = action.payload;
      const findUser = state.items.find((item) => item.id === id);
      findUser.innerTasks.push({
        id: desId,
        value: value,
        checked: checked,
        subArray: subArray,
      });
    },
    subArrayAdd(state, action) {
      const { id, getCommentvalue } = action.payload;
      for (const key of state.items) {
        const findSubarray = key.innerTasks.find((item) =>
          console.log(item.id, "item.id")
        );
        console.log(findSubarray, "subbaray");
        findSubarray.subArray.push({
          comment: getCommentvalue,
          id: id,
        });
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
