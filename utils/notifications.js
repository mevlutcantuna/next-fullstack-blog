import { message } from "antd"

export const successMessage = (msg) => {
    return message.success(msg)
}

export const errorMessage = (msg) => {
    return message.error(msg)
}