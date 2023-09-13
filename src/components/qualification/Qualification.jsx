import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (i) => {
        setToggleState(i)
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={
                            toggleState === 1 
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                        >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div 
                        className={
                            toggleState === 2 
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                        >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div 
                        className={
                            toggleState === 1 ?
                            "qualification__content qualification__content-active" :
                            "qualification__content"
                        }
                    >                    
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Senior</h3>
                                <span className="qualification__subtitle">
                                    Learn C# language and .NET platform. Web 3.0 blockchain and data warehouse
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Junior</h3>
                                <span className="qualification__subtitle">
                                    Learn about UI/UX design and Python language. And techniques for network safety and security
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2021 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Sophomore</h3>
                                <span className="qualification__subtitle">
                                    Learn to design static websites, android apps in languages: HTML, CSS, JavaScript, Kotlin.
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2020 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder">
                                    <span className="qualification__line"></span>
                                </span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Fresher</h3>
                                <span className="qualification__subtitle">
                                    Get familiar with basic programming languages: C, C++, Java
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2019 - 2020
                                </div>
                            </div>
                        </div>
                    </div>

                    <div 
                        className={
                            toggleState === 2 ?
                            "qualification__content qualification__content-active" :
                            "qualification__content"
                        }
                    >
                    <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Intern Frontend</h3>
                                <span className="qualification__subtitle">
                                TMA Solutions Binh Dinh - Utilizing the MERN stack toolkit, a unique e-commerce website was created. a working understanding of the FrontEnd-BackEnd integration process, API creation and testing, state management, and routing inside the application. 
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    July 2023 - Sep 2023
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend developer</h3>
                                <span className="qualification__subtitle">
                                    Make projects using ReactJs, and learn more NextJS
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UI/UX Designer</h3>
                                <span className="qualification__subtitle">
                                Learn to design web and app interfaces from the subject "Human-machine interaction" at school
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2022 - 2023
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Intern Frontend</h3>
                                <span className="qualification__subtitle">
                                    Cong Ty Trach Nhiem Huu Han OceanTech - I have gained a deeper understanding of HTML, CSS, and JavaScript fundamentals. Additionally, I possess a working knowledge of the ReactJS framework. 
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    July 2021 - Sep 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>                        
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification