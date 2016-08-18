import React from 'react'

import { META } from '../../lib'
import FormField from './FormField'
import { Checkbox } from '../../modules'

/**
 * Sugar for <Form.Field control={Checkbox} />
 */
function FormCheckbox(props) {
  return <FormField control={Checkbox} {...props} />
}

FormCheckbox._meta = {
  name: 'FormCheckbox',
  parent: 'Form',
  type: META.TYPES.COLLECTION,
}

export default FormCheckbox
