import React, { Component } from 'react'
import { Form } from 'stardust'

// TODO: update use Button once
const options = [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }]

class FormControlRadioExample extends Component {
  state = {}

  handleRadioClick = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group className='grouped'>
          <label>A <code>Form.Group</code> of <code>Form.Radio</code>s</label>
          <Form.Radio
            label='Foo'
            name='radios'
            value='foo'
            checked={value === 'foo'}
            onClick={this.handleRadioClick}
          />
          <Form.Radio
            label='Bar'
            name='radios'
            value='bar'
            checked={value === 'bar'}
            onClick={this.handleRadioClick}
          />
          <Form.Radio
            label='Baz'
            name='radios'
            value='baz'
            checked={value === 'baz'}
            onClick={this.handleRadioClick}
          />
        </Form.Group>
      </Form>
    )
  }
}

export default FormControlRadioExample
