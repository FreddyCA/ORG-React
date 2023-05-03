import './Footer.css'

const Footer = () => {

    return <footer className='footer' style={{backgroundImage: "url(/img/Footer.png)"}}>
    <div className='redes'>
        <a href='https://github.com/FreddyCA'>
            <img src='/img/facebook.png' alt='Facebook'></img>
        </a>
        <a href='https://github.com/FreddyCA'>
            <img src='/img/twitter.png' alt='Twitter'></img>
        </a>
        <a href='https://github.com/FreddyCA'>
            <img src='/img/instagram.png' alt='Instagram'></img>
        </a>
    </div>
    <img src='/img/logoFooter.png' alt='Logo'></img>
    <strong>Desarrollado por FCCA</strong>
    </footer>

}

export default Footer