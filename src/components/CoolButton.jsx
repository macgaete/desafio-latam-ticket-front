const CoolButton = ({text, onClickFunction}) => {
    return(
        <button onClick={onClickFunction} className="coolButton" type="button">
            {text}
        </button>
    )
}

export default CoolButton;