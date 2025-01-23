import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from './background.jpg'; 

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [male, setMale] = useState(true);
  const navigate = useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault();
    let data = { age, male, name };
    console.log(data);
    navigate("/home", {state:data})
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen py-10"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
      }}
    >
      <h1 className="text-3xl font-bold text-black mb-8">Budget Tracker</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-96 bg-opacity-80"
      >
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Enter your name</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Enter your age</h2>
          <input
            type="range"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full"
            min="0"
            max="100"
          />
          <div className="text-center mt-2">{age}</div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Choose your gender</h2>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                className="mr-2"
                onChange={() => setMale(true)}
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                className="mr-2"
                onChange={() => setMale(false)}
              />
              Female
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
