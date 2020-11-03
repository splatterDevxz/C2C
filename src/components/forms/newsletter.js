import React from "react";




const Newsletter = () =>{
	return(
		<>
			<form onSubmit="" >
				<label>Newsletter</label>
				<input 
					type='text' 
					placeholder='Email'
					name='email' 
					className="inputStyles" />

				<input id="submit-button" type="submit" value="Submit"/>
			</form>
		</>
	)
}

export default Newsletter