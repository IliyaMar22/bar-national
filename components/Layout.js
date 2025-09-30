import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <span className={styles.logoText}>Bar National</span>
              <span className={styles.logoSubtext}>Dancing, vibing and sipping drinks in the shadow of NDK</span>
            </Link>
          </div>
          
          <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
            <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/menu" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link href="/visit" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Visit Us</Link>
            <Link href="/gallery" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          </div>
          
          <button 
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Bar National</h3>
            <p className={styles.footerText}>
              Where every night is a performance, every drink is a masterpiece, 
              and every moment is pure theatrical magic.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Location</h4>
            <p className={styles.footerText}>
              1, Bulgaria Square<br />
              National Palace of Culture<br />
              Sofia 1000, Bulgaria
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Contact</h4>
            <p className={styles.footerText}>
              Phone: +359896823923<br />
              Email: info@barnational.bg
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a 
                href="https://www.instagram.com/bar.national?igsh=MXR0aGdsZDEzNGI1Zg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.instagramLink}
              >
                <span className={styles.instagramIcon}>📷</span>
                @bar.national
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Bar National. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
