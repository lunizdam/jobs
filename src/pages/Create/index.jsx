import './index.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Create = () => {
    const [company, setCompany] = useState("");
    const logo = 'https://dummyimage.com/50x50/e319e3/fff.png';
    const today = new Date()
    const [contract, setContract] = useState("")
    const [position, setPosition] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    const [description, setDescription] = useState("");
    const [requirementsContent, setRequirementsContent] = useState("")
    const [roleContent, setRoleContent] = useState("")
    const navigate = useNavigate();

    function saveAnnonce() {
        let data = { company, position, location, logo, today, contract, website, description, requirementsContent, roleContent }


        fetch("http://localhost:8000/jobs", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {

            resp.json().then((result) => {

            })
        })
    }



    function homeBack() {
        navigate(-1);

    }

    function saveAndBackHome() {
        saveAnnonce();
        homeBack();

    }


    return (
        <div>
            <h1>Création d'une annonce</h1>
            <Link className="back-to-annonces" to="/"> Retour aux annonces</Link>
            <div className='create-job-container'>
                <p>Company :</p><input type="text" name="company" value={company} onChange={(e) => { setCompany(e.target.value) }} /> <br />

                <p>Logo:</p><input type="text" name="logo" value={logo} /><br />
                <p>Position :</p><input type="text" name="position" value={position} onChange={(e) => { setPosition(e.target.value) }} /><br />
                <p>Date of the day :</p>
                <input type="text" name="date" value={today} /><br />

                <p>Type of contract : (0 pour temps partiel, 1 pour temps complet) :</p>
                <input type="text" name="contract" value={contract} onChange={(e) => { setContract(e.target.value) }} /><br /><br />

                <p>Location :</p><input type="text" name="location" value={location} onChange={(e) => { setLocation(e.target.value) }} /><br />

                <p>Society's Website :</p><input type="text" name="website" value={website} onChange={(e) => { setWebsite(e.target.value) }} /><br />

                <p>Description :</p><textarea cols="100" rows='5' type="text" name="description" className='desc-style' value={description} onChange={(e) => { setDescription(e.target.value) }} /><br />

                <p>Requirements Content :</p><textarea cols="100" rows='5' type="text" name="requirementsContent" className='desc-style' value={requirementsContent} onChange={(e) => { setRequirementsContent(e.target.value) }} /><br />
                <br />

                <p>role Content :</p><textarea cols="100" rows='5' type="text" name="roleContent" className='desc-style' value={roleContent} onChange={(e) => { setRoleContent(e.target.value) }} /><br />
                <br /> <br />
                <div className="btn-position">
                    <button className="btn-save" type="button" onClick={saveAndBackHome}>Enregistrer L'annonce</button>
                    <button className="btn-save" type="button" onClick={homeBack}>Retour
                    </button>
                </div>
                <p className='consigne'>Consigne : Une fois que vous avez cliquer sur Enregistrer, cliquer sur le bouton retour, puis actualiser la page principale pour voir la nouvelle annonce</p>
            </div>
        </div>
    )


}
export default Create;