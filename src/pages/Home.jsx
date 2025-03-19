/* eslint-disable react/prop-types */
import { ThemeProvider } from 'styled-components'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import VideoCarousel from '../components/VideoCarousel'
import FAQ from '../components/FAQ'
import Comanda from '../components/Comanda'
import { GlobalStyles } from '../styles/GlobalStyles'
import { lightTheme, darkTheme } from '../styles/Themes'

function Home({ theme, toggleTheme }) {
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <About />
            <VideoCarousel />
            <FAQ />
            <Comanda />
        </ThemeProvider>
    )
}

export default Home