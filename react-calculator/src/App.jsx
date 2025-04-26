import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch {
      setResult('Error');
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-black p-6 rounded-lg shadow-lg w-80">
        <div className="mb-4">
          <div className="text-right text-xl font-mono">{input || '0'}</div>
          <div className="text-right text-gray-500">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={handleClear} className="col-span-2 bg-red-500 text-black py-2 rounded">C</button>
          <button onClick={handleDelete} className="bg-yellow-500 text-black py-2 rounded">DEL</button>
          {buttons.map((btn) =>
            btn === '=' ? (
              <button
                key={btn}
                onClick={handleCalculate}
                className="bg-green-500 text-black py-2 rounded"
              >
                {btn}
              </button>
            ) : (
              <button
                key={btn}
                onClick={() => handleClick(btn)}
                className="bg-white text-black py-2 rounded"
              >
                {btn}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
