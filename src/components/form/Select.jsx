import Styles from './Select.module.css'


function Select({ text , name , options , handleOnChange , value}) {
    return (
        <div className={Styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </div>
    )
}

export default Select 