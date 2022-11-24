/** @jsx jsx */
import React, { Fragment, useEffect, useState } from 'react'
import { navigate } from "gatsby"
import { jsx, Label, Input, Button, Flex, Text, Spinner, Alert } from "theme-ui"
import SteinStore from "stein-js-client";
import { useForm, Controller } from "react-hook-form";

const QuizForm = () => {
  const [ isLoading, setIsLoading] = useState(false);
  const [ hasSubmitError, setHasSubmitError] = useState(undefined);
  const store = new SteinStore("https://api.steinhq.com/v1/storages/637c9080eced9b09e9a644ac");

  const {
    watch,
    handleSubmit,
    control,
    reset
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    // defaultValues: { name: localStorage.getItem('cheers-sidney-email') },
  });

  const onSubmit = (data) => {
    const date = new Date().toISOString();

    setIsLoading(true)
    localStorage.setItem('cheers-sidney-email', data.name)

    store
      .append("cheers-sidney", [
        {
          date,
          email: data.name,
          days: data.days,
        }
      ])
      .then(res => {
        // console.log(res)
        setIsLoading(false)
        if (res.error) {
          setHasSubmitError(res.error)
        } else {
          reset({
            name: localStorage.getItem('cheers-sidney-email'),
            days: '',
          })
          navigate("/estimations/");
          }
      });
  };

  const nameValue = watch("name")
  useEffect(() => {
    if (watch("name") !== '') setHasSubmitError(undefined)
  }, [nameValue, watch])

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
          { !isLoading && hasSubmitError && 
            <Alert sx={{mb: 24}}>
              Bummer, there was an error submitting. Please try again later!
            </Alert>
          }

          <Controller
            name="days"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Fragment>
                <Flex><Label htmlFor="days">Days</Label>
                { error && <Text role="alert" sx={{color: 'red', pr: '10px'}}>{error.message}</Text>}
                </Flex>
                <Input
                  value={value}
                  type="number"
                  step="1"
                  min="1"
                  max="9999"
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="How many days until Sidney returns here"
                  sx={{ mb: 24, borderColor: error ? 'red' : 'green'}}
                />
              </Fragment>
            )}
            rules={{ required: 'Required!' }}
          />

        <Controller
            name="name"
            control={control}
            defaultValue={localStorage.getItem('cheers-sidney-email')}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Fragment>
                <Flex><Label htmlFor="name">Email</Label>
                { error && <Text role="alert" sx={{color: 'red', pr: '10px'}}>{error.message}</Text>}
                </Flex>
                <Input
                  value={value}
                  type="email"
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Your email here"
                  sx={{ mb: 24, borderColor: error ? 'red' : 'green'}}
                />
              </Fragment>
            )}
            rules={{ required: 'Required!' }}
          />

          <Button type="submit" sx={{mt: 12, minWidth: 200}} disabled={isLoading} >{isLoading ? <Spinner size={16} sx={{color: 'white', ml: 20}}/> : 'Submit'}</Button>
          
        </form>
    </>

    )
}

export default QuizForm
