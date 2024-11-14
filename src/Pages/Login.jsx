import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {

const {SignIn,setLoading,setUser} = useContext(AuthContext)
const navigate = useNavigate();
const location = useLocation()
const [error,setError] = useState({})


const handleSignIn = e => {
                    e.preventDefault()
                    const email =  e.target.email.value;
                    const password = e.target.password.value;
                     SignIn(email,password)
                     .then(res => {
                                         setUser(res.user)
                                         setLoading(true)
                                         navigate(location.state ? location.state : '/')
                                       
                                        
                    })
                    .catch(err => {
setError({...error ,login: err.code})
                    })
                     
}

                    return (
                                        <div className='min-h-screen flex justify-center items-center'>
                                         <div className="card bg-base-100 p-5 w-full max-w-lg shrink-0 rounded-none border">
                                                            <h1 className='text-2xl font-semibold text-center'>Login now!</h1>
                                        <form onSubmit={handleSignIn} className="card-body">
                                        <div className="form-control">
                                        <label className="label">
                                        <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                        <label className="label">
                                        <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                        {error.login && <label className="label">
                                        {error.login}
                                        </label>}
                                        <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                        </div>
                                        <div className="form-control mt-6">
                                        <button className="btn btn-neutral">Login</button>
                                        </div>
                                        </form>
                                        <p className="text-center">Dont’t Have An Account ? <Link to={'/auth/register'}>Register</Link></p>
    </div>                   
                                        </div>
                    );
};

export default Login;