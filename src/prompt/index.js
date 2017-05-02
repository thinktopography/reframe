import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import prompt from './prompt'
import * as actions from './actions'

export default Singleton({
  namespace: 'platform.prompt',
  component: prompt,
  reducer,
  actions
})
