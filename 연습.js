const root = document.getElementById("root");

function MinutesToHours() {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = (event) => setAmount(event.target.value);
  const reset = () => setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  };
  return (
    <div>
      <h3>Minutes & Hours</h3>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={inverted ? amount * 60 : amount}
          onChange={onChange}
          id="minutes"
          placeholder="Minutes"
          type="number"
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={inverted ? amount : amount / 60}
          onChange={onChange}
          id="hours"
          placeholder="Hours"
          type="number"
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? "turn back" : "invert"}</button>
    </div>
  );
}
function KmToMiles() {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = (event) => setAmount(event.target.value);
  const reset = () => setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  };
  return (
    <div>
      <h3>Km & Miles</h3>
      <div>
        <label htmlFor="km">Km</label>
        <input
          value={inverted ? amount / 0.6214 : amount}
          onChange={onChange}
          id="km"
          placeholder="Km"
          type="number"
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="miles">Miles</label>
        <input
          value={inverted ? amount : amount * 0.6214}
          onChange={onChange}
          id="miles"
          placeholder="Miles"
          type="number"
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? "turn back" : "invert"}</button>
    </div>
  );
}

function App() {
  const [index, setIndex] = React.useState("xx");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div>
      <h1>Super Convertor</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      {index === "xx" ? "Please select your units" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

ReactDOM.render(<App />, root);
