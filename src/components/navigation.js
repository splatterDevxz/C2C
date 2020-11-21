import React, {useState} from "react"
import {Link} from "gatsby"
import Logo from "assets/images/logo/logo.png"

const Navigation = () =>{


	const [toggle, togglFunc] = useState(false)
	console.log(toggle);

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


					<div 
					  id="burger-container" 
					  onClick={()=>togglFunc(!toggle)}>

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