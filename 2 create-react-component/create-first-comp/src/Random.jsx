function Random() {
  let number = Math.floor(Math.random() * 10);
  return <h2 style={{'background-color': 'purple'}}>Random number is:{number}</h2>;
}
export default Random;