import {FaTwitter,
        FaHouseUser,
        FaSlackHash,
        FaRegBell,
        FaRegEnvelope,
        FaRegBookmark,
        FaBook,
        FaUserAlt,
        FaRegCommentDots,
        FaSearch
        } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

function Banner() {

    const isSmallScreen = useMediaQuery({ query: '(max-width: 720px)' });
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1100px)' });
    const isLargeScreen = useMediaQuery({ query: '(max-width: 1279px)' });

    if(isSmallScreen)

        return (
            <header className='Banner Banner-flex-row'>
                <div className='Banner-menu Banner-menu-flex-row'>
                    <FaHouseUser className='Banner-menu-icon Icon-large' id="icon-home"/>
                    <FaSearch className='Banner-menu-icon Icon-large' id="icon-search"/>
                    <FaRegBell className='Banner-menu-icon Icon-large' id="icon-notificacoes"/>
                    <FaRegEnvelope className='Banner-menu-icon Icon-large' id="icon-mensagens"/>
                </div>
            </header>
        );

    if(isMediumScreen)
        return (
            <header className='Banner Banner-flex-column Banner-small'>
                <div className='Banner-menu Banner-menu-flex-column'>
                    <FaTwitter className='Banner-menu-icon Icon-large' id="icon-twitter" fill='rgb(29, 155, 240)'/>
                    <FaHouseUser className='Banner-menu-icon Icon-large' id="icon-home"/>
                    <FaSearch className='Banner-menu-icon Icon-large' id="icon-search"/>
                    <FaSlackHash className='Banner-menu-icon Icon-large' id="icon-explorar"/>
                    <FaRegBell className='Banner-menu-icon Icon-large' id="icon-notificacoes"/>
                    <FaRegEnvelope className='Banner-menu-icon Icon-large' id="icon-mensagens"/>
                    <FaRegBookmark className='Banner-menu-icon Icon-large' id="icon-itens-salvos"/>
                    <FaBook className='Banner-menu-icon Icon-large' id="icon-listas"/>
                    <FaUserAlt className='Banner-menu-icon Icon-large' id="icon-perfil"/>
                    <FaRegCommentDots className='Banner-menu-icon Icon-large' id="icon-listas"/>
                </div>
                <img alt='user profile pic'></img>
            </header>
        );
    
    if(isLargeScreen)

        return (
            <header className='Banner Banner-flex-column Banner-small'>
                <div className='Banner-menu Banner-menu-flex-column'>
                    <FaTwitter className='Banner-menu-icon Icon-large' id="icon-twitter" fill='rgb(29, 155, 240)'/>
                    <FaHouseUser className='Banner-menu-icon Icon-large' id="icon-home"/>
                    <FaSlackHash className='Banner-menu-icon Icon-large' id="icon-explorar"/>
                    <FaRegBell className='Banner-menu-icon Icon-large' id="icon-notificacoes"/>
                    <FaRegEnvelope className='Banner-menu-icon Icon-large' id="icon-mensagens"/>
                    <FaRegBookmark className='Banner-menu-icon Icon-large' id="icon-itens-salvos"/>
                    <FaBook className='Banner-menu-icon Icon-large' id="icon-listas"/>
                    <FaUserAlt className='Banner-menu-icon Icon-large' id="icon-perfil"/>
                    <FaRegCommentDots className='Banner-menu-icon Icon-large' id="icon-listas"/>
                </div>
                <img alt='user profile pic'></img>
            </header>
        );

    else
        return (
            <header className='Banner Banner-flex-column Banner-large'>

                <div className='Banner-menu Banner-menu-flex-column'>

                    <div className='Icon-container'>
                        <FaTwitter className='Banner-menu-icon Icon-large' id="icon-twitter" fill='rgb(29, 155, 240)'/>
                    </div>

                    <div className='Icon-container'>
                        <FaHouseUser className='Banner-menu-icon Icon-large' id="icon-home"/>
                        <label className='Icon-container-label' htmlFor='icon-home'>Página inicial</label>
                    </div>

                    <div className='Icon-container'>
                        <FaSlackHash className='Banner-menu-icon Icon-large' id="icon-explorar"/>
                        <label className='Icon-container-label' htmlFor='icon-explorar'>Explorar</label>
                    </div>

                    <div className='Icon-container'>
                        <FaRegBell className='Banner-menu-icon Icon-large' id="icon-notificacoes"/>
                        <label className='Icon-container-label' htmlFor='icon-notificacao'>Notificações</label>
                    </div>

                    <div className='Icon-container'>
                        <FaRegEnvelope className='Banner-menu-icon Icon-large' id="icon-mensagens"/>
                        <label  className='Icon-container-label' htmlFor='icon-mensagens'>Mensagens</label>
                    </div>

                    <div className='Icon-container'>
                        <FaRegBookmark className='Banner-menu-icon Icon-large' id="icon-itens-salvos"/>
                        <label className='Icon-container-label' htmlFor='icon-itens-salvos'>Itens Salvos</label>
                    </div>

                    <div className='Icon-container'>
                        <FaBook className='Banner-menu-icon Icon-large' id="icon-listas"/>
                        <label className='Icon-container-label' htmlFor='icon-listas'>Listas</label>
                    </div>

                    <div className='Icon-container'>
                        <FaUserAlt className='Banner-menu-icon Icon-large' id="icon-perfil"/>
                        <label className='Icon-container-label' htmlFor='icon-perfil'>Perfil</label>
                    </div>

                    <div className='Icon-container'>
                        <FaRegCommentDots className='Banner-menu-icon Icon-large' id="icon-mais"/>
                        <label className='Icon-container-label' htmlFor='icon-mais'>Mais</label>
                    </div>

                    <button className='btn-primary btn-themed btn-medium'>Tweetar</button>

                </div>

                <img alt='user profile pic'></img>

            </header>
        );
   
}

export default Banner;