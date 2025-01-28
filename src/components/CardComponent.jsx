import { useState, useEffect } from "react"
import axios from "axios";

export default function CardComponent() {

    const [data, setData] = useState([]);
    const apiUrlMovies = "http://localhost:3000/movies"

    useEffect(() => {
        axios.get(apiUrlMovies)
            .then((res) => {
                setData(res.data.items);
                console.log(res.data.items);
            })
            .catch((error) => {
                console.log(error, "Errore nella ricerca dei film!");
            }, []);
    });

    return (
        data.map((item) => {
            return (
                <div key={item.id} className="card m-card">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.abstract}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            )
        })
    )
}