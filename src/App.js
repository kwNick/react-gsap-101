import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';

function App() {
  const [background, setBackground] = useState('#262626');
  const headerRef = useRef(null);

  const toggleBackground = () => {
    const color = background !== '#262626' ? '#5a7d95' : '#1b4943';
    setBackground(color);
  }

  useGSAP(() => {
    gsap.to(headerRef.current, {
      duration: 1,
      backgroundColor: background,
      ease: 'none'
    });
  }, [background])

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
        <button onClick={() => toggleBackground()}>Toggle Background</button>
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
