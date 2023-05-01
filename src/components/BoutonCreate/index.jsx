import { useNavigate } from 'react-router-dom'
import './index.css'

const BoutonCreate = () => {

    const navigate = useNavigate()


    return (

        <div >
            <button className="btn-create" onClick={() => { navigate("/Create") }}>creation d'annonce</button>
        </div>


    )
}
export default BoutonCreate;