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
			<Col span={12}>
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