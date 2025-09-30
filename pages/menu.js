import Layout from '../components/Layout'
import { useState } from 'react'
import styles from '../styles/Menu.module.css'

export default function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <Layout>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Menu</h1>
            <p className={styles.heroSubtitle}>
              Crafted with passion, served with elegance
            </p>
          </div>
        </section>

        {/* Menu PDF Section */}
        <section className={styles.menuSection}>
          <div className={styles.container}>
            <div className={styles.menuContent}>
              <div className={styles.menuInfo}>
                <h2 className={styles.sectionTitle}>Our Complete Menu</h2>
                <p className={styles.menuDescription}>
                  Discover our carefully curated selection of cocktails, wines, and spirits. 
                  Each drink is crafted with precision and served with the elegance that defines Bar National.
                </p>
                <div className={styles.menuFeatures}>
                  <div className={styles.feature}>
                    <span className={styles.featureText}>Signature Cocktails</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureText}>Premium Wines</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureText}>Fine Spirits</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.menuViewer}>
                <div className={styles.pdfContainer}>
                  <iframe
                    src="/menu.pdf"
                    width="100%"
                    height="600px"
                    style={{ border: 'none', borderRadius: '8px' }}
                    title="Bar National Menu"
                    className={styles.pdfIframe}
                  />
                </div>
                <div className={styles.downloadSection}>
                  <button 
                    className={styles.viewMenuButton}
                    onClick={() => setIsModalOpen(true)}
                  >
                    View Full Menu
                  </button>
                  <a href="/menu.pdf" download className={styles.downloadButton}>
                    Download Menu PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Items Section */}
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Featured This Week</h2>
            <div className={styles.featuredGrid}>
              <div className={styles.featuredItem}>
                <h3 className={styles.itemTitle}>The Sofia Sunset</h3>
                <p className={styles.itemDescription}>
                  Our signature cocktail featuring Bulgarian rose petals, premium vodka, 
                  and a hint of local honey. A tribute to our beautiful city.
                </p>
                <span className={styles.itemPrice}>28 BGN</span>
              </div>
              
              <div className={styles.featuredItem}>
                <h3 className={styles.itemTitle}>Classic Old Fashioned</h3>
                <p className={styles.itemDescription}>
                  A refined classic with sophisticated presentation. Premium bourbon, house-made 
                  simple syrup, and elegant garnishes for that perfect finish.
                </p>
                <span className={styles.itemPrice}>32 BGN</span>
              </div>
              
              <div className={styles.featuredItem}>
                <h3 className={styles.itemTitle}>Elegant Martini</h3>
                <p className={styles.itemDescription}>
                  Sophisticated presentation with premium ingredients. Gin, dry vermouth, 
                  and a touch of refinement that defines our evening experience.
                </p>
                <span className={styles.itemPrice}>35 BGN</span>
              </div>
            </div>
          </div>
        </section>

        {/* Wine Selection */}
        <section className={styles.wineSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Wine Selection</h2>
            <div className={styles.wineGrid}>
              <div className={styles.wineCategory}>
                <h3 className={styles.categoryTitle}>Red Wines</h3>
                <div className={styles.wineList}>
                  <div className={styles.wineItem}>
                    <span className={styles.wineName}>Cabernet Sauvignon, Napa Valley</span>
                    <span className={styles.winePrice}>45 BGN</span>
                  </div>
                  <div className={styles.wineItem}>
                    <span className={styles.wineName}>Pinot Noir, Burgundy</span>
                    <span className={styles.winePrice}>52 BGN</span>
                  </div>
                  <div className={styles.wineItem}>
                    <span className={styles.wineName}>Merlot, Bordeaux</span>
                    <span className={styles.winePrice}>38 BGN</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.wineCategory}>
                <h3 className={styles.categoryTitle}>White Wines</h3>
                <div className={styles.wineList}>
                  <div className={styles.wineItem}>
                    <span className={styles.wineName}>Chardonnay, Chablis</span>
                    <span className={styles.winePrice}>48 BGN</span>
                  </div>
                  <div className={styles.wineItem}>
                    <span className={styles.wineName}>Sauvignon Blanc, Loire</span>
                    <span className={styles.winePrice}>42 BGN</span>
                  </div>
                  <div className={styles.wineItem}>
                    <span className={styles.wineName}>Riesling, Mosel</span>
                    <span className={styles.winePrice}>35 BGN</span>
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
              <h2 className={styles.ctaTitle}>Ready to Experience Our Menu?</h2>
              <p className={styles.ctaText}>
                Visit us at Bar National and let our expert bartenders craft the perfect drink for your evening.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/visit" className={styles.ctaButton}>
                  Make a Reservation
                </a>
                <a href="tel:+359896823923" className={styles.secondaryButton}>
                  Call +359 896 823 923
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile PDF Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Bar National Menu</h3>
              <button 
                className={styles.closeButton}
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <iframe
                src="/menu.pdf"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Bar National Menu"
                className={styles.modalPdf}
              />
            </div>
            <div className={styles.modalFooter}>
              <a href="/menu.pdf" download className={styles.modalDownloadButton}>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
