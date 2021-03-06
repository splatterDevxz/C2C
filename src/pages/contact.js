import React from "react"
import Layout from "components/layout"
import {Row,Col} from "antd"
import Inputs from "components/inputs/input"
import IconContact from "assets/images/svg/contact.svg"
import {SendOutlined, PhoneOutlined } from  "@ant-design/icons"

const Contact = (props)=>{

	function OnSubmitForm (e) {

	    e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
            } else {
            	console.log('something went wrong')
            }
        };

        xhr.send(data);
       
	}

	return(
		<>
			<Layout props={props.location}>
				<div className="container" id="contact-wrapper-info">
					<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
						<Col id="info-contact" xl={12} lg={12} md={12} sm={24}  xs={24} >
							<div id="contact-info">
								
								<h1>Contact Us</h1>
								
								<p>
									 Thinking of Creating
									 those digital marketing
									 efforts to reality? 
									 Let's talk. 
									 We Can Help
								 </p>

								<img src={IconContact} alt="contac_icon" />

								<nav id="contact-navlist">
									<li> <PhoneOutlined /> +1234 5678</li>
									<li> <SendOutlined/> +Cebu City Philippines</li>
								</nav>
								
							</div>
						</Col>

						<Col xl={12} lg={12} md={12} sm={24}  xs={24} >
							<main className="flexMainContainer">
								<div className="flex-container-fx">

									<h1>Send Us A Message</h1>
										<p className="subcontent-contact-para">
											To send us an email, 
											you may use the form below
										</p>
									<form 
										onSubmit={OnSubmitForm}
										action="https://formspree.io/xvopdpny"
										method="POST">

										<div className="columns" id="form-wrapper">
											<div className="column is-half">
										
											<Inputs 
												name="first Name" 
												type="text" />

											<Inputs
												name="phone" 
												type="text" />
											<Inputs
												name="company" 
												type="text" />


											</div>

											<div className="column is-half">

												<Inputs 
													name="email"
													type="email" />

												<Inputs 
													name="address" 
													type="text" />

											</div>
										</div>

										<div className="columns">
											<div className="column is-full" id="textAreaContainer">
												<label> Message	</label>
										          <textarea type="text" name='message' 
											           className="textArea"
											           placeholder='Message'
											           required />
						

										        <div className="buttonContainer">
													<input 
													className="abtiaryButton" 
													value="Submit"
													type="submit" />
												</div>
											</div>
										</div>
									</form>
								</div>
							</main>
						</Col>
					</Row>
				</div>
			</Layout>
		</>
	)
}

export default Contact;