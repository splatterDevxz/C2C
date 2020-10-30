import React from "react"
import { Row, Col } from 'antd'
import { Link } from "gatsby"

const Candely = ()=>{
	return(
		<>
			<section id="candely-section">
				<div className="container">
					<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >

					    <Col span={12}>
					     	<div className="candely-wrapper">
						    	<span>
						    		Candely
						    	</span>
						    	<h1>
						    		Sounds good? Start Converting More While Spending Less!
						    	</h1>
						    </div>
			            </Col>
					 	
					 	<Col span={12}>
					 		<div className="candely-wrapper-button">
						 		<p>Book an Absolutely Free Consultation HERE</p>
						 		
						 		<button>
						 			<a href="">Click Here</a>
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