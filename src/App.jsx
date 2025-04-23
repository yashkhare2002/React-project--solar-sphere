import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TestimonialSection from "./components/TestimonialSection";
import FooterSection from './components/FooterSection'
import BlogSection from './components/BlogSection'


function App() {

  return (
    <div>
      <Header/>
      <HeroSection/>
      <TestimonialSection/>
      <BlogSection/>
      <FooterSection/>
    </div>
  )
}

export default App
