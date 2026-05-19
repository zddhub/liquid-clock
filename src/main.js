import './style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Changelog from './components/Changelog';
import Footer from './components/Footer';

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    ${Hero()}
    ${Features()}
    ${Changelog()}
  </main>
  ${Footer()}
`;
