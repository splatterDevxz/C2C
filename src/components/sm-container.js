import React from "react"
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined   } from '@ant-design/icons';



const SocialMedia  = ()=>{
	return(
		<>
			<div className="social-media-container">
  				<li>
  					<a href="https://www.facebook.com/C2C-Marketing-Solutions-118234263430713/">
  						<FacebookOutlined />
  					</a>
  				</li>

  				<li>
  					<a href="https://www.instagram.com/create2convert/?fbclid=IwAR2Q1EyL0G4HRUTnnWRdzCe4T04ohmZhitmWMcvUMFh3kNpGMsa9BSKJazk">
  						<InstagramOutlined/>
  					</a>
  				</li>

				<li>
  					<a href="https://twitter.com/Create2C?fbclid=IwAR28xIuEwvAuXYBGh27YrqxXjC71_nCKObmMF8ateCycvJUwauHl9qSV1HY">
  						<TwitterOutlined/>
  					</a>
  				</li>	

				<li>
  					<a href="https://www.linkedin.com/in/C2C-Marketing-Solutions-118234263430713ng-solutions-4a232b200/?fbclid=IwAR0ejxruCdwXV2jAcSUOkZvcdKCuZ_FiACaeVDJMJVlkjWZUzNp5HKN9iP8">
  						<LinkedinOutlined />
  					</a>
  				</li>	
  			</div>
		</>	
	)
}

export default SocialMedia;