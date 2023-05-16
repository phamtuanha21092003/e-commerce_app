import { configureStore } from "@reduxjs/toolkit"
import estimateReducer from "../features/estimate/estimateSlide"

export default configureStore({ reducer: { estimate: estimateReducer } })
