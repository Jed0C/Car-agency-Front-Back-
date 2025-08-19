import React from 'react'
import './Hero.css'
// import 'bootstrap-icons/font/bootstrap-icons.css';

function Hero() {
  return (
    <div>
         <header>
          {/* This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS */}
          <div className="overlay" />
          {/* The HTML5 video element that will create the background video on the header */}
          <div className="ratio ratio-16x9">
          <iframe
                width="1200"
                height="600"
                src="https://www.youtube.com/embed/Hqliy0lSdvI?autoplay=1&loop=1&mute=1&controls=0&playlist=Hqliy0lSdvI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                ></iframe>
                </div>

                
                {/* <div id="pretitle"> 
                    <div className="container py-5 d-flex justify-content-center">
                    <div className="shadow-lg p-4 rounded w-100" style={{ maxWidth: '800px', backgroundColor: '#f8f9fa' }}>
                        <div className="row g-3 align-items-center">
                        {/* Brand Filter */}
                        {/* <div className="col-md-3">
                            <select className="form-select">
                            <option selected disabled>Brand</option>
                            <option>Tesla</option>
                            <option>BMW</option>
                            <option>Audi</option>
                            <option>Mercedes</option>
                            </select>
                        </div>

                        {/* Model Filter */}
                        {/* <div className="col-md-3">
                            <select className="form-select">
                            <option selected disabled>Model</option>
                            <option>Model S</option>
                            <option>i8</option>
                            <option>Q7</option>
                            <option>C-Class</option>
                            </select>
                        </div>  */}

                        {/* Year Filter */}
                        {/* <div className="col-md-2">
                            <select className="form-select">
                            <option selected disabled>Year</option>
                            <option>2025</option>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                            </select>
                        </div>

                       
                        <div className="col-md-4">
                            <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search keywords..." />
                            <button className="btn btn-dark">
                                <i className="bi bi-search"></i>
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
               */}
                


          {/* The header content */}
          {/* <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="display-3">Video Header</h1>
                <p className="lead mb-0">Using HTML5 Video and Bootstrap</p>
              </div>
            </div>
            /////
            
    /////
          </div> */}
        </header>
        {/* Page section example for content below the video header */}
        
    </div>
  )
}

export default Hero