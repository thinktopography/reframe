import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import flash from './flash'
import * as actions from './actions'

export default Singleton({
  namespace: 'platform.flash',
  component: flash,
  reducer,
  actions
})
