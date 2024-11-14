import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {

const {SignUp,updateUser,setLoading,setUser} = useContext(AuthContext)
const navigate = useNavigate()
const handleSignUp = e => {
                    e.preventDefault()
                    const name = e.target.name.value;
                    const email = e.target.email.value;
                    const password = e.target.password.value;
                    const photo = e.target.photoUrl.value;
                    console.log(name,email,photo);
                    
                    SignUp(email,password)
                    .then(res => {
                                        setUser(res.user)
                                        setLoading(true)
                                        updateUser({displayName: name,photoURL: photo})
                    .then(res => {
navigate('/')
                    })
                    })
                    .catch(err => console.error('ERROR'))
                    
}
                    return (
                                        <div className='min-h-screen flex justify-center items-center'>
                                         <div className="card bg-base-100 p-5 w-full max-w-lg shrink-0 rounded-none border">
                                                            <h1 className='text-2xl font-semibold text-center'>Register now!</h1>
                                        <form onSubmit={handleSignUp} className="card-body">
                                        <div className="form-control">
                                        <label className="label">
                                        <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                        <label className="label">
                                        <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                        <label className="label">
                                        <span className="label-text">Photo Url</span>
                                        </label>
                                        <input type="text" name="photoUrl" placeholder="photoUrl" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                        <label className="label">
                                        <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control mt-6">
                                        <button className="btn btn-neutral">Register</button>
                                        </div>
                                        </form>
                                        <p className="text-center"> Have An Account ? <Link to={'/auth/login'}>Login</Link></p>
    </div>                   
                                        </div>
                    );
};

export default Register;