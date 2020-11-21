import React from "react";
import PropTypes from "prop-types"

import { Row, Col } from 'antd';

const LowerComponent = ({
	content,
	imgSrc,
	title,
	isOrder,
})=>{

	

	return(
		<>
		 <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} 
		 	style={
		 		{
		 		 	justifyContent: 'center', 
		 		 	alignItems: 'center'
		 		}
		 	}>

		    <Col span={12} order={isOrder ? 1 : 0} 
		    	style=
		    		{
		    			{
		    				paddingLeft:'0',
		    		 		paddingRight:'0'
		    		 	}
		    		}

		    	className="parent-img-container"
		    	>

            	<div className="lower-img-wrapper">
               		<img src={imgSrc}/>
                </div>
            </Col>
		 		
		 	<Col 
		 		xl={12} lg={12} md={24} sm={24} xs={24} 
		 		style={{paddingLeft:'0', paddingRight:'0'}} className="parent-content-grid">
		 		<div className="content-lower-wrapper">
		 			<h1>{title}</h1>
		 			<p>{
		 				content
		 			}</p>
		 		</div>
            </Col>

		 </Row>
		</>
	)
}

LowerComponent.propTypes= {
	content : PropTypes.string,
	imgSrc : PropTypes.string,
	title : PropTypes.string,
	isOrder :PropTypes.bool
}

export default LowerComponent;