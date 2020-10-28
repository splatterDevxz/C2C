import React from "react"
import { Row, Col, Divider } from 'antd';
import IconServices from "components/icon/icon-service"
import CW_ICON  from "assets/images/svg/content_writing.svg"


const Services = ()=>{
	return(
		<>
			<section id="section-services">
				<h1>
                    Services Offered
                </h1>

                <p>
                	We are your trusted arm in the fullfilment 
                	of your promised to your client
                </p>

                 <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
			      	<Col className="gutter-row" span={6}>
			      		<IconServices
			      			iconSVG={CW_ICON}
			      			iconStyle={{background: "#6C63FF", boxShadow: "1px 9px 13px 0px #463dd480"}}
			      			iconHeading={`Content Writing & Copywriting`}
							iconInfo={`Create email sequences to move your ideal prospects subtly from a plain visitor to a hot buyer.`}
			      		/>
			      	</Col>

			      	<Col className="gutter-row" span={6}>
			      		<IconServices
			      			iconSVG={CW_ICON}
			      			iconStyle={{background: "#6C63FF", boxShadow: "1px 9px 13px 0px #463dd480"}}
			      			iconHeading={`Content Writing & Copywriting`}
							iconInfo={`Create email sequences to move your ideal prospects subtly from a plain visitor to a hot buyer.`}
			      		/>
			      	</Col>

				    <Col className="gutter-row" span={6}>
				  		<IconServices
			      			iconSVG={CW_ICON}
			      			iconStyle={{background: "#6C63FF", boxShadow: "1px 9px 13px 0px #463dd480"}}
			      			iconHeading={`Content Writing & Copywriting`}
							iconInfo={`Create email sequences to move your ideal prospects subtly from a plain visitor to a hot buyer.`}
			      		/>
				    </Col>

				    <Col className="gutter-row" span={6}>
				     	<IconServices
			      			iconSVG={CW_ICON}
			      			iconStyle={{background: "#6C63FF", boxShadow: "1px 9px 13px 0px #463dd480"}}
			      			iconHeading={`Content Writing & Copywriting`}
							iconInfo={`Create email sequences to move your ideal prospects subtly from a plain visitor to a hot buyer.`}
			      		/>
				    </Col>
			    </Row>
			</section>
		</>
	)
}	
		
export default Services;