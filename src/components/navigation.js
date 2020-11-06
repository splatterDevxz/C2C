import React from "react"
import {Link} from "gatsby"

const Navigation = () =>{
	return(
		<>
			<nav id="navigation">
				<span id="logo-span">
					<img src={''} />
				</span>
				<ul>
					<li>
						<Link to="/about">
							About C2C
						</Link>
					</li>

					<li>
						<Link to="">
							Services
						</Link>
					</li>
					<li>
						<Link to="">
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation;