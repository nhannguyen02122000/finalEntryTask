import Head from 'next/head'
import useSWR from 'swr'
import Loader from "react-loader-spinner";
import loaderStyles from '../../styles/loader.module.css'
import SpeakerCard from '../../components/speakerCard';
import styles from '../../styles/carddeck.module.css'
import React, { useEffect, useState } from 'react'

const CSR = () => {
    const [isComponentMounted, setIsComponentMounted] = useState(false);
    const {data, error} = useSWR('https://randomuser.me/api/?results=1000');
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
  
    if (!data && !error) {
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
    if (error) {
      return <h1>Data cannot be fetched!</h1>
    }
  
    return (
      <>
      <Head>
        <title>CSR</title>
      </Head>
      <div className="container">
        <div className="row">
          <h1>CSR: HTML + fetch data</h1>
          <p>Data được fetch tại client, HTML pre-render ở server chỉ có Loader</p>
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
  
  export default CSR;