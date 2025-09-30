import Layout from '../components/Layout'
import styles from '../styles/Visit.module.css'

export default function Visit() {
  return (
    <Layout>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Visit Us</h1>
            <p className={styles.heroSubtitle}>
              Come for the drinks, stay for the drama
            </p>
          </div>
          <div className={styles.heroOverlay}></div>
        </section>

        {/* Location Section */}
        <section className={styles.locationSection}>
          <div className={styles.container}>
            <div className={styles.locationContent}>
              <div className={styles.locationInfo}>
                <h2 className={styles.sectionTitle}>Find Us in the Heart of Sofia</h2>
                <div className={styles.addressCard}>
                  <div className={styles.addressDetails}>
                    <h3 className={styles.addressTitle}>Bar National</h3>
                    <p className={styles.addressText}>
                      1, Bulgaria Square<br />
                      National Palace of Culture<br />
                      Sofia 1000, Bulgaria
                    </p>
                  </div>
                </div>
                
                <div className={styles.contactCard}>
                  <div className={styles.contactDetails}>
                    <h3 className={styles.contactTitle}>Reservations & Inquiries</h3>
                    <p className={styles.contactText}>
                      <a href="tel:+359896823923" className={styles.phoneLink}>
                        +359 896 823 923
                      </a>
                    </p>
                    <p className={styles.contactText}>
                      <a href="mailto:info@barnational.bg" className={styles.emailLink}>
                        info@barnational.bg
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={styles.mapContainer}>
                <div className={styles.mapWrapper}>
                  <h3 className={styles.mapTitle}>Find Us on Google Maps</h3>
                  <p className={styles.mapText}>
                    Located in the cultural heart of Sofia, just steps away from 
                    the National Palace of Culture and easily accessible by public transport.
                  </p>
                  <div className={styles.mapFeatures}>
                    <div className={styles.mapFeature}>
                      <span>Metro Station: NDK</span>
                    </div>
                    <div className={styles.mapFeature}>
                      <span>Multiple Bus Lines</span>
                    </div>
                    <div className={styles.mapFeature}>
                      <span>Nearby Parking</span>
                    </div>
                  </div>
                  <div className={styles.googleMap}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.5!2d23.3202484!3d42.6841335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8587b4aaaced%3A0x4a679c0453d57072!2sNDK!5e0!3m2!1sen!2sbg!4v1700000000000!5m2!1sen!2sbg"
                      width="100%"
                      height="400"
                      style={{ border: 0, borderRadius: '15px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Bar National Location - NDK, Sofia"
                    ></iframe>
                  </div>
                  <div className={styles.mapActions}>
                    <a 
                      href="https://www.google.com/maps/dir//NDK,+1+Bulgaria+Square,+1000+Sofia/@42.684104,23.2378477,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40aa8587b4aaaced:0x4a679c0453d57072!2m2!1d23.3202484!2d42.6841335?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.directionsButton}
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hours Section */}
        <section className={styles.hoursSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Opening Hours</h2>
            <div className={styles.hoursGrid}>
              <div className={styles.hoursCard}>
                <h3 className={styles.hoursTitle}>Monday - Thursday</h3>
                <p className={styles.hoursTime}>6:00 PM - 2:00 AM</p>
                <p className={styles.hoursNote}>Happy Hour: 6:00 PM - 8:00 PM</p>
              </div>
              
              <div className={styles.hoursCard}>
                <h3 className={styles.hoursTitle}>Friday - Saturday</h3>
                <p className={styles.hoursTime}>6:00 PM - 3:00 AM</p>
                <p className={styles.hoursNote}>Live Music: 9:00 PM - 1:00 AM</p>
              </div>
              
              <div className={styles.hoursCard}>
                <h3 className={styles.hoursTitle}>Sunday</h3>
                <p className={styles.hoursTime}>7:00 PM - 1:00 AM</p>
                <p className={styles.hoursNote}>Jazz Night: 8:00 PM - 12:00 AM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Special Events Section */}
        <section className={styles.eventsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Special Events</h2>
            <div className={styles.eventsContent}>
              <div className={styles.eventCard}>
                <h3 className={styles.eventTitle}>Cabaret Nights</h3>
                <p className={styles.eventDescription}>
                  Every Friday, experience the magic of cabaret with live performances, 
                  theatrical cocktails, and an atmosphere that transports you to the 
                  golden age of entertainment.
                </p>
                <p className={styles.eventSchedule}>Fridays at 9:00 PM</p>
              </div>
              
              <div className={styles.eventCard}>
                <h3 className={styles.eventTitle}>Jazz Sundays</h3>
                <p className={styles.eventDescription}>
                  Unwind with smooth jazz and sophisticated cocktails in our intimate 
                  setting. Perfect for a relaxed evening with friends or a romantic date.
                </p>
                <p className={styles.eventSchedule}>Sundays at 8:00 PM</p>
              </div>
              
              <div className={styles.eventCard}>
                <h3 className={styles.eventTitle}>Mixology Masterclasses</h3>
                <p className={styles.eventDescription}>
                  Learn the art of cocktail making from our expert bartenders. 
                  Discover the secrets behind our signature drinks and impress 
                  your friends with your new skills.
                </p>
                <p className={styles.eventSchedule}>First Saturday of each month</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation Section */}
        <section className={styles.reservationSection}>
          <div className={styles.container}>
            <div className={styles.reservationContent}>
              <h2 className={styles.reservationTitle}>Make a Reservation</h2>
              <p className={styles.reservationText}>
                Ensure your spot in Sofia's most enchanting bar. Whether it's a romantic 
                dinner, a celebration with friends, or a special occasion, we'll make 
                sure your evening is unforgettable.
              </p>
              
              <div className={styles.reservationMethods}>
                <div className={styles.reservationMethod}>
                  <div className={styles.methodIcon}>📞</div>
                  <h3 className={styles.methodTitle}>Call Us</h3>
                  <p className={styles.methodDescription}>
                    Speak directly with our team to discuss your needs and preferences.
                  </p>
                  <a href="tel:+359896823923" className={styles.methodButton}>
                    +359 896 823 923
                  </a>
                </div>
                
                <div className={styles.reservationMethod}>
                  <div className={styles.methodIcon}>✉️</div>
                  <h3 className={styles.methodTitle}>Email Us</h3>
                  <p className={styles.methodDescription}>
                    Send us your reservation details and we'll confirm within 24 hours.
                  </p>
                  <a href="mailto:reservations@barnational.bg" className={styles.methodButton}>
                    reservations@barnational.bg
                  </a>
                </div>
                
                <div className={styles.reservationMethod}>
                  <div className={styles.methodIcon}>💬</div>
                  <h3 className={styles.methodTitle}>Walk-In Welcome</h3>
                  <p className={styles.methodDescription}>
                    While reservations are recommended, we always welcome walk-in guests 
                    when space is available.
                  </p>
                  <span className={styles.methodNote}>Subject to availability</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Experience the Magic?</h2>
              <p className={styles.ctaText}>
                Join us at Bar National and discover why we're Sofia's most talked-about 
                destination for an unforgettable night out.
              </p>
              <div className={styles.ctaButtons}>
                <a href="tel:+359896823923" className={styles.ctaButton}>
                  Call Now
                </a>
                <a href="mailto:info@barnational.bg" className={styles.secondaryButton}>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
