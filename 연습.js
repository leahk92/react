const root = document.getElementById("root");

let counter = 0;

function App() {
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const rerset = () => setAmount(0);
  const onFlip = () => {
    rerset();
    setFlipped((current) => !current);
  };

  return (
    <div>
      <h1 className="hi">Super Convertor</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={flipped ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={flipped} //초기화값 false - 활성화된 상태
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={flipped ? amount : amount / 60}
          id="hours"
          placeholder="Hours"
          type="number"
          disabled={!flipped} //true - 비활성화 상태
          onChange={onChange}
        />
      </div>
      <button onClick={rerset}>Reset</button>
      <button onClick={onFlip}>Flipped</button>
    </div>
  );
}

ReactDOM.render(<App />, root);
