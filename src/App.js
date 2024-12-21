// components/EnfiniteCarousel.js
'use client'
// import Image from 'next/image';
// import Link from 'next/link';
import { useState, useEffect } from 'react';

// import { Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import { Box, Typography } from "@mui/material";
import './style.css'
import './App.css'
// import Accordion from '@mui/material/Accordion'
// import AccordionSummary from '@mui/material/AccordionSummary'
// import AccordionDetails from '@mui/material/AccordionDetails'

// import Header from './header/header'
// import Footer from './footer/footer';
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
  // const [videoHeight, setVideoHeight] = useState(0);

    // useEffect(() => {
    //     const updateVideoHeight = () => {
    //         const headerHeight = document.querySelector('.uni-header')?.offsetHeight || 0;
    //         const contentHeight = document.querySelector('.uni-header-2')?.offsetHeight || 0;
    //         setVideoHeight(headerHeight + contentHeight);
    //     };

    //     updateVideoHeight();
    //     window.addEventListener('resize', updateVideoHeight);

    //     return () => window.removeEventListener('resize', updateVideoHeight);
    // }, []);

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
            {/* <header className="uni-header">
                <div className='uni-header-left'>
                    <svg className="uni-logo" viewBox="0 0 85 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z" fill="black"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z" fill="black"></path>
                    </svg>
                </div>
            </header> */}
            {/* <div className="uni-header-2">
                <div className='uni-header-left'>
                    <div className="uni-content">
                        <div className="uni-intro">
                            <div className="main-container">
                                <h1 className="main-heading">
                                    <span className="main-span-heading">
                                        <strong className="animated-word">OneStopAi</strong>
                                        <span className="animated-word">One</span>
                                        <span className="animated-word">solution</span>
                                        <span className="animated-word">for</span>
                                        <span className="animated-word">all</span>
                                        <span className="animated-word">your</span>
                                        <span className="animated-word">ai</span>
                                        <span className="animated-word">needs.</span>
                                    </span>
                                </h1>
                                <CircleAnimation/>
                                <div className="container-clients hero-wide">
                                    <div className="text-16">trusted by engineers at</div>
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView={4}
                                        loop={true}
                                        autoplay={{
                                            delay: 0,
                                            disableOnInteraction: false,
                                        }}
                                        speed={800}
                                    >
                                        <SwiperSlide>
                                            <img
                                                src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6605a811ab1799d64b5cba7b_stanford.svg"
                                                alt="stanford logo"
                                                width={100}
                                                height={50}
                                                loading="lazy"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6605a811ab1799d64b5cba7b_stanford.svg"
                                                alt="stanford logo"
                                                width={100}
                                                height={50}
                                                loading="lazy"
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        <Box className="w-layout-blockcontainer container-hero-v3-8 w-container">
          <Box className="col-hero-header">
            <Box className='label-unify '>
              <img src='/team/onestopailogo.png' width={76} height={20} alt='onestopailogo' className='unify-logo' />
            </Box>


            {/* <Typography variant='h1' className="heading-large-v3-8">
              One Stop Solution For <br />Every Prompt
            </Typography> */}
            <Typography variant='h1' className="heading-large-take-back-desktop">
                {/* <span className="main-span-heading"> */}
                    {/* <strong className="animated-word"> */}
                      
                      {/* </strong> */}
                    {/* <div className="animated-word"> */}
                      Fast, Reliable, Accurate All in one
                      {/* </div> */}
                    {/* <span className="animated-word">solution</span>
                    <span className="animated-word">for</span>
                    <span className="animated-word">all</span>
                    <span className="animated-word">your</span>
                    <span className="animated-word">ai</span>
                    <span className="animated-word">needs.</span> */}
                  {/* </span> */}
            </Typography>
            <Typography variant='h1' className="heading-large-v3-8 mobile">
              The Best LLM on Every Prompt
            </Typography>
            <Typography variant='h1' className="heading-large-take-back mobile">
              Take Back Control of Your LLM
            </Typography>

            {/* <div className="hero-subtitle-v3-8">
              <span className="text-span-107">Combine All Models for </span>Faster, Cheaper, and <br />
              Better Responses Than Any Single Model <span className="right-arrow">-&gt;</span>
              <span className="down-arrow">↓</span>
            </div>
            <div className="subhead-riot-production-desktop">
              <span className="text-span-106">
                LLMs Run Riot in Production. Get Back in The Driving Seat. <br />
                Build Your Own Evals,
              </span>
              Iterate Quickly, and Go from <br /> Prototype to Production in No Time{" "}
              <span className="right-arrow">-&gt;</span>
              <span className="down-arrow">↓</span>
            </div> */}

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

        {/* Trusted by Clients Section */}

        {/* <div className="container-clients hero-wide ">
          <div className="text-16">trusted by engineers at</div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={4}               // Show only one full slide at a time
            loop={true}                     // Enable infinite loop
            autoplay={{
              delay: 0,                  // Time (ms) each slide is shown before transitioning
              disableOnInteraction: false,  // Keep autoplay after interaction
            }}
            speed={800}                    // Transition speed between slides for a smooth effect
          >
            <SwiperSlide> <Image
              src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/66059fb1bd6e0518d03dadf0_deepmind.svg"
              alt="deepmind logo"
              width={100}
              height={50}
              loading="lazy"
            /></SwiperSlide>
            <SwiperSlide> <Image
              src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/66059fbf22b591f100f273c1_amazon.svg"
              alt="deepmind logo"
              width={100}
              height={50}
              loading="lazy"
            /></SwiperSlide>
            <SwiperSlide> <Image
              src="	https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6605a02d4e62e37b4928a18c_tesla-logo.svg"
              alt="deepmind logo"
              width={100}
              height={50}
              loading="lazy"
            /></SwiperSlide>
            <SwiperSlide> <Image
              src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6605a776d9aa6416d5e72fec_salesforce.svg"
              alt="deepmind logo"
              width={100}
              height={50}
              loading="lazy"
            /></SwiperSlide>
            <SwiperSlide> <Image
              src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6605a7bbc2e688ec38d61cfb_ezdubs.svg"
              alt="deepmind logo"
              width={100}
              height={50}
              loading="lazy"
            /></SwiperSlide>
            <SwiperSlide> <Image
              src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6605a82cd9aa6416d5e7ff44_imperial.svg"
              alt="deepmind logo"
              width={100}
              height={50}
              loading="lazy"
            /></SwiperSlide>
            <SwiperSlide> <Image
              src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6605a7d4c041baec1c0f0b3d_oxford.svg"
              alt="deepmind logo"
              width={100}
              height={50}
              loading="lazy"
            /></SwiperSlide>

            <SwiperSlide> <Image
              src="	https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6605a811ab1799d64b5cba7b_stanford.svg"
              alt="deepmind logo"
              width={100}
              height={50}
              loading="lazy"
            /></SwiperSlide>
            <SwiperSlide>
              <Image
                src="	https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6605a811ab1799d64b5cba7b_stanford.svg"
                alt="deepmind logo"
                width={100}
                height={50}
                loading="lazy"
              />
            </SwiperSlide>

          </Swiper>
        </div> */}

      </section>


      <section className="section explainer">
        {/* <div className="row bot-marg-100-mob-32 explainer">
          <div className="col-48">
            <div className="green-label">explainer</div>
            <h2 className="heading-medium-3-8 backed-by">
              Discover <span className="span-bold-2">Routing</span>
            </h2>
          </div>
          <div className="col-48">
            <p className="paragraph-medium-3-8">
              Explore the power of choosing the right LLM for your needs and how to optimize for quality, speed, and cost-efficiency.
            </p>
          </div>
        </div> */}

        {/* <div className="wide-youtube-holder shadow-back">
          <div className="explainer-video w-video w-embed" style={{ paddingTop: '56.17021276595745%' }}>
            <iframe
              className="embedly-embed"
              src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F15wgxK1Cw0E%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D15wgxK1Cw0E&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F15wgxK1Cw0E%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube"
              width="940"
              height="528"
              scrolling="no"
              allowFullScreen
              title="Unify: Explainer"
            />
          </div>
        </div> */}

        {/* <div className="use-case-slider-holder">
          <div className="slider-2 w-slider" data-delay="4000" data-animation="cross" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="0" data-infinite="true" role="region" aria-label="carousel">
            <div className="mask-2 w-slider-mask">
              <div className="slide-4 w-slide" aria-label="1 of 1" role="group">
                <div className="use-cases-1">
                  <div className="use-case-video-holder _1">
                    <div className="use-case-video w-video w-embed" style={{ paddingTop: '56.17021276595745%' }}>
                      <iframe
                        className="embedly-embed"
                        src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FZpY6SIkBosE%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZpY6SIkBosE&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZpY6SIkBosE%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube"
                        width="940"
                        height="528"
                        scrolling="no"
                        allowFullScreen
                        title="Unify: Walkthrough 01"
                      />
                    </div>
                  </div>

                  <div className="use-case-video-holder _2">
                    <div className="use-case-video w-video w-embed" style={{ paddingTop: '56.17021276595745%' }}>
                      <iframe
                        className="embedly-embed"
                        src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FPO4r6ek8U6M%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPO4r6ek8U6M&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPO4r6ek8U6M%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube"
                        width="940"
                        height="528"
                        scrolling="no"
                        allowFullScreen
                        title="Unify: #02 Benchmarking Your Prompts"
                      />
                    </div>
                  </div>

                  <div className="use-case-video-holder _3">
                    <div className="use-case-video w-video w-embed" style={{ paddingTop: '56.17021276595745%' }}>
                      <iframe
                        className="embedly-embed"
                        src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F9JYqNbIEac0%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9JYqNbIEac0&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9JYqNbIEac0%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube"
                        width="940"
                        height="528"
                        scrolling="no"
                        allowFullScreen
                        title="Unify: Train a Custom Router"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div aria-live="off" aria-atomic="true" className="w-slider-aria-label" data-wf-ignore=""></div>
          </div>
        </div> */}
      </section>
      <section id="one-api" class="section section-api">
        <div class="container flex one-api">
          <div class="column-left">
            <img src="/team/dg1.png" layout="fill"
              alt="" class="one-api-graphic" />
            <img src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6605bc63be2f9a83287b0c19_one-api-tablet.svg" loading="lazy" layout="fill"
              objectFit="cover" alt="" class="one-api-graphic-tab" />
            <img src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6605bd96929e5cf79fc649c4_one-api-mobile.svg" loading="lazy" layout="fill"
              objectFit="cover" alt="" class="one-api-graphic-mob" />
          </div>

          <div className='column-right in-flex'>
            <div class="col-100 one-api">
              <div class="green-label light">api</div>
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
                            {/* pip install unifyai<br /><br />
                            import os<br />
                            from unify import Unify<br />‍<br />
                            &quot;unify = Unify(&quot;mistral-7b-instruct-v0.2@fireworks-ai&quot;, api_key=&lt;YOUR_API_KEY&gt;)&quot;<br /><br />
                            &quot; unify.generate(&quot;What is the meaning of life?&quot;) &quot;
                          </div> */}
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
            <img src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662924b58001092e0f9b56bf_scatter_graph_v2.svg" loading="lazy" layout="fill"
              objectFit="cover" alt="Throughput Scatter Graph" class="scatter-graph-img-desktop" />
          </div>
          <div class="column-right no-margin custom-routing">
            <div class="header-holder">
              <div class="col-100">
                <div class="green-label"><div>efficient</div>
                </div><h2 class="heading-medium-3-8 custom-routing desktop">Faster, Cheaper and
                  <span class="span-semibold">Better Performance</span></h2>
                <h2 class="heading-medium-3-8 custom-routing tablet">Faster, Cheaper and<br />
                  <span class="span-semibold">Better Performance</span>
                </h2><div class="grad-connect-line custom-routing">
                </div>
              </div>
              <div class="descriptor">
                <div class="paragraph-medium-3-8 top-padding">Personalize your speed, quality and cost requirements, and get the LLM performance you need for your task</div>
              </div>
            </div>
          </div>
          <img src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662924b58001092e0f9b56bf_scatter_graph_v2.svg" loading="lazy" layout="fill"
            objectFit="cover" alt="Throughput Scatter Graph" class="scatter-graph" />
        </div>
      </section>
      {/* <section class="section section-guides2">
        <div class="container flex custom-routing">
          <div class="column-left">
            <div class="quote">
              <div className="text-37 hf padded">
                &quot;&quot;Transparent LLM benchmarks are very much needed, and Unify’s live dashboards are a useful resource for everyone.&quot;&quot;
              </div>

              <div class="frame-1171275995"><div class="frame-1171275996">
                <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f6a390b6846bc2e6afc7c_huggingface.png" loading="lazy" alt="samsung next logo" width={36} height={36} class="endorses-img hf" />
              </div>
                <div class="frame-1171275997">
                  <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f69d3cce2e8f3bdb3766f_clem_delangue.png" loading="lazy" width={36} height={36} alt="" class="endorses-img" />
                  <div class="frame-1171275998">
                    <div class="text-39">Clem Delangue</div>
                    <div class="text-40">CEO, Hugging face</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column-right no-margin endorsements">
            <div class="header-holder">
              <div class="col-100">
                <div class="green-label">
                  <div>endorsements</div>
                </div>
                <h2 class="heading-medium-3-8 custom-routing desktop">Voices of <span class="span-semibold">Support</span></h2>
                <h2 class="heading-medium-3-8 custom-routing tablet">Voices of <span class="span-semibold">Support</span></h2>
                <div class="grad-connect-line endorsements"></div>
              </div>
              <div class="descriptor">
                <div class="paragraph-medium-3-8 top-padding">Testimonials from our users, backers and community.</div>
              </div>
              <div class="quote mobile">
                <div className="text-37 hf padded">
                  &quot;&quot;Transparent LLM benchmarks are very much needed, and Unify’s live dashboards are a useful resource for everyone.&quot;&quot;
                </div>

                <div class="frame-1171275995"><div class="frame-1171275996">
                  <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f6a390b6846bc2e6afc7c_huggingface.png" loading="lazy" alt="samsung next logo" width={36} height={36} class="endorses-img hf" />
                </div>
                  <div class="frame-1171275997">
                    <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f69d3cce2e8f3bdb3766f_clem_delangue.png" loading="lazy" width={36} height={36} alt="" class="endorses-img" />
                    <div class="frame-1171275998"><div class="text-39">Clem Delangue</div>
                      <div class="text-40">CEO, Hugging face</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container testimonial-grid">
          <div id="w-node-_00da4f42-57bf-3283-5e6e-f5c35756db09-58d6c94a" class="quote-2">
            <div className="text-41">
              &quot;&quot;The LLM and GenAI space has become incredibly non-transparent with costs getting out of control. Unify is the one-stop-shop for quickly comparing all of the latest models and providers objectively.&quot;&quot;
            </div>

            <div class="frame-1171276000"><div class="frame-1171276001">
              <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f7228400177d1686fc299_googledeepmind_logo.jpeg" loading="lazy" width={36} height={36} alt="Essence VS logo" class="endorses-img" />
            </div>
              <div class="frame-1171276001">
                <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f721b73b4e98b67ec64e3_lasse-espeholt.jpeg" loading="lazy" width={36} height={36} alt="Timothy Chen" srcset="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f721b73b4e98b67ec64e3_lasse-espeholt-p-500.jpeg 500w, https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f721b73b4e98b67ec64e3_lasse-espeholt.jpeg 800w" sizes="36px" class="endorses-img" />
                <div class="frame-1171276002">
                  <div class="text-42">Lasse Espeholt</div>
                  <div class="text-43">Staff Research Scientist, <br />deepmind</div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_00da4f42-57bf-3283-5e6e-f5c35756dafa-58d6c94a" class="quote-3">
            <div class="text-41"> &quot;When deploying new AI features for the Awin platform, which serves over 30,000 brands and 250,000 active partners, model diversity, evaluation benchmarks and performance optimization are vital. There is a constant stream of new LLMs with new capabilities every week, each becoming increasingly specialized. Routing across the entire LLM landscape could result in much higher quality than any one model, and Unify is therefore perfectly positioned to create a lot of value.&quot;</div>
            <div class="frame-1171276000">
              <div class="frame-1171276001">
                <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6639e37268e8afabda74ff6a_AWIN-logo-1.png" loading="lazy" width={36} height={36} alt="Sentinel One Logo" srcset="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6639e37268e8afabda74ff6a_AWIN-logo-1-p-500.png 500w, https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6639e37268e8afabda74ff6a_AWIN-logo-1.png 800w" sizes="(max-width: 479px) 100vw, (max-width: 991px) 5vw, 3vw" class="endorses-img" /></div>
              <div class="frame-1171276001">
                <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/6639e36586af75937754d6c3_james-bentley.jpeg" loading="lazy" width={36} height={36} alt="Alex Krongold" class="endorses-img" />
                <div class="frame-1171276002">
                  <div class="text-42">James Bentley</div>
                  <div class="text-43">AI and Strategy Director, Awin</div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_00da4f42-57bf-3283-5e6e-f5c35756db16-58d6c94a" class="quote-2">
            <div class="text-41">&quot;Agentic RAG systems often involve dozens of sequential LLM calls, making speed and cost evermore important. Unify is perfectly positioned to address this, by intelligently routing to faster and cheaper models where possible. If they get things right, they could become an integral part of the LLM stack.&quot;</div><div class="frame-1171276000"><div class="frame-1171276001">
              <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f71d329fe9fb1d2aea6cc_weaviate_io_logo.jpeg" loading="lazy" width={36} height={36} alt="Wefunder logo" class="endorses-img" />
            </div>
              <div class="frame-1171276003">
                <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f71c8d27f895f8c3171ab_bob.jpeg" loading="lazy" width={36} height={36} alt="Mattia Astori" class="endorses-img" />
                <div class="frame-1171276002">
                  <div class="text-42">Bob van Luijt</div>
                  <div class="text-43">CEO, weaviate</div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-c8288700-b37d-f3df-d3e5-bd548f08e070-58d6c94a" class="quote-3">
            <div class="text-41">&quot;Every new LLM claims to have the best performance on benchmarks, and every new provider claims to be the fastest and cheapest. Unify puts these claims to the test in an unbiased manner, on a central platform. Don’t take the models and providers at their word, just train a Unify router on your own data and see for yourself which combination is best.&quot;</div>
            <div class="frame-1171276000"><div class="frame-1171276001">
              <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f72a27db6857870a494d7_dropbox_logo.jpeg" loading="lazy" width={36} height={36} alt="Abstraction Capital logo" class="endorses-img" />
            </div>
              <div class="frame-1171276001">
                <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f7296678028a9e1bf88d4_arash.jpeg" loading="lazy" width={36} height={36} alt="Taylor Clauson" srcset="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f7296678028a9e1bf88d4_arash-p-500.jpeg 500w, https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f7296678028a9e1bf88d4_arash.jpeg 800w" sizes="36px" class="endorses-img" />
                <div class="frame-1171276002">
                  <div class="text-42">Arash Ferdowsi</div>
                  <div class="text-43">Co-founder, dropbox</div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_00da4f42-57bf-3283-5e6e-f5c35756daed-58d6c94a" class="quote-2">
            <div class="text-41">&quot;As the LLM landscape continues to expand, solid and impartial developer tools are needed to ensure everyone is able to build high-performance applications. Unify is an integral part of this stack, giving a lot of flexibility to developers with little overheads.&quot;</div>
            <div class="frame-1171276000"><div class="frame-1171276001">
              <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f6fe735977f132aaf639c_ToolsforHumanity.jpeg" loading="lazy" width={36} height={36} alt="A Capital" class="endorses-img" />
            </div>
              <div class="frame-1171276001">
                <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f6fdb17c9d2f0f442fc97_saturnin-pugnet.jpeg" loading="lazy" width={36} height={36} alt="Ramu Arunachalam" srcset="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f6fdb17c9d2f0f442fc97_saturnin-pugnet-p-500.jpeg 500w, https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f6fdb17c9d2f0f442fc97_saturnin-pugnet.jpeg 800w" sizes="36px" class="endorses-img" />
                <div class="frame-1171276002">
                  <div class="text-42">Saturnin Pugnet</div>
                  <div class="text-43">founding member, tools for humanity</div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-fb356c32-21e6-86ef-3f53-92ba7f4627ec-58d6c94a" class="quote-2">
            <div class="text-41">&quot;New language models keep on coming; and techniques like fine-tuning, RAG, and GraphRAG add near-endless possibilities for literally each GenAI application call. Unify.ai simplifies and automates an optimization problem that is both daunting and universal, giving AI engineers visibility and control over cost, accuracy, and speed.&quot;</div>
            <div class="frame-1171276000"><div class="frame-1171276001">
              <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/664d96040dbb41b7c6529f05_neo4j_logo_globe.png" loading="lazy" width={36} height={36} alt="A Capital" class="endorses-img" />
            </div>
              <div class="frame-1171276001">
                <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/664d95f9213049faeaf1ff4c_philipratle.webp" loading="lazy" width={36} height={36} alt="Ramu Arunachalam" class="endorses-img" />
                <div class="frame-1171276002">
                  <div class="text-42">Philip Rathle</div>
                  <div class="text-43">CTO at Neo4j</div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_7a48c504-ce0b-c4c2-62c9-d1b29cd26b34-58d6c94a" class="quote-2">
            <div className="text-41">
              &quot;One of the biggest challenges enterprise developers face in building production LLM applications (whether it&apos;s RAG or a complex agent workflow) is figuring out how to optimize it for better accuracy, cost, and speed. There are too many parameters to tune and it quickly becomes an intractable mess of trying out different hyperparameter values. Unify significantly reduces that complexity by optimizing the LLM selection, letting developers spend more time on critical application logic.&quot;
            </div>

            <div class="frame-1171276000">
              <div class="frame-1171276001">
                <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/664d9dca75695f799365baaa_1681327675102.jpeg" loading="lazy" width={36} height={36} alt="A Capital" class="endorses-img" />
              </div>
              <div class="frame-1171276001">
                <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/664d9d9331d08fda7edbf5cd_jerry.jpeg" loading="lazy" width={36} height={36} alt="Ramu Arunachalam" srcset="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/664d9d9331d08fda7edbf5cd_jerry-p-500.jpeg 500w, https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/664d9d9331d08fda7edbf5cd_jerry.jpeg 558w" sizes="36px" class="endorses-img" />
                <div class="frame-1171276002">
                  <div class="text-42">Jerry Liu</div>
                  <div class="text-43">Ceo at LlamaIndex</div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_00da4f42-57bf-3283-5e6e-f5c35756db23-58d6c94a" class="quote-3">
            <div class="text-41">&quot;Trying to keep up with all new LLMs and providers is impossible, Unify makes it easy to cut through all the noise and ensure the best LLM is always being used.&quot;</div>
            <div class="frame-1171276000">
              <div class="frame-1171276001">
                <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f726935977f132ab167f4_voi_technology_logo.jpeg" loading="lazy" width={36} height={36} alt="Abstraction Capital logo" class="endorses-img" />
              </div>
              <div class="frame-1171276001">
                <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f725ee5a7ad508558fd5f_frederik-hjelm.jpeg" loading="lazy" width={36} height={36} alt="Taylor Clauson" srcset="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f725ee5a7ad508558fd5f_frederik-hjelm-p-500.jpeg 500w, https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/662f725ee5a7ad508558fd5f_frederik-hjelm.jpeg 800w" sizes="36px" class="endorses-img" />
                <div class="frame-1171276002">
                  <div class="text-42">Fredrik Hjelm</div>
                  <div class="text-43">CEO, voi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section id="partners" className='mb-5'>
        <div class="container">
          <div class="row bot-marg-100-mob-32 backedby">
            <div class="col-48">
              <div class="green-label">Partners</div>
              <h2 class="heading-medium-3-8 backed-by">Backed <span class="span-bold-2">By</span></h2>
            </div>
            <div class="col-48">
              <p className="paragraph-medium-3-8">
                &quot;We&apos;re honoured to have the support of top VC funds and angel investors, backing our mission to simplify the LLM landscape &quot;
              </p>

            </div>
          </div>

        </div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={800}
          centeredSlides={true}
          breakpoints={{
            // when window width is >= 0px
            0: {
              slidesPerView: 2, // Show 4 slides on smaller screens
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 6, // Show 6 slides on larger screens
            },
          }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="partner-card">
                <Image src={partner.src} alt={partner.alt} width={72} height={72} loading="lazy" />
                <div className="heading-slider">{partner.title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </section> */}
      {/* <section id="sliders" className="section section-angel-quotes">
        <div class="container flex custom-routing">
          <div class="column-left guides-2">
            <div class="header-holder">
              <div class="col-100">
                <div class="green-label">
                  <div>guides</div>
                </div>
                <h2 class="heading-medium-3-8 get-started">Get <span class="span-semibold">Started</span>
                </h2>
                <div class="grad-connect-line guides"></div>
              </div>
              <div class="descriptor">
                <div class="paragraph-medium-3-8 top-padding guides-2">
                  Get started with Unify with our dedicated walkthrough. Discover the features you already have access to and our upcoming roadmap. Welcome aboard!
                </div>
              </div>
            </div>
          </div>
          <div class="column-right guides2">
            <div class="quote-4">
              <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/663a15c99fb1a9855ab4f6b5_Vectors-Wrapper.svg" loading="lazy" width={882} height={202} alt="" class="vectors-wrapper-33" /><a href="https://unify.ai/docs/" target="_blank" class="walkthrough-link green w-inline-block">
                <div class="text-45">explore our docs</div>
                <div class="text-45">-&gt;</div></a>
              <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/663a15ca42c56246dc7c2587_Vectors-Wrapper.svg" loading="lazy" width={76.25} height={20} alt="" class="vectors-wrapper-34" /></div>
          </div>
        </div>
        <div class="container guides2">
          <div class="fs-sliderdots_active w-embed">
          </div>
          <div data-delay="5000" data-animation="cross" class="fs-sliderdots_slider green-shadow w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="true" data-autoplay-limit="3" data-nav-spacing="3" data-duration="0" data-infinite="true" fs-sliderdots-element="slider-1" role="region" aria-label="carousel">
            <div class="mask w-slider-mask" id="w-slider-mask-1">
              <div data-w-id="ee2e84e2-a00b-8066-37e4-e2a742e57647" class="slide-outercontainer w-slide" aria-label="1 of 4" role="group" aria-hidden="true">
                <div class="slider-panels" aria-hidden="true">
                  <div class="ghost-panel" aria-hidden="true">
                  </div>
                  <a href="https://unify.ai/docs/index.html" target="_blank" class="slide-img-holder-2 w-inline-block" tabindex="-1" aria-hidden="true">
                  </a>
                  <div class="panel-in-slider-2" aria-hidden="true">
                    <div class="slider-descriptor-2" aria-hidden="true">Sign in to get started with your your Unify account...</div>
                    <a href="https://unify.ai/docs/#getting-started" target="_blank" class="slide-label-link w-inline-block" tabindex="-1" aria-hidden="true">
                      <div class="slide-to-guide-point-2" aria-hidden="true">1. create profile</div>
                      <div class="arrow-2" aria-hidden="true">-&gt;</div></a>
                    <link rel="prefetch" href="https://unify.ai/docs/#getting-started" />
                  </div>
                </div>
                <div class="fs-sliderdots_slide-4" aria-hidden="true">
                  <div fs-sliderdots-element="content" class="fs-sliderdots_content-4" aria-hidden="true">1. Create Profile</div>
                </div>
              </div>
              <div data-w-id="ee2e84e2-a00b-8066-37e4-e2a742e57658" class="slide-outercontainer w-slide" aria-label="2 of 4" role="group" aria-hidden="true">
                <div class="slider-panels" aria-hidden="true">
                  <div class="ghost-panel" aria-hidden="true">
                  </div>
                  <a href="https://unify.ai/docs/interfaces/connecting_stack.html" target="_blank" class="slide-img-holder-2 _2 w-inline-block" tabindex="-1" aria-hidden="true"></a>
                  <div class="panel-in-slider-2 _2" aria-hidden="true">
                    <div class="slider-descriptor-2" aria-hidden="true">
                      Connect your private or self-hosted LLM endpoints in a single interface...</div>
                    <a href="https://unify.ai/docs/interfaces/connecting_stack.html" target="_blank" class="slide-label-link _2 w-inline-block" tabindex="-1" aria-hidden="true">
                      <div class="slide-to-guide-point-2" aria-hidden="true">2. add endpoints</div>
                      <div class="arrow-2" aria-hidden="true">-&gt;</div></a>
                    <link rel="prefetch" href="https://unify.ai/docs/interfaces/connecting_stack.html"  /></div></div>
                <div class="fs-sliderdots_slide-4">
                  <div fs-sliderdots-element="content" class="fs-sliderdots_content-4" aria-hidden="true">2. Add Endpoints</div>
                  <div class="fs-hide-4" aria-hidden="true">
                    <div class="fs-sliderdots_content-4 fs-sliderdots_active" aria-hidden="true">Slide 1</div>
                  </div>
                </div>
              </div>
              <div data-w-id="ee2e84e2-a00b-8066-37e4-e2a742e5766c" class="slide-outercontainer w-slide" aria-label="3 of 4" role="group">
                <div class="slider-panels">
                  <div class="ghost-panel"></div>
                  <a href="https://unify.ai/docs/interfaces/running_benchmarks.html" target="_blank" class="slide-img-holder-2 _3 w-inline-block"></a>
                  <div class="panel-in-slider-2 _3">
                    <div class="slider-descriptor-2">Run customized benchmarks on your datasets to compare LLMs on specific tasks...</div>
                    <a href="https://unify.ai/docs/interfaces/running_benchmarks.html" target="_blank" class="slide-label-link w-inline-block">
                      <div class="slide-to-guide-point-2">3. benchmark</div><div class="arrow-2">-&gt;</div></a>
                    <link rel="prefetch" href="https://unify.ai/docs/interfaces/running_benchmarks.html" /></div></div>
                <div class="fs-sliderdots_slide-4">
                  <div fs-sliderdots-element="content" class="fs-sliderdots_content-4">3. Benchmark</div>
                </div></div>
              <div data-w-id="ee2e84e2-a00b-8066-37e4-e2a742e5767d" class="slide-outercontainer w-slide" aria-label="4 of 4" role="group" aria-hidden="true">
                <div class="slider-panels" aria-hidden="true">
                  <div class="ghost-panel" aria-hidden="true"></div>
                  <a href="https://unify.ai/docs/interfaces/building_router.html" target="_blank" class="slide-img-holder-2 _4 w-inline-block" tabindex="-1" aria-hidden="true"></a>
                  <div class="panel-in-slider-2 _4" aria-hidden="true"><div class="slider-descriptor-2" aria-hidden="true">Use your endpoints and datasets to tailor the router to your needs...</div>
                    <a href="https://unify.ai/docs/interfaces/building_router.html" target="_blank" class="slide-label-link w-inline-block" tabindex="-1" aria-hidden="true">
                      <div class="slide-to-guide-point-2" aria-hidden="true">4. train router</div>
                      <div class="arrow-2" aria-hidden="true">-&gt;</div></a>
                    <link rel="prefetch" href="https://unify.ai/docs/interfaces/building_router.html" />
                  </div>
                </div>
                <div class="fs-sliderdots_slide-4" aria-hidden="true">
                  <div fs-sliderdots-element="content" class="fs-sliderdots_content-4" aria-hidden="true">4. Train Router</div>
                </div>
              </div>
              <div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore="">Slide 3 of 4.</div>
            </div>
            <div class="fs-sliderdots_arrow-left-4 w-slider-arrow-left" role="button" tabindex="0" aria-controls="w-slider-mask-1" aria-label="previous slide">
              <div class="icon-3 w-icon-slider-left"></div>
            </div>
            <div class="fs-sliderdots_arrow-right-4 w-slider-arrow-right" role="button" tabindex="0" aria-controls="w-slider-mask-1" aria-label="next slide">
              <div class="icon-7 w-icon-slider-right">
              </div>
            </div>
            <div fs-sliderdots-element="slider-nav-1" class="fs-sliderdots-nav-4">
              <div class="frame-1171276013">
                <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/663b54141dc161056be90e3b_Vectors-Wrapper.svg" loading="lazy" width={20.46875} height={18.835941314697266} alt="" class="vectors-wrapper-39" />
                <Image src="https://cdn.prod.website-files.com/643fb31f2ef62cf324fab8ca/663b5413e711d993934af42a_Vectors-Wrapper.svg" loading="lazy" width={24} height={21} alt="" class="vectors-wrapper-40" />
              </div>
              <div fs-sliderdots-element="content" class="fs-sliderdots_content-4" aria-label="Show slide 1 of 4" aria-pressed="false" role="button" tabindex="-1">1. Create Profile</div>
              <div fs-sliderdots-element="content" class="fs-sliderdots_content-4" aria-hidden="true" aria-label="Show slide 2 of 4" aria-pressed="false" role="button" tabindex="-1">2. Add Endpoints</div>
              <div fs-sliderdots-element="content" class="fs-sliderdots_content-4 " aria-hidden="true" aria-label="Show slide 3 of 4" aria-pressed="true" role="button" tabindex="0">3. Benchmark</div>
              <div fs-sliderdots-element="content" class="fs-sliderdots_content-4" aria-hidden="true" aria-label="Show slide 4 of 4" aria-pressed="false" role="button" tabindex="-1">4. Train Router</div>
            </div>
            <div id="hero-slider-nav" class="fs-hide-4 w-slider-nav w-round">
              <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 1 of 4" aria-pressed="false" role="button" tabindex="-1" >
              </div>
              <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 4" aria-pressed="false" role="button" tabindex="-1" >
              </div>
              <div class="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 3 of 4" aria-pressed="true" role="button" tabindex="0" >
              </div>
              <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 4 of 4" aria-pressed="false" role="button" tabindex="-1" >
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <div className="section section-faq">
        <div className="container faq shadow-back">
          <div>
            <h2 class="heading-medium-3-8">Frequently Asked <span class="span-semibold">Questions</span></h2>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='py-2 mt-5'>
              <AccordionSummary id='controlled-panel-header-1' aria-controls='controlled-panel-content-1'>
                <Typography variant='h5'>Do I need to create an account with each provider?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant='h6'>
                  Nope! Just create a Unify account to access all models from all supported providers with a single API key.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='py-2' >
              <AccordionSummary id='controlled-panel-header-2' aria-controls='controlled-panel-content-2'>
                <Typography variant='h5'>Do you charge anything on top of the upstream providers?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant='h6'>
                  We may apply some margins depending on the nature of the API queries. You can learn more by reading our Terms of Service.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='py-2'>
              <AccordionSummary id='controlled-panel-header-3' aria-controls='controlled-panel-content-3'>
                <Typography variant='h5'>How do you determine what the best model is?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant='h6'>
                  Our router balances output quality, speed and cost based on user specific preferences. The quality is predicted ahead of time using a neural scoring function, which predicts how good each model would be at responding to a given prompt. The speed and cost are retrieved based on the very latest benchmark data for your region of the world.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

        </div>
      </div> */}
      {/* < Footer /> */}
    </>
  );
}
