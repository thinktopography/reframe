// @flow

import { Component } from '../../types'

export type Location = 'left' | 'right'

export type Open = {
  type: 'OPEN',
  component: Component,
  location: Location
}

export type Close = {
  type: 'CLOSE'
}

export type Clear = {
  type: 'CLEAR'
}

export type Action =
  | Open
  | Close
  | Clear

export type State = {
  +component: ?Component,
  +location: ?Location,
  +open: boolean
}

export type Props = {
  children: any,
  component: Component,
  location: Location,
  open: boolean,
  onClear: () => void,
  onClose: () => void,
  onOpen: (component: Component, location: Location) => void
}

export type ChildContext = {
  drawer: {
    open: (component: Component, location: Location) => void,
    close: () => void
  }
}