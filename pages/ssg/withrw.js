import Head from 'next/head'
import SpeakerCard from '../../components/speakerCard';
import NewSpeakerCard from '../../components/newSpeakerCard';
import styles from '../../styles/carddeck.module.css'
import Loader from "react-loader-spinner";
import AutoSizer from 'react-virtualized-auto-sizer'
import {FixedSizeGrid as Grid} from 'react-window'

const GUTTER_SIZE = 10;

export async function getStaticProps () {
  const respond = await fetch('https://randomuser.me/api/?results=1000');
  const data = await respond.json();

  return {
    props: {data: data.results}
  }
}

const Cell = ({ele, style}) => (
  <div 
    style={{
      ...style,
      left: style.left + GUTTER_SIZE,
      top: style.top + GUTTER_SIZE,
      width: style.width - GUTTER_SIZE,
      height: style.height - GUTTER_SIZE
    }}
    className={`card`}>
  </div>
);

const SSGRW = (props) => {
  const data = props.data;

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>SSG: HTML + fetch data</h1>
          <Grid
            columnCount={3}
            columnWidth={300+GUTTER_SIZE}
            rowHeight={300+GUTTER_SIZE}
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
