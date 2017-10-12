import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Infinite from '../infinite'
import { Empty, Results } from './results'
import Header from './header'
import Tasks from './tasks'
import pluralize from 'pluralize'

class Collection extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    cacheKey: PropTypes.string,
    columns: PropTypes.array,
    data: PropTypes.array,
    defaultSort: PropTypes.object,
    endpoint: PropTypes.string,
    entity: PropTypes.string,
    empty: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element,
      PropTypes.string
    ]),
    export: PropTypes.array,
    failure: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    filter: PropTypes.object,
    filters: PropTypes.array,
    handler: PropTypes.func,
    icon: PropTypes.string,
    layout: PropTypes.func,
    loading: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    link: PropTypes.string,
    managing: PropTypes.bool,
    modal: PropTypes.string,
    new: PropTypes.func,
    open: PropTypes.bool,
    panel: PropTypes.any,
    q: PropTypes.string,
    records: PropTypes.array,
    recordTasks: PropTypes.array,
    sort: PropTypes.object,
    table: PropTypes.array,
    tasks: PropTypes.array,
    token: PropTypes.string,
    onAddPanel: PropTypes.func,
    onClearPanel: PropTypes.func,
    onFetch: PropTypes.func,
    onRemovePanel: PropTypes.func,
    onSetColumns: PropTypes.func,
    onSetFilter: PropTypes.func,
    onSetParams: PropTypes.func,
    onSetQuery: PropTypes.func,
    onSetRecords: PropTypes.func,
    onToggleTasks: PropTypes.func
  }

  static defaultProps = {
    cacheKey: null,
    entity: 'record'
  }

  render() {
    const { endpoint, records } = this.props
    return (
      <div className={ this._getClass() }>
        <div className="reframe-collection-body">
          <Header { ...this._getHeader() } />
          { records && <Results { ...this._getResuts() } /> }
          { endpoint && <Infinite { ...this._getInfinite() } /> }
        </div>
        <div className="reframe-collection-canvas" onClick={ this._handleToggleTasks.bind(this) } />
        <Tasks { ...this._getTasks() } />
      </div>
    )
  }

  componentDidMount() {
    const { data, defaultSort, table, onSetParams, onSetColumns, onSetRecords } = this.props
    const filter = this.props.filter || {}
    const sort = defaultSort || { key: 'created_at', order: 'desc' }
    onSetParams(filter, sort)
    if(table) onSetColumns(table)
    if(data) onSetRecords(data)
  }

  _getClass() {
    const classes = ['reframe-collection']
    if(this.props.managing) classes.push('managing')
    return classes.join(' ')
  }

  _getHeader() {
    const { filter, filters, tasks, onSetQuery, onToggleTasks } = this.props
    return {
      export: this.props.export,
      filter,
      filters,
      tasks,
      onSetQuery,
      onToggleTasks
    }
  }

  _getTasks() {
    return this.props
  }

  _getResults() {
    return {
      ...this.props
    }
  }

  _getInfinite() {
    const { cacheKey, empty, endpoint, failure, loading, q, sort } = this.props
    const filter = {
      ...this.props.filter,
      q
    }
    return {
      cacheKey,
      endpoint,
      filter,
      footer: this._getFooter(),
      loading,
      empty: _.isString(empty) ? <Empty { ...this.props } /> : empty,
      failure,
      layout: (props) => <Results { ...this.props } { ...props } />,
      sort
    }
  }

  _getFooter() {
    return ({ all, total }) => all ? <span><strong>NOW SHOWING:</strong> { total } / { all } records</span> : ''
  }

  _handleToggleTasks() {
    this.props.onToggleTasks()
  }

  _handleAddNew() {
    this.context.modal.open(this.props.empty.modal)
  }

}

export default Collection
