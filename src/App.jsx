import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Testimonialsection from './components/Testimonialsection'
import BlogSection from './components/blogSection'
import FooterSection from './components/FooterSection'


function App() {

  return (
    <div>
      <Header/>
      <HeroSection/>
      <Testimonialsection/>
      <BlogSection/>
      <FooterSection/>
    </div>
  )
}

export default App
