const CoolButton = ({text, onClickFunction}) => {
    return(
        <button onClick={onClickFunction} className="coolButton">
            {text}
        </button>
    )
}

export default CoolButton;