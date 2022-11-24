import React from "react"
import { Link } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "@theme-ui/mdx"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import QuizForm from "../components/quiz-form"

const Quizz = () => (
  <Layout>
    <Parallax pages={1}>
      <div>
        <Divider speed={0.2} offset={0} factor={1}>
          <UpDown>
            <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_brightest" left="10%" top="20%" />
            <Svg icon="hexa" width={48} stroke color="icon_brightest" left="60%" top="70%" />
            <Svg icon="box" width={6} color="icon_brightest" left="60%" top="15%" />
          </UpDown>
          <UpDownWide>
            <Svg icon="arrowUp" hiddenMobile width={16} color="icon_brightest" left="80%" top="10%" />
            <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
            <Svg icon="circle" width={16} color="icon_brightest" left="70%" top="90%" />
            <Svg icon="triangle" width={16} stroke color="icon_brightest" left="30%" top="65%" />
            <Svg icon="cross" width={16} stroke color="icon_brightest" left="28%" top="15%" />
            <Svg icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
            <Svg icon="upDown" hiddenMobile width={8} color="icon_brightest" left="45%" top="10%" />
          </UpDownWide>
          <Svg icon="circle" hiddenMobile width={24} color="icon_brightest" left="5%" top="70%" />
          <Svg icon="circle" width={6} color="icon_brightest" left="4%" top="20%" />
          <Svg icon="circle" width={12} color="icon_brightest" left="50%" top="60%" />
          <Svg icon="upDown" width={8} color="icon_brightest" left="95%" top="90%" />
          <Svg icon="upDown" hiddenMobile width={24} color="icon_brightest" left="40%" top="80%" />
          <Svg icon="triangle" width={8} stroke color="icon_brightest" left="25%" top="5%" />
          <Svg icon="circle" width={64} color="icon_brightest" left="95%" top="5%" />
          <Svg icon="box" hiddenMobile width={64} color="icon_brightest" left="5%" top="90%" />
          <Svg icon="box" width={6} color="icon_brightest" left="10%" top="10%" />
          <Svg icon="box" width={12} color="icon_brightest" left="40%" top="30%" />
          <Svg icon="hexa" width={16} stroke color="icon_brightest" left="10%" top="50%" />
          <Svg icon="hexa" width={8} stroke color="icon_brightest" left="80%" top="70%" />
        </Divider>
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
          <Inner>
            <Themed.h1>Quizz Form</Themed.h1>
            <QuizForm />
            <Themed.p>
              Go back to <Link to="/">homepage</Link>.
            </Themed.p>
          </Inner>
        </Content>
      </div>
    </Parallax>
  </Layout>
)

export default Quizz

export const Head = () => <Seo title="Quizz Form" />
