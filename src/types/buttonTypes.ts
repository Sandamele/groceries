import { ViewStyle } from "react-native"

export type ButtonProps = {
    title: string,
    handleFunction: () => void,
    btnBackground?: ViewStyle
}