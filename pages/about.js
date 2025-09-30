import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImage}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Story</h1>
            <p className={styles.heroSubtitle}>
              Where Baroque Meets Modern Nightlife
            </p>
          </div>
          <div className={styles.heroOverlay}></div>
        </section>

        {/* Main Content */}
        <section className={styles.mainContent}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>A Theatrical Vision</h2>
              <p className={styles.paragraph}>
                Bar National was born from a dream to create something extraordinary in the heart of Sofia. 
                Nestled in the shadow of the National Palace of Culture, our establishment draws inspiration 
                from the grandeur of baroque architecture and the intimate allure of cabaret culture.
              </p>
              
              <p className={styles.paragraph}>
                Every detail of our interior tells a story of opulence and drama. From the rich velvet 
                textures that adorn our seating to the ornate chandeliers that cast their golden glow 
                across the room, we've created an atmosphere that transports you to a bygone era of 
                sophistication and revelry.
              </p>

              <div className={styles.highlightBox}>
                <h3 className={styles.highlightTitle}>Our Philosophy</h3>
                <p className={styles.highlightText}>
                  "We believe that every evening should be a performance, every drink a masterpiece, 
                  and every guest the star of their own show. At Bar National, we don't just serve 
                  drinks – we craft experiences that linger in memory long after the night ends."
                </p>
              </div>

              <h2 className={styles.sectionTitle}>The Sofia Connection</h2>
              <p className={styles.paragraph}>
                Our location in the heart of Sofia's cultural district is no coincidence. The National 
                Palace of Culture, with its imposing presence and rich history, serves as the perfect 
                backdrop for our baroque-inspired sanctuary. We've become a beloved part of the city's 
                nightlife, offering both locals and visitors a unique escape from the ordinary.
              </p>

              <p className={styles.paragraph}>
                Whether you're a regular patron or a first-time visitor, Bar National welcomes you 
                into a world where the boundaries between performer and audience blur, where every 
                conversation is enhanced by the ambient glow of our carefully curated lighting, 
                and where the spirit of Sofia's artistic heritage comes alive in every corner.
              </p>
            </div>

          </div>
        </section>


        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Join Our Story</h2>
              <p className={styles.ctaText}>
                Experience the magic of Bar National and become part of our ongoing narrative. 
                Your story begins here, in the shadow of NDK.
              </p>
              <a href="/visit" className={styles.ctaButton}>
                Visit Us Tonight
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
