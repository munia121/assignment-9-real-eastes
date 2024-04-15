import { useContext } from "react";
import { AuthContext } from "../../ContexComponent/ContextComponent";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const {updateUserProfile, setAutoUpdate, user} = useContext(AuthContext)

    const updateSubmit = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.photoUrl.value;
        console.log('update' , name, image)


        
                updateUserProfile(name, image)
                    .then(() => {
                        // console.log()
                        setAutoUpdate(true)
                        

                    })
                    .catch(error => {
                        console.log(error)
                    })

                



    }




    return (
        <div>
            <Helmet>
                <title>updateProfile</title>
            </Helmet>
            <h2 className="text-4xl mt-20 text-center font-bold">Update Your Profile</h2>
            <div className=" border mt-10 p-8 lg:w-[800px] mx-auto">
                <form onSubmit={updateSubmit} className="">
                <p className="text-xl">Email</p>
                    <input type="text" name="name" placeholder="Email" className="input input-bordered input-primary w-full " defaultValue={user?.email } />


                    <p className="text-xl mt-5">Name</p>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered input-primary w-full " defaultValue={user?.displayName }/>

                    <p className="mt-6 text-xl">Photo</p>
                    <input type="text" name="photoUrl" placeholder="photoUrl" className="input input-bordered input-primary w-full " defaultValue={user?.photoURL } />
                    <button className="btn mt-5  w-full">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;