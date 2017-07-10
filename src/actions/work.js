import ApiRequest from '../lib/api'

const WORK = 'portfolio'
const TYPE = {
  request: 'REQUEST_WORK',
  receive: 'RECEIVE_WORK'
}

const request = () => ({ type: TYPE.request })
const receive = payload => ({ type: TYPE.receive, payload })

const fetchWork = () => (dispatch, getState) => {
  dispatch(request())

  return ApiRequest({
    method: 'get',
    path: WORK
  })

  .then( work => { dispatch(receive(work.data)) })
}


export default {
  TYPE,
  fetchWork
}
