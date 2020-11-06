import React from "react"
import { Row, Col } from 'antd'
import {Link} from "gatsby" 
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined   } from '@ant-design/icons';
import Newsletter from "./forms/newsletter"
const Footer = () =>{

	return(
		<>
			<section id="footer">
				<div className="container">
					
	                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				      	<Col className="gutter-row" span={12}>
				      		<nav id="footer-navigation">
				      			<h1>C<span className="span-blue">2</span>C Marketing Solutions</h1>
				      			<p>
				      				Full-house marketing and digital services for entrepreneurs and solopreneurs
				      			</p>
				      			<ul>
				      				<li>
					      				<Link to="/">
					      					Home
					      				</Link>
				      				</li>
				      				
				      				<li>
					      				<Link to="/about">
					      					About C2C
					      				</Link>
				      				</li>

				      				<li>
					      				<Link to="/services">
					      					Services
					      				</Link>
				      				</li>
				      				<li>
					      				<Link to="/contact">
					      					Contact
					      				</Link>
				      				</li>
				      			</ul>

				      			<div className="social-media-container">
				      				<li>
				      					<a href="">
				      						<FacebookOutlined />
				      					</a>
				      				</li>

				      				<li>
				      					<a href="">
				      						<InstagramOutlined/>
				      					</a>
				      				</li>

									<li>
				      					<a href="">
				      						<TwitterOutlined/>
				      					</a>
				      				</li>

									<li>
				      					<a href="">
				      						<LinkedinOutlined />
				      					</a>
				      				</li>	
				      			</div>
				      		</nav>
				      	</Col>

				      	<Col span={12}>
				      		<div id="newsletter-form">
				      			<Newsletter/>	
				      		</div>
				      	</Col>
				     </Row>

				</div>
			</section>
		</>
	)
}


export default Footer;