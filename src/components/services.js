import React from "react"
import { Row, Col, Divider } from 'antd';
import IconServices from "components/icon/icon-service"

import CW_ICON  from "assets/images/svg/content_writing.svg"
import EC_ICON  from "assets/images/svg/email_creatives.svg"
import SM_ICON  from "assets/images/svg/social_media.svg"
import FB_ICON  from "assets/images/svg/funnel_building.svg"

import LG_ICON  from "assets/images/svg/lead_generation.svg"
import RM_ICON  from "assets/images/svg/reputation_management.svg"
import WB_ICON  from "assets/images/svg/web_dev.svg"
import PR_ICON  from "assets/images/svg/personal_relation.svg"


const Services = ()=>{
	return(
		<>
			<section id="section-services">
				<div className="container">
				<h1>
                    Services Offered
                </h1>
				
                <p className="sub-content">		
                	We are your trusted premier provider of innovative and dynamic marketing solutions to your ideal clients.
                </p>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
			      	<Col className="gutter-row" xl={6} lg={6} md={12} sm={12}  xs={24} >
			      		<IconServices
			      			iconSVG={CW_ICON}
			      			iconStyle={{background: "#6C63FF", boxShadow: "rgb(70 61 212 / 24%) 1px 9px 13px 0px"}}
			      			iconHeading={`Content Writing & Copywriting`}
							iconInfo={`Other than videos, the best way to constantly connect with your customers would be through your words.`}
			      		/>
			      	</Col>		
			      	
				 	<Col className="gutter-row" xl={6} lg={6} md={12} sm={12}  xs={24} >
				  		<IconServices
			      			iconSVG={SM_ICON}
			      			iconStyle={{background: "#FF8A65", boxShadow: "rgb(255 138 101 / 54%) 1px 9px 13px 0px"}}
			      			iconHeading={`Social Media <span class="block-elem">Campaign</span>`}
							iconInfo={`Create a strategic focused campaigns to influence and reach out to your target audiences through their hearts.`}
			      		/>
				    </Col>

					<Col className="gutter-row" xl={6} lg={6} md={12} sm={12}  xs={24} >
			      		<IconServices
			      			iconSVG={LG_ICON}
			      			iconStyle={{background: "#FF6584", boxShadow: "rgb(255 101 132 / 35%) 1px 9px 13px 0px"}}
			      			iconHeading={`Lead <span class="block-elem">Generation</span>`}
							iconInfo={`Capture quality leads by creating an attention-grabbing content.`}
			      		/>
			      	</Col>

					
			      	<Col className="gutter-row" xl={6} lg={6} md={12} sm={12}  xs={24} >
			      		<IconServices
			      			iconSVG={RM_ICON}
			      			iconStyle={{background: "#FA4D4D", boxShadow: "rgb(250 77 77 / 41%) 1px 9px 13px 0px"}}
			      			iconHeading={`Video <span class="block-elem">Content</span>`}
							iconInfo={`Video marketing is already considered to be the most impactful marketing strategy that will turn your audience into a raving fan real-quick.`}
			      		/>
			      	</Col>

		

				   	<Col className="gutter-row" xl={6} lg={6} md={12} sm={12}  xs={24}>
			      		<IconServices
			      			iconSVG={EC_ICON}
			      			iconStyle={{background: "#7FCD63", boxShadow: "rgb(127 205 99 / 54%) 1px 9px 13px 0px"}}
			      			iconHeading={`Email <span class="block-elem">Creatives</span> & Automation`}
							iconInfo={`Create email sequences to move your ideal prospects subtly from a plain visitor to a hot buyer.`}
			      		/>
			      	</Col>

			      	<Col className="gutter-row" xl={6} lg={6} md={12} sm={12}  xs={24}>
				     	<IconServices
			      			iconSVG={FB_ICON}
			      			iconStyle={{background: "#FFD037", boxShadow: "rgb(255 208 55 / 41%) 1px 9px 13px 0px"}}
			      			iconHeading={`Funnel<span class="block-elem"> Building</span> & Designing`}
							iconInfo={`Create a highly engaging sales funnel that will move your prospective customers seamlessly throughout the customer value journey.`}
			      		/>
				    </Col>

				    <Col className="gutter-row" xl={6} lg={6} md={12} sm={12}  xs={24}>
				  		<IconServices
			      			iconSVG={WB_ICON}
			      			iconStyle={{background: "#12E3FF", boxShadow: "rgb(18 227 255 / 22%) 1px 9px 13px 0px"}}
			      			iconHeading={`Website <span class="block-elem">Development</span> <span class="block-elem">& Design</span>`}
							iconInfo={`Create an eye-capturing website design while increasing its conversion ratio through its friendly and highly efficient functionality.`}
			      		/>
				    </Col>

				    <Col className="gutter-row" xl={6} lg={6} md={12} sm={12}  xs={24}>
				     	<IconServices
			      			iconSVG={PR_ICON}
			      			iconStyle={{background: "#575988", boxShadow: "rgb(87 89 136 / 32%) 1px 9px 13px 0px"}}
			      			iconHeading={`Client Engagement and<span class="block-elem">Brand Loyalty <span class="block-elem">Programs</span></span>`}
							iconInfo={
								`There is no better way in 
								keeping your clients happy and delighted 
								but to keep your communication constant with them
								as well.`
							}
			      		/>
				    </Col>
			    </Row>
			    </div>
			</section>
		</>
	)
}	
		
export default Services;