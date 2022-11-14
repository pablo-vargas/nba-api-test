import FormComponent from "./formComponent"



const fetchNBA = (api) => {
    return fetch('https://api-nba-v1.p.rapidapi.com/'+api, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '14d5daf665msh4e58adc4ac83c7ap16c44cjsned52299467fa',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    }).then(resp => resp.json())
}






export default async function CardComponent() {
    const teams = await fetchNBA("teams")
    const seasons = await fetchNBA("seasons")
    
    return (
        <div className="container">

            <div className="row">

                <div className="col-md-12 bg-white">
                    <FormComponent teams={teams} seasons={seasons} />
                </div>
            </div>
        </div>
        )


}