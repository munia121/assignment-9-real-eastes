import { useContext } from "react";
import { AuthContext } from "../../ContexComponent/ContextComponent";


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value

        console.log('register', name, email, password)


        createUser(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })

    }


    return (
        <div>
            <div className="hero   min-h-screen">
                <div className=" flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register Form</h1>

                    </div>
                    <div className="w-full lg:w-[800px] mx-auto mt-10   shadow-2xl bg-base-100">
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
                                <input type="text" name="url" placeholder="URL" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;