import Head from 'next/head'
import useSWR from 'swr'
import React, { useEffect, useState } from 'react'
import NewSpeakerCard from '../../components/newSpeakerCard';
import {FixedSizeGrid as Grid} from 'react-window'
const GUTTER_SIZE = 10;
const CSR = () => {
    const [isComponentMounted, setIsComponentMounted] = useState(false);
    const {data, error} = useSWR('https://randomuser.me/api/?results=1000');
    useEffect(() => setIsComponentMounted(true), []);

    if(!isComponentMounted) {
        return <></>;
    }
  
    if (!data && !error) {
      return <div></div>
    }
    if (error) {
      return <h1>Data cannot be fetched!</h1>
    }
    let res = data.results;
    return (
      <>
      <Head>
        <title>CSR</title>
      </Head>
      <div className="container">
        <div className="row">
          <h1>CSR: HTML + fetch data</h1>
          <Grid
            columnCount={3}
            columnWidth={300+GUTTER_SIZE}
            rowHeight={350+GUTTER_SIZE}
            height={560}
            width={1000}
            rowCount={1000}
          >
            {({columnIndex, rowIndex, style}) => {
              return (
                <NewSpeakerCard
                  ele = {res[columnIndex*3+rowIndex]}
                  style = {style}
                  GUTTER_SIZE = {GUTTER_SIZE}
                />
              )
            }}
          </Grid>
        </div>
      </div>
      </>
    )
  }
  
  export default CSR;