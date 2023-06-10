import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { deleteProductToCart } from "../features/account/accountSlice"

export default function ModalSell({ isOpen, setIsOpen, id, email }) {
        useEffect(() => {
                if (isOpen) document.body.style.overflow = "hidden"
                return () => {
                        document.body.style.overflow = "auto"
                }
        }, [])
        const dispatch = useDispatch()
        return (
                isOpen && (
                        <div
                                className="modal-overlay"
                                onClick={() => setIsOpen(false)}
                        >
                                <div
                                        className="modal"
                                        onClick={(e) => {
                                                e.stopPropagation()
                                        }}
                                >
                                        <div className="modal-content">
                                                <h2>
                                                        Bạn chắc chắn muốn bỏ
                                                        sản phẩm này?
                                                </h2>
                                                <div className="modal-actions">
                                                        <button
                                                                onClick={() =>
                                                                        setIsOpen(
                                                                                false
                                                                        )
                                                                }
                                                        >
                                                                Không
                                                        </button>
                                                        <button
                                                                onClick={() => {
                                                                        dispatch(
                                                                                deleteProductToCart(
                                                                                        {
                                                                                                email,
                                                                                                id,
                                                                                        }
                                                                                )
                                                                        )
                                                                        setIsOpen(
                                                                                false
                                                                        )
                                                                }}
                                                        >
                                                                Xóa
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                                npm run dev
                        </div>
                )
        )
}
