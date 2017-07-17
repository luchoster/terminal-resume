import React from 'react'
import Typist from 'react-typist'
import { Title, Container } from  '../styles/styled.js'

const personalData = () => {
  return(
    <div>
      <Container>
        <Typist
          avgTypingDelay={50}
          cursor={{
            hideWhenDone: true,
            hideWhenDoneDelay: 100
          }}
          >
          <Title>Personal data</Title>
          <p>Name: Lucho Su&aacute;rez</p>
          <p>Phone: <a href="tel:7025140607">(702) 514-0607</a></p>
          <p>E-mail: hey@checkitout.io</p>
          <Title>Education</Title>
          <p>USAC (Guatemala)<br />
            UMG (Guatemala)<br />
            PreU (HS – Guatemala)
          </p>
        </Typist>
      </Container>
    </div>
  )
}

export default personalData
