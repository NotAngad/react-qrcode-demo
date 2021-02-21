import QRCode from "qrcode.react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <QRCode value="http://devangad.xyz/" renderAs="svg" size={512} />
    </div>
  );
}

export default App;
