import { useMediaQuery } from 'react-responsive';
import Banner from '../components/Banner';
import PrimaryColumn from '../components/PrimaryColumn';
import SidebarColumn from '../components/SidebarColumn';
import StickyHeader from '../components/StickyHeader';

function HomePage () {

    const isSmallScreen = useMediaQuery({ query: '(max-width: 720px)' });
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1000px)' });

    if(isSmallScreen)

        return (
            <div className='App App-flex-column'>

                <main className='App-main-content'>
                    <StickyHeader/>
                    <PrimaryColumn/>
                </main>

                <Banner/>

            </div>
        );

    if(isMediumScreen)
        return (
            <div className='App App-flex-row'>

                <Banner/>

                <main className='App-main-content'>
                    <StickyHeader/>
                    <PrimaryColumn/>
                </main>
                

            </div>
        );
    else
        return (
            <div className='App App-flex-row'>

                <Banner/>

                <main className='App-main-content'>
                    <StickyHeader/>
                    <div className='App-main-content-columns'>
                        <PrimaryColumn/>
                        <SidebarColumn/>
                    </div>            
                </main>
                

            </div>
        );
    

}

export default HomePage;