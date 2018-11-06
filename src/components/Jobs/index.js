import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import data from '../../data'
import { Chevron } from '../Icons'
import Job from '../Job'
import { Block, BlockTitle } from '../style'

const { history } = data

const ExpandButton = styled.button`
  position: absolute;
  top: 60px;
  width: 40px;
  height: 40px;
  padding: 0;
  outline: none;
  opacity: .3;
  border-radius: 100%;
  border: 1px solid gray;
  line-height: 12px;
  
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  
  ${props => !props.expanded && css`
    transform: rotate(180deg);
  `}
`

const Expand = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  left: 0;
  right: 0;
  padding-top: 100px;
  bottom: 30px;
  
  ${props => !props.expanded && css`
    background: linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
  `}
`

const Jobs = () => {
  const [jobsCount, setJobsCount] = useState(2)
  const expanded = jobsCount === history.length

  function expand () {
    if (expanded) {
      return setJobsCount(2)
    }
    setJobsCount(history.length)
  }

  return (
    <Block>
      <BlockTitle>work history</BlockTitle>

      {history.slice(0, jobsCount).map(job => <Job key={job.employer} job={job} />)}

      <Expand expanded={expanded}>
        <ExpandButton expanded={expanded} onClick={expand}>
          <Chevron />
        </ExpandButton>
      </Expand>
    </Block>
  )
}

export default Jobs
