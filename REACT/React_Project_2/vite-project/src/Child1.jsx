function Child1(props){
    return (
        <>
            {props.newAtt}<br></br>
            <Child2 newAttr={props.newAtt}/>
        </>
    )
}
export default Child1

export function Child2({newAttr}){
    return (
        <>
            {newAttr}<br></br>
            {/* {props.newAttr} */}
            <Child3 newAttri={newAttr}/>
        </>
    )
}

export function Child3({newAttri}){
    return (
        <>  
            {newAttri="Child Function"}
        </>
    )
}