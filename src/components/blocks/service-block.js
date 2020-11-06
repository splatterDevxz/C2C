import React from "react"
import PropTypes from "prop-types"
import {Row, Col} from "antd"

const ServiceBlock = ({
	heading,
	icon,
	body,
	bg
}) =>{


	function createMarkup(tag) { 
		return {__html: tag}; 
	};

	return(
		<>
			<Col span={12}>
				<div className="service-block" style={bg}>
					<span><img src={icon}/></span>
					<h1>{heading}</h1>
					<div dangerouslySetInnerHTML={createMarkup(body)} />
				</div>
			</Col>
		</>
	)
}


ServiceBlock.propTypes ={
	heading :PropTypes.string,
	icon : PropTypes.object,
	body : PropTypes.string,
	bg : PropTypes.object
}
export default ServiceBlock