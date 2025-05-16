// import Welcome from "./Components/Welcome";
// function App() {
//   return (
//     <div>
//       <Welcome />
//     </div>
//   );
// }
// export default App;

function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}
export default App;