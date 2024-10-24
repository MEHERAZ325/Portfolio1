import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight:'2rem'}} />
                <div>
                <p>7900 Koajpur, Madaripur.</p>
                <p>Bangladesh.</p>
            </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color:"#fff", marginRight:'2rem'}} />
                +8801311176577</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:'2rem'}} />
                mdmeherazhossain325@gmail.com</h4>
            </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>I am a passionate web developer with a strong foundation in creating dynamic and user-friendly websites. With expertise in HTML, CSS, and JavaScript</p>
                <div className='social'>
                <FaFacebook size={30} style={{color:"#fff", marginRight:'1rem'}} />

                <FaGithub size={30} style={{color:"#fff", marginRight:'1rem'}} />

                <FaLinkedin size={30} style={{color:"#fff", marginRight:'1rem'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer