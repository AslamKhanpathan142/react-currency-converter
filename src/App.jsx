import { useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import "./App.css";

function App() {
  const amount = useRef(null);
   const Value = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [Currency, setCurrency] = useState([]);


  const handleChange = (e) => {
        setInputValue(e.target.value);
        console.log(e.target.value);
  }
  const hundleCurrency = () => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${inputValue}.json`)
    .then((res) => res.json())
    .then((data) => {
      setCurrency(amount.current.value * data[inputValue][Value.current.value]);
    })
  }

  const result = () => {
    hundleCurrency();
  }
  return (
    <>
    
      <div className="main-div">
        <h1>CURRENCY CONVERTER</h1>
        <h3>Amount is: {Currency}</h3>

        <div class="mb-5 me-5 ms-5 mt-3">
          <input
            type="number"
            class="form-control bor"
            placeholder="Enter The Amount"
            ref={amount}
          />
        </div>

        <div class="mb-3 me-5 ms-5">
          <input type="text" class="form-control bor" placeholder="Currency Name" value={inputValue} onChange={handleChange}/>
        </div>

        <p className="icon">
        <FaArrowDown />
        </p>

        <div class="mb-3 me-5 ms-5">
          <input type="text" class="form-control bor" placeholder="Currency Name"  ref={Value}/>
        </div>


        <button type="button" class="btn btn-primary buton me-5 ms-5" onClick={result}>Result</button>
      </div>
    </>
  );
}

export default App;
