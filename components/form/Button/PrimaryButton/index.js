import style from './PrimaryButton.module.css'


const PrimaryButton = ({children, onClick}) => {
    return (
        <button onClick={e => typeof onClick == 'function' && onClick(e)} className={style['button']}>{children}</button>
    )
}

export default PrimaryButton