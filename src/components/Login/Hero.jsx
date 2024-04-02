import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase.init";
import { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";


const Hero = () => {
    const [error, setError] = useState('')
    const [success, setSuccuss] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = e => {
        e.preventDefault()
        console.log('Hero SUbmitted')
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email, pass)

        // reset error 
        setError('');
        setSuccuss('')

        // password length cheake 
        if (pass.length < 6) {
            setError('Password Should Be Six Characters Or Longer')
            return;
        }
        else if (!/[A-Z]/.test(pass)) {
            setError('Your Password Should Have Al List One Upper Case')
            return
        }

        // create user 
        createUserWithEmailAndPassword(auth, email, pass)
            .then(res => {
                const heroLogging = res.user;
                console.log(heroLogging)
                setSuccuss('User Created Success')
            })
            .catch(error => {
                console.log('error', error.message)
                setError(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='flex justify-center items-center'>

                                <input type={showPassword ? "text" : "password"} placeholder="password" name="password"
                                    className="input input-bordered" required />
                                <span onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        !showPassword?<IoEyeOffOutline />:<IoEyeOutline />
                                    }
                                </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>

                        </div>
                    </form>
                    {
                        error && <p className="text-3xl font-bold text-center text-red-700">{error}</p>
                    }
                    {
                        success && <p className="text-center text-blue-500">{success}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Hero;