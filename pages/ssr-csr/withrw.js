//Fetch data SSR, Render CSR
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import NewSpeakerCard from '../../components/newSpeakerCard';
import {FixedSizeGrid as Grid} from 'react-window'

const GUTTER_SIZE = 10;

export async function getServerSideProps () {
  const respond = await fetch('https://randomuser.me/api/?results=1000');
  const data = await respond.json();

  return {
    props: {data: data.results}
  }
}

const SSRCSRRW = (props) => {
  const data = props.data;
  const [isComponentMounted, setIsComponentMounted] = useState(false);
  useEffect(() => setIsComponentMounted(true), []);

  if (!isComponentMounted) {
    return <h1>SSR nè</h1>
  }

  return (
    <>
      <Head>
        <title>SSR-CSR with RW</title>
      </Head>
      <div className="container">
        <div className="row">
          <h1>SSR: fetch data + CSR: HTML render</h1>
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
                  ele = {data[columnIndex*3+rowIndex]}
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

export default SSRCSRRW;
