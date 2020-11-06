import React from "react"
import BannerSVG from "assets/images/svg/banner_svg.svg"
import {Link} from "gatsby"

const Banner = () =>{
    return(
        <>
            <section id="banner-section">
                <div className="container" id="banner-container">
                    <div className="grid-two-col">
                        <div className="grid-child" id="heading-wrapper">

                            <span className="span-tag">#Anti BandAid Solutions</span>

                            <h1>
                                Full-house marketing and digital 
                                services for entrepreneurs and solopreneurs
                            </h1>

                            <p>
                                Whether your business function is E2E, B2B, or B2C, you need to
                                strengthen your brand image and establish authority in your
                                industry.
                            </p>

                            <button className="button-defs">
                                <Link to="">
                                    LET’S START
                                </Link>
                            </button>
                        </div> 

                        <div className="grid-child" id="__svg_img_banner">
                            <img src={BannerSVG} alt="banner_svg"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner