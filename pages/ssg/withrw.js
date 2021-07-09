import Head from 'next/head'
import NewSpeakerCard from '../../components/newSpeakerCard';
import {FixedSizeGrid as Grid} from 'react-window'

const GUTTER_SIZE = 10;

export async function getStaticProps () {
  const respond = await fetch('https://randomuser.me/api/?results=1000');
  const data = await respond.json();

  return {
    props: {data: data.results}
  }
}

const SSGRW = (props) => {
  const data = props.data;

  return (
    <>
      <Head>
        <title>SSG with RW</title>
      </Head>
      <div className="container">
        <div className="row">
          <h1>SSG: HTML + fetch data</h1>
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

export default SSGRW;
