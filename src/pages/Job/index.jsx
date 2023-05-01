import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './index.css'
import { Link } from "react-router-dom";
const Job = ({ data, error, isLoading }) => {
    const { _id } = useParams()
    const [jobData, setJobData] = useState({})

    useEffect(() => {
        if (data) {

            setJobData(data.filter(elt => elt.id = (_id))[0])
        }

    }, [data])



    return (
        <>
            {error ? (
                <p>erreur</p>
            ) : isLoading ? (
                <p>Loading</p>
            ) : (
                <article className="singleJob">
                    <img src={jobData.logo} alt='' /><span className='company'>{jobData.company}</span>
                    <button class="apply-btn">Apply Now</button>
                    <p>{jobData.website}</p>
                    <p>{jobData.postedAt} / {jobData.contract ? 'temps plein' : 'temps partiel'}</p>
                    <h2>{jobData.position}</h2>
                    <h4>{jobData.location}</h4>

                    <p>{jobData.description} </p>
                    <br></br>
                    <h3>Requirements</h3>
                    <p>{jobData.requirementsContent}</p>
                    <ul className="ulPuces">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Consectetur adipiscing elit.</li>
                        <li>Sed do eiusmod tempor incididunt.</li>
                        <li>Ut labore et dolore magna aliqua.</li>
                    </ul>
                    <h3>What You Will Do</h3>
                    <p>{jobData.roleContent}</p>
                    <ul className="ulNumbers">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Consectetur adipiscing elit.</li>
                        <li>Sed do eiusmod tempor incididunt.</li>
                        <li>Ut labore et dolore magna aliqua.</li>
                    </ul>
                    <br></br>
                    <h3>{jobData.position}</h3>
                    <p>{jobData.company}</p>
                    <button class="apply-btn2">Apply Now</button>
                    <div class="buttons">
                        <button class="edit-button">Edit</button>

                    </div>
                    <Link className="lienRetour" to="/"> Retour aux annonces</Link>

                </article>
            )}
        </>
    )
}

export default Job;