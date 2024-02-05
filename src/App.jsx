import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";

const App = () => {
  const [scanResult, setResult] = useState("");
  const [isStart, setIsStart] = useState(false);

  const handlePlay = () => {
    setResult("");
    setIsStart(!isStart);
  };
  const handleQr = (result, error) => {
    if (!!result) {
      setResult(result?.text);
    }
  };

  return (
    <main>
      <div className="content-box w-11/12 mx-auto min-h-screen gap-5 flex-wrap flex justify-center items-center">
        <div>
          <button onClick={handlePlay} className=" btn btn-primary">
            {isStart ? "Stop Scanning" : "Scan Now"}
          </button>
          <p>{scanResult}</p>
        </div>

        {isStart && (
          <div className="relative w-[400px] shadow-inner shadow-black bg-slate-200 rounded-lg border-8 px-10">
            <QrReader
              onResult={(result, error) => handleQr(result, error)}
              className=" rounded-xl  relative "
            />
            <div className="p-px line absolute z-10 left-0 w-full top-0 bg-red-600 shadow shadow-white"></div>
          </div>
        )}
      </div>
    </main>
  );
};
{
  /* <div style={{ width: "300px" }}>
        <QrReader
          onResult={(result, error) => handleQr(result, error)}
          style={{ width: "100%" }}
        />
      </div>

      <p>{result}</p> */
}

export default App;
