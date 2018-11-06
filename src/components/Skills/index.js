import React from 'react'
import { Block, BlockTitle, Skill } from '../style'
import data from '../../data'

export default () => {
  return (
    <Block>
      <BlockTitle>primary area of expertise</BlockTitle>

      <div>
        {data.skills.map(skill => <Skill key={skill}>{skill}</Skill>)}
      </div>
    </Block>
  )
}
