import "./App.css";
import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

function App() {
  const [data1, setData1] = useState("data1");
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="App">
      <div>
        <Scanner
          onResult={(text, result) => {
            setData1(text);
            setEnabled(false);
            console.log(text, result);
          }}
          enabled={enabled}
          onError={(error) => console.log(error?.message)}
        />
        data 1 {data1}
      </div>
      <button
        onClick={() => {
          setData1("");
          setEnabled(!enabled);
        }}
      >
        enable scan
      </button>
    </div>
  );
}

export default App;
