const root = document.getElementById("root");

function App() {
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };

  return (
    <div>
      <h1>Super Convertor</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={flipped ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={flipped} //fasle처음
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={flipped ? amount : amount / 60}
          id="hours"
          placeholder="Hours"
          type="number"
          onChange={onChange}
          disabled={!flipped} //true
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Flipped</button>
    </div>
  );
}

ReactDOM.render(<App />, root);
