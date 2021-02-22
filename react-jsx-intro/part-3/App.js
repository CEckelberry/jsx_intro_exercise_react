const App = () => {
    return(
        <div>
            <Person name="BonBon" age={22} hobbies={["Skiing", "Skateboarding", "HopScotch"]}/>
            <Person name="JonathonJoeStar" age={14} hobbies={["Dogs", "Gentleman Activities", "Rugby"]}/>
            <Person name="Dio" age={36} hobbies={["Evil Stuff", "Making JoJo Cry", "World Domination"]}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))