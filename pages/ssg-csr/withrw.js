import Head from 'next/head'
import useSWR from 'swr'
import SpeakerCard from '../../components/speakerCard';
import styles from '../../styles/carddeck.module.css'
import NewSpeakerCard from '../../components/newSpeakerCard';
import {FixedSizeGrid as Grid} from 'react-window'
const GUTTER_SIZE = 10;
const SSGCSR = () => {
  const {data, error} = useSWR('https://randomuser.me/api/?results=1000');

  if (!data) {
    return <></>;
  }

  let res = data.results;

  return (
    <>
    <Head>
      <title>SSGCSR</title>
    </Head>
    <div className="container">
      <div className="row">
        <h1>SSG: HTML, CSR: fetch data</h1>
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

export default SSGCSR;