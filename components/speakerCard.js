import Image from 'next/image'
import styles from '../styles/carddeck.module.css'

const SpeakerCard = ({idx, src, firstName, lastName, userName, title, ele}) => {
  return (
    <div className={`card ${styles.cardChildren}`} key={idx}>
      <div className={`${styles.cardImg}`}>
        <Image src={src} width={200} height={200} alt={`user_${idx}`}/>
      </div>
      <div className="card-body">
        <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
        <p className="card-text">{userName}</p>
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

export default SpeakerCard;