import SubmitButton from '../form/SubmitButton'
import Select from '../form/Select'
import Input from '../form/Input'
import Styles from './ProjectForm.module.css'

function ProjectForm ({ btnText }) {
    return (
        <form className={Styles.form}>
            <Input 
            type="text"
            text="Nome do projeto" 
            name="name" 
            placeholder="Insira o nome do projeto"/>
            
            <Input 
            type="number" 
            text="Orçamento do projeto" 
            name="budget" 
            placeholder="Insira o orçamento total"/>
            <Select name="category_id" text="Seelecione a categoria" />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm