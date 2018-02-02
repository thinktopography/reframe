import ModalPanel from '../modal_panel'
import PropTypes from 'prop-types'
import Section from './section'
import React from 'react'
import _ from 'lodash'

class Form extends React.Component {

  static childContextTypes = {
    form: PropTypes.object
  }

  static contextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    action: PropTypes.string,
    after: PropTypes.string,
    before: PropTypes.string,
    busy: PropTypes.array,
    defaults: PropTypes.object,
    config: PropTypes.array,
    data: PropTypes.object,
    errors: PropTypes.object,
    endpoint: PropTypes.string,
    entity: PropTypes.object,
    fields: PropTypes.array,
    filtered: PropTypes.object,
    instructions: PropTypes.string,
    isReady: PropTypes.bool,
    isBusy: PropTypes.bool,
    method: PropTypes.string,
    ready: PropTypes.array,
    saveText: PropTypes.string,
    sections: PropTypes.array,
    status: PropTypes.string,
    title: PropTypes.string,
    onCancel: PropTypes.func,
    onChange: PropTypes.func,
    onChangeField: PropTypes.func,
    onSubmit: PropTypes.func,
    onSubmitForm: PropTypes.func,
    onFailure: PropTypes.func,
    onFetchData: PropTypes.func,
    onFetchSections: PropTypes.func,
    onResetForm: PropTypes.func,
    onSetData: PropTypes.func,
    onSetReady: PropTypes.func,
    onSetSections: PropTypes.func,
    onSuccess: PropTypes.func,
    onToggleBusy: PropTypes.func,
    onValidateForm: PropTypes.func,
    onUpdateData: PropTypes.func,
    onUpdateField: PropTypes.func
  }

  static defaultProps = {
    method: 'GET',
    saveText: 'Save',
    onCancel: () => {},
    onChange: () => {},
    onChangeField: () => {},
    onSubmit: () => {},
    onFailure: (error) => {},
    onSuccess: (entity) => {}
  }

  _debouncedSubmit = _.debounce(this._handleSubmit.bind(this), 2500, { leading: true })

  render() {
    const { after, before, config, instructions, status } = this.props
    const configuring = _.includes(['pending', 'loading_sections','sections_loaded', 'loading_data'], status)
    return (
      <div className="reframe-form">
        <ModalPanel { ...this._getPanel() }>
          { (before || instructions) &&
            <div className="reframe-form-header">
              { before && <div className="reframe-form-before">{ before }</div> }
              { instructions && <div className="instructions">{ instructions }</div> }
            </div>
          }
          <div className={ this._getFormClasses() }>
            { !configuring &&
              config.map((section, index) => (
                <Section key={`section_${index}`} { ...this._getSection(config, section, index) } />
              ))
            }
          </div>
          { after &&
            <div className="reframe-form-footer">
              <div className="reframe-form-after">{ after }</div>
            </div>
          }
        </ModalPanel>
        <ModalPanel { ...this._getPanel() }>
        </ModalPanel>
      </div>
    )
  }

  componentDidMount() {
    const { sections, onSetSections } = this.props
    onSetSections(sections)
  }

  componentDidUpdate(prevProps) {
    const { data, sections, status } = this.props
    if(!_.isEqual(prevProps.sections, sections)) this._handleUpdateField(prevProps.sections)
    if(prevProps.status !== status) {
      if(status === 'sections_loaded') this._handleLoadData()
      if(status === 'validated') this._handleSubmit()
      if(status === 'success') this._handleSuccess()
      if(status === 'failure') this._handleFailure()
    }
    if(prevProps.data != data) this._handleChange(prevProps.data, data)
  }

  childContextTypes() {
    return {
      form: {
        push: this._hanldePush.bind(this),
        pop: this._hanldePop.bind(this)
      }
    }
  }

  _getPanel() {
    const { saveText, title } = this.props
    return {
      title,
      leftItems: [
        { label: 'Cancel', handler: this._handleCancel.bind(this) }
      ],
      rightItems: [
        { label: saveText, handler: this._debouncedSubmit , className: this._getButtonClasses() }
      ]
    }
  }

  _getFormClasses() {
    const { isReady, status } = this.props
    const configuring = _.includes(['pending', 'loading_sections','sections_loaded', 'loading_data'], status)
    const submitting = status === 'submitting'
    let classes = ['ui', 'form', status]
    if(configuring || !isReady || submitting) classes.push('loading')
    return classes.join(' ')
  }

  _getButtonClasses() {
    const { isBusy } = this.props
    let saveClasses = ['reframe-modal-panel-header-navigation']
    if(isBusy) saveClasses.push('disabled')
    return saveClasses.join(' ')
  }

  _getSection(config, section, index) {
    const { data, errors } = this.props
    const tabIndexStart = config.reduce((start, section, i) => {
      if(i >= index) return start
      return start + section.fields.length
    }, 1)
    return {
      ...section,
      data,
      errors,
      tabIndexStart,
      onBusy: this._handleToggleBusy.bind(this),
      onReady: this._handleSetReady.bind(this),
      onSubmit: this._handleSubmit.bind(this),
      onUpdateData: this._handleUpdateData.bind(this)
    }
  }

  _handleCancel() {
    this.props.onCancel()
  }

  _handleLoadData() {
    const { data, defaults, endpoint, onFetchData, onSetData } = this.props
    if(Object.keys(data).length > 1) return onSetData(data)
    if(endpoint) return onFetchData(endpoint)
    onSetData(defaults)
  }

  _handleSetReady(key) {
    this.props.onSetReady(key)
  }

  _handleUpdateField(prevSections) {
    const { sections, onUpdateField } = this.props
    sections.map((section, index) => {
      if(_.isEqual(prevSections[index], sections[index])) return
      sections[index].fields.map((field, fieldIndex) => {
        if(_.isEqual(prevSections[index].fields[fieldIndex], sections[index].fields[fieldIndex])) return
        onUpdateField(index, fieldIndex, field)
      })
    })
  }

  _handleToggleBusy(key) {
    this.props.onToggleBusy(key)
  }

  _handleUpdateData(key, value) {
    this.props.onUpdateData(key, value)
  }

  _handleChange(previous, current) {
    const { onChangeField, onChange } = this.props
    if(onChangeField) {
      _.forOwn(current, (value, code) => {
        if(previous[code] != current[code]) onChangeField(code, value)
      })
    }
    if(onChange) onChange(current)
  }

  _handleSubmit() {
    const { action, filtered, isBusy, method, onSubmit, onSubmitForm } = this.props
    if(isBusy) return
    if(action) return onSubmitForm(method, action, filtered)
    if(onSubmit) {
      if(onSubmit(filtered)) return this._handleSuccess()
      return this._handleFailure()
    }
    this._handleSuccess()
  }

  _handleSuccess() {
    this.props.onSuccess(this.props.entity)
  }

  _handleFailure() {
    this.props.onFailure()
  }

}

export default Form
