import { createSlice } from "@reduxjs/toolkit"
import { format } from "date-fns"
import { toast } from "react-toastify"
import { v4 as uuid } from "uuid"

const slice = createSlice({
        name: "account",
        initialState: {
                phamha: {
                        password: "12345678",
                        lastName: "pham",
                        firstName: "ha",
                        cart: [],
                        ordered: [],
                },
        },
        reducers: {
                signUp(state, action) {
                        const { email, password, firstName, lastName } =
                                action.payload
                        if (!email || !password || !firstName || !lastName) {
                                toast.error("vui lòng nhập đầy đủ thông tin")
                                return
                        }
                        if (state[email]) {
                                toast.error("email đã tồn tại")
                                return
                        }
                        state[email] = {
                                password,
                                lastName,
                                firstName,
                                cart: [],
                                ordered: [],
                        }
                        toast.success("đăng kí thành công")
                },
                signIn(state, action) {
                        const { email, password } = action.payload
                        if (!email || !password) {
                                toast.warn("vui lòng nhập đầy đủ thông tin ")
                                return
                        }
                        if (state[email]?.password === password) {
                                localStorage.setItem("email", email)
                                toast.success("đang nhập thành công")
                                return
                        }
                        toast.error("email hoặc mật khẩu không đúng")
                },
                addToCart(state, action) {
                        const { email, id, quantity } = action.payload
                        if (!quantity) {
                                return
                        }
                        const isExistProductToCart = state[email].cart.find(
                                (product) => product[id]
                        )
                        if (!isExistProductToCart) {
                                state[email].cart = [
                                        ...state[email].cart,
                                        { [id]: quantity },
                                ]
                                toast.success(
                                        "sản phẩm đã được thêm vào giỏ hàng"
                                )
                                return
                        }
                        isExistProductToCart[id] += quantity
                        toast.success("sản phẩm đã được thêm vào giỏ hàng")
                },
                incrementProduct(state, action) {
                        const { id, email } = action.payload
                        const product = state[email]?.cart?.find(
                                (product) => product[id]
                        )
                        product[id] += 1
                },
                decrementProduct(state, action) {
                        const { id, email } = action.payload
                        const product = state[email]?.cart?.find(
                                (product) => product[id]
                        )
                        console.log("id", id)
                        product[id] -= 1
                },
                deleteProductToCart(state, action) {
                        const { id, email } = action.payload
                        state[email].cart = state[email]?.cart?.filter(
                                (product) => {
                                        const [key] = Object.keys(product)
                                        return key !== id
                                }
                        )
                },
                order: {
                        reducer(state, action) {
                                const { email, ...rest } = action.payload
                                state[email].ordered = [
                                        ...state[email].ordered,
                                        { ...rest },
                                ]
                        },
                        prepare({ products, ...rest }) {
                                const productOrder = products.map(
                                        (product) => ({
                                                "sản phẩm": product.title,
                                                "số lượng": product.count,
                                        })
                                )
                                const timeFormat = format(
                                        new Date(),
                                        "dd/MM/yyy"
                                )
                                return {
                                        payload: {
                                                id: uuid(),
                                                time: timeFormat,
                                                productOrder,
                                                ...rest,
                                        },
                                }
                        },
                },
        },
})

export const {
        signUp,
        signIn,
        addToCart,
        incrementProduct,
        decrementProduct,
        deleteProductToCart,
        order,
} = slice.actions

export default slice.reducer

export const selectAccount = (state) => state.accounts
export const selectAccountByEmail = (state, email) => state.accounts[email]
export const selectOrderHistory = (state, email) =>
        state.accounts[email].ordered
