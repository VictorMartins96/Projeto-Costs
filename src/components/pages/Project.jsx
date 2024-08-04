import Styles from './Project.module.css'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../Project/ProjectForm'
import Message from '../layout/Message'

import {useParams} from 'react-router-dom'
import {useState , useEffect} from 'react'

function Project() {

    const { id } = useParams()
    const [project , setProject] = useState([])
    const [showProjectForm , setShowProjectForm] = useState(false)
    const [showServiceForm , setShowServiceForm] = useState(false)
    const [message , setMessage] = useState()
    const [ type , setType] = useState()

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

    function editPost(project) {
        setMessage('')

        if(project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type' : 'application/json' ,
            }, 
            body: JSON.stringify(project) ,
        })
        .then((resp) => resp.json())
        .then((data)=> {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto atualizado!')
            setType('sucess')
        })
        .catch((err) => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }
    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }


    return (
        <>{project.name ? 
        <div className={Styles.project_details}>
            <Container customClass="column">
                {message && <Message type={type} msg={message}/>}
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
                            <ProjectForm 
                            handleSubmit={editPost} 
                            btnText="Concluir Edição" 
                            projectData={project} />
                        </div>
                    )}
            </div>
            <div className={Styles.service_form_container}>
                    <h2>Adicione um serviço:</h2>
                    <button className={Styles.btn}  onClick={toggleServiceForm}>
                    {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                    </button>
                    <div className={Styles.project_info}>
                        {showServiceForm && <div>Formulário do serviço</div>

                        }
                    </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass="start">
                <p>Itens de serviço</p>
            </Container>
            </Container>
        </div> : (
            <Loading />
        )} </>
    )
}

export default Project