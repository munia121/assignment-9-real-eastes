import { useContext } from "react";
import { AuthContext } from "../../ContexComponent/ContextComponent";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { updateUserProfile, setAutoUpdate, user } = useContext(AuthContext)

    const updateSubmit = (e) => {
        e.preventDefault()
        const name = e.target.names.value;
        const image = e.target.photoUrl.value;
        // console.log('update: ' , name, image)
        // console.log('name:', name)



        updateUserProfile(name, image)
            .then(() => {
                // console.log()
                setAutoUpdate(true)
                toast('user update successfully')

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
            <div className="border border-pink-700 rounded-lg mt-10 p-8 lg:w-[800px] mx-auto">
                <form onSubmit={updateSubmit} className="">
                    <div className="flex flex-col justify-center">
                        <img className="h-32 w-32 mx-auto rounded-full" src={user.photoURL} alt="" />
                        <input type="text" name="name" placeholder="Email" className="input text-center w-full " defaultValue={user?.email} />
                    </div>


                    <p className="text-xl mt-5">Name</p>
                    <input type="text" name="names" placeholder="Name" className="input input-bordered  w-full " defaultValue={user?.displayName} />

                    <p className="mt-6 text-xl">Photo</p>
                    <input type="text" name="photoUrl" placeholder="photoUrl" className="input input-bordered w-full " defaultValue={user?.photoURL} />
                    <button className="btn mt-5 bg-pink-600 text-white text-lg  w-full">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;