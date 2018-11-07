import React from 'react'
import styled from 'styled-components'
import { Block } from '../style'
import data from '../../data'

const ContactLink = styled.a`
  font-weight: 500;
  display: inline-block;
  margin-right: 20px;
  color: #2B87B1;
  text-decoration: none;
  white-space: nowrap;
`

export default () => {
  return (
    <Block>
      {data.contacts.map(contact => (
        <ContactLink key={contact.label} href={contact.link}>{contact.label}</ContactLink>
      ))}
    </Block>
  )
}
