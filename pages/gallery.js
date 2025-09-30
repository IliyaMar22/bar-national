import Layout from '../components/Layout'
import styles from '../styles/Gallery.module.css'

export default function Gallery() {
  return (
    <Layout>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImage}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Gallery</h1>
            <p className={styles.heroSubtitle}>
              A Visual Journey Through Bar National
            </p>
          </div>
          <div className={styles.heroOverlay}></div>
        </section>

        {/* Gallery Section */}
        <section className={styles.gallerySection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Step Inside Our World</h2>
            <p className={styles.sectionDescription}>
              Immerse yourself in the baroque elegance and theatrical atmosphere that makes 
              Bar National Sofia's most enchanting destination. Each image tells a story of 
              sophistication, drama, and unforgettable moments.
            </p>
            
            <div className={styles.galleryGrid}>

              {/* Signature Drinks */}
              <div className={styles.galleryCategory}>
                <h3 className={styles.categoryTitle}>Signature Drinks</h3>
                <div className={styles.imageGrid}>
                  <div className={styles.imageContainer}>
                    <img 
                      src="/gallery1.jpg" 
                      alt="Espresso Martinis" 
                      className={styles.galleryImage}
                    />
                    <div className={styles.imageOverlay}>
                      <h4 className={styles.imageTitle}>Espresso Martinis</h4>
                      <p className={styles.imageDescription}>
                        Rich, creamy espresso martinis with perfect foam and coffee notes
                      </p>
                    </div>
                  </div>
                  
                  <div className={styles.imageContainer}>
                    <img 
                      src="/gallery3.jpg" 
                      alt="Yellow Cocktail" 
                      className={styles.galleryImage}
                    />
                    <div className={styles.imageOverlay}>
                      <h4 className={styles.imageTitle}>Golden Elixir</h4>
                      <p className={styles.imageDescription}>
                        Vibrant yellow cocktail with white foam and exotic garnishes
                      </p>
                    </div>
                  </div>
                  
                  <div className={styles.imageContainer}>
                    <img 
                      src="/gallery4.jpg" 
                      alt="Creative Cocktail" 
                      className={styles.galleryImage}
                    />
                    <div className={styles.imageOverlay}>
                      <h4 className={styles.imageTitle}>Artistic Creation</h4>
                      <p className={styles.imageDescription}>
                        Whimsical cocktail presentation with creative garnishes and flair
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialty Coffee */}
              <div className={styles.galleryCategory}>
                <h3 className={styles.categoryTitle}>Specialty Coffee</h3>
                <div className={styles.imageGrid}>
                  <div className={styles.imageContainer}>
                    <img 
                      src="/gallery2.jpg" 
                      alt="Espresso Machine" 
                      className={styles.galleryImage}
                    />
                    <div className={styles.imageOverlay}>
                      <h4 className={styles.imageTitle}>Premium Espresso</h4>
                      <p className={styles.imageDescription}>
                        We source the finest coffee blends from around the world, carefully selected for their exceptional quality and unique flavor profiles
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.coffeeStory}>
                  <p className={styles.storyText}>
                    At Bar National, we believe that exceptional coffee is the foundation of great drinks. 
                    Our coffee program features carefully curated beans from renowned coffee regions worldwide, 
                    each selected for their distinctive characteristics and superior quality. From single-origin 
                    Ethiopian beans with their bright, floral notes to rich, chocolatey Colombian varieties, 
                    we work directly with trusted suppliers to bring you the world's finest coffee experiences.
                  </p>
                  <p className={styles.storyText}>
                    Our skilled baristas are trained in the art of espresso extraction, ensuring every shot 
                    is pulled to perfection. Whether you're enjoying a classic espresso, a creamy cappuccino, 
                    or one of our signature coffee cocktails, you'll taste the difference that premium sourcing 
                    and expert preparation make.
                  </p>
                </div>
              </div>

              {/* Events & Entertainment */}
              <div className={styles.galleryCategory}>
                <h3 className={styles.categoryTitle}>Events & Entertainment</h3>
                <div className={styles.imageGrid}>
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.imageContent}>
                      <h4 className={styles.imageTitle}>Cabaret Night</h4>
                      <p className={styles.imageDescription}>
                        Live performances every Friday with sophisticated entertainment
                      </p>
                    </div>
                  </div>
                  
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.imageContent}>
                      <h4 className={styles.imageTitle}>Jazz Sundays</h4>
                      <p className={styles.imageDescription}>
                        Intimate jazz sessions in our elegant setting
                      </p>
                    </div>
                  </div>
                  
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.imageContent}>
                      <h4 className={styles.imageTitle}>Special Events</h4>
                      <p className={styles.imageDescription}>
                        Private parties and celebrations in refined style
                      </p>
                    </div>
                  </div>
                  
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.imageContent}>
                      <h4 className={styles.imageTitle}>Wine Tastings</h4>
                      <p className={styles.imageDescription}>
                        Curated wine selections with expert sommeliers
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Behind the Scenes */}
        <section className={styles.behindScenesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Behind the Scenes</h2>
            <div className={styles.behindScenesContent}>
              <div className={styles.behindScenesText}>
                <h3 className={styles.behindScenesTitle}>The Art of Hospitality</h3>
                <p className={styles.behindScenesDescription}>
                  Every detail at Bar National is carefully curated to create an unforgettable 
                  experience. From the moment you step through our doors, you're transported 
                  to a world where baroque elegance meets modern sophistication.
                </p>
                <p className={styles.behindScenesDescription}>
                  Our team of expert mixologists, sommeliers, and hospitality professionals 
                  work tirelessly to ensure that every visit is a masterpiece of service and 
                  style. We believe that great hospitality is an art form, and we practice 
                  it with passion and precision.
                </p>
                <div className={styles.behindScenesStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>50+</span>
                    <span className={styles.statLabel}>Signature Cocktails</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>200+</span>
                    <span className={styles.statLabel}>Premium Spirits</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>∞</span>
                    <span className={styles.statLabel}>Memories Created</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.behindScenesImages}>
                <div className={styles.behindScenesImage}>
                  <div className={styles.imageContent}>
                    <h4 className={styles.imageTitle}>Our Mixologists</h4>
                    <p className={styles.imageDescription}>
                      Crafting perfection in every glass
                    </p>
                  </div>
                </div>
                
                <div className={styles.behindScenesImage}>
                  <div className={styles.imageContent}>
                    <h4 className={styles.imageTitle}>Wine Cellar</h4>
                    <p className={styles.imageDescription}>
                      Carefully selected from around the world
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Experience It Live</h2>
              <p className={styles.ctaText}>
                These images only capture a fraction of the magic that awaits you at Bar National. 
                Come and experience the full sensory journey for yourself.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/visit" className={styles.ctaButton}>
                  Plan Your Visit
                </a>
                <a href="tel:+359896823923" className={styles.secondaryButton}>
                  Make a Reservation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
