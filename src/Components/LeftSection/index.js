import React from "react";
import profile from "../../Resources/profile.jpeg";
const leftSection = (props) => {
    const { contactArray, skillArray } = props;
    const middleIndex = Math.ceil(skillArray.length / 2);
    const firstHalf = skillArray.slice().splice(0, middleIndex);
    const secondHalf = skillArray.slice().splice(-middleIndex);
    return (
        <div className="leftSection">
            <div className="imgdiv">
                <img className="profileimg"
                    src={profile}
                    height="150px"
                    width="150px"
                />
            </div>
            <div className="contact">
                <label className="contactHeading">
                    <strong>CONTACT</strong>
                </label>
                {contactArray.map((item) => {
                    return (
                        <div className="contactNumber">
                            <img className="contactimg"
                                src={item.imgUrl}
                                height="13px"
                                width="13px"
                            />
                            <label className="number">{item.description}</label>
                        </div>
                    )
                })}
            </div>
            <div className="contact">
                <label className="contactHeading">
                    <strong>CONTACT</strong>
                </label>
                <div className="skillList">
                    <div>
                        <ul className="unorderedList">
                            {firstHalf.map((item) => {
                                return (
                                    <li>
                                        <strong>{item}</strong>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <ul className="unorderedList">
                            {secondHalf.map((item) => {
                                return (
                                    <li>
                                        <strong>{item}</strong>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contact">
                <label className="contactHeading">
                    <strong>EDUCATION</strong>
                </label>
                <div className="educationList">
                    <ul>
                        <li>
                            <strong>Master of Business Administration(MBA)</strong>
                        </li>
                        <label>
                            <li>
                                <strong>Specialization: </strong>Finance(Major), International Business IB(Minor)
                                <br />
                            </li>
                        </label>
                        <li>
                            <strong>Bachelor of Computer Application(BcA)</strong>
                        </li>
                        <br />
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default leftSection;