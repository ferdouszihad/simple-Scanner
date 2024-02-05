import { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRScanner = ({ onScan }) => {
  const [result, setResult] = useState("");
  console.log(result);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      onScan(data);
      // Invoke the parent component's onScan callback if provided
    }
    console.log(data);
  };

  function handleError(err) {
    console.log(err);
  }

  return (
    <div>
      <QrReader
        delay={5000}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "300px" }}
      />
      <p>hello {result}</p>
    </div>
  );
};

export default QRScanner;
