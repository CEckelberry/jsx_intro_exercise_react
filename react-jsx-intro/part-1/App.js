const App = () => {
    return (
        <div>
            <FirstComp />
            <NamedComp name="Barney The Destroyer"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))