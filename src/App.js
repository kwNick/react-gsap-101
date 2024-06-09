import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  const headerRef = useRef(null);
  console.log(headerRef)
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
