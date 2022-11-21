/** @jsx jsx */
import React, { Fragment, useEffect, useState } from 'react'
import { jsx, Label, Input, Button, Flex, Text, Spinner, Alert, Close } from "theme-ui"
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
  const [ isLoading, setIsLoading] = useState(false);
  const [ hasSubmitError, setHasSubmitError] = useState();
  const store = new SteinStore("https://api.steinhq.com/v1/storages/6376519ceced9b09e9a5a02aXXX");

  const {
    watch,
    formState: { errors },
    handleSubmit,
    control,
    reset
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  const onSubmit = (data) => {
    const date = new Date().toISOString();

    console.log('Submitting: ', JSON.stringify(data));
    setIsLoading(true)

    store
    .append("cheers-sidney", [
      {
        date,
        email: data.name,
        days: data.days,
      }
    ])
    .then(res => {
      console.log(res)
      setIsLoading(false)
      if (res.error) {
        setHasSubmitError(res.error)
      } else {
        reset({
          name: '',
          days: '',
        })
        }
    });
  };

  console.log(errors, watch("name")); // watch input value by passing the name of it

  useEffect(() => {
    if (watch("name") !== '') setHasSubmitError('')
  }, [watch("name")])

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
          { !isLoading && hasSubmitError && 
            <Alert sx={{mb: 24}}>
              Bummer, there was an error submitting. Please try again later!
            </Alert>
          }

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

          <Button type="submit" sx={{mt: 12, width: 300}} disabled={isLoading} >{isLoading ? <Spinner size={16} sx={{color: 'white', ml: 20}}/> : 'Submit your wise vision!'}</Button>
          
        </form>
        <Flex sx={{mb: 400}}></Flex>
      </Inner>
      <Footer />
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <Svg icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
        <Svg icon="circle" width={6} color="icon_brightest" left="4%" top="20%" />
        <Svg icon="circle" width={12} color="icon_darkest" left="40%" top="60%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <Svg icon="circle" width={6} color="icon_brightest" left="85%" top="15%" />
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
        <Svg icon="box" width={6} color="icon_darkest" left="80%" top="30%" />
        <Svg icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
      </UpDownWide>
    </Divider>
  </div>
)}

export default Contact
