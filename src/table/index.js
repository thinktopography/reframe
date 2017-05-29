import React from 'react'
import PropTypes from 'prop-types'
import Scrollpane from '../scrollpane'

class Table extends React.Component {

  static PropTypes = {
    columns: PropTypes.array,
    records: PropTypes.array,
    sort: PropTypes.shape({
      key: PropTypes.string,
      order: PropTypes.string,
    }),
    total: PropTypes.number,
    onLoadMore: PropTypes.func,
    onSort: PropTypes.func
  }

  render() {
    const { columns, records, params, sort, onSort } = this.props
    return (
      <div className="reframe-table">
        <div className="reframe-table-head">
          <div className="reframe-table-head-wrapper">
            <div className="reframe-table-head-row" ref="head">
              { columns.map((column, columnIndex) => {
                let klass = ['reframe-table-head-cell']
                if(column.primary === true) klass.push('mobile')
                if(column.collapsing === true) klass.push('collapsing')
                return (
                  <div key={`header-${columnIndex}`} className={ klass.join(' ') } onClick={ this._handleSort.bind(this, column.key) }>
                    { column.label }
                    { sort && column.key === sort.key &&
                      (sort.order === 'asc' ? <i className="chevron up icon" /> : <i className="chevron down icon" />)
                    }
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="reframe-table-body">
          <Scrollpane { ...this._getScrollpane() }>
            <div className="reframe-table-body-wrapper" ref="body">
              { records.map((record, rowIndex) => {
                return (
                  <div key={`row-${rowIndex}`} className="reframe-table-body-row">
                    { columns.map((column, columnIndex) => {
                      let klass = ['reframe-table-body-cell']
                      if(column.primary === true) klass.push('mobile')
                      if(column.collapsing === true) klass.push('collapsing')
                      if(column.centered === true) klass.push('centered')
                      return (
                        <div key={`cell-${rowIndex}-${columnIndex}`} className={ klass.join(' ') }>
                          { record[column.key] }
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </Scrollpane>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this._resizeColumns()
  }

  componentDidUpdate() {
    this._resizeColumns()
  }

  _getScrollpane() {
    return {
      onReachBottom: this._handleLoadMore.bind(this)
    }
  }

  _resizeColumns() {
    if(this.refs.body.childNodes.length === 0) return
    Array.from(this.refs.body.childNodes[0].childNodes).map((cell, index) => {
      this.refs.head.childNodes[index].style.width = `${cell.offsetWidth}px`
    })
  }

  _handleSort(key) {
    this.props.onSort(key)
  }

  _handleLoadMore() {
    this.props.onLoadMore()
  }

}

export default Table
