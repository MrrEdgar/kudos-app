import { useState, useEffect } from 'react'

function Dashboard(props) {
    const API_URL = 'http://127.0.0.1:8000/api/'
    const [kudos, setKudos] = useState([])
    
    useEffect(() => {
      const fetchKudosData = async () => {
        try{
          const response = await fetch(API_URL+'kudos/');
          const data = await response.json();
          setKudos(data)
        } catch (error){
          console.error('Error :(')
        }
      }
      (async () => await fetchKudosData())();
    }, []);

    return (
        <>
            <div className="container px-4 py-5" id="hanging-icons">
                <h2 className="pb-2 border-bottom">Kudos this week</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="col">
                    <h3 className="border-bottom pb-1 text-success">Recived kudos</h3>
                    {kudos.map(kudo => (
                        props.user_id === kudo.to_user.id && 
                        <div key={kudo.id} className="mt-4">
                            <h4 className="fs-2 text-body-emphasis">{kudo.to_user.fullname}</h4>
                            <p>{kudo.message}</p>
                            <figcaption className="blockquote-footer">Kudos from <cite title="Source Title">{kudo.from_user.fullname}</cite></figcaption>
                            <a href="#" className="btn btn-primary">
                                Like
                            </a>
                        </div>
                    ))}
                    
                </div>
                <div className="col">
                <h3 className="border-bottom pb-1 text-success">Given kudos</h3>
                    {kudos.map(kudo => (
                        props.user_id === kudo.from_user.id && 
                        <div key={kudo.id} className="mt-4">
                            <h4 className="fs-2 text-body-emphasis">{kudo.to_user.fullname}</h4>
                            <p>{kudo.message}</p>
                            <figcaption className="blockquote-footer">Kudos from <cite title="Source Title">{kudo.from_user.fullname}</cite></figcaption>
                            <a href="#" className="btn btn-primary">
                                Like
                            </a>
                        </div>
                    ))}
                </div>
                <div className="col">
                <h3 className="border-bottom pb-1 text-success">Team kudos</h3>
                    {kudos.map(kudo => (
                        kudo.to_user.id !== props.user_id && props.user_id !== kudo.from_user.id && 
                        <div key={kudo.id} className="mt-4">
                            <h4 className="fs-2 text-body-emphasis">{kudo.to_user.fullname}</h4>
                            <p>{kudo.message}</p>
                            <figcaption className="blockquote-footer">Kudos from <cite title="Source Title">{kudo.from_user.fullname}</cite></figcaption>
                            <a href="#" className="btn btn-primary">
                                Like
                            </a>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;