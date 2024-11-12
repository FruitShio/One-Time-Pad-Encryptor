import React, { useState } from 'react';

const OneTimePadEncryptor = () => {
  const [plaintext, setPlaintext] = useState('');
  const [key, setKey] = useState('');
  const [ciphertext, setCiphertext] = useState('');

  const [error, setError] = useState('');

  const encrypt = () => {
    if (plaintext.length !== key.length) {
      setError('Input error: Plaintext and key must have the same length.');
      return;
    }

    setError('');

    const plaintextChars = plaintext.toUpperCase().split('');
    const keyChars = key.toUpperCase().split('');
    const ciphertextChars = [];

    for (let i = 0; i < plaintextChars.length; i++) {
      const plaintextNum = 'A'.charCodeAt(0) <= plaintextChars[i].charCodeAt(0) && plaintextChars[i].charCodeAt(0) <= 'Z'.charCodeAt(0)
        ? plaintextChars[i].charCodeAt(0) - 'A'.charCodeAt(0)
        : 0;
      const keyNum = 'A'.charCodeAt(0) <= keyChars[i].charCodeAt(0) && keyChars[i].charCodeAt(0) <= 'Z'.charCodeAt(0)
        ? keyChars[i].charCodeAt(0) - 'A'.charCodeAt(0)
        : 0;
      const ciphertextNum = (plaintextNum + keyNum) % 26;
      ciphertextChars.push(String.fromCharCode(ciphertextNum + 'A'.charCodeAt(0)));
    }

    setCiphertext(ciphertextChars.join(''));
  };

  const decrypt = () => {
    if (ciphertext.length !== key.length) {
      setError('Input error: Ciphertext and key must have the same length.');
      return;
    }

    setError('');

    const ciphertextChars = ciphertext.toUpperCase().split('');
    const keyChars = key.toUpperCase().split('');
    const plaintextChars = [];

    for (let i = 0; i < ciphertextChars.length; i++) {
      const ciphertextNum = 'A'.charCodeAt(0) <= ciphertextChars[i].charCodeAt(0) && ciphertextChars[i].charCodeAt(0) <= 'Z'.charCodeAt(0)
        ? ciphertextChars[i].charCodeAt(0) - 'A'.charCodeAt(0)
        : 0;
      const keyNum = 'A'.charCodeAt(0) <= keyChars[i].charCodeAt(0) && keyChars[i].charCodeAt(0) <= 'Z'.charCodeAt(0)
        ? keyChars[i].charCodeAt(0) - 'A'.charCodeAt(0)
        : 0;
      let plaintextNum = ciphertextNum - keyNum;
      if (plaintextNum < 0) {
        plaintextNum += 26;
      }
      plaintextChars.push(String.fromCharCode(plaintextNum + 'A'.charCodeAt(0)));
    }

    setPlaintext(plaintextChars.join(''));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">One-Time Pad Encryptor</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="plaintext" className="block mb-2 font-medium">
            Plaintext
          </label>
          <input
            id="plaintext"
            type="text"
            value={plaintext}
            onChange={(e) => setPlaintext(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            placeholder="Enter or view plaintext"
          />
        </div>
        <div>
          <label htmlFor="key" className="block mb-2 font-medium">
            Key
          </label>
          <input
            id="key"
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            placeholder="Enter key"
          />
        </div>
        <div>
          <label htmlFor="ciphertext" className="block mb-2 font-medium">
            Ciphertext
          </label>
          <input
            id="ciphertext"
            type="text"
            value={ciphertext}
            onChange={(e) => setCiphertext(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            placeholder="Enter or view ciphertext"
          />
        </div>
      </div>
      {error && (
        <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      <div className="mt-4 flex justify-end">
        <button
          onClick={encrypt}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Encrypt
        </button>
        <button
          onClick={decrypt}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Decrypt
        </button>
      </div>
    </div>
  );
};

export default OneTimePadEncryptor;
