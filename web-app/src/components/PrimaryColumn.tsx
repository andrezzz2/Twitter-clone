import { useMediaQuery } from 'react-responsive';
import {FaRegImage,
        FaRegFileImage,
        FaListUl,
        FaRegSmile,
        FaRegCalendarAlt,
        FaMapMarkerAlt
} from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

function PrimaryColumn() {

    const isMediumOrLargeScreen = useMediaQuery({ query: '(min-width: 721px)' });
    
    return(
        <div className='Primary-column'>

            <div className='Primary-column-header Sticky-top'>
                {!isMediumOrLargeScreen?
                    <img className='Primary-column-sticky-header-icon Icon-large' alt='user profile pic' src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"></img>    
                    :
                    <></>
                }
                <span>Página inicial</span>
                <BsStars className='Primary-column-sticky-header-star Icon-medium'/>
            </div>

            {isMediumOrLargeScreen &&
                <div className="Make-tweet">

                    <img className='Make-tweet-icon Icon-xl' alt='user profile pic' src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"></img>

                    <div className='Make-tweet-container'>

                        <div className="Make-tweet-container-field">
                            <span className="Who-can-view Span-bold-smaller">Qualquer pessoa</span>
                            <input className='Tweet-content' placeholder='O que está acontecendo?'/>
                            <span className='Who-can-comment Span-bold-smaller'>Qualquer pessoa pode responder</span>
                        </div>

                        <div className="Make-tweet-container-toolbar">
                            <div className='Make-tweet-container-toolbar-icons'>
                                <FaRegImage fill='rgb(29, 155, 240)' className='Icon-small'/>
                                <FaRegFileImage fill='rgb(29, 155, 240)' className='Icon-small'/>
                                <FaListUl fill='rgb(29, 155, 240)' className='Icon-small'/>
                                <FaRegSmile fill='rgb(29, 155, 240)' className='Icon-small'/>
                                <FaRegCalendarAlt fill='rgb(29, 155, 240)' className='Icon-small'/>
                                <FaMapMarkerAlt fill='rgb(29, 155, 240)' className='Icon-small'/>
                            </div>
                            <button className='btn-primary btn-themed-blue-white Btn-tweetar'>Tweetar</button>
                        </div>

                    </div>

                </div>
                
            }
            <div className="Show-more-tweets">

            </div>

            <article className='Tweet'>

                <div className='Tweet-retweet-or-maybe-you-like'>
                    <img className="Tweet-retweet-or-maybe-you-like-icon" alt="retweeted icon"/>
                    <span className="Tweet-retweet-or-maybe-you-like-user">mmag2</span>
                </div>
                <div className='Tweet-wrapper'>
                    <img className='Tweet-wrapper-user-icon Icon-xl' alt='user profile pic' src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"></img>
                    <div className='Tweet-container'>

                        <div className="Tweet-container-first-section">
                            <div className="Tweet-container-first-section-infos">
                                <span className="Tweet-nick">André Luiz</span>
                                <span className='Tweet-username'>andrezzz</span>
                                <span>.</span>
                                <span className='Tweet-date'>21 de Out</span>
                            </div>
                            <div className="Tweet-container-first-section-more">

                            </div>
                        </div>

                        <p className='Tweet-text'>
                            俺哥说要抱着姨干一个晚上的又在哪里？别吹牛批行不行啊？
                        </p>

                        <img className="Tweet-media" alt="tweet media" src="https://www.enago.com/academy/br/wp-content/uploads/sites/17/2015/06/Twitter-750x330.jpeg"/>

                        <div className="Tweet-container-last-section">
                            <span className="Tweet-comment">Q</span>
                            <span className='Tweet-retweet'>Q</span>
                            <span className='Tweet-like'>Qr</span>
                            <span className='Tweet-share'>Q</span>
                        </div>

                    </div>
                </div>

            </article>

            <article className='Tweet'>

                <div className='Tweet-retweet-or-maybe-you-like'>
                    <img className="Tweet-retweet-or-maybe-you-like-icon" alt="retweeted icon"/>
                    <span className="Tweet-retweet-or-maybe-you-like-user">mmag2</span>
                </div>
                <div className='Tweet-wrapper'>
                    <img className='Tweet-wrapper-user-icon Icon-xl' alt='user profile pic' src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"></img>
                    <div className='Tweet-container'>

                        <div className="Tweet-container-first-section">
                            <div className="Tweet-container-first-section-infos">
                                <span className="Tweet-nick">André Luiz</span>
                                <span className='Tweet-username'>andrezzz</span>
                                <span>.</span>
                                <span className='Tweet-date'>21 de Out</span>
                            </div>
                            <div className="Tweet-container-first-section-more">

                            </div>
                        </div>

                        <p className='Tweet-text'>
                            俺哥说要抱着姨干一个晚上的又在哪里？别吹牛批行不行啊？
                        </p>

                        <img className="Tweet-media" alt="tweet media" src="https://www.enago.com/academy/br/wp-content/uploads/sites/17/2015/06/Twitter-750x330.jpeg"/>

                        <div className="Tweet-container-last-section">
                            <span className="Tweet-comment">Q</span>
                            <span className='Tweet-retweet'>Q</span>
                            <span className='Tweet-like'>Qr</span>
                            <span className='Tweet-share'>Q</span>
                        </div>

                    </div>
                </div>

            </article>

        </div>
            
    );
}

export default PrimaryColumn;