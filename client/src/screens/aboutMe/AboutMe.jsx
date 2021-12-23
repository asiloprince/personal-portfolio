import React, { useState } from 'react'
import './aboutMe.css'
import Card from 'react-bootstrap/Card'
import person from '../../images/person.png'


function AboutMe() {

    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    /* REUSABLE MINOR COMPONENTS */
    const EducationHeading = (props) => {
        return (
            <div className="education-heading">
                <div className="education-main-heading">
                    <div className="heading-bullet"><i className="fa fa-codiepie" /></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="education-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="education-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    /* STATIC education DATA */
    const educationBullets = [
        { label: "Education", logoSrc: "education.svg" },
        // { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Skill Set", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.png" },
    ];

    const programmingSkillsDetails = [

        { skill: "HTML/CSS", ratingPercentage: 80 },
        { skill: "AdobeXD", ratingPercentage: 70 },
        { skill: "JavaScript", ratingPercentage: 65 },
        { skill: "Django", ratingPercentage: 68 },
        { skill: "React JS", ratingPercentage: 50 },
        { skill: "My SQL", ratingPercentage: 55 },
        { skill: "Node JS", ratingPercentage: 53 },
        { skill: "Mongo DB", ratingPercentage: 58 },
        { skill: "Python", ratingPercentage: 69 },
        { skill: "PHP", ratingPercentage: 50 },

    ];

    const projectsDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2021", toDate: "Present" },
            description:
                "A Personal Portfolio website to showcase all my details and projects at one place.",
            subHeading: "Technologies Used: React JS, Bootsrap",
        },
        {
            title: "Quiz Web Application ",
            duration: { fromDate: "2021", toDate: "Present" },
            description:
                "A quiz application designed to Check your Python learning progress and take your skills to the next level with Real Python’s interactive quizzes.",
            subHeading: "Technologies Used:  Django, SQLite, AJAX, Bootstrap.",
        },

    ];

    const educationDetails = [
        /* EDUCATION */
        <div className="education-screen-container" key="education">
            <EducationHeading
                heading={"Batangas State University"}
                subHeading={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
                fromDate={"2020"}
                toDate={"Present"}
            />
            <EducationHeading
                heading={"Gulod Senior High School"}
                subHeading={""}
                fromDate={"2018"}
                toDate={"2020"}
            />
            <EducationHeading
                heading={"Batangas National High School "}
                subHeading={""}
                fromDate={"2014"}
                toDate={"2017"}
            />
            <EducationHeading
                heading={"Melecio Arceo Memorial Elementary School"}
                subHeading={""}
                fromDate={"2008"}
                toDate={"2013"}
            />
        </div>,

        <div
            className="education-screen-container programming-skills-container"
            key="programming-skills"
        >
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
        </div>,
        /* PROJECTS */
        <div className="education-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index) => (
                <EducationHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate}
                    toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,
        /* Interests */
        <div className="education-screen-container" key="interests">
            <EducationHeading
                heading="Reading"
                description="I love reading Reddit threads, programming documentation, and story-like content such as novels, movies, and manga. Stories can get people's attention and make things easier to understand and remember."
            />
            <EducationHeading
                heading="Technology"
                description='Technology has the power to change the lives of the world and individuals, as the phrase "well-developed science and technology is indistinguishable from magic." I want to be a person who can always catch up with the latest technology and respond to changes.'
            />
            <EducationHeading
                heading="Competitive Gaming"
                description="Having an interactive gaming session, facing formidable opponents, and teamwork are what excite me the most while playing online games."
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return educationBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}
            >
                <input type="image"
                    className="bullet-logo"
                    src={require(`../../images/IconBullet/${bullet.logoSrc}`)}
                    alt="oops"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getEducationScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className="education-details-carousal"
            >
                {educationDetails.map((educationDetail) => educationDetail)}
            </div>
        );
    };



    return (
        <div>
            <Card className='cards' >
                <Card.Body className='card-body'>
                    <Card.Title><strong>Quick Overview</strong></Card.Title>
                    <Card.Text>

                        <section className='overview'><i className="fas fa-code mr-5"></i> I have built 5 projects since 2020.
                        </section>
                        <section className='overview'> <i className="fas fa-graduation-cap"></i> I am a Second year IT Student at Batangas State University.
                        </section>
                        <section className='overview'> <i className="fab fa-dev"></i>  I am an aspiring full-stack developer.
                        </section>
                        <section className='overview'>  <i className="fas fa-exclamation-circle"></i> I do not have any job experience yet.
                        </section>
                    </Card.Text>

                </Card.Body>
            </Card>
            <div id='about-me'></div>
            <div className='aboutme-container'>
                <div>
                    <Card className='card-person' >
                        <img src={person} alt='person icon' />
                    </Card>
                </div>
                <div className='about-text'>
                    <h1>
                        Who am i
                    </h1>
                    <p> I am Prince Gerald Asilo, Second year IT student at Batangas State University.
                    </p>
                    <p> I chose Information and Communication Technology because I love technology and I was curious about anything that had to do with the internet and As an aspiring full-stack developer, I am constantly working on my skills and expanding my knowledge in a variety of programming languages because technology never stops growing.</p>
                </div>
            </div>
            <div
                className="education-container"

            >
                <div>
                    <h3 className='edu-h3'>Education</h3>
                </div>
                <div className="education-content">
                    <div className="education-card">
                        <div className="education-bullets">
                            <div className="bullet-container">
                                <div className="bullet-icons"></div>
                                <div className="bullets">{getBullets()}</div>
                            </div>
                        </div>

                        <div className="education-bullet-details">{getEducationScreens()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe

