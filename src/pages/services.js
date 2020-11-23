import React from "react"
import Layout from "components/layout"
import BG from "assets/images/svg/our_services.svg"
import Banner from "components/non-front-banner"
import {Row, Col} from "antd"
import ServicesBlock from "components/blocks/service-block"
import InfoBox from "components/candely";


/*Services Icon*/
import CW_ICON  from "assets/images/svg/content_writing.svg"
import EC_ICON  from "assets/images/svg/email_creatives.svg"
import SM_ICON  from "assets/images/svg/social_media.svg"
import FB_ICON  from "assets/images/svg/funnel_building.svg"

import LG_ICON  from "assets/images/svg/lead_generation.svg"
import RM_ICON  from "assets/images/svg/reputation_management.svg"
import WB_ICON  from "assets/images/svg/web_dev.svg"
import PR_ICON  from "assets/images/svg/personal_relation.svg"
import VC_ICON  from "assets/images/svg/video_content.svg"	

const Services = (props) =>{	
	return(		
		<>
			<Layout props={props.location}>
				<Banner
					heading={`<h1>SERVI<span class="span-blue">C</span>ES</h1>`}
					subheading={`C2C Marketing Solutions`}
					banrClass="about_us_banner"
					bgImg={BG}	
				/>

				<div className="services-wrapper">
					<div className="container">

						<div className="content-wrapper">
							<h1>Services Offered</h1>
							
							<p>
								We are your trusted premier provider 
								of innovative and dynamic marketing solutions
								to your ideal clients.
							</p>
						</div>

						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							
							<ServicesBlock 
								heading="Content Writing & Copywriting"
								bg={{background: "rgb(3 28 38)",  boxShadow: "rgb(3 28 38 / 24%) 1px 9px 13px 0px"}}
								body={
									`
										<p>Other than videos, the best way to constantly
										connect with your customers would be through
										your words. With this, you need a well-versed and
										very articulate content writer or a copywriter.</p>
									`
								}
								icon={CW_ICON}
							/>

							<ServicesBlock 
								heading="Social Media Campaign"
								bg={{background: "linear-gradient(to bottom right, #bf30ef, #0072ff)"}}
								body={
									`
										<p>
											Create a strategically focused campaigns to
											influence and reach out to your target
											audiences through their hearts.
										</p>

										<p>
											Strengthen your brand image by reinforcing
											information about your product/service.
										</p>
									`
								}
								icon={SM_ICON}
							/>

							<ServicesBlock 
								heading="Lead Generation"
								bg={{background: "linear-gradient(to bottom right, #bf30ef, #0072ff)"}}
								body={
									`
										<p>
											Capture quality leads by creating an attention-
											grabbing content.
										</p>

										<p>
											Make use of organic searches and the free
											platforms such as LinkedIn, Facebook,
											Instagram, and etc.
										</p>

									`
								}
								icon={LG_ICON}
							/>

							<ServicesBlock 
								heading="Video Content"
								bg={{background: "rgb(3 28 38)",  boxShadow: "rgb(3 28 38 / 24%) 1px 9px 13px 0px"}}
								body={	
									`
										<p>
											Video marketing is already considered to be the most
											impactful marketing strategy that will turn your audience
											into a raving fan real-quick.
										</p>
										
										<p>
											Make a video with a solid storyline that
											is going to make an impact to your target audiences.
										</p>

									`
								}
								icon={VC_ICON}
							/>


							<ServicesBlock 
								heading="Email Creatives & Automation"
								bg={{background: "rgb(3 28 38)",  boxShadow: "rgb(3 28 38 / 24%) 1px 9px 13px 0px"}}
								body={
									`		
										<p>
											Create email sequences to move your ideal
											prospects subtly from a plain visitor to a hot
											buyer.
										</p>
										
										<p>
											Send the right messages to the right contacts
										</p>

									`
								}
								icon={VC_ICON}
							/>


							<ServicesBlock 
								heading="Funnel Building & Designing"
								bg={{background: "linear-gradient(to bottom right, #bf30ef, #0072ff)"}}
								body={	
									`
										<p>
											Create a highly engaging sales funnel that will
											move your prospective customers seamlessly
											throughout the customer value journey.
										</p>
										
										<p>
											Build a fully-customized designs to grab your
											prospects’ attention and gauge their level of
											interest.
										</p>

									`
								}
								icon={FB_ICON}
							/>

							<ServicesBlock 
								heading="Website Development & Design"
								bg={{background: "linear-gradient(to bottom right, #bf30ef, #0072ff)"}}
								body={
									`
										<p>
											Create an eye-capturing website design while
											increasing its conversion ratio through its
											friendly and highly efficient functionality.
										</p>
										
										<p>
											Save big by getting someone who is expert
											with both website design and website
											development in one.
										</p>

									`
								}
								icon={WB_ICON}
							/>

							<ServicesBlock 
								heading="Client Engagement and Brand Loyalty Programs"
								bg={{background: "rgb(3 28 38)",  boxShadow: "rgb(3 28 38 / 24%) 1px 9px 13px 0px"}}
								body={	
									`
										<p>
											There is no better way in keeping your clients happy and
											delighted but to keep your communication constant with
											them as well.
										</p>
										
										<p>
											We will create strong and eloquent programs that can easily
											assess who are your potential customers, and most
											importantly, how you can make your relationship with your
											existing clients even better.
										</p>

									`
								}
								icon={PR_ICON}
							/>

						</Row>
					</div>
				</div>

				<InfoBox/>
			</Layout>		
		</>	
	)	
}

export default Services;