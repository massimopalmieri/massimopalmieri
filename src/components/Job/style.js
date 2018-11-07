import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 2rem;
  
  &:last-of-type {
    padding-bottom: 0;
  }
`

export const Info = styled.div`
  padding-left: 15px;
`

export const Employer = styled.div`
  font-weight: 500;
  margin-bottom: .5rem;
`

export const Title = styled.div`
  font-weight: 500;
  margin-bottom: .5rem;
`

export const Date = styled.div`
  color: #787985;
  font-size: .8rem
`

export const Achievements = styled.ul`
  list-style-position: inside;
  margin-left: 0;
  font-size: .9rem;
  line-height: 1.5rem;
  margin-top: 20px;
  color: #787985;
`
