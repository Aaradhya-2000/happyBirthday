import { useState, useEffect, useRef } from 'react';
import './App.css';

// --- Import all your images ---
import a1 from "./img/arpita1.jpeg";
import a2 from "./img/arpita2.jpeg";
import a3 from "./img/arpita3.jpeg";
import a4 from "./img/arpita4.jpeg";
import a5 from "./img/arpita5.jpeg";
import a6 from "./img/arpita6.jpeg";
import a7 from "./img/arpita7.jpeg";
import a8 from "./img/arpita8.jpeg";
import a9 from "./img/arpita9.jpeg";
import a10 from "./img/arpita10.jpeg";
import a11 from "./img/arpita11.jpeg";
import a12 from "./img/arpita12.jpeg";
import a13 from "./img/arpita13.jpeg";
import a14 from "./img/arpita14.jpeg";
import a15 from "./img/arpita15.jpeg";
import a16 from "./img/arpita16.jpeg";
import a17 from "./img/arpita17.jpeg";

function App() {
  // Array of all imported images
  const allImages = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17];
  
  // State for active section tracking
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRefs = useRef([]);
  const scrollTimeout = useRef(null);

  // --- Personalized messages for each photo ---
  const messages = [
    "You light up my world like nobody else ✨",
    "Your smile is my favorite thing in the universe 🌸",
    "Beautiful inside and out, that's who you are 💕",
    "Every day with you feels like a fairytale 🪄",
    "You are my sunshine on the darkest days ☀️",
    "Forever grateful that you chose me 🙏",
    "You make everything better just by being you 💫",
    "My favorite person to laugh and cry with 🌍",
    "You are so loved, more than you'll ever know ❤️",
    "Your laugh is the sweetest melody 🎵",
    "You are pure perfection in every way 🦋",
    "I adore you endlessly, my love 🌹",
    "You are my dream come true, every single day 🌙",
    "So proud of the incredible person you are 🌟",
    "You are my everything and so much more 💗",
    "Happy birthday, my beautiful queen 👑",
    "Here's to forever with you, my love 🥂"
  ];

  // --- Intersection Observer for scroll tracking ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { 
        threshold: 0.4,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // --- Handle scroll progress with debounce ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Generate floating hearts ---
  const [hearts, setHearts] = useState([]);
  useEffect(() => {
    const newHearts = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      size: 8 + Math.random() * 30,
      duration: 14 + Math.random() * 20,
      opacity: 0.05 + Math.random() * 0.2,
      rotation: Math.random() * 360,
    }));
    setHearts(newHearts);
  }, []);

  // --- Smooth scroll to section ---
  const scrollToSection = (index) => {
    const target = sectionRefs.current[index];
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <div className="App">
      {/* --- Floating Hearts Background --- */}
      <div className="hearts-container">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="floating-heart"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
              opacity: heart.opacity,
              transform: `rotate(${heart.rotation}deg)`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* --- Glowing Orb Background --- */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>

      {/* --- Scroll Progress Bar --- */}
      <div className="scroll-progress">
        <div 
          className="progress-bar" 
          style={{ 
            width: `${(activeIndex / (allImages.length + 1)) * 100}%`,
            transition: isScrolling ? 'width 0.15s ease' : 'width 0.5s ease'
          }} 
        />
      </div>

      {/* --- Navigation Dots --- */}
      <div className="nav-dots">
        {[...Array(allImages.length + 2)].map((_, i) => (
          <div
            key={i}
            className={`dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => scrollToSection(i)}
            title={`Go to ${i === 0 ? 'Hero' : i === allImages.length + 1 ? 'Final' : `Photo ${i}`}`}
          />
        ))}
      </div>

      {/* ========== HERO SECTION ========== */}
      <section 
        className="hero-section" 
        data-index={0} 
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🎂</span>
            Today is Extra Special
            <span className="badge-icon">🎂</span>
          </div>
          <h1 className="hero-title">
            Happy Birthday<br />
            <span className="highlight">Arpita</span>
          </h1>
          <p className="hero-subtitle">
            Every moment with you is a beautiful memory worth cherishing. <br />
            Scroll through our journey together, filled with love and laughter.
          </p>
          <div className="hero-emoji-rain">🎈✨🎉💖🌸</div>
          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </section>

      {/* ========== IMAGE GALLERY SECTIONS ========== */}
      {allImages.map((img, index) => {
        const isEven = index % 2 === 0;
        const isActive = index === activeIndex - 1;
        const message = messages[index] || "You are absolutely amazing 💖";
        
        return (
          <section
            key={index}
            className={`image-section ${isEven ? 'even' : 'odd'} ${isActive ? 'active' : ''}`}
            data-index={index + 1}
            ref={(el) => (sectionRefs.current[index + 1] = el)}
          >
            <div className="image-card">
              <div className="image-wrapper">
                <img
                  src={img}
                  alt={`Arpita ${index + 1}`}
                  className="section-image"
                  loading="lazy"
                />
                <div className="image-number">#{String(index + 1).padStart(2, '0')}</div>
                <div className="image-shine" />
                <div className="image-overlay"></div>
              </div>
              <div className="image-caption">
                <p className="caption-text">{message}</p>
                <div className="caption-decor">✦</div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ========== FINAL MESSAGE SECTION ========== */}
      <section 
        className="final-section" 
        data-index={allImages.length + 1} 
        ref={(el) => (sectionRefs.current[allImages.length + 1] = el)}
      >
        <div className="final-content">
          <div className="final-hearts">💖💕💗💝💘</div>
          
          {/* ===== YOUR PERSONALIZED MESSAGE ===== */}
          <div className="personal-message-container">
            <div className="personal-message-banner">
              <span className="banner-emoji-left">🎂</span>
              <h2 className="personal-message-title">
                Happy Birthday meri dedh footiya bass!
              </h2>
              <span className="banner-emoji-right">🎂</span>
            </div>
            
            <div className="personal-message-body">
              <div className="message-decoration left">🌸</div>
              <p className="personal-message-text">
                This is just a small token of love from my side. 
                I wanted to create something special that captures 
                all the beautiful moments we've shared together.
              </p>
              <div className="message-decoration right">🌸</div>
            </div>
          </div>
          
          <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-icon">❤️</span>
            <span className="divider-line"></span>
          </div>

          <h2 className="final-section-title">To My Dearest Arpita</h2>
          
          <p className="final-description">
            On your special day, I want you to know how much you truly mean to me.
            You are the most incredible, kind, and beautiful soul I've ever met.
            Every day with you is a gift, and I feel so lucky to have you in my life.
          </p>
          
          <p className="final-big">I Love You More Than Words Can Say ❤️</p>
          
          <div className="final-cake">🎂🎉🎈✨</div>
          
          <p className="final-message">
            Thank you for being you. I just wanna apologize for the mistake if i ever hurted you Jane Anjaane but u are the love of my life , Mein bolta nai hu but i miss you. I Miss our late night night VideoCalls and Talks escpecially tumhare kalesh. Haha Even through I love it too and more than that I Miss you Too, 
          </p>
          
          <div className="final-signature">
            <span className="signature-label">With all my love,</span>
            <span className="signature-name">Your Person ❤️</span>
          </div>
          
          <div className="final-quote">
            <span className="quote-mark">"</span>
            <p>You are not just my girlfriend, you are my best friend, my confidant, and my home.</p>
            <span className="quote-mark">"</span>
          </div>
          
          <p className="final-year">✨ 2026 • Forever & Always ✨</p>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-hearts">💖💕💗</div>
          <p className="footer-main">Made with ❤️ for the most amazing person in the world</p>
          <p className="footer-sub">Happy Birthday, Dedh Footiya! 🎂</p>
          <div className="footer-emoji">💖✨🌷🎈</div>
        </div>
      </footer>
    </div>
  );
}

export default App;