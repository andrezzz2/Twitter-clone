import { useMediaQuery } from 'react-responsive';
import { FaSearch } from 'react-icons/fa';


function StickyHeader() {
    const isSmallMediumScreen = useMediaQuery({ query: '(max-width: 1000px)' });

    
    function turnFieldBlue(event: React.FocusEvent<HTMLElement>){
        const parent = (event.target as HTMLElement).parentElement;
        if(parent!=null)
            parent.style.cssText = "outline: 1px solid rgb(29, 155, 240); background-color: white";
    }

    if(isSmallMediumScreen)
        return(
            <div className='Sticky-header'>
                <h2>Página inicial</h2>
                
            </div>
        );
    else
        return(
            <div className='Sticky-header'>
                <h2>Página inicial</h2>
                <div className='Search-bar'>
                    <FaSearch className='Search-bar-icon Icon-small'/>
                    <input className='Search-bar-input' placeholder="Buscar no Twitter" onFocus={turnFieldBlue}></input>
                </div>
            </div>
        );
}

export default StickyHeader;