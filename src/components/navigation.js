import React, {useState} from "react"
import {Link} from "gatsby"
import Logo from "assets/images/logo/logo.png"
import SocMed from "./sm-container"

const Navigation = () =>{

	const [ isOpenToggle, toggleFunc] = useState(false)
	console.log(isOpenToggle);

	return(
		<>
			<div className="container">
				<nav id="navigation">
					
					<span id="logo-span">
						<Link to="/">
							<img src={Logo} alt="main_logo"/>
						</Link>
					</span>	

					<ul style={{display : `${!isOpenToggle ? 'flex' : 'none' }`}}>
						<li>
							<a to="/about">
								About C2C
							</a>
						</li>
						
						<li>
							<a to="/services">
								services
							</a>
						</li>

						<li>
							<a id="child-last" to="/contact">
								Contact
							</a>
						</li>
						
						{
							!isOpenToggle && (
								<div id="socmd-mobile-wraps">
									<SocMed/>
								</div>
							)
						}
					</ul>

					<div 
					  id="burger-container" 
					  onClick={()=>toggleFunc(!isOpenToggle)}>
					  <div className="bar1"></div>	
					  <div className="bar2"></div>
					  <div className="bar3"></div>
					</div>

				</nav>
			</div>
		</>
	)
}

export default Navigation;