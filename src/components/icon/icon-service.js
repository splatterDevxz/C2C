import React from "react"
import PropTypes from "prop-types"


const IconServices = ({
	 iconSVG,
	 iconStyle,
	 iconInfo,
	 iconHeading
})=>{
	return (
		<>
			<div className="icon-service">
				<span style={iconStyle}>
					<img src={iconSVG} alt="icon-svg" />
				</span>

				<h2 dangerouslySetInnerHTML={{__html: iconHeading}} />
			
				<p>
					{iconInfo}
				</p>
			</div>
		</>	
	)
}


IconServices.propTypes = {
	iconSVG: PropTypes.string,
	iconStyle: PropTypes.object,
	iconInfo: PropTypes.string,
	iconHeading: PropTypes.string
}

export default IconServices