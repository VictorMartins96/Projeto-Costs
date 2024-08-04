import Styles from './Project.module.css'
import Loading from '../layout/Loading'
import Container from '../layout/Container'

import {useParams} from 'react-router-dom'
import {useState , useEffect} from 'react'

function Project() {

    const { id } = useParams()
    const [project , setProject] = useState([])
    const [showProjectForm , setShowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}` , {
                method : 'GET' ,
                headers: {
                    'Content-type' : 'application/json'
                } ,
            }) .then(resp => resp.json())
            .then((data) => {
                setProject(data)
            }).catch((err)=> console.log(err))
        }, 200)
    } , [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }


    return (
        <>{project.name ? 
        <div className={Styles.project_details}>
            <Container customClass="column">
            <div className={Styles.details_container}>
                <h1>Projeto: {project.name}</h1>
                <button className={Styles.btn}  onClick={toggleProjectForm}>
                    {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                    </button>
                    {!showProjectForm ? (
                        <div className={Styles.project_info}>
                            <p>
                                <span>Categoria:</span>{project.category.name}
                            </p>
                            <p>
                                <span>Total de orçamento:</span>{project.budget}
                            </p>
                            <p>
                                <span>Total utilizado:</span>{project.cost}
                            </p>

                        </div>
                    ) : (
                        <div className={Styles.project_info}>
                            <p>detalhes do projeto</p>
                        </div>
                    )}
            </div>
            </Container>
        </div> : (
            <Loading />
        )} </>
    )
}

export default Project