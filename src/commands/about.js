import R from 'ramda'
import React from 'react'
import { Title, Container } from  '../styles/styled.js'

const _renderSkills = item => {
  return(
    <div key={(Math.random() * (0.120 - 0.0200) + `${item.percentage}`)}>
      <p>
        {item.skill}
        <span className="percval">{item.percentage}</span>
      </p>
      <div className="meter nostrips develope">
        <p className="percentage" style={{width: `${item.percentage}%`}} />
      </div>
    </div>
  )
}

const aboutMe = (data) => {
  return(
    <div>
      <Container>
        <Title>A little about me</Title>
        <p>
          <span>Hello. I am a</span>
          <span className="rotate-words rotateInWord">
            <span>Front-End Developer</span>
            <span>Pro Soccer Player</span>
            <span>ReactJS Developer</span>
            <span>Wordpress lover</span>
            <span>Freelancer</span>
          </span>
          <br />
          I live in the best town in the world (Las Vegas).
          Besides coding and spending most of my time dealing with Computers,
          I am also a Professional Indoor Soccer Player, playing for
          The Las Vegas Legends.
        </p>
        <p className="slogan">
          " I would like to change the world, but they won't give me the source code. "
        </p>

        <div className="skills-area">
          <div className="box-text">
            <Title>MY SKILLS</Title>
            <div className="skills-box">
              <div className="skills-progress">
                { R.map(_renderSkills)(data.skill_set) }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default aboutMe
