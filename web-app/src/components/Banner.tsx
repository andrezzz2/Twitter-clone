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
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/features/userSlice';

function Banner() {

    const dispatch = useDispatch();

    function handleLogOut(){
        console.log("trying to log out");
        dispatch(removeUser());

        localStorage.clear();
    } 

    const isSmallScreen = useMediaQuery({ query: '(max-width: 720px)' });
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1100px)' });
    const isLargeScreen = useMediaQuery({ query: '(max-width: 1279px)' });

    if(isSmallScreen)

        return (
            <header className='Banner Banner-flex-row'>
                <div className='Banner-menu Banner-menu-flex-row'>
                    
                    <div className='Icon-container btn-themed-white-black'>
                        <FaHouseUser className='Banner-menu-icon Icon-large' id="icon-home"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaSearch className='Banner-menu-icon Icon-large' id="icon-search"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegBell className='Banner-menu-icon Icon-large' id="icon-notificacoes"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                    <FaRegEnvelope className='Banner-menu-icon Icon-large' id="icon-mensagens"/>
                    </div>
                    
                </div>
            </header>
        );

    if(isMediumScreen)
        return (
            <header className='Banner Banner-flex-column Banner-small'>
            
                <div className='Banner-menu Banner-menu-flex-column'>

                    <div className='Icon-container btn-themed-white-blue'>
                        <FaTwitter className='Banner-menu-icon Icon-large' id="icon-twitter" fill='rgb(29, 155, 240)'/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaHouseUser className='Banner-menu-icon Icon-large' id="icon-home"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaSearch className='Banner-menu-icon Icon-large' id="icon-search"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegBell className='Banner-menu-icon Icon-large' id="icon-notificacoes"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegEnvelope className='Banner-menu-icon Icon-large' id="icon-mensagens"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegBookmark className='Banner-menu-icon Icon-large' id="icon-itens-salvos"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaBook className='Banner-menu-icon Icon-large' id="icon-listas"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaUserAlt className='Banner-menu-icon Icon-large' id="icon-perfil"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegCommentDots className='Banner-menu-icon Icon-large' id="icon-listas"/>
                    </div>

                </div>
                <img alt='user profile pic'></img>
            </header>
        );
    
    if(isLargeScreen)

        return (
            <header className='Banner Banner-flex-column Banner-small'>
                <div className='Banner-menu Banner-menu-flex-column'>

                    <div className='Icon-container btn-themed-white-blue'>
                        <FaTwitter className='Banner-menu-icon Icon-large' id="icon-twitter" fill='rgb(29, 155, 240)'/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaHouseUser className='Banner-menu-icon Icon-large' id="icon-home"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaSlackHash className='Banner-menu-icon Icon-large' id="icon-explorar"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegBell className='Banner-menu-icon Icon-large' id="icon-notificacoes"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegEnvelope className='Banner-menu-icon Icon-large' id="icon-mensagens"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegBookmark className='Banner-menu-icon Icon-large' id="icon-itens-salvos"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaBook className='Banner-menu-icon Icon-large' id="icon-listas"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaUserAlt className='Banner-menu-icon Icon-large' id="icon-perfil"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegCommentDots className='Banner-menu-icon Icon-large' id="icon-listas"/>
                    </div>
                    
                </div>
                <img alt='user profile pic'></img>
            </header>
        );

    else
        return (
            <header className='Banner Banner-flex-column Banner-large'>

                <div className='Banner-menu Banner-menu-flex-column'>

                    <div className='Icon-container btn-themed-white-blue'>
                        <FaTwitter className='Banner-menu-icon Icon-large' id="icon-twitter" fill='rgb(29, 155, 240)'/>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaHouseUser className='Banner-menu-icon Icon-large' id="icon-home"/>
                        <label className='Icon-container-label' htmlFor='icon-home'>Página inicial</label>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaSlackHash className='Banner-menu-icon Icon-large' id="icon-explorar"/>
                        <label className='Icon-container-label' htmlFor='icon-explorar'>Explorar</label>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegBell className='Banner-menu-icon Icon-large' id="icon-notificacoes"/>
                        <label className='Icon-container-label' htmlFor='icon-notificacao'>Notificações</label>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegEnvelope className='Banner-menu-icon Icon-large' id="icon-mensagens"/>
                        <label  className='Icon-container-label' htmlFor='icon-mensagens'>Mensagens</label>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegBookmark className='Banner-menu-icon Icon-large' id="icon-itens-salvos"/>
                        <label className='Icon-container-label' htmlFor='icon-itens-salvos'>Itens Salvos</label>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaBook className='Banner-menu-icon Icon-large' id="icon-listas"/>
                        <label className='Icon-container-label' htmlFor='icon-listas'>Listas</label>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaUserAlt className='Banner-menu-icon Icon-large' id="icon-perfil"/>
                        <label className='Icon-container-label' htmlFor='icon-perfil'>Perfil</label>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegCommentDots className='Banner-menu-icon Icon-large' id="icon-mais"/>
                        <label className='Icon-container-label' htmlFor='icon-mais'>Mais</label>
                    </div>

                    <button className='btn-primary btn-themed-blue-white btn-banner-tweetar'>Tweetar</button>

                </div>

                <img alt='user profile pic'></img>

            </header>
        );
   
}

export default Banner;