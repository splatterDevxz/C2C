import React from "react";

import LowerComponent from "components/lower/lower-component";
import FirstSvg from "assets/images/svg/diagnose_and_analyze.svg"
import FourthSvg from "assets/images/svg/planning.svg"
import ThirdSvg from "assets/images/svg/execution_of_plan.svg"
import SecondSvg from "assets/images/svg/measure.svg"


const LowerMain = ()=>{
	return(
		<>
			<section className="section-lower-main">
				<div className="container">
					<h1 id="heading-lower-main">
						How Do we Do 
						<span>Business.</span>
					</h1>
						<LowerComponent
							title="Diagnose and Analyze"
							isOrder={false}
							content={
							`
								We need to do a little bit of root cause analysis as
								to what went wrong or what have you done in the
								past which didn’t convert to your desirable result.
							`
							}
							imgSrc={FirstSvg}
						/>

						<LowerComponent
							title="Planning"
							isOrder={true}
							content={
							`
								We will do extensive market research with your
								competition and your target audiences. Through
								this, we’d be able to assign the right team who are
								well-versed in consumer psychology to deliver the
								necessary solution.
							`
							}
							imgSrc={SecondSvg}
						/>
						
						<LowerComponent
							title="Execution of the Plan"
							isOrder={false}
							content={
							`
								We will implement the customized plan, track
								results, and develop areas that needs
								improvement.
							`
							}
							imgSrc={ThirdSvg}
						/>


						<LowerComponent
							title="Measure and Interpret the Results"
							isOrder={true}
							content={
							`
								We will study
								the data and interpret the results 
								to identify your company’s key points and
								weaknesses.
							`
							}
							imgSrc={FourthSvg}
						/>
				</div>
			</section>
		</>
	)
}


export default LowerMain;