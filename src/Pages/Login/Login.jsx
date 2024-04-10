/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { AuthContext } from "../../ContexComponent/ContextComponent";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";




const Login = () => {

    const { userLogin, googleLogin } = useContext(AuthContext);
   
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()


        const email = e.target.email.value;
        const password = e.target.password.value

        console.log('login', email, password)


        // if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
        //     setPassError('Invalid password')
        // }



        

        userLogin(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
               
            })
            .catch(error => {
                console.log(error)
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


    // const btn = () =>{
    //     console.log('kajdfg')
    //     toast.success('kadjh')
    // }


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
                                
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            
                           
                            <div className="mt-6">
                                <p onClick={googleHandle} className="text-sky-500 underline">Google</p>
                            </div>
                            <p>Don't you have an account <Link className="text-sky-400 underline" to={'/register'}>Register now</Link></p>

                        </form>
                        <button className="btn">tost</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;