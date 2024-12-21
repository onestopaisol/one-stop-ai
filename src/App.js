    import React from 'react';
    import './App.css';
    // MetaHeader Component
    function MetaHeader() {
    return (
        <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </>
    );
    }

    function UniCardPage() {
      return (
        <div className="uni-container">
          <video 
          autoplay="true" 
          muted="true" 
          loop="true" 
          playsinline 
          className="background-video"
          >
            <source src="https://www.uni.cards/videos/nxt_wave_bg.mp4" type="video/mp4" />
          </video>
          <header className="uni-header">
            <div className='uni-header-left'>
              <svg className="uni-logo" viewBox="0 0 85 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z" fill="black"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z" fill="black"></path>
              </svg>
            </div>
            <div className='uni-header-right'>
              <button class="uniPaychekButton" onclick="window.location.href='https://paychek.uni.club/'">Uni Paychek</button>
              <svg class="three-line" width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="31" height="2" fill="white"></rect><rect width="31" height="2" fill="white"></rect><rect width="31" height="2" fill="white"></rect><rect y="9" width="31" height="2" fill="white"></rect><rect y="9" width="31" height="2" fill="white"></rect><rect y="9" width="31" height="2" fill="white"></rect><rect y="18" width="31" height="2" fill="white"></rect><rect y="18" width="31" height="2" fill="white"></rect><rect y="18" width="31" height="2" fill="white"></rect></svg>
            </div>
          </header>
          <div className="uni-header-2">
            <div className='uni-header-left'>
              <div className="uni-content">
                <div className="uni-intro">
                  <div class="main-container">
                    <h1 class="main-heading">
                      <span class ="main-span-heading">
                        <strong>NX Wave.</strong> The next-gen credit card for those who love rewards.
                      </span>
                    </h1>
          
                    <div class="benefits">
                        1% Cashback
                        <svg class="benefit-icon" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z" fill="#000" ></path>
                        </svg>
                        5x Rewards
                        <svg class="benefit-icon" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z" fill="#000"Z></path>
                        </svg>
                        Zero Forex Markup
                    </div>
          
                    <div class="container">
                    <div class="form-wrapper">
                        <form>
                            <div class="input-group">
                                <div class="input-container">
                                    <input class="phone-input" placeholder="Enter Phone Number" value=""/>
                                    <span class="input-icon"></span>
                                </div>
                                <button type="submit" class="submit-button">
                                    <span>Apply Now</span>
                                </button>
                            </div>
                        </form>
                        <div class="consent-section">
                            <input type="checkbox" checked="true" id="consent-msg"/>
                            <label for="consent-msg" class="consent-label">You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label>
                        </div>
                    </div>
                    </div>

        
                    </div>
                </div>
              </div>
            </div>
            <div className='uni-header-right-2'>
              <div className="uni-image-display">
                <img src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png" alt="Card Preview" className="card-image" />
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    // MainContent Component
    function MainContent() {
    return (
        <div className="animated-element">
        <h1>Welcome to our Credit Card Service</h1>
        {/* <p>Discover the benefits and features of our credit card.</p> */}
        </div>
    );
    }

    // Features Component
    function Features() {
    return (
        <section className="featur  es-section">
        <h2>Features</h2>
        <ul>
            <li>0% Interest for the first 12 months</li>
            <li>High credit limits</li>
            <li>Amazing rewards program</li>
            {/* Add any other features as needed */}
        </ul>
        </section>
    );
    }

    // DownloadSection Component
    function DownloadSection() {
    return (
        <section className="download-section">
        <h2>Download Our App</h2>
        <a href="path_to_app_store" className="download-btn">App Store</a>
        <a href="path_to_play_store" className="download-btn">Play Store</a>
        </section>
    );
    }

    // FooterNotes Component
    function FooterNotes() {
    return (
        <footer>
        <p>&copy; 2023 Credit Card Company. All rights reserved.</p>
        <p>Terms and conditions apply.</p>
        </footer>
    );
    }

    // Main App Component
    function App() {
    return (
        <>
        <MetaHeader />
        <UniCardPage />
        {/* <MainContent /> */}
        {/* <Features />
        <DownloadSection />
        <FooterNotes /> */}
        </>
    );
    }

    export default App;
