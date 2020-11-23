import React from "react"
import { Row, Col } from 'antd'
import {Link} from "gatsby" 
import Newsletter from "./forms/newsletter"
import SocialMedia from "./sm-container"

const Footer = () =>{

	return(
		<>
			<section id="footer">
				<div className="container">				
	                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

				      	<Col className="gutter-row footer-nav-container" xl={12} lg={12} md={12} sm={24}  xs={24}>
				      		<nav id="footer-navigation">
				      			<h1>C<span className="span-blue">2</span>C Marketing Solutions</h1>
				      			<p>
				      				Created for Creators. Built for Builders. Transform your random visitors to raving fans and turn your inquiries to customers.
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

				      			<SocialMedia/>

				      		</nav>
				      	</Col>

				      	<Col xl={12} lg={12} md={24} sm={24} xs={24}>
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