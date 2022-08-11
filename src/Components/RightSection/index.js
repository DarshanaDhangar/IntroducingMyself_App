import React from "react";
const RightSection = () => {
    return (
        <div className="rightSection">
            <div className="nameHeading">
                <label className="titleName">
                    <strong>Darshana Dhangar</strong>
                </label>
            </div>
            <div className="profile">
                <label className="profileHeading">
                    <strong>PROFESSIONAL SUMMARY</strong>
                </label>
                <p>
                    MBA(Finance)Fresher with key skills of React,JavaScript,HTML,CSS,Project Management.
                    Remarkable relationship building, decision making and communication skills.
                    Known for best-in-class development and collaboration.
                    Hardwirking software developer and can be used to increase team effectiveness.
                    Focused on usability and performance improvements.
                </p>
            </div>
            <div className="profile">
                <label className="profileHeading">
                    <strong>PROJECT</strong>
                </label>
                <div>
                    <label >
                        <strong>Hospital Management System</strong> BCA Final Year | 08/2018-05/2019
                    </label>
                    <ul>
                        <li>Used C# as a front end tool for the application.</li>
                        <li>Used Sql DB to store the data.</li>
                        <li>
                            Project contains 3 forms for patients,doctors and biling forms.That is used for appointments and schedules for doctors.
                        </li>
                    </ul>
                </div>
                <div>
                    <label >
                        <strong>Study of Gov. schemes for farmers</strong> MBA Final Year | 08/2020-05/2021
                    </label>
                    <ul>
                        <li>Survey through google forms</li>
                        <li>Data Analysis and Study of FPO</li>
                        <li>
                            Case Study related to FPO and visited FPO(Sahyadri Farmers Producing Company,Nashik)and analyzed the management.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="profile">
                <label className="profileHeading">
                    <strong>CERTIFICATION</strong>
                </label>
                <div>
                    <ul>
                        <li>
                            <strong>React- The complete guide</strong> Udemy,Online
                        </li>
                        <li>
                            <strong>Web Designing</strong> Disha Institute,Nashik
                        </li>
                        <li>
                            <strong>Python And Machine Learning</strong> Coursera,Online
                        </li>
                        <li>
                            <strong>Financial Planning</strong> Coursera,Online
                        </li>
                        <li>
                            <strong>International Business</strong> Coursera,Online
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default RightSection