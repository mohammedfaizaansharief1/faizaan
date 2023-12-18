function NewChild(props){
    return <>
        {props.name}<br></br>
        {props.age}
    </>
  }
  NewChild.defaultProps={
    name:"Abdullah",
    age:"20"
  }
export default NewChild

// rfc <-- in vscode