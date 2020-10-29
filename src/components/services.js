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
				<h1>
                    Services Offered
                </h1>
				
                <p className="sub-content">		
                	We are your trusted arm in the fullfilment 
                	of your promised to your client
                </p>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
			      	<Col className="gutter-row" span={6}>
			      		<IconServices
			      			iconSVG={CW_ICON}
			      			iconStyle={{background: "#6C63FF", boxShadow: "rgb(70 61 212 / 24%) 1px 9px 13px 0px"}}
			      			iconHeading={`Content Writing & Copywriting`}
							iconInfo={`Create email sequences to move your ideal prospects subtly from a plain visitor to a hot buyer.`}
			      		/>
			      	</Col>

			      	<Col className="gutter-row" span={6}>
			      		<IconServices
			      			iconSVG={EC_ICON}
			      			iconStyle={{background: "#7FCD63", boxShadow: "rgb(127 205 99 / 54%) 1px 9px 13px 0px"}}
			      			iconHeading={`Email Creatives & Automation`}
							iconInfo={`Create email sequences to move your ideal prospects subtly from a plain visitor to a hot buyer.`}
			      		/>
			      	</Col>

				    <Col className="gutter-row" span={6}>
				  		<IconServices
			      			iconSVG={SM_ICON}
			      			iconStyle={{background: "#FF8A65", boxShadow: "rgb(255 138 101 / 54%) 1px 9px 13px 0px"}}
			      			iconHeading={`Social Media Campaign`}
							iconInfo={`Create email sequences to move your ideal prospects subtly from a plain visitor to a hot buyer.`}
			      		/>
				    </Col>

				    <Col className="gutter-row" span={6}>
				     	<IconServices
			      			iconSVG={FB_ICON}
			      			iconStyle={{background: "#FFD037", boxShadow: "rgb(255 208 55 / 41%) 1px 9px 13px 0px"}}
			      			iconHeading={`Funnel Building & Designing`}
							iconInfo={`Create email sequences to move your ideal prospects subtly from a plain visitor to a hot buyer.`}
			      		/>
				    </Col>

					<Col className="gutter-row" span={6}>
			      		<IconServices
			      			iconSVG={LG_ICON}
			      			iconStyle={{background: "#FF6584", boxShadow: "rgb(255 101 132 / 35%) 1px 9px 13px 0px"}}
			      			iconHeading={`Lead <span class="block-elem">Generation</span>`}
							iconInfo={`Create email sequences to move your ideal prospects subtly from a plain visitor to a hot buyer.`}
			      		/>
			      	</Col>

			      	<Col className="gutter-row" span={6}>
			      		<IconServices
			      			iconSVG={RM_ICON}
			      			iconStyle={{background: "#FA4D4D", boxShadow: "rgb(250 77 77 / 41%) 1px 9px 13px 0px"}}
			      			iconHeading={`Reputation <span class="block-elem">Management</span>`}
							iconInfo={`Create email sequences to move your ideal prospects subtly from a plain visitor to a hot buyer.`}
			      		/>
			      	</Col>

				    <Col className="gutter-row" span={6}>
				  		<IconServices
			      			iconSVG={WB_ICON}
			      			iconStyle={{background: "#12E3FF", boxShadow: "rgb(18 227 255 / 22%) 1px 9px 13px 0px"}}
			      			iconHeading={`Website Development <span class="block-elem">& Design</span>`}
							iconInfo={`Create email sequences to move your ideal prospects subtly from a plain visitor to a hot buyer.`}
			      		/>
				    </Col>

				    <Col className="gutter-row" span={6}>
				     	<IconServices
			      			iconSVG={PR_ICON}
			      			iconStyle={{background: "#575988", boxShadow: "rgb(87 89 136 / 32%) 1px 9px 13px 0px"}}
			      			iconHeading={`Personal <span class="block-elem">Relation</span>`}
							iconInfo={`Create email sequences to move your ideal prospects subtly from a plain visitor to a hot buyer.`}
			      		/>
				    </Col>
			    </Row>
			</section>
		</>
	)
}	
		
export default Services;