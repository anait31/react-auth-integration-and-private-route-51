import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {

<<<<<<< HEAD
    const {signInUser} = useContext(AuthContext);

    const handleLoginrForm = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
=======
    const {signInUser} = useContext(AuthContext)

    const handleSignInForm = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
>>>>>>> 907702b58353b68e6d6c7279a6ef0a4cc1140e50

        signInUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
<<<<<<< HEAD
            console.log(error.message)
=======
            console.log(error)
>>>>>>> 907702b58353b68e6d6c7279a6ef0a4cc1140e50
        })
    }

    return (
        <div className="bg-base-100 w-1/2 mx-auto mt-5 shrink-0 shadow-2xl rounded-md">
<<<<<<< HEAD
            <form onSubmit={handleLoginrForm} className="card-body">
=======
            <form onSubmit={handleSignInForm} className="card-body">
>>>>>>> 907702b58353b68e6d6c7279a6ef0a4cc1140e50
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
                    <label className="label">
                        <a href="#" className="label-text-alt link mt-2 link-hover">Forgot password?</a>
                    </label>

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <div>
                    <h3>New to this Website? Please <Link className="underline text-blue-700" to="/register">Register</Link></h3>
                </div>
            </form>
        </div>
    );
};

export default Login;