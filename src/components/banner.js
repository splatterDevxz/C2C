import React from "react"
import BannerSVG from "assets/images/svg/banner_svg.svg"
const Banner = () =>{
    return(
        <>
            <section id="banner-section">
                <div className="grid-two-col">
                    <div className="grid-child" id="heading-wrapper">
                        <h1>
                            Conventional and Digital marketing strategies
                        </h1>
                        <p>
                            Established to help local and international business.
                        </p>
                    </div> 

                    <div className="grid-child" id="__svg_img_banner">
                        <img src={BannerSVG} alt="banner_svg"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner