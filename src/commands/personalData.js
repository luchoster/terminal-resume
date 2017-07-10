import React from 'react'
import { Title, Container } from  '../styles/styled.js'

const personalData = () => {
  return(
    <div>
      <Container>
        <Title>Personal data</Title>
        <p>Name: Luis Suarez</p>
        <p>Phone: <a href="tel:7025140607">(702) 514-0607</a></p>
        <p>E-mail: contact@luchoster.net</p>
        <Title>Education</Title>
        <p>USAC (Guatemala)<br />
          UMG (Guatemala)<br />
          PreU (HS – Guatemala)
        </p>
      </Container>
    </div>
  )
}

export default personalData
