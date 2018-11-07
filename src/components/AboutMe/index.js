import React from 'react'
import { AboutMe, AboutMeTitle, AboutMeInfo, BlockTitle, Block } from '../style'
import { Search, Status, Location } from '../Icons'

export default () => {
  return (
    <Block>
      <BlockTitle>about me</BlockTitle>

      <AboutMe>
        <Location />
        <AboutMeInfo>
          <AboutMeTitle>Willing to work in or near the following areas (or remote):</AboutMeTitle>
          London, United Kingdom
        </AboutMeInfo>
      </AboutMe>

      <AboutMe>
        <Status />
        <AboutMeInfo>
          <AboutMeTitle>Job search status:</AboutMeTitle>
          Open to exploring new opportunities
        </AboutMeInfo>
      </AboutMe>

      <AboutMe>
        <Search />
        <AboutMeInfo>
          <AboutMeTitle>What I am looking for in a new position:</AboutMeTitle>
          Modern tech stack, flexible working.
        </AboutMeInfo>
      </AboutMe>
    </Block>
  )
}
