/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { AuthContext } from "../../ContexComponent/ContextComponent";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";






const Login = () => {

    const { userLogin, googleLogin, gitHubLogin } = useContext(AuthContext);
   
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()


        const email = e.target.email.value;
        const password = e.target.password.value

        console.log('login', email, password)


        if(!password){
            setError('Invalid password')
        }


        setError('')
        

        userLogin(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                toast.success('Login success')
               
            })
            .catch(error => {
                setError(error.message)
            })

    }

    const googleHandle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                
            })
            .catch(error => {
                console.log(error)

            })

    }


    const gitHubHandle = () => {
        gitHubLogin()
            .then(result => {
                console.log(result.user)
                
            })
            .catch(error => {
                console.log(error)

            })

    }


    console.log(error)
    console.log('sdkghag')


    return (
        <div className="p-4">
            <div className="hero  min-h-screen">
                <div className=" flex-col ">
                    <div className="text-center ">
                        <h1 className="lg:text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="w-full mt-4 lg:mt-10 lg:w-[800px] mx-auto   shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered" required />
                                <span className="absolute ml-48 mt-12 lg:ml-[660px]" onClick={() => setShowPassword(!showPassword)}>

                                    {
                                        showPassword ? <FaRegEye size={30}></FaRegEye> :
                                            <FaRegEyeSlash size={30}></FaRegEyeSlash>


                                    }

                                </span>
                                {
                                    error && <p className="text-red-600">{error}</p>
                                }
                                
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            
                           
                            <p>Don't you have an account? <Link className="text-sky-400 underline" to={'/register'}>Register now</Link></p>
                            <div className="flex gap-4 items-center justify-between mt-10">
                                    
                                <p className="w-full h-0.5 bg-black"></p>
                                <p>or</p>
                                <p className="w-full h-0.5 bg-black"></p>
                                    
                            </div>
                            <div className="mt-6 mx-auto flex gap-8">
                                <p onClick={googleHandle} className=" bg-black px-4 rounded-md py-2">
                                    <FcGoogle size={30}></FcGoogle>
                                </p>

                                <p onClick={gitHubHandle} className="px-4 py-2 rounded-md border">
                                    <FaGithub size={30}></FaGithub>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;