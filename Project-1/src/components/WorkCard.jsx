import { NavLink } from 'react-router-dom';
import pro1 from '../assets/project1.png';
import './WorkCard.css'

const WorkCard = ({imgsrc, title, text, contact}) => {
  return (
    <div className="project-card">
    <img src={imgsrc} alt="image" />
    <h2 className='project-title'>{title}</h2>
    <div className='pro-details'>
        <p>{text}</p>
        <div className='pro-btns'>
            <NavLink to={contact} className='btn'>
              CONTACT
            </NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard