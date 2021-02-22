const Tweet = (props) => {
    return (
        <div>
            <p>{props.username}, {props.name}</p>
            <p>{props.message}</p>
            <p>{props.date}</p>
        </div>
    )
}