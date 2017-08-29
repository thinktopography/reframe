import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import Chooser from './chooser'
import moment from 'moment'

class Datefield extends React.Component {

  static propTypes = {
    active: PropTypes.bool,
    defaultValue: PropTypes.string,
    month: PropTypes.number,
    placeholder: PropTypes.string,
    year: PropTypes.number,
    value: PropTypes.any,
    onBegin: PropTypes.func,
    onClear: PropTypes.func,
    onChange: PropTypes.func,
    onChoose: PropTypes.func,
    onPrevious: PropTypes.func,
    onNext: PropTypes.func,
    onSetCurrent: PropTypes.func,
    onSetValue: PropTypes.func
  }

  static defaultProps = {
    placeholder: 'Choose a date...'
  }

  render() {
    const { active, placeholder, value } = this.props
    return (
      <div className="reframe-datefield">
        <div className="reframe-datefield-input">
          <div className="reframe-datefield-icon">
            <i className="calendar icon" />
          </div>
          <div className="reframe-datefield-field" onClick={ this._handleBegin.bind(this) }>
            { value ? value.format('dddd, MMMM DD, YYYY') : <span>{ placeholder }</span> }
          </div>
          { value  &&
            <div className="reframe-datefield-remove" onClick={ this._handleClear.bind(this) }>
              <i className="remove circle icon" />
            </div>
          }
        </div>
        <CSSTransition in={ active } classNames="cover" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <Chooser { ...this.props } />
        </CSSTransition>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onSetCurrent, onSetValue } = this.props
    if(defaultValue) onSetValue(moment(defaultValue))
    const current = defaultValue ? moment(defaultValue) : moment()
    onSetCurrent(parseInt(current.format('MM')) - 1, parseInt(current.format('YYYY')))
  }

  componentDidUpdate(prevProps) {
    const { value, onChange } = this.props
    if(prevProps.value !== value) {
      if(value) {
        onChange(value.format('YYYY-MM-DD'))
      } else  {
        onChange(value)
      }
    }
  }

  _getInput() {
    const { placeholder, value } = this.props
    return {
      type: 'text',
      value,
      autoComplete: false,
      placeholder
    }
  }

  _handleBegin() {
    this.props.onBegin()
  }

  _handleClear() {
    this.props.onClear()
  }

}

export default Datefield
