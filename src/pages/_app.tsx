import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/globalStyle'
import { light, dark } from '../theme/Themes'
import { useDarkMode } from '../theme/useDarkMode'
import Toggle from '../components/Toggler'

export default function MyApp({ Component, pageProps }) {
    const [theme, themeToggler, mountedComponent] = useDarkMode()
    const themeMode = theme === 'light' ? light : dark
    if(!mountedComponent) return <div/>
    return(
        <ThemeProvider theme={themeMode}>
            <GlobalStyle/>
            <Toggle text={theme} theme={theme} toggleTheme={themeToggler} />
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}