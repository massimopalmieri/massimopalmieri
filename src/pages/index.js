import React from 'react'
import { setConfig } from 'react-hot-loader'
import Layout from '../components/layout'
import Intro from '../components/Intro'
import Contacts from '../components/Contacts'
import Jobs from '../components/Jobs'
import Skills from '../components/Skills'
import Education from '../components/Education'
import { Wrapper, Block, BlockTitle, AboutMe, AboutMeInfo, AboutMeTitle } from '../components/style'
import { Search, Status, Location } from '../components/Icons'

setConfig({ pureSFC: true })

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Intro />

      <Contacts />

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

      <Skills />

      <Jobs />

      <Education />
    </Wrapper>
  </Layout>
)

export default IndexPage
