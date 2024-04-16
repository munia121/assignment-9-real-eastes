/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AuthContext } from "../../ContexComponent/ContextComponent";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const Register = () => {
    // const navigate = useNavigate()
    // const loaction = useLocation()

    const { createUser,updateUserProfile,setAutoUpdate } = useContext(AuthContext);

    const [passError, setPassError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [urlError, setUrlError] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photoUrl.value;
        const password = e.target.password.value

        console.log('register:', name, email, password, photo)    
        
       
        
        
        setPassError('')
        setEmailError('')
        setNameError('')
        setUrlError('')
        


        if (password.length < 6) {
            setPassError('Length must be at least 6 character')
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setPassError('Must have an Uppercase lett er in the password')
            return;
        }


        if (!/[a-z]/.test(password)) {
            setPassError('Must have a Lowercase lett er in the password');
            return;
        }


        if(!email){
            setEmailError('Please Enter the Email')
            return
        }
        if(!name){
            setNameError('Please Enter the Name')
            return
        }
        if(!photo){
            setUrlError('Please Enter your Photo URL')
            return
        }
        
        


        // if (!/^={6,}$/.test(password)) {
        //     setPassError('Six Characters are required');
        //     return;
        // }


        

        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photo)
                    .then(() => {
                        // console.log()
                        setAutoUpdate(true)

                    })
                    .catch(error => {
                        console.log(error)
                    })

                console.log(result.user)
                e.target.reset()
                toast.success('Register Successfully')
            })
            .catch(error => {
                console.log(error)
            })

    }






    return (
        <div>
            <Helmet>
                <title>Register Page</title>
            </Helmet>
            <div className="hero   min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center mt-10 ">
                        <h1 className="md:text-5xl  font-bold">Register Form</h1>

                    </div>
                    <div className="w-full card md:w-[800px] mx-auto mt-10  bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body border border-pink-700 rounded-lg">
                            {/* ******** */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                                {nameError && <p className="text-red-600">{nameError}</p>}
                            </div>
                            {/* ******** */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered"  />
                                {emailError && <p className="text-red-600">{emailError}</p>}
                            </div>
                            {/* ******** */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="URL" className="input input-bordered" />
                                {urlError && <p className="text-red-600">{urlError}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                {
                                    passError && <p className="text-red-600">{passError}</p>
                                }
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-pink-600 text-white text-lg">Register</button>
                            </div>

                            <p>Have you any account? <Link className="text-pink-700 underline" to={'/login'}>Login</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;