import { useLocation, useNavigate } from "react-router-dom";
import bg from './images.jpg';
function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
          }}>
      <h1 className="text-4xl font-bold text-black">Welcome, {location.state.name}!</h1>
    
        <div className=" text-black">
         Congratulations! After {location.state.age} years on this planet, finally you've chosen to smart-track your money!
        </div><br />
      <button onClick={()=>{navigate ('/info1')}}>Get started</button>
      
      
    </div>
  );
}

export default Home;
