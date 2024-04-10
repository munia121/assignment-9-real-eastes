import { useContext, useState } from "react";
import { AuthContext } from "../../ContexComponent/ContextComponent";
import { Link } from "react-router-dom";


const Register = () => {

    const {createUser} = useContext(AuthContext);
 
    const [passError, setPassError] = useState('');
    const [success, setSuccess] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photoUrl.value;
        const password = e.target.password.value

        console.log('register', name, email, password)



        if (!/[A-Z]/.test(password)) {
            setPassError('Must have an Uppercase lett er in the password')
            return;
        }

        
        if (!/[a-z]/.test(password)) {
            setPassError('Must have a Lowercase lett er in the password');
            return;
        }

        if(password.length < 6){
            setPassError('Length must be at least 6 character')
            return;
        }


        // if (!/^={6,}$/.test(password)) {
        //     setPassError('Six Characters are required');
        //     return;
        // }

        
        setPassError('')

        createUser(email, password,photo)
        .then(result=>{
            console.log(result.user)
            e.target.reset()
        })
        .catch(error =>{
            console.log(error)
        })

    }


    return (
        <div>
            <div className="hero   min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="lg:text-5xl font-bold">Register Form</h1>

                    </div>
                    <div className="w-full card lg:w-[800px] mx-auto mt-10   shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            {/* ******** */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            {/* ******** */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            {/* ******** */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="URL" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                {
                                    passError && <p className="text-red-600">{passError}</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <p>Have you any account <Link className="text-sky-500 underline" to={'/login'}>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;