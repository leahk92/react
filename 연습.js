function Btn({ text, changeValue }) {
  return (
    <button
      onClick={changeValue}
      style={{
        backgroundColor: "tomato",
        border: "0",
        color: "white",
        borderRadius: 10,
        padding: "10px 20px",
        fontSize: big ? 18 : 15,
      }}
    >
      {text}
    </button>
  );
}

const MemorizedBtn = React.memo(Btn);
function App() {
  const [value, setValue] = React.useState("Save Changes");
  const changeValue = () => setValue("Revert Changes");
  return (
    <div>
      <MemorizedBtn text={value} changeValue={changeValue} />
      <MemorizedBtn text="Continue" />
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
