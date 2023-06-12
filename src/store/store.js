import { configureStore } from "@reduxjs/toolkit"
import accountSlice from "../features/account/accountSlice"
import categorySlice from "../features/category/categorySlice"

export default configureStore({
      reducer: { accounts: accountSlice, category: categorySlice },
})
