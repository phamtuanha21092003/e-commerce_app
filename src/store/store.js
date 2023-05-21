import { configureStore } from "@reduxjs/toolkit"
import accountSlice from "../features/account/accountSlice"

export default configureStore({ reducer: { accounts: accountSlice } })
