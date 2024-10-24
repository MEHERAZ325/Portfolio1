import './HeroImg2.css'


// eslint-disable-next-line react/prop-types
const HeroImg2 = ({heading, text }) => {
  return (
    <div className='hero-img'>
        <div className='heading'>
            <h1 style={{color:"#fff"}}>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default HeroImg2