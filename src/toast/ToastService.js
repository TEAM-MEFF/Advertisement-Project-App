import { useContext } from "react"
import { createContext } from "react"

const ToastContext = createContext()
export const useToast = () => useContext(ToastContext)
export default ToastContext