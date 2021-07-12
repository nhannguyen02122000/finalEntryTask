import Head from 'next/head'
import Loader from "react-loader-spinner";
import loaderStyles from '../../styles/loader.module.css'
import SpeakerCard from '../../components/speakerCard';
import styles from '../../styles/carddeck.module.css'
import React, { useEffect, useState } from 'react'

export async function getServerSideProps () {
  const respond = await fetch('https://randomuser.me/api/?results=1000');
  const data = await respond.json();

  return {
    props: {data: data.results}
  }
}

const SSRCSR = (props) => {
  const [isComponentMounted, setIsComponentMounted] = useState(false);
  useEffect(() => setIsComponentMounted(true), []);

  if(!isComponentMounted) {
    return <div className={loaderStyles.central}>
    <Loader
      type="MutatingDots"
      color="#6ac5fe"
      secondaryColor = "Grey"
      height={100}
      width={100}
    />
    </div>
  }

  if (!props.data) {
    return <div className={loaderStyles.central}>
    <Loader
      type="MutatingDots"
      color="#6ac5fe"
      secondaryColor = "Grey"
      height={100}
      width={100}
    />
    </div>
  }

  return (
    <>
    <Head>
      <title>SSRCSR</title>
    </Head>
    <div className="container">
      <div className="row">
        <h1>SSR: fetchdata CSR: HTML</h1>
        <p>Data được fetch ở server, do ko được mount nên trả về Loader</p>
        <div className={`card-deck ${styles.cardContainer}`}>
            {props.data.map((ele, idx) =>
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
  
export default SSRCSR;