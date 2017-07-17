import R from 'ramda'
import React, { Component } from 'react'
import Terminal from 'terminal-in-react'

import { aboutMe, personalData, Work, Experience } from './commands/index'
import { connect } from 'react-redux'
import { Skills, Jobs, Portfolio } from './actions/index'
import lucho from './img/lucho.jpg'

const introMsg = () => {
  return(
    <div>
      <h2>
        Welcome to my site. Start by typing: 'help', to see the available commands.
      </h2>
    </div>
  )
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      maximise: true
    }
  }

  componentDidMount() {
    this.props.onMount()
  }

  showMsg = () => 'Hello World'
  motto = () => "I would like to change the world, but they won't give me the source code."
  introMsg = "Welcome to my site. Start by typing: 'help', to see the available commands."

  render() {
    return (
      <div className="terminal-container" style={{
          background: `#fbfbfb url(${lucho}) no-repeat center bottom`
        }}>
        <Terminal
          color="green"
          backgroundColor="black"
          barColor="black"
          style={{
            fontWeight: 'bold',
            fontSize: '1em',
          }}
          commands={{
            about: () => aboutMe(this.props.skills),
            info: personalData,
            experience: () => Experience(this.props.jobs),
            work: () => Work(this.props.work),
          }}
          descriptions={{
            echo: false,
            "edit-line": false,
            about: 'a little bit about me',
            info: 'shows my personal info',
            experience: 'my work experience',
            work: 'shows my latest work examples',
            show: 'shows the instructions message',
            help: 'list all the available commands'
          }}
          promptSymbol="$"
          msg={introMsg()}
          watchConsoleLogging={false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  skills: R.path(['skills'])(state),
  jobs: R.path(['jobs'])(state),
  work: R.path(['work'])(state)
})

const dispatchPropsToState = dispatch => ({
  onMount: () => {
    dispatch(Jobs.fetchJobs())
    dispatch(Portfolio.fetchWork())
    dispatch(Skills.fetchSkills())
  }
})

export default connect(mapStateToProps, dispatchPropsToState)(App)
