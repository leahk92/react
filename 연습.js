const root = document.getElementById("root");

let counter = 0;

function countUp() {
  counter += 1;
  ReactDOM.render(<Container />, root);
}

function Container() {
  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={countUp}>Click me</button>
    </div>
  );
}

ReactDOM.render(<Container />, root);
