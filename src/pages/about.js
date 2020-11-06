import React from "react"
import Layout from "components/layout"
import Banner from "components/non-front-banner"
import BG from "assets/images/svg/about_us.svg"
import InfoBox from "components/candely";
import {Row, Menu, Col, Collapse} from "antd"
import Blocks from "components/blocks/block"


/*icons*/

import Goal from "assets/images/svg/goal.svg";
import WWD from "assets/images/svg/what_we_do.svg";
import WWH from "assets/images/svg/who_we_help.svg";
import WCU from "assets/images/svg/why_choose_us.svg";


const About = () =>{

	function callback(key) {
	  console.log(key);
	}

	return(
		<>
			<Layout>
				<Banner
					heading={`<h1>About C<span class="span-blue">2</span>C</h1>`}
					subheading={`Marketing Solutions`}
					banrClass="about_us_banner"
					bgImg={BG}
				/>
		
				<section className="about-us-page-content">
					<section id="about-upper-section">
							<div className="container">
								<Row gutter={20}>
									<Col span={8}>
										<div className="introduction-about-c2c">
											<h1>Create2Convert Marketing Solutions</h1>
											<p>
												is a marketing
												firm which applies both conventional and digital
												marketing strategies, established to help local and
												international businesses.
											</p>
										</div>
									</Col>
									<Col span={14}>
										<div id="accordions-wrapper">
											<Row gutter={20}>
												<Blocks
													title="Services for All Business Type"
													icon={Goal}
													body={
														`
															Whatever your goal is for your business, whether
															you want to get more prospects, create brand
															awareness, provide effective solutions to your
															clients, establish authority, or do everything
															simultaneously, C2C Marketing Solutions is your
															best arm in making it happen.
														`
													}
												/>

												<Blocks
													title="What We Do"
													icon={WWD}
													body={
														`
															We are a marketing firm with dedicated team of
															professionals and well-versed experts in their
															respective field who can take care of every
															marketing needs for you, while you focus on
															growing your business further. We help you
															transform your business from the industrial to the
															information age and become globally competitive.
														`
													}
												/>

												<Blocks
													title="Who We Help?"
													icon={WWH}
													body={
														`
															We help different types of business whether you
															are a start-up or have already established a client-
															based and would love to increase more your
															business potential, we are your partner to success.
														`
													}
												/>

												<Blocks
													title="Why Choose Us"
													icon={WCU}
													body={
														`
															We are your trusted arm in the fulfillment of your
															promised services to your clients. Our focus is
															centered towards providing quality service and
															increasing the revenue of your company with the
															value of our work.
														`
													}
												/>
										</Row>
									</div>
								</Col>
							</Row>
						</div>
					</section>

					<div className="container">
						<Row gutter={20}>
							<Col span={10}>
								<div className="third-block block">
									<h1> Values </h1>
									<p>
										Integrity – Integrity is everything. Our team of experts upholds
										the value of integrity in providing cohesive approach to our
										clients’ needs.
									</p>
									<p>
										Reliability – Create measurable and tangible results to our
										respective clients.
									</p>
									<p>
										Service – Service is embedded in our hearts. The heart to serve is
										vital to accomplish the mission.
									</p>	

									<p>
										Commitment – We come together as one, we communicate
										consistently for continuous progress, and we are staying together
										for success. We are accountable to one another.
									</p>
								</div>	
							</Col>

							<Col span={7}>
								<div className="first-block block">
									<h1>Mission</h1>
									<p>	
										To become the Go-To marketing firm which creates results-
										oriented and long lasting solutions to help start-up businesses
										and online entrepreneurs get more clients, maintain good social
										presence, and create more repeat businesses.
									</p>
								</div>
							</Col>

							<Col span={7}>
								<div className="second-block block">
									<h1>Vision</h1>
									<p>
										Providing innovative and highly converting programs to increase
										our clients’ profitability ratio through sustainable marketing
										strategies and to provide equal opportunities to industry experts.
									</p>
								</div>
							</Col>
						</Row>

						<section className="our-team-contents">
							<Row gutter={20}>
								<Col span={8}>
									<div className="our-team-wraps">
										<h1>
											Our Team<span className="dot">.</span>
										</h1>

										<p className="sub-heading">
											At C2C Marketing, we provide solution that is tailored fit to your
											business problem.
										</p>
									</div>
								</Col>

								<Col span={16}>

									<div className="content-wrapper-info">
										<p>
											If you want to get more prospects, create brand awareness,
											provide effective services to your clients, establish authority, or
											do everything simultaneously, C2C Marketing Solutions is your
											best arm in making it happen.
										</p>
										<p>
											We have a team of experts with strong business acumen who will
											extensively conduct market research in order for us to determine
											the appropriate and effective solutions for your business. If you
											believe there is still something you need to do to thrive in your
											business faster than your competition, we would love to connect
											with you for an absolutely free business consultation.
										</p>
									</div>
								</Col>
							</Row>
						</section>
					</div> 
				</section>

				<InfoBox/>
			</Layout>		
		</>
	)
}

export default About;