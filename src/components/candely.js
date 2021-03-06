import React from "react"
import { Row, Col } from 'antd'
import { Link } from "gatsby"


const Candely = ()=>{	
	return(
		<>
			<section id="candely-section">		
				<div className="container">
					<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

					    <Col xl={12} lg={12} md={24} sm={24} xs={24}  >
					     	<div className="candely-wrapper">
						    	<span>
						    		Contact us now
						    	</span>
						    	<h1>
						    		Let’s take your business to the next level!
						    	</h1>
						    </div>
			            </Col>
					 	
					 	<Col xl={12} lg={12} md={24} sm={24} xs={24}>
					 		<div className="candely-wrapper-button">
						 		<p>Book an Absolutely Free Consultation HERE</p>
						 		
						 		<button>
						 			<a href="/contact">Click Here</a>
						 		</button>
					 		</div>
			            </Col>
			        </Row>
				</div>
			</section>	
		</>
	)
}

export default Candely;