import React from 'react'

import { META } from '../../lib'
import FormField from './FormField'
import { Input } from '../../elements'

/**
 * Sugar for <Form.Field control={Input} />
 */
function FormInput(props) {
  return <FormField control={Input} {...props} />
}

FormInput._meta = {
  name: 'FormInput',
  parent: 'Form',
  type: META.TYPES.COLLECTION,
}

export default FormInput
