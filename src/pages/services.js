import React from "react"
import Layout from "components/layout"
import BG from "assets/images/svg/our_services.svg"
import Banner from "components/non-front-banner"

const Services = () =>{	
	return(		
		<>
			<Layout>

				<Banner
					heading={`<h1>Our SERVI<span class="span-blue">C</span>ES</h1>`}
					subheading={`C2C Marketing Solutions`}
					banrClass="about_us_banner"
					bgImg={BG}
				/>

			</Layout>		
		</>
	)	
}

export default Services;