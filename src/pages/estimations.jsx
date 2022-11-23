import React, { useEffect, useMemo, useState } from "react"
import SteinStore from "stein-js-client";
import { Flex, Button } from "theme-ui"

import { Parallax } from "@react-spring/parallax"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import SidVg from "../components/sid-vg"

const Estimations = () => { 
  const [ uniqueList, setUuniqueList ] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [refresh, setRefresh] = useState(0);

  const store = useMemo(() => {
    const _store = new SteinStore("https://api.steinhq.com/v1/storages/637c9080eced9b09e9a644ac")

    return _store
  }, []);

  useEffect(() => {
    store
      .read("cheers-sidney", { limit: 1111 })
      .then(data => {
        console.log('raw: ', data);
        setStartIndex(0)
        setUuniqueList([...new Map(data.map(v => [v.email, v])).values()])
      });
  },[store, refresh])

  console.log(startIndex, 'uniqueList: ', uniqueList);


  return (
    <Layout>
      <Parallax pages={1}>
        <div>
          <Divider speed={0.2} offset={0} factor={1}>

            <Flex sx={{justifyContent: 'center'}} >
              {startIndex > 0 && <Button disabled={startIndex <= 0} onClick={() => { console.log(startIndex); setStartIndex((startIndex > 0 ? startIndex - 20 : 0))}} sx={{zIndex: '1000', p: '2px', px: '10px', m: '2px'}} >{'previous'}</Button>}
              <Button sx={{zIndex: '1000', p: '2px', px: '10px', m: '2px'}} >{`(${startIndex + 1} - ${(startIndex + 20 > uniqueList.length) ? uniqueList.length : startIndex + 20})`}</Button>
              <Button onClick={() => { setRefresh((refresh + 1))}} sx={{zIndex: '1000', p: '2px', px: '10px', m: '2px'}} >refresh</Button>
              {!uniqueList || startIndex + 20 <= uniqueList.length && <Button disabled={!uniqueList || startIndex + 20 >= uniqueList.length } onClick={() => { console.log(startIndex); setStartIndex(startIndex + 20)}} sx={{zIndex: '1000', p: '2px', px: '10px', m: '2px'}} >{'next'}</Button>}
            </Flex>

            <UpDownWide>
              { uniqueList.length >= (startIndex + 1) && <SidVg width={20} left="30%" top="40%" days={uniqueList[startIndex + 1 - 1].days} email={uniqueList[startIndex + 1 - 1].email} /> }
              { uniqueList.length >= (startIndex + 19) && <SidVg width={12} left="20%" top="65%" days={uniqueList[startIndex + 19 - 1].days} email={uniqueList[startIndex + 19 - 1].email} /> }
              { uniqueList.length >= (startIndex + 8) && <SidVg width={16} left="40%" top="10%" days={uniqueList[startIndex + 8 - 1].days} email={uniqueList[startIndex + 8 - 1].email} /> }
              { uniqueList.length >= (startIndex + 16) && <SidVg width={8} left="50%" top="30%" days={uniqueList[startIndex + 16 - 1].days} email={uniqueList[startIndex + 16 - 1].email} /> }
              { uniqueList.length >= (startIndex + 4) && <SidVg width={16} left="70%" top="70%" days={uniqueList[startIndex + 4 - 1].days} email={uniqueList[startIndex + 4 - 1].email} /> }
              { uniqueList.length >= (startIndex + 10) && <SidVg width={8} left="75%" top="10%" days={uniqueList[startIndex + 10 - 1].days} email={uniqueList[startIndex + 10 - 1].email} /> }
              { uniqueList.length >= (startIndex + 13) && <SidVg width={12} left="85%" top="30%" days={uniqueList[startIndex + 13 - 1].days} email={uniqueList[startIndex + 13 - 1].email} /> }
            </UpDownWide>
            <UpDown>
              { uniqueList.length >= (startIndex + 5) && <SidVg width={8} left="5%" top="70%" days={uniqueList[startIndex + 5 - 1].days} email={uniqueList[startIndex + 5 - 1].email} /> }
              { uniqueList.length >= (startIndex + 14) && <SidVg width={12} left="20%" top="20%" days={uniqueList[startIndex + 14 - 1].days} email={uniqueList[startIndex + 14 - 1].email} /> }
              { uniqueList.length >= (startIndex + 3) && <SidVg width={12} left="60%" top="60%" days={uniqueList[startIndex + 3 - 1].days} email={uniqueList[startIndex + 3 - 1].email} /> }
              { uniqueList.length >= (startIndex + 11) && <SidVg width={8} left="60%" top="15%" days={uniqueList[startIndex + 11 - 1].days} email={uniqueList[startIndex + 11 - 1].email} /> }
              { uniqueList.length >= (startIndex + 18) && <SidVg width={8} left="85%" top="80%" days={uniqueList[startIndex + 18 - 1].days} email={uniqueList[startIndex + 18 - 1].email} /> }
            </UpDown>
            { uniqueList.length >= (startIndex + 1) && <SidVg width={8} left="5%" top="20%" days={uniqueList[startIndex + 1 - 1].days} email={uniqueList[startIndex + 1 - 1].email} /> }
            { uniqueList.length >= (startIndex + 9) && <SidVg width={12} left="15%" top="45%" days={uniqueList[startIndex + 9 - 1].days} email={uniqueList[startIndex + 9 - 1].email} /> }
            { uniqueList.length >= (startIndex + 2) && <SidVg width={8} left="25%" top="5%" days={uniqueList[startIndex + 2 - 1].days} email={uniqueList[startIndex + 2 - 1].email} /> }
            { uniqueList.length >= (startIndex + 15) && <SidVg width={12} left="30%" top="85%" days={uniqueList[startIndex + 15 - 1].days} email={uniqueList[startIndex + 15 - 1].email} /> }
            { uniqueList.length >= (startIndex + 7) && <SidVg width={12} left="45%" top="70%" days={uniqueList[startIndex + 7 - 1].days} email={uniqueList[startIndex + 7 - 1].email} /> }
            { uniqueList.length >= (startIndex + 17) && <SidVg width={12} left="65%" top="40%" days={uniqueList[startIndex + 17 - 1].days} email={uniqueList[startIndex + 17 - 1].email} /> }
            { uniqueList.length >= (startIndex + 6) && <SidVg width={8} left="80%" top="55%" days={uniqueList[startIndex + 6 - 1].days} email={uniqueList[startIndex + 6 - 1].email} /> }
            { uniqueList.length >= (startIndex + 12) && <SidVg width={12} left="85%" top="10%" days={uniqueList[startIndex + 12 - 1].days} email={uniqueList[startIndex + 12 - 1].email} /> }
          </Divider>
        </div>
      </Parallax>
    </Layout>
  )}

export default Estimations

export const Head = () => <Seo title="Estimations" />
