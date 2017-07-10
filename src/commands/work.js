import R from 'ramda'
import React from 'react'
import styled from 'styled-components'

const WorkContainer = styled.div`
  border: 1px solid #dbdbdb;
  padding: 28px 23px 31px;
  position: relative;
  background-color: #fff;
  height: auto;
  ${''/* max-width: 500px; */}
  font-family: 'Raleway', sans-serif;
`

const _renderPortfolio = item => {
  return(
    <li key={item.ID} className="animate fadeIn col-md-4 my-gallery-animation item grid">
      <figure className="effect-oscar">
        <img alt="" src={item.portfolio_img} />
        <figcaption>
          <p>{item.title}</p>
        </figcaption>
      </figure>
    </li>
  )
}

const Work = (data) => {
  return(
    <div>
      <WorkContainer>
        <h1>Work</h1>
        <div className="portfolio albumContainer activegrid">
          <ul id="product" className="nav-pills nav-stacked rectangle-list">
            { R.map(_renderPortfolio)(data) }
          </ul>
        </div>
      </WorkContainer>
    </div>
  )
}

export default Work
