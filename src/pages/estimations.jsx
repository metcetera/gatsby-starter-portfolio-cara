import React, { useEffect, useMemo, useState } from "react"
import SteinStore from "stein-js-client";
import { Flex, Button } from "theme-ui"
import { Themed } from "@theme-ui/mdx"

import { Parallax } from "@react-spring/parallax"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import SidVg from "../components/sid-vg"

const Estimations = () => { 
  const [ uniqueList, setUuniqueList ] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showName, setHowname] = useState(false);

  const store = useMemo(() => {
    const _store = new SteinStore("https://api.steinhq.com/v1/storages/637c9080eced9b09e9a644ac")

    return _store
  }, []);

  useEffect(() => {
    setLoading(true)
    store
      .read("cheers-sidney", { limit: 1111 })
      .then(data => {
        // console.log('raw: ', data);
        setUuniqueList([...new Map(data.map(v => [v.email, v])).values()])
        setStartIndex(0)
        setLoading(false)
        setHowname(false)
      });
  },[store, refresh])

  const handleClickVotes = (val) => {
    setStartIndex(val)
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setHowname(false)
    }, 1000)
  }

  const handleClickName = () => {
    setHowname(!showName)
  }

  // console.log(startIndex, 'uniqueList: ', uniqueList);


  return (
    <Layout>
      <Parallax pages={1}>
        <div>
          <Divider speed={0.2} offset={0} factor={1}>


            <Flex sx={{justifyContent: 'center'}} >
              <Button disabled={startIndex <= 0} onClick={() => { handleClickVotes((startIndex > 0 ? startIndex - 20 : 0))}} sx={{fontSize: '14px', zIndex: '1000', p: '2px', px: '10px', m: '2px', color: `${startIndex <= 0 ? 'lightgrey' : 'white'}`}} >{'previous'}</Button>
              <Button onClick={handleClickName} sx={{fontSize: '14px', zIndex: '1000', p: '2px', px: '10px', m: '2px'}} >√</Button>
              <Button sx={{fontSize: '14px', zIndex: '1000', p: '2px', px: '10px', m: '2px', color: 'lightgrey'}} >{`(${startIndex + 1} - ${(startIndex + 20 > uniqueList.length) ? uniqueList.length : startIndex + 20})`}</Button>
              <Button onClick={() => { setRefresh((refresh + 1))}} sx={{fontSize: '14px', zIndex: '1000', p: '2px', px: '10px', m: '2px'}} >refresh</Button>
              <Button disabled={!uniqueList || startIndex + 20 >= uniqueList.length } onClick={() => { handleClickVotes(startIndex + 20)}} sx={{fontSize: '14px', zIndex: '1000', p: '2px', px: '10px', m: '2px', color: `${!uniqueList || startIndex + 20 >= uniqueList.length ? 'lightgrey' : 'white'}`}} >{'next'}</Button>
            </Flex>
            <Flex sx={{justifyContent: 'center'}} >
              <Themed.h2>Estimations</Themed.h2>
            </Flex>

            <UpDownWide>
              <SidVg width={20} left="30%" top="40%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 1) && uniqueList[startIndex + 1 - 1].days} email={ uniqueList.length >= (startIndex + 1) && uniqueList[startIndex + 1 - 1].email} />
              <SidVg width={12} left="20%" top="65%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 19) && uniqueList[startIndex + 19 - 1].days} email={ uniqueList.length >= (startIndex + 19) && uniqueList[startIndex + 19 - 1].email} />
              <SidVg width={16} left="40%" top="10%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 8) && uniqueList[startIndex + 8 - 1].days} email={ uniqueList.length >= (startIndex + 8) && uniqueList[startIndex + 8 - 1].email} />
              <SidVg width={8} left="50%" top="30%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 16) && uniqueList[startIndex + 16 - 1].days} email={ uniqueList.length >= (startIndex + 16) && uniqueList[startIndex + 16 - 1].email} />
              <SidVg width={16} left="70%" top="70%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 7) && uniqueList[startIndex + 7 - 1].days} email={ uniqueList.length >= (startIndex + 7) && uniqueList[startIndex + 7 - 1].email} />
              <SidVg width={8} left="75%" top="10%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 10) && uniqueList[startIndex + 10 - 1].days} email={ uniqueList.length >= (startIndex + 10) && uniqueList[startIndex + 10 - 1].email} />
              <SidVg width={12} left="85%" top="30%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 13) && uniqueList[startIndex + 13 - 1].days} email={ uniqueList.length >= (startIndex + 13) && uniqueList[startIndex + 13 - 1].email} />
            </UpDownWide>
            <UpDown>
              <SidVg width={8} left="5%" top="70%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 5) && uniqueList[startIndex + 5 - 1].days} email={ uniqueList.length >= (startIndex + 5) && uniqueList[startIndex + 5 - 1].email} />
              <SidVg width={12} left="20%" top="20%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 14) && uniqueList[startIndex + 14 - 1].days} email={ uniqueList.length >= (startIndex + 14) && uniqueList[startIndex + 14 - 1].email} />
              <SidVg width={12} left="60%" top="10%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 3) && uniqueList[startIndex + 3 - 1].days} email={ uniqueList.length >= (startIndex + 3) && uniqueList[startIndex + 3 - 1].email} />
              <SidVg width={8} left="60%" top="35%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 11) && uniqueList[startIndex + 11 - 1].days} email={ uniqueList.length >= (startIndex + 11) && uniqueList[startIndex + 11 - 1].email} />
              <SidVg width={8} left="85%" top="80%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 18) && uniqueList[startIndex + 18 - 1].days} email={ uniqueList.length >= (startIndex + 18) && uniqueList[startIndex + 18 - 1].email} />
              <SidVg width={12} left="50%" top="80%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 20) && uniqueList[startIndex + 20 - 1].days} email={ uniqueList.length >= (startIndex + 20) && uniqueList[startIndex + 20 - 1].email} />
            </UpDown>
            <SidVg width={8} left="5%" top="20%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 19) && uniqueList[startIndex + 19 - 1].days} email={ uniqueList.length >= (startIndex + 19) && uniqueList[startIndex + 19 - 1].email} />
            <SidVg width={12} left="15%" top="45%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 9) && uniqueList[startIndex + 9 - 1].days} email={ uniqueList.length >= (startIndex + 9) && uniqueList[startIndex + 9 - 1].email} />
            <SidVg width={8} left="25%" top="5%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 6) && uniqueList[startIndex + 6 - 1].days} email={ uniqueList.length >= (startIndex + 6) && uniqueList[startIndex + 6 - 1].email} />
            <SidVg width={12} left="30%" top="85%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 15) && uniqueList[startIndex + 15 - 1].days} email={ uniqueList.length >= (startIndex + 15) && uniqueList[startIndex + 15 - 1].email} />
            <SidVg width={12} left="45%" top="70%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 4) && uniqueList[startIndex + 4 - 1].days} email={ uniqueList.length >= (startIndex + 4) && uniqueList[startIndex + 4 - 1].email} />
            <SidVg width={12} left="65%" top="65%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 17) && uniqueList[startIndex + 17 - 1].days} email={ uniqueList.length >= (startIndex + 17) && uniqueList[startIndex + 17 - 1].email} />
            <SidVg width={8} left="80%" top="55%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 2) && uniqueList[startIndex + 2 - 1].days} email={ uniqueList.length >= (startIndex + 2) && uniqueList[startIndex + 2 - 1].email} />
            <SidVg width={12} left="85%" top="10%" showName={showName} loading={loading} days={ uniqueList.length >= (startIndex + 12) && uniqueList[startIndex + 12 - 1].days} email={ uniqueList.length >= (startIndex + 12) && uniqueList[startIndex + 12 - 1].email} />
          </Divider>
        </div>
      </Parallax>
    </Layout>
  )}

export default Estimations

export const Head = () => <Seo title="Estimations" />
