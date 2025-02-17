import "./style.css"

export { default as MyBrandButton } from "./MyBrandButton/MyBrandButton.vue"

export function decrement(count: number) {
    return count - 1
}

export function helloWorld() {
    console.log('@martelo-vue/core hello world!')
}