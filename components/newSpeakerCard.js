import styles from '../styles/carddeck.module.css'
import Image from 'next/image'

const NewSpeakerCard = ({ele, style, GUTTER_SIZE}) => {
  return(
    <div 
      style={{
      ...style,
      left: style.left + GUTTER_SIZE,
      top: style.top + GUTTER_SIZE,
      width: style.width - GUTTER_SIZE,
      height: style.height - GUTTER_SIZE
      }}
      className={`card`}>
      <div className={`${styles.cardImg}`}>
        <Image src={ele.picture.large} width={50} height={50} alt={`user`}/>
      </div>
      <div className="card-body">
        <h5 className="card-title">{`${ele.name.first} ${ele.name.last}`}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{ele.name.title}</h6>
        <p className="card-text">{ele.login.username}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{`Age: ${ele.dob.age}`}</li>
        <li className="list-group-item">{`Country: ${ele.location.country}`}</li>
        <li className="list-group-item">{`Phone: ${ele.phone}`}</li>
      </ul>
    </div>
  )
}

export default NewSpeakerCard;