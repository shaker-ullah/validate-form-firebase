import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase.init";


const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault()
        console.log('form submitted')
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email, pass)
        // create User 
        createUserWithEmailAndPassword(auth, email, pass)
            .then(res => {
                const userRegister = res.user;
                console.log(userRegister)
            })
            .catch(error => {
            console.log('error', error.message)
        })
}

    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
            <h2 className="text-3xl">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className="border w-3/4 mb-4" type="email" name="email" id="" placeholder="Email"/> <br />
                <input className="border w-3/4 mb-4" type="password" name="password" id="" placeholder="Password"/> <br />
                <input className="border w-3/4 btn btn-secondary mb-4" type="submit" value="Register" />
            </form>    
            </div>
        </div>
    );
};

export default Register;