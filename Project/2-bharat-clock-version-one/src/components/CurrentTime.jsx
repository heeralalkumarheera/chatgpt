let CurrentTime = () => {
    let CurrDate= new Date();

    return <p className="lead">This is the current time: {CurrDate.toLocaleDateString()} -{CurrDate.toLocaleTimeString()}</p>
};

export default CurrentTime;