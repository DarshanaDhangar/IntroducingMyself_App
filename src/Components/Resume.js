import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import resume from "../Resources/resume.pdf";
const Resume = (props) => {
    const { contactArr, skillArr } = props
    return (
        <div className="container">
            <div className="main">
                <div className="downloadResume">

                    <a href={resume} download="Darshana Resume" target='_blank'>
                        <button type="button" class="btn btn-success btn-lg btn-block">Download Resume</button>
                    </a>

                </div>
                <LeftSection contactArray={contactArr} skillArray={skillArr} />
                <RightSection />
            </div>
        </div>
    )
}
export default Resume;


