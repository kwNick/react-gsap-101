import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const sections = [
  {
    title: "Title 1",
    subtitle: "Subtitle 1",
  },
  {
    title: "Title 2",
    subtitle: "Subtitle 2",
  },
  {
    title: "Title 3",
    subtitle: "Subtitle 3",
  },
];

function App() {
  const [background, setBackground] = useState('#262626');
  const headerRef = useRef(null);
  const revealRefs = useRef([]);
  revealRefs.current = [];

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
  }, [background]);

  // console.log(headerRef)
  useGSAP(() => {
    gsap.from(headerRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: 'none',
      delay: 1,
    })

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
            markers: true,

          }
        });

    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
    // console.log(revealRefs.current);
  }

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

        {sections.map(({ title, subtitle }) => {
          return (
            <div key={title} className='App-section' ref={addToRefs}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          )
        })}
      </main>
    </div>
  );
}

export default App;
