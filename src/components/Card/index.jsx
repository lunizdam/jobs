import './index.css'
import { Link } from 'react-router-dom'
const FunRemove = ((_id) => {

    fetch("http://localhost:8000/jobs/" + _id,
        { method: "DELETE" }).then(() => {

            window.location.reload();

        }).catch((err) => {
            console.log(err.message)

        })

}
)

const Card = ({ data }) => {
    return (
        <article className="job">
            <img className="logoCard" src={data.logo} alt='' />
            <p>{data.postedAt} / {data.contract ? 'temps plein' : 'temps partiel'}</p>
            <h2>{data.position} </h2>
            <h3>{data.company}</h3>

            <h4>{data.location}</h4>
            <Link to={`jobs/${data._id}`}>Lire l'annonce</Link>
            <button onClick={() => { FunRemove(data._id) }} class="delete-button">Delete</button>

        </article>


    )
}
export default Card