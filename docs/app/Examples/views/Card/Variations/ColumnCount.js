import React from 'react'
import { Card } from 'stardust'

const src = 'http://semantic-ui.com/images/wireframe/image.png'

const ColumnCountCards = () => (
  <Card.Group itemsPerRow={6}>
    <Card raised href='#column-count' image={src} />
    <Card raised href='#column-count' image={src} />
    <Card raised href='#column-count' image={src} />
    <Card raised href='#column-count' image={src} />
    <Card raised href='#column-count' image={src} />
    <Card raised href='#column-count' image={src} />
    <Card raised href='#column-count' image={src} />
    <Card raised href='#column-count' image={src} />
    <Card raised href='#column-count' image={src} />
    <Card raised href='#column-count' image={src} />
    <Card raised href='#column-count' image={src} />
    <Card raised href='#column-count' image={src} />
  </Card.Group>
)

export default ColumnCountCards
