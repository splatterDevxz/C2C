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

			<span className="icon-service">
				<span style={iconStyle}>
					<img src={iconSVG} alt="icon-svg" />
				</span>

				<h2>
					{iconHeading}
				</h2>
				<p>
					{iconInfo}
				</p>
			</span>
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