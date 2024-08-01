import {Link} from 'react-router-dom'

import Styles from './ProjectCard.module.css'

import {BsPencil , BsFillTrashFill} from 'react-icons/bs'


function ProjectCard({id , name , budget , category , handlerRemove}) {
    return (
        <div className={Styles.project_card}>
            <h4>{name}</h4>
                <p>
                    <span>Orçamento</span> R${budget}
                </p>
                <p className={Styles.category_text}>
                    <span className={`${Styles[category.toLowerCase()]}`}></span> {category}
                </p>
                <div className={Styles.project_card_actions}>
                    <button>
                        <Link to="#"/>
                            <BsPencil /> Editar
                    </button>
                    <button>
                        <BsFillTrashFill /> Excluir
                    </button>
                </div>
        </div>
    )
}

export default ProjectCard