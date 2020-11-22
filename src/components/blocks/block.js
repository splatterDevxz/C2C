import React from "react"
import PropTypes from "prop-types"
import {Row , Col} from "antd"

const Block = ({
	title,
	body,
	icon,
})=>{

	return(
		<>	
			<Col className="ant-column-wraps" xl={12} lg={12} md={12} sm={24} xs={24} >
				<div className="wrapper-blocks">
					<span><img alt="icon" src={icon}/></span>
					<h1>{title}</h1>
					<p>{body}</p>	
				</div>
			</Col>	
		</>
	)
}

Block.propTypes= {
	title : PropTypes.string,
	body: PropTypes.string,
	icon : PropTypes.object
}

export default Block;