import {FaTwitter,FaGoogle, FaApple} from 'react-icons/fa';

function FirstPage () {

    return (
        <div className='First-page'>

            <main className='First-page-wrapper'>

                <div className="First-page-wrapper-right-column">
                    <FaTwitter fill="rgb(29, 155, 240)" className="First-page-wrapper-right-column-twitter-icon"/>
                    <FaTwitter fill="rgb(29, 155, 240)" className="First-page-wrapper-right-column-twitter-icon"/>
                    <FaTwitter fill="rgb(29, 155, 240)" className="First-page-wrapper-right-column-twitter-icon"/>
                    <FaTwitter fill="rgb(29, 155, 240)" className="First-page-wrapper-right-column-twitter-icon"/>
                    <FaTwitter fill="rgb(29, 155, 240)" className="First-page-wrapper-right-column-twitter-icon"/>
                    <a href="http://localhost:3000/login">Login</a>
                </div>

                <div className="First-page-wrapper-left-column">
                    <FaTwitter fill="white" className="First-page-wrapper-left-column-twitter-icon"/>
                </div>
                
            </main>

            <footer className='First-page-footer'>
                <span>
                    blablabla
                </span>
            </footer>
        </div>
    );

}

export default FirstPage;