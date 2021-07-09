import Head from 'next/head'
import SpeakerCard from '../../components/speakerCard';
import styles from '../../styles/carddeck.module.css'
import Loader from "react-loader-spinner";

export async function getStaticProps () {
  const respond = await fetch('https://randomuser.me/api/?results=1000');
  const data = await respond.json();

  return {
    props: {data: data.results}
  }
}

const SSG = (props) => {
  console.log(props.data)
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
    <Head>SSG</Head>
    <div className="container">
      <div className="row">
        <h1>SSG: HTML + fetch data</h1>
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

export default SSG;