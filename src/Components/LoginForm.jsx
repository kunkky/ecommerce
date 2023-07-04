import React, { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from '../BaseUrl'
const LoginForm = () => {

  //check if user already is logged in 
  useLayoutEffect(() => {
    document.title = "Login | BEND DOWN SELECT"
    if (sessionStorage.getItem("token")) {
      window.location.href = "/dashboard"
    }
  }, [])



  const LoginUrl = BaseUrl +'auth/login';
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setshowPass] = useState('password');
  const [usernameerror, setusernameerror] = useState('');
  const [passerror, setpasserror] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setfeedback] = useState('');


  //set navigator
  const navigate=useNavigate()
  const showPassword = (e) => {
    let chekedStatus = e.target.checked;
    chekedStatus === true ? setshowPass('text') : setshowPass('password')
  }
  let userInfo={};
  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(LoginUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          userInfo
        ),
      });
      const data = await response.json();
      if (response.ok) {

        sessionStorage.setItem("token", data.token);
        navigate("/dashboard", {
          state: data,
          replace: true, 
        });
      } else {
        setLoading(false);
        setfeedback(data.message)

      }
    } catch (error) {
      setLoading(false);
      setfeedback(error)
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    setfeedback("");
    //ensure form is not empty
    username.length < 1 ? setusernameerror('Input a valid mail') : setusernameerror('');
    password.length < 4 ? setpasserror('Password must be greater than 4') : setpasserror('');

    //submit form if password is not empty
    if (username.length < 1 || password.length <= 4) {
    }
    else {
      userInfo = { username, password }
      //set loading to button
      setLoading(true)
     //make api call
      }
      fetchApi();
    }
  
  //redirect if user is already logged in
  return (
    <div className='flex flex-col w-[70%] mt-20 justify-center items-center'>
      <form onSubmit={submitForm} className='w-[100%]'>
        <div className='w-[100%] flex flex-row justify-between'>
          <div htmlFor="Full Name" className='text-purple-800'>Username</div>
          <div className="text-red-600 italic text-left">{usernameerror !== '' && usernameerror}</div>
        </div>
        <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} className='w-[100%] h-10 border-2 rounded-md mb-5 hover:border-purple-700 px-2' />

        <div className='w-[100%] flex flex-row justify-between'>
          <div htmlFor="Full Name" className='text-purple-800'>Password </div>
          <div className="text-red-600 italic text-left px-2">{passerror !== '' && passerror}</div>
        </div>
        <input type={showPass} name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-[100%] h-10 border-2 rounded-md mb-5 hover:border-purple-700' />
        <input type="checkbox" value={showPass} onChange={e => showPassword(e)} /> <span>Show Password</span>
        <div className="text-red-600 italic text-left">{feedback !== '' && feedback}</div>
          {loading === true ? <button  className='p-4 bg-purple-800 mt-4 w-[100%] text-white rounded-md flex justify-center hover:bg-purple-900' disabled>... Loading</button> : <button  className='p-4 bg-purple-800 mt-4 w-[100%] text-white rounded-md flex justify-center hover:bg-purple-900'>Go benddown</button>}

      </form>
      <p className='mt-10 text-center'>No be Only Olodo dey Forget Password you self fit<br /> <Link to="/forget" className='text-purple-700'>Forget Your Password</Link></p>
    </div>
  )
}

export default LoginForm