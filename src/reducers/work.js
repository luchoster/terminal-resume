import R from 'ramda'
import { Portfolio } from '../actions/index'

const reducer = (state = [], action) => R.cond([
  [ R.equals(Portfolio.TYPE.receive), R.always(action.payload) ],
  [ R.T, R.always(state) ]
])(action.type)

export default reducer
