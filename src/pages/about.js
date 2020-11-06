import React from "react"
import Layout from "components/layout"
import Banner from "components/non-front-banner"
import BG from "assets/images/svg/about_us.svg"
import InfoBox from "components/candely";
import {Row, Col} from "antd"

const About = () =>{
	return(
		<>
			<Layout>
				<Banner
					heading={`<h1>About C<span class="span-blue">2</span>C</h1>`}
					subheading={`Marketing Solutions`}
					banrClass="about_us_banner"
					bgImg={BG}
				/>

				<section id="about-upper-section">
					<div className="container">
						<Row gutter={20}>
							<Col span={10}>
								<div>
									<h1>Create2Convert Marketing Solutions</h1>
									<p>
										is a marketing
										firm which applies both conventional and digital
										marketing strategies, established to help local and
										international businesses.
									</p>
								</div>
							</Col>
						</Row>
					</div>
				</section>


				<section className="about-us-page-content">
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