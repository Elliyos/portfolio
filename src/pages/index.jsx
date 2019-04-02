import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import Badge from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Kyle McCaw.
        </BigTitle>
        <Subtitle>Full-stack dev | Open source enthusiast | Creator</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="homebase"
            link="https://github.com/brian-guerrero/homebase"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            A realty platform for the new generation.
            <Badge
              tech="React"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)" />
          </ProjectCard>
          <ProjectCard
            title="Project Whirligig"
            link="https://github.com/Elliyos/ProjectWhirligig"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            A research project tracking the behavior of beetles using AI and computer vision.

          </ProjectCard>
          <ProjectCard
            title="Artware"
            link="https://github.com/Elliyos/artware"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            A social network to track links between historical artists.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            "Give me <b>six hours</b> to chop down a tree and I will spend the <b>first four</b> sharpening the axe."
            <i>- Abraham Lincoln</i>
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Kyle is a graduating computer science major from <b>Augustana College</b> in Rock Island, IL.
          He loves programming (most of the time), his cat Zelda, and video games. He's driven
          by an intense desire to improve the world, and his mission is to make it a better place
          through his work.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:k.mccaw25@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://twitter.com/kylexcvi">Twitter</a> &{' '}
            <a href="https://www.instagram.com/kylexcvi/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Kyle McCaw{' '}
          Theme made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
