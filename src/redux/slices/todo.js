import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const todoData = await fetch("https://jsonplaceholder.typicode.com/todos");
  return todoData.json();
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    todos: [],
    isError: false
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default todoSlice.reducer;
