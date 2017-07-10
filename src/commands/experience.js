import R from 'ramda'
import React from 'react'
import { createMarkup } from '../lib/helpers'
import { Title, Container } from  '../styles/styled.js'

const _renderJob = job => {
  return(
    <div key={job.ID} className="list-experiences">
      <Title>
        <i className="fa fa-briefcase" />
        <span>{job.title}</span>
        <span className="date">{job.date}</span>
      </Title>
      <div dangerouslySetInnerHTML={createMarkup(job.content)} />
    </div>
  )
}

const Experience = (data) => {
  return(
    <div>
      <Container large>
        <h1>Experience</h1>
        { R.map(_renderJob)(data) }
      </Container>
    </div>
  )
}

export default Experience
