import React,{useState} from 'react';
import { useRouter } from 'next/navigation';
import OtpVerify from './OtpVerify';
function Login({ setisLogin }) {

  const router = useRouter();
  const openForget = () => {
    // Navigate to forget password page
    router.push('/forget-password'); // Assuming you have a forget password route
  }
  const openOtp = () => {
    // Need to connect with backend and check working of visibility part 
    router.push('/application');
   /*  setIsVisible(true); */

  }
  const goRegister = () => {
    setisLogin(false)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  const [isVisible, setIsVisible] = useState(false);
  return (

<>
    <form className="w-[40rem] h-fit p-5 m-3 mx-auto border-2 rounded-lg shadow-lg bg-white" action={(e)=>handleSubmit}>
      <h1 className="text-3xl font-medium flex justify-center m-2">Login as Candidate</h1>
      <hr className="border border-slate-800" />
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input
        className="mb-3 w-full p-2 outline-none bg-blue-50"
        type="email"
        name="email"
        id="email"
        placeholder="Enter your registered email"
      />


      <label htmlFor="password">Password</label>
      <br />
      <input
        className="mb-3 w-full p-2 outline-none bg-blue-50"
        type="password"
        name="password"
        id="password"
        placeholder="Enter password"
      />

      {/* Captcha Section */}
      <label htmlFor="captcha">Captcha</label>
      <br />
      <div className="flex mb-3 gap-4">
        {/* Recaptcha */}
        <div className="w-1/2 p-3 bg-gray-700">123</div>
        {/* Input for recaptcha */}
        <input
          className="w-1/2 p-3 border-slate-600 border-2 rounded-md outline-none bg-blue-50"
          type="text"
          name="captcha"
          id="captcha"
          placeholder="Enter Captcha"
        />

      </div>

      {/* Buttons */}
      <div className="flex gap-x-4 mb-3">
        <button onClick={openForget} className="w-1/2 p-2 bg-orange-100 hover:bg-orange-100" type="button">
          Forgot Password?
        </button>
        <button onClick={openOtp} className="w-1/2 p-2 bg-[#274897] text-white rounded-md hover:bg-[#274997e8]" type="submit">
          Login
        </button>
      </div>

      <button onClick={goRegister} className="p-2 mb-3 w-full bg-[#22A927] text-white rounded-md hover:bg-[#22a926e8]" type='button'>
        Click Here for New Registration
      </button>
    </form>

   {isVisible&&<OtpVerify setIsVisible={setIsVisible}/>}</>
);
};

export default React.memo(Login);
