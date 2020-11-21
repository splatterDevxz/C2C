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
				      	<Col className="gutter-row" xl={12} lg={12} md={24, {order:1}} sm={24, {order:1}}  xs={24, {order:1}}>
				      		<nav id="footer-navigation">
				      			<h1>C<span className="span-blue">2</span>C Marketing Solutions</h1>
				      			<p>
				      				We are a full-house marketing and digital services for entrepreneurs and solopreneurs.
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
				      					<a href="https://www.facebook.com/C2C-Marketing-Solutions-118234263430713/">
				      						<FacebookOutlined />
				      					</a>
				      				</li>

				      				<li>
				      					<a href="https://www.instagram.com/create2convert/?fbclid=IwAR2Q1EyL0G4HRUTnnWRdzCe4T04ohmZhitmWMcvUMFh3kNpGMsa9BSKJazk">
				      						<InstagramOutlined/>
				      					</a>
				      				</li>

									<li>
				      					<a href="https://twitter.com/Create2C?fbclid=IwAR28xIuEwvAuXYBGh27YrqxXjC71_nCKObmMF8ateCycvJUwauHl9qSV1HY">
				      						<TwitterOutlined/>
				      					</a>
				      				</li>	

									<li>
				      					<a href="https://www.linkedin.com/in/C2C-Marketing-Solutions-118234263430713ng-solutions-4a232b200/?fbclid=IwAR0ejxruCdwXV2jAcSUOkZvcdKCuZ_FiACaeVDJMJVlkjWZUzNp5HKN9iP8">
				      						<LinkedinOutlined />
				      					</a>
				      				</li>	
				      			</div>
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