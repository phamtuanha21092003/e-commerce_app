import { useRef } from "react"
import { useAccount } from "./hooks/useAccount"

export default function Test() {
  const { accounts, signUp } = useAccount((state) => state)
  const refEmail = useRef()
  const refPassword = useRef()
  console.log(accounts)
  return (
    <div>
      {Object.keys(accounts).map((item) => (
        <div key={`item_${item}`}>{item}</div>
      ))}
      <input type="text" ref={refEmail} />
      <input type="text" ref={refPassword} />
      <button
        onClick={() =>
          signUp({
            email: refEmail.current.value,
            password: refPassword.current.value,
          })
        }
      >
        sign up
      </button>
    </div>
  )
}
