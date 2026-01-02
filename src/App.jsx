import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from "./components/Skills";
import Education from "./components/Education";
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  },[]);
  
  return (
    <>
    <section id='navbar'><Navbar/></section>
    <section data-aos="fade-up" id='hero'className='mt-1'><Hero/></section>
    <section data-aos="fade-up" id='about'><About/></section>
    <section data-aos="fade-up" id='projects'><Projects/></section>
    <section data-aos="fade-up" id='skills'><Skills/> </section>
    <section data-aos="fade-up" id='edu'><Education/> </section>
    <section data-aos="fade-up" id='con'><ContactMe/> </section>
    <section><Footer/> </section>
    </>
  );
}

export default App
