import styled from 'styled-components'

const Title = styled.h2`
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  text-align: left;
  border-bottom: 1px solid #212121;
  margin-bottom: 33px;
  padding-bottom: 7px;
  letter-spacing: 1px;
`

const Container = styled.div`
  border: 1px solid #dbdbdb;
  padding: 28px 23px 31px;
  position: relative;
  background-color: #fff;
  height: auto;
  font-family: 'Raleway', sans-serif;
  max-width: ${props => props.large ? '800px' : '500px'};
`

export {
  Title,
  Container
}
