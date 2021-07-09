import Head from 'next/head'
import SpeakerCard from '../../components/speakerCard';
import styles from '../../styles/carddeck.module.css'

export async function getStaticProps () {
  const respond = await fetch('https://randomuser.me/api/?results=1000');
  const data = await respond.json();

  return {
    props: {data: data.results}
  }
}

const SSG = (props) => {
  console.log(props.data)
  return (
    <>
    <Head>SSG</Head>
    <div className="container">
      <div className="row">
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