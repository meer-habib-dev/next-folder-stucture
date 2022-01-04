import style from './PrimaryInput.module.css'

const PrimaryInput = ({label, placeholder, type, name, onChange, value}) => {
    return (
        <div className="w-60 my-4">
            <label className={style.label}>{label}</label>
            <input name={name} onChange={e => onChange(e)} value={value} className={style.field} type={type || 'text'} placeholder={placeholder}/>
        </div>
    )
}

export default PrimaryInput