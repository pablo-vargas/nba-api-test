'use client'
import {useRouter} from 'next/navigation'


export default function FormComponent({teams, seasons}) {
        const router = useRouter();
    const onSubmitHandler = (event) => {
        event.preventDefault()
        const team = event.target.teams.value
        const season = event.target.season.value
        if(!team  || !season) return alert('Seleccione equipo y tempoorada.!')
        
        router.push(`/?team=${team}&season=${season}`)
    }
    return (

        <form onSubmit={onSubmitHandler}>
            <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="team" className="text-black">Team <span className="text-danger">*</span></label>
                        <select className="form-control" id="teams" name="teams">
                            <option value="">select...</option>
                            {teams['response'].map(i => { return <option key={i.id} value={i.id} >{i.name}[{i.code}]</option> })}
                        </select>
                        <ul>
                            

                        </ul>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="season" className="text-black">Season <span className="text-danger">*</span></label>
                        <select className="form-control" id="season" name="season" >
                            <option value="">select...</option>
                            {seasons['response'].map(i => { return <option key={i} value={i} >{i}</option> })}


                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-lg-12">
                        <button type="submit" className="btn btn-primary btn-lg btn-block"  >search</button>
                    </div>
                </div>
            </div>
        </form>
    )

}
