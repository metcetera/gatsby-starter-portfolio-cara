/** @jsx jsx */
import React, { Fragment } from 'react'
import { jsx, Label, Input, Button, Flex, Text } from "theme-ui"
import SteinStore from "stein-js-client";
import { useForm, Controller, useController } from "react-hook-form";

import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide, waveAnimation } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Footer from "./footer"
import ContactMDX from "@lekoarts/gatsby-theme-cara/src/sections/contact.mdx"

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const store = new SteinStore("https://api.steinhq.com/v1/storages/6376519ceced9b09e9a5a02a");

  const {
    watch,
    formState: { errors },
    handleSubmit,
    control
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  const onSubmit = (data) => {
    const date = new Date().toISOString();

    console.log('Submitting: ', JSON.stringify(data));

    store
    .append("cheers-sidney", [
      {
        date,
        email: data.name,
        days: data.days,
      }
    ])
    .then(res => {
      console.log(res);
    });
  };

  console.log(errors, watch("name")); // watch input value by passing the name of it

  return ( <div>
    <Divider fill="divider" speed={0.2} offset={offset} factor={factor}>
      <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
        <div
          sx={{
            position: `relative`,
            height: `full`,
            svg: { width: `100%`, height: `40vh` },
            path: { animation: waveAnimation(`20s`) },
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </div>
      </div>
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <ContactMDX />
        <form onSubmit={handleSubmit(onSubmit)}>

          <Controller
            name="name"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
            }) => (
              <Fragment>
                <Flex><Label htmlFor="name">Name</Label>
                { error && <Text role="alert" sx={{color: 'red', pr: '10px'}}>{error.message}</Text>}
                </Flex>
                <Input
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Your name here"
                  sx={{ mb: 24, borderColor: error ? 'red' : 'green'}}
                />
              </Fragment>
            )}
            rules={{ required: 'Required!' }}
          />

          <Controller
            name="days"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
              formState,
            }) => (
              <Fragment>
                <Flex><Label htmlFor="days">Days until</Label>
                { error && <Text role="alert" sx={{color: 'red', pr: '10px'}}>{error.message}</Text>}
                </Flex>
                <Input
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Your number of days here"
                  sx={{ mb: 24, borderColor: error ? 'red' : 'green'}}
                />
              </Fragment>
            )}
            rules={{ required: 'Required!' }}
          />

          <Button type="submit" sx={{mt: 12}} >Submit your wise vision!</Button>
        </form>
        <Flex sx={{mb: 400}}></Flex>
      </Inner>
      <Footer />
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <Svg icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <Svg icon="circle" width={6} color="icon_brightest" left="85%" top="15%" />
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" width={6} color="icon_brightest" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <Svg icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
  </div>
)}

export default Contact
