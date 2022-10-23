import WhatsHappeningImg from '../img/WhatsHappening.png';

function SidebarColumn() {
    return(
        <div className='Sidebar-column'>
            <div className='Sidebar-column-whats-happening'>
                <img src={WhatsHappeningImg} alt='Whats happening Topic'></img>
            </div>

            <div className='Sidebar-column-who-follow'>
            </div>
        </div>
    );
}

export default SidebarColumn;