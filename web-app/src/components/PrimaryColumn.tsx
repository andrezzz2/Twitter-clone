import { useMediaQuery } from 'react-responsive';
import {FaRegImage,
        FaRegFileImage,
        FaListUl,
        FaRegSmile,
        FaRegCalendarAlt,
        FaMapMarkerAlt
} from 'react-icons/fa';

function PrimaryColumn() {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 720px)' });

    if(isSmallScreen)
        return(
            <div className='Primary-column'>
               <img alt='user profile pic'></img>
            </div>
        );
    else
        return(
            <div className='Primary-column'>
                <div className="Make-tweet">

                    <img alt='user profile pic'></img>

                    <div className='Make-tweet-container'>

                        <div className="Make-tweet-container-field">
                            <span className="Who-can-view Span-themed">Qualquer pessoa</span>
                            <input className='Tweet-content' placeholder='O que está acontecendo?'/>
                            <span className='Who-can-comment Span-themed'>Qualquer pessoa pode responder</span>
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
                            <button className='btn-primary btn-themed btn-small'>Tweetar</button>
                        </div>

                    </div>

                </div>
            </div>
        );
}

export default PrimaryColumn;