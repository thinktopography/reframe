// @flow

import type { Component, Node } from '../../types'
import type { Location, Props, ChildContext } from './types'

import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Drawer extends React.Component<Props, void> {

  static childContextTypes = {
    drawer: PropTypes.object
  }

  render(): Node {
    const { children, component, location, open } = this.props
    return (
      <div className="reframe-drawer">
        { children }
        <CSSTransition in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-drawer-overlay" onClick={this._handleClose.bind(this)} />
        </CSSTransition>
        <CSSTransition in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className={`reframe-drawer-panel reframe-drawer-panel-${location}`}>
            { _.isFunction(component) ? React.createElement(component) : component }
          </div>
        </CSSTransition>
      </div>
    )
  }

  componentDidUpdate(prevProps: Props): void {
    const { open, onClear } = this.props
    if(open !== prevProps.open && !open) {
      setTimeout(onClear, 500)
    }
  }

  getChildContext(): ChildContext {
    return {
      drawer: {
        open: this._handleOpen.bind(this),
        close: this._handleClose.bind(this)
      }
    }
  }

  _handleOpen(component: Component, location: Location): void {
    this.props.onOpen(component, location)
  }

  _handleClose(): void {
    this.props.onClose()
  }

}

export default Drawer