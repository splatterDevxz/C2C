import React from "react"
import {Link} from "gatsby"
import Logo from "assets/images/svg/main_logo.svg"

const Navigation = () =>{
	return(	
		<>
			<div className="container">
			<nav id="navigation">
					<span id="logo-span">
						<Link to="/">
							<img src={Logo} alt="main_logo"/>
						</Link>
					</span>
					<ul>
						<li>
							<Link to="/about">
								About C2C
							</Link>	
						</li>

						<li>
							<Link to="/services">
								Services
							</Link>
						</li>
						<li>
							<Link to="/contact">
								contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default Navigation;