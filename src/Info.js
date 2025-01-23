import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from './images.jpg';
function Info1() {
  const navigate = useNavigate();
  const [salary, Setsalary] = useState(0);

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate('/main',{state:salary});
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url${images}` }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Enter your monthly budget</h1>
        <form onSubmit={handlesubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter amount"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => Setsalary(e.target.value)}
          />
          <input
            type="submit"
            value="Submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default Info1;
