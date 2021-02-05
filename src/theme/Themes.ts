import { DefaultTheme } from "styled-components"

declare module 'styled-components'{
    export interface DefaultTheme{
        body: string
        light: string
        text: string
        ptext: string
        link: string
        secondary: string
        tertiary: string
        shadow: string
        hover: string
    }
}

export const light: DefaultTheme = {
    body:'#f4f4f4',
    light:'#A8D386',
    text:'black',
    ptext:'#888888',
    link:'#A8D386',
    secondary:'white',
    tertiary:'#4D4D4D',
    shadow:'#666666',
    hover:'#888888'

}

export const dark = {
    body:'#191414',
    text:'#ebebeb'
}

/*
    body:'#f4f4f4',
    text: '#0a0a0a',
    shadow: 'a',
    dark-shadow:'a',
*/
