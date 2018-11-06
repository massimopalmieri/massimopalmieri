import React from 'react'
import { Block, BlockTitle } from '../style'
import { Education } from '../Icons'
import data from '../../data'
import { Wrapper, Info, School, Title, Year } from './style'

export default () => {
  return (
    <Block>
      <BlockTitle>education</BlockTitle>

      {data.education.map(education => (
        <Wrapper>
          <div>
            <Education height={30} width={30} />
          </div>
          <Info>
            <School>{education.school}</School>
            <Title>{education.title}</Title>
            <Year>{education.year}</Year>
          </Info>
        </Wrapper>
      ))}
    </Block>
  )
}
