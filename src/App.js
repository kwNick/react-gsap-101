import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';

function App() {
  const headerRef = useRef(null);
  // console.log(headerRef)
  useGSAP(() => {
    gsap.from(headerRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: 'none',
      delay: 1,
    })
  }, [])
  return (
    <div className="App">
      <header ref={headerRef} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Scroll down to see sections being revealed by ScrollTrigger.
        </p>
      </header>
      <main className='App-main'>
        <div className='App-section'>
          <h2>Title</h2>
          <p>SubTitle</p>
        </div>
      </main>
    </div>
  );
}

export default App;
