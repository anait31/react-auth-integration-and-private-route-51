<<<<<<< HEAD
=======

>>>>>>> 907702b58353b68e6d6c7279a6ef0a4cc1140e50
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {

<<<<<<< HEAD
    const {createUser} = useContext(AuthContext);

    const handleRegisterForm = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

=======
    const {createUser} = useContext(AuthContext)
    
    // console.log(createUser)

    const handleRegisterForm = e => {
        e.preventDefault();
        // const name= e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)
>>>>>>> 907702b58353b68e6d6c7279a6ef0a4cc1140e50
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="bg-base-100 w-1/2 mx-auto mt-5 shrink-0 shadow-2xl rounded-md">
            <form onSubmit={handleRegisterForm} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <div className="mt-5">
                        <input type="checkbox" name="" id="terms" />
                        <label className="ml-3" htmlFor="terms">Accept <a href="#">Terms and Condition</a></label>
                    </div>

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
                <div className="mt-3">
                    <h3>Already have an Account? Please <Link className="underline text-blue-700" to="/login">Login</Link></h3>
                </div>
            </form>
        </div>
    );
};

export default Register;