import React, { Component } from 'react'
import { Header, Icon } from 'stardust'

export default class IconTwitterGroupExample extends Component {
  render() {
    return (
      <Header.H2>
        <Icon.Group size='large'>
          <Icon name='twitter' />
          <Icon corner name='add' />
        </Icon.Group>
        Add on Twitter
      </Header.H2>
    )
  }
}
