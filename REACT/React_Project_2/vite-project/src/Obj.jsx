function Obj(object){
    const {name,age} = object;
    return (
        <>
            <p>{name}</p>
            {age}
        </>
    )
}
export default Obj