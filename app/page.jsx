import styles from '../styles/Home.module.css'
import '../styles/globals.css'
import { useRouter } from 'next/navigation'
import GamesComponent from './gamesComponent';
import CardComponent from './cardComponent';


export default function homePage(props) {
   
    const {team=null, season=null } =props.searchParams
    console.log('====================================');
    console.log(team,season);
    console.log('====================================');

    return (
        <>  <div>

            <div className="site-wrap">
                
                <div className="site-section site-blocks-vs">
                    <CardComponent/>         
                </div>
                <div className="site-section site-blocks-vs">
                    <GamesComponent team={team} season={season}/>
                </div>


            </div>
        </div>
        </>
    )
}