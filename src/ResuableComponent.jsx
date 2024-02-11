function ResuableComponent(){

    let number = Math.random()*100;
    return(
    <h1 style={{'background-color': 'aqua'}}>Random number is: {Math.round(number)}</h1>
    );
}

export default ResuableComponent;