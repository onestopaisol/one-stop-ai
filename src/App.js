
import { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import './style.css'
import './App.css'
import logo from './assets/images/onestopailogo.png';
import dg1 from './assets/images/dg1.png';
import dg2 from './assets/images/dg2.png';
export default function EnfiniteCarousel() {
  const partners = [
    {
      src: "https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/64512c58c8b8344d5890d573_palm%20drive.webp",
      alt: "Palm Drive logo",
      title: "Palm Drive Capital"
    },
    {
      src: "https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/64512c7acf3b7136d308c45c_next%20to%20palm%20drive.webp",
      alt: "Next to Palm Drive logo",
      title: "Orange Collective"
    },
    {
      src: "https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/66fd04d8dc59e7cd95f85dac_trac2.png",
      alt: "Trac VC",
      title: "Trac VC"
    },
    {
      src: "https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/665d7edc52e1bfaa2e52b427_m12.png",
      alt: "Microsoft's M12",
      title: "Microsoft's M12"
    },
    // Add more partners as needed
  ];

  // States
  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const settings = {
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Slide change interval in milliseconds
    arrows: false, // Disable navigation arrows
    dots: true, // Enable dots navigation
    infinite: true, // Enable infinite loop

  };

  return (
    <>
    

      {/* <Header /> */}
      <section id="hero" className="section section-hero-v3-8">
        {/* Finsweet Slider Dots Script */}
        <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                // className="background-video"
                // style={{ height: `${videoHeight}px` }}
                class="background-video"
                >
            
                <source src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        <div>
        </div>
        <Box className="w-layout-blockcontainer container-hero-v3-8 w-container">
          <Box className="col-hero-header">
            <Box className='label-unify '>
              <img src={logo} width={76} height={20} alt='onestopailogo' className='unify-logo' />
            </Box>
            <Typography variant='h1' className="heading-large-take-back-desktop">
                      Fast, Reliable, Accurate All in one
            </Typography>
            <Typography variant='h1' className="heading-large-v3-8 mobile">
            Fast, Reliable, Accurate All in one
            </Typography>
            <Typography variant='h1' className="heading-large-take-back mobile">
            Fast, Reliable, Accurate All in one
            </Typography>

            <div className="cta-buttons-holder">
              {/* <a
                href="https://console.unify.ai"
                className="large-button v3-8 white w-button"
              >
                try now
              </a> */}
              <a
                href="https://calendly.com/unify-chat/general"
                target="_blank"
                className="large-button v3-8 w-button"
              >
                talk to us
              </a>
            </div>
          </Box>
        </Box>

        {/* Mobile CTA */}
        <div className="cta-buttons-holder mobile">
          <a href="https://unify.ai/docs/hub/" target="_blank" className="large-button v3-8 white w-button">
            read docs
          </a>
          <a href="https://unify.ai/hub" target="_blank" className="large-button v3-8 w-button">
            try now
          </a>
        </div>


      </section>
      <section id="one-api" class="section section-api">
        <div class="container flex one-api">
          <div class="column-left">
            <img src={dg1} layout="fill"
              alt="" class="one-api-graphic" />
            <img src={dg1} loading="lazy" layout="fill"
              objectFit="cover" alt="" class="one-api-graphic-tab" />
            <img src={dg1} loading="lazy" layout="fill"
              objectFit="cover" alt="" class="one-api-graphic-mob" />
          </div>

          <div className='column-right in-flex'>
            <div class="col-100 one-api">
              {/* <div class="green-label light">api</div> */}
              <br/>
              <h2 class="heading-medium-3-8 one-api desktop">All Models, <br />All Providers, <br />‍<span class="span-semibold">One API</span></h2>
              <h2 class="heading-medium-3-8 one-api tablet">All Models, All Providers, <span class="span-semibold">One API</span></h2>
            </div>

            <div class="col-100">
              <p class="paragraph-medium-3-8 top-padding one-api">Access all LLMs across all providers with a single API key and a standard API.</p>
            </div>

            <div class="holder-api">
              <div class="main-panel-2 shadow-back">
                <div class="block-1-2">
                  <div class="code-blox-2">
                    <div class="code-blocks-2">
                      <div class="frame-1171275246">
                        <div class="code">
                          <div className="consolas white">
                            # API endpoint<br />
                            url = "https://onestopai.co.in/api/get_answer"<br /><br />
                            # Query parameter<br />
                            {/* params = {"question": "What is machine learning?"}<br /><br /> */}
                            try:<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;# Send a GET request to the API<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;response = requests.get(url, params=params)<br /><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;# Check if the request was successful<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;if response.status_code == 200:<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Parse the JSON response<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = response.json()<br />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="logo-container">
                      <div className="api-panel-buttons">
                        <img
                          src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/65f07d17d252211ee186eaf8_267_Python-1024-1.png"
                          alt="python"
                          width={26}
                          height={26.10328483581543}
                          loading="lazy"
                          className="api-panel-button-image"
                        />
                      </div>
                      <div className="api-panel-buttons">
                        <img
                          src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/65f07d180f8f9f4a3778faed_nodejs-png-part-4-node-js-execution-time-800-1.png"
                          alt="node.js"
                          width={27.387271881103516}
                          height={28.2785587310791}
                          loading="lazy"
                          className="api-panel-button-image"
                        />
                      </div>
                      <div className="api-panel-buttons">
                        <img
                          src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/65f07d180256e2b1f444e253_2184868-1.png"
                          alt="c"
                          width={27.387271881103516}
                          height={26.10328483581543}
                          loading="lazy"
                          className="api-panel-button-image"
                        />
                      </div>
                      <div className="api-panel-buttons">
                        <img
                          src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/65f07d1929d2e9c41eb29079_php_PNG25-1.png"
                          alt="php"
                          width={27.387271881103516}
                          height={26.10328483581543}
                          loading="lazy"
                          className="api-panel-button-image"
                        />
                      </div>
                      <div className="api-panel-buttons">
                        <img
                          src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/65f07d1abf9f680e45b3772d_ruby_PNG29-1.png"
                          alt="ruby"
                          width={18.258180618286133}
                          height={15.114814758300781}
                          loading="lazy"
                          className="api-panel-button-image"
                        />
                      </div>
                      <div class="api-panel-buttons"><div class="api-panel-button-image">...</div></div>
                    </div>
                  </div>
                  {/* <a href="https://console.unify.ai/" target="_blank" class="large-button v3 flex w-button">make your first request</a> */}
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      <section class="section section-custom-routing">
        <div class="container flex custom-routing">
          <div class="column-left">
            <img src={dg2} loading="lazy" layout="fill"
              objectFit="cover" alt="Throughput Scatter Graph" class="scatter-graph-img-desktop" />
          </div>
          <div class="column-right no-margin custom-routing">
            <div class="header-holder">
              <div class="col-100">
                {/* <div class="green-label"> */}
                  {/* <div>efficient</div> */}
                {/* </div> */}
                <h2 class="heading-medium-3-8 custom-routing desktop">Faster, Cheaper and
                  <span class="span-semibold">Better Performance</span></h2>
                <h2 class="heading-medium-3-8 custom-routing tablet">Faster, Cheaper and <br />
                  <span class="span-semibold">Better Performance</span>
                </h2><div class="grad-connect-line custom-routing">
                </div>
              </div>
              <div class="descriptor">
                <div class="paragraph-medium-3-8 top-padding">Personalize your speed, quality and cost requirements, and get the LLM performance you need for your task</div>
              </div>
            </div>
          </div>
          <img src={dg2} loading="lazy" layout="fill"
            objectFit="cover" alt="Throughput Scatter Graph" class="scatter-graph" />
        </div>
      </section>
    </>
  );
}
