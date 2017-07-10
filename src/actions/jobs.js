import ApiRequest from '../lib/api'

const JOBS = 'jobs'
const TYPE = {
  request: 'REQUEST_JOBS',
  receive: 'RECEIVE_JOBS'
}

const request = () => ({ type: TYPE.request })
const receive = payload => ({ type: TYPE.receive, payload })

const fetchJobs = () => (dispatch, getState) => {
  dispatch(request())

  return ApiRequest({
    method: 'get',
    path: JOBS
  })

  .then( jobs => { dispatch(receive(jobs.data)) })
}


export default {
  TYPE,
  fetchJobs
}
