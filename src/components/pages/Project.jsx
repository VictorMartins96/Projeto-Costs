import Styles from './Project.module.css'

import {useParams} from 'react-router-dom'
import {useState , useEffect} from 'react'

function Project() {

    const { id } = useParams()
    const [project , setProject] = useState([])

    useEffect(() => {
        fetch(`http://locaklhost:5000/projects/${id}` , {
            method : 'GET' ,
            headers: {
                'Content-type' : 'application/json'
            } ,
        }) .then(resp => resp.json())
        .then((data) => {
            setProject(data)
        }).catch((err)=> console.log(err))
    } , [id])


    return (
        <div>{project && (
            <p>{project.name}</p>
        )}
        </div>
        
    )
}

export default Project