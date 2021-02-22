const App = () => {
    return (
        <div>
            <Tweet username="PercyWeas58" name="Percy Weasley" date="05/07/2016" message="Working at the ministry for Fudge is a lifelong dream of mine! What an honorable, smart man!"/>
            <Tweet username="MinisterFudgeOfficial" name="Cornelius Fudge" date="09/22/2017" message="So glad we were able to help prevent the Dumbledoor uprising! Not a good teacher for our kids!"/>
            <Tweet username="ShackleBolted" name="Kingsley Shacklebolt" date="05/07/2018" message="Glad Fmr Minister Fudge decided to relent and resign today, now we can tackle the real anime"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))