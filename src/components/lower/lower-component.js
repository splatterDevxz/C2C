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
		    	>

            	<div className="lower-img-wrapper">
               		<img src={imgSrc}/>
                </div>
            </Col>
		 	
		 	<Col span={12} style={{paddingLeft:'0', paddingRight:'0'}}>
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
	imgSrc : PropTypes.object,
	title : PropTypes.string,
	isOrder :PropTypes.bool
}

export default LowerComponent;