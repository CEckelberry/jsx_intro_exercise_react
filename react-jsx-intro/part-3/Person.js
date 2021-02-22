const Person = (props) => {
    let info;
    let perName;

    if (props.age > 18 ) {
        info = <h3>Please Go Vote!</h3>
    } else {
        info = <h3>You Must be 18</h3>
    }

    if (props.name.length > 8){
        perName = props.name.slice(0, 6);
    } else{
        perName = props.name;
    }


    return (
        <div>
            <p>Learn more about this person</p>
            <p>{perName}</p>
            <p>{props.age}</p>
            
            {info}
            <ul>{props.hobbies.map(hobby => 
                (
                    <li>
                        <b>{hobby}</b>
                    </li>
                )
            )}</ul>
            <hr></hr>
        </div>
    )
}