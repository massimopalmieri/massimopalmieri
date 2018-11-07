import React from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat'
import { setConfig } from 'react-hot-loader'
import Layout from '../components/layout'
import Intro from '../components/Intro'
import Contacts from '../components/Contacts'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Jobs from '../components/Jobs'
import Education from '../components/Education'
import { Wrapper } from '../components/style'

setConfig({ pureSFC: true })

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Intro />
      <Contacts />
      <AboutMe />
      <Skills />
      <Jobs />
      <Education />
    </Wrapper>
    <MessengerCustomerChat
      pageId="127985967891916"
      appId="263902037430900"
      htmlRef="fb-customerchat"
    />
  </Layout>
)

export default IndexPage
