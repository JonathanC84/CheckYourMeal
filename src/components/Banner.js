import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'Check your meal'
    const subtitle = 'Préparez vos repas en fonction de vos besoins énergétiques'
    return (
        <div className='cym-banner'>
            <img src={logo} alt='Check your meal' className='cym-logo' />
            <h1 className='cym-title'>{title}</h1>
            <h2 className='cym-subtitle'>{subtitle}</h2>
        </div>
    )
}

export default Banner