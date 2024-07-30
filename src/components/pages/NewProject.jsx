import Styles from './NewProject.module.css'

import ProjectForm from '../Project/ProjectForm'


function NewProject() {
    return(
        <div className={Styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços!</p>
            <ProjectForm />
        </div>
    )
}

export default NewProject