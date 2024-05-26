

function Element(props) {
    return (
        <form className="mb-3 ml-5">
            <label className= "text-purple-600 font-bold text-lg pr-3" htmlFor={props.use}>{props.labelName}</label>
            <input className="sm:w-full sm:mr-3 border-purple-500 text-sm border-2 rounded-2xl pl-2 md:w-1/2" type="text" id={props.use} name={props.use} placeholder={props.placeholder} value={props.value} readOnly />
        </form>
    )
}

export default Element;