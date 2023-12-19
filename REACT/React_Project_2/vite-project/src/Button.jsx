function Button(props){
    return(
        <>
            <label htmlFor="">{props.count}</label><br />
            <button onClick={props.at}>Click</button>

        </>)
}
export default Button