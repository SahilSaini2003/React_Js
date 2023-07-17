import React from 'react'

const About = (props) => {
    let myStyle ={
        color : props.mode==='dark'?'white':'black',
        backgroundColor : props.mode==='dark'?'black':'white'
    }
    return (
        <div className="accordion container my-4" id="accordionExample">
            <h2 style={myStyle}>About me...</h2>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        How Am I?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Hi, I am Sahil Saini.</strong> I put up with my family- My Father, My Mother and My younger Sister in Jaipur, Rajasthan. <code>I'm 19 years old</code>, and I was born in Delhi on 8th of October 2003. I'm a highly motivated and self driven individual with a passion for Computers.
                        I am a lifelong learner, and I have always been drawn to the power of education.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                        Education?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        I had completed my Primary and Secondary Education from <code> Oxford International Public School, Sanganer, Jaipur</code>. <strong> I'm currently Pursuing my Undergraduate Degree i.e. Bachelor of Technology(B.tech) in Computer Science Engineering(C.S.E)</strong> from <code>JaganNath Gupta Institute of Engineering & Technology(J.N.I.T), affilated to Rajasthan Technical University(R.T.U), Kota.</code>
                    </div>
                </div>
            </div>
            <div className="accordion-item"style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        Hobbies, Skills and Something Else?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>I'm quiet passinate about computer and it's working, specially I like Giving them Commands 'The Programming Languages'.</strong> Throughout my Journey I learned and experience many Skills. My Journey Started With the Language <code> "Python" & "SQL" </code>in my 11th Standard in which I worked with it's libraries like Pandas, Numpy, Matplotlib, SQl Connector, OS and so on. After that I came accross more languages and learned them in my College Starting 2 Years.<code> I Have learned C, C++, Basic Java, JavaScript, HTML, CSS and Data Structures(D.S.A).</code>
                        Let's come up to my Hobbies, The Thing I loved the most is Computer. In my free time I am supposed to Play games Like Foothball, Cricket, Mobile Games, etc. and learn some new Skills to Enhance my Knowledge.
                        I am excited about the future and the opportunities that it holds, and I am eager to see where my journey will take me next, and I Will try my Best to acquire all My Dreams.
                        Thank you for taking the time to get to know me a little better.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
