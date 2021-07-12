import Head from 'next/head'
import useSWR from 'swr'
import Loader from "react-loader-spinner";
import loaderStyles from '../../styles/loader.module.css'
import SpeakerCard from '../../components/speakerCard';
import styles from '../../styles/carddeck.module.css'

const SSGCSR = () => {
  const {data, error} = useSWR('https://randomuser.me/api/?results=1000');

  return (
    <>
    <Head>
      <title>SSGCSR</title>
    </Head>
    <div className="container">
      <div className="row">
        <h1>SSG: HTML, CSR: fetch data</h1>
        <div className={`card-deck ${styles.cardContainer}`}>
            {data.results.map((ele, idx) =>
              <SpeakerCard 
                key = {idx}
                idx = {idx}
                title = {ele.name.title}
                src = {ele.picture.large}
                firstName = {ele.name.first}
                lastName = {ele.name.last}
                userName = {ele.email}
                ele = {ele}
              />
            )}
        </div>
      </div>
    </div>
    </>
  )
}

export default SSGCSR;