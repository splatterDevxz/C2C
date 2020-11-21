import React from "react"
import GreenConcepts from "assets/images/logo/green_concepts.webp"
import CN_TECH from "assets/images/logo/cn_tech.jpeg"

const Partners = ()=>{
    
    const partLogo = [ GreenConcepts, CN_TECH]
    
    return(
        <>
            <section className="partners-branding">
                <div className="container">

                    <p id="partners-content">
                        <span>Marketing</span> is not just about strategies,
                        it's more about Stories.
                    </p>

                    {
                        partLogo.map((e, i)=>
                            <span>
                                <img 
                                    src={e}
                                    alt="partner-logos"
                                />
                            </span>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Partners;