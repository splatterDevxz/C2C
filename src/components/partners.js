import React from "react"
import AirBnB from "assets/images/logo/airbnb.png"
import Bookgini from "assets/images/logo/bookgini.png"
import Candely from "assets/images/logo/candely.png"
import Google from "assets/images/logo/google-adwords-logo.png"

const Partners = ()=>{
    
    const partLogo = [ AirBnB, Bookgini , Candely, Google]
    
    return(
        <>
            <section className="partners-branding">
                {
                    partLogo.map((e, i)=>
                        <span>
                            <img src={e} alt="partner-logos"/>
                        </span>
                    ) 
                }       
            </section>
        </>
    )
}

export default Partners;