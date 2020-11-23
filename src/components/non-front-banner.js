import React from "react"
import PropTypes from "prop-types"
import {Row,Col} from "antd"

const NFB = ({
	heading,
	subheading,
	banrClass,
	bgImg,
})=>{

	function createMarkup(instance) {
		return {__html: instance}; 
	}


	return(
		<>
			<section id="banner-non-front">
				<div className="container">
					<Row>
						<Col  xl={8} lg={8} md={12} sm={24}  xs={24} >
							<div className="about-heading-wrapper">
								<div  dangerouslySetInnerHTML={createMarkup(heading)} />
								<span className="subheading">{subheading}</span>
							</div>
						</Col>

						<Col span={12}>
							<div className={`${banrClass}`}>
								<img 
									alt="illustration_image" 
									src={bgImg}
								/>
							</div>
						</Col>
					</Row>
				</div>
			</section>
		</>
	)			
}

NFB.propTypes = {
	heading : PropTypes.string,
	subheading: PropTypes.string,
	banrClass : PropTypes.string,
	bgImg :PropTypes.object
}

export default NFB;