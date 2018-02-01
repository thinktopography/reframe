// @flow

import type { Component, Node } from '../../types'
import type { Props } from './types'
import type { Props as FiltersProps } from '../../components/filters/types'
import type { Props as SearchboxProps } from '../../components/searchbox/types'
import type { Props as InfiniteProps } from '../../components/infinite/types'

import Searchbox from '../../components/searchbox'
import Infinite from '../../components/infinite'
import Filters from '../../components/filters'
import Format from '../../utils/format'
import React from 'react'
import _ from 'lodash'

class ToggleList extends React.Component<Props, void> {

  static defaultProps = {
    defaultFilters: [],
    exclude_ids: [],
    multiple: false,
    onReady: () => {},
    onChange: (value) => {}
  }

  render(): Node {
    const { chosen, filters, multiple, text } = this.props
    return (
      <div className={ this._getClass() }>
        <div className="reframe-toggle-list-overlay" onClick={ this._handleToggleFilter.bind(this) } />
        { filters &&
          <div className="reframe-toggle-list-filter">
            <Filters { ...this._getFilters() } />
          </div>
        }
        <div className="reframe-toggle-list-body">
          <div className="reframe-toggle-list-header">
            <div className="reframe-toggle-list-header-search">
              <Searchbox { ...this._getSearchbox() } />
            </div>
            { filters &&
              <div className="reframe-toggle-list-header-icon" onClick={ this._handleToggleFilter.bind(this) }>
                <i className="fa fa-sliders" />
              </div>
            }
          </div>
          { multiple && chosen &&
            <div className="reframe-toggle-list-summary">
              { chosen.map((record, index) => (
                <div key={`summary_token_${index}`} className="reframe-toggle-list-summary-token">
                  <div className="reframe-toggle-list-summary-token-label">
                    { _.get(record, text) }
                  </div>
                  <div className="reframe-toggle-list-summary-token-remove" onClick={ this._handleToggleRecord.bind(this, record) }>
                    <i className="fa fa-fw fa-times" />
                  </div>
                </div>
              )) }
            </div>
          }
          <Infinite { ...this._getInfinite() } />
        </div>
      </div>
    )
  }

  componentDidMount(): void {
    const { defaultValue, endpoint, onLoad, onReady } = this.props
    if(onLoad && defaultValue && defaultValue.length > 0) onLoad(endpoint, { $ids: defaultValue })
    if(onReady) onReady()
  }

  componentDidUpdate(prevProps: Props): void {
    const { chosen, value, onChange } = this.props
    if(onChange && chosen && !_.isEqual(prevProps.chosen, chosen)) {
      const items = chosen.map(record => value ? _.get(record, value) : record)
      onChange(items)
    }
  }

  _getClass(): string {
    const classes = ['reframe-toggle-list']
    if(this.props.filtering) classes.push('filtering')
    return classes.join(' ')
  }

  _getFilters(): FiltersProps {
    const { filters, filter, onSetFilter } = this.props
    return {
      filters,
      values: filter,
      onUpdate: onSetFilter
    }
  }

  _getSearchbox(): SearchboxProps {
    const { onSetQuery } = this.props
    return {
      onChange: onSetQuery
    }
  }

  _getInfinite(): InfiniteProps {
    const { defaultFilters, endpoint, exclude_ids, query } = this.props
    const filter = {
      ...defaultFilters,
      ...this.props.filter,
      q: query
    }
    return {
      endpoint,
      exclude_ids,
      filter,
      layout: this._getLayout()
    }
  }

  _getLayout(): Component {
    const { format, multiple } = this.props
    return ({ records }) => (
      <div className="reframe-search-results">
        { records.map((record, index) => (
          <div key={`record_${index}`} className={ this._getRecordClass(record) } onClick={ this._handleToggleRecord.bind(this, record) }>
            { multiple &&
              <div className="reframe-search-item-icon">
                <i className={ `fa fa-fw fa-${this._getIcon(record)}` } />
              </div>
            }
            <Format format={ format } { ...record } />
            { !multiple &&
              <div className="reframe-search-item-icon">
                { this._getChecked(record) &&
                  <i className="fa fa-fw fa-check" />
                }
              </div>
            }
          </div>
        )) }
      </div>
    )
  }

  _getRecordClass(record: Object): string {
    const classes = ['reframe-search-item']
    if(this._getChecked(record)) classes.push('checked')
    return classes.join(' ')
  }

  _getChecked(record: Object): boolean {
    const { chosen } = this.props
    const value = this.props.value || 'id'
    return _.find(chosen, { [value]: _.get(record, value) })
  }

  _getIcon(record: Object): string {
    const checked = this._getChecked(record)
    if(checked) return 'check-circle'
    return 'circle-o'
  }

  _handleToggleFilter(): void {
    const { onToggleFilter } = this.props
    if(onToggleFilter) onToggleFilter()
  }

  _handleToggleRecord(record: any): void {
    const { multiple, onToggleRecord } = this.props
    if(onToggleRecord) onToggleRecord(multiple, record)
  }

}

export default ToggleList
