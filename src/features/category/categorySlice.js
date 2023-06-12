import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
      name: "category",
      initialState: "",
      reducers: {
            updateCategory(state, action) {
                  return action.payload.update
            },
      },
})

export default slice.reducer

export const { updateCategory } = slice.actions

export const selectCategory = (state) => state.category
