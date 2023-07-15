// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, imageUrl, id} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <l1 className="team-card">
        <img className="team-logo" src={imageUrl} alt={name} />
        <p className="team-card-name">{name}</p>
      </l1>
    </Link>
  )
}

export default TeamCard
