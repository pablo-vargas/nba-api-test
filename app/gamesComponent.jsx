
const fetchGames = (season, team) => {
    return fetch(`https://api-nba-v1.p.rapidapi.com/games?season=${season}&team=${team}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '14d5daf665msh4e58adc4ac83c7ap16c44cjsned52299467fa',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    }).then(resp => resp.json())
}



export default async function GamesComponent({ season, team }) {

    if (!team || !season) {
        return (<><div>No results found.!</div></>)
    }
    else {
        const result = await fetchGames(season, team)
        console.log('====================================');
        console.log(result);
        console.log('====================================');
        return (
            <div className="container">
                
                {
                    result['response'].map((item) => {

                        if (item.status.long == "Finished") {
                            return <div className="row align-items-center mb-5">
                                <div className="col-md-12">


                                    <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                                        <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">

                                            <div className="text-center text-lg-left">
                                                <div className="d-block d-lg-flex align-items-center">
                                                    <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                                                        <img src={item.teams.home.logo} alt="Image" className="img-fluid" />
                                                    </div>
                                                    <div className="text">
                                                        <h3 className="h5 mb-0 text-black">{item.teams.home.name}</h3>
                                                        <span className="text-uppercase small country">{item.teams.home.code}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                                            <div className="d-inline-block">
                                                <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded"><span className="h5">{item.scores.home.points}:{item.scores.visitors.points}</span></div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-lg-4 text-center text-lg-right">
                                            <div className="">
                                                <div className="d-block d-lg-flex align-items-center">
                                                    <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                                                        <img src={item.teams.visitors.logo} alt="Image" className="img-fluid" />
                                                    </div>
                                                    <div className="text order-1 w-100">
                                                        <h3 className="h5 mb-0 text-black">{item.teams.visitors.name}</h3>
                                                        <span className="text-uppercase small country">{item.teams.visitors.code}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                    })
                }

            </div>
        )
    }


}