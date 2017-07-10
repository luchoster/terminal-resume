import ApiRequest from '../lib/api'

const PAGE = 'skills'
const TYPE = {
  request: 'REQUEST_PAGE',
  receive: 'RECEIVE_PAGE'
}

const request = () => ({ type: TYPE.request })
const receive = payload => ({ type: TYPE.receive, payload })

const fetchSkills = () => (dispatch, getState) => {
  dispatch(request())

  return ApiRequest({
    method: 'get',
    path: PAGE
  })

  .then( skills => { dispatch(receive(skills.data)) })
}


export default {
  TYPE,
  fetchSkills
}
