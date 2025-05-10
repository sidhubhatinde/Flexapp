import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Input values : ' + emailRef.current.value + " , " + passwordRef.current.value);
        passwordRef.current.value = "";
        emailRef.current.value = "";
    }

    return (
        <div className="text-3xl min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                action="#"
                method="post"
                className="flex flex-col items-center gap-10 py-24 px-52 bg-white rounded-3xl shadow-xl w-full max-w-screen-lg"
            >
                <h2 className="text-5xl font-bold text-gray-700 mb-4">Login to FlexWork</h2>

                <input
                    type="text"
                    placeholder="Username or Email"
                    ref={emailRef}
                    className="border border-black p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent hover:ring-2 hover:ring-black hover:border-transparent"
                />

                <input
                    type="current-password"
                    placeholder="Enter Password"
                    ref={passwordRef}
                    className="border border-black p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent hover:ring-2 hover:ring-black hover:border-transparent"
                />

                <input
                    type="submit"
                    className="bg-primary text-white p-5 rounded-xl w-full mt-4 hover:bg-primaryHover focus:outline-none"
                    value="Login"
                />

                <p className="text-md text-gray-600">or</p>
                <button
                    className="w-full mt-2 p-5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:outline-none"
                >
                    Continue with Google
                </button>
                <button
                    className="font-semibold w-full mt-2 p-5 border border-black rounded-xl hover:ring-2 hover:ring-black hover:border-transparent"
                >
                    Continue with Apple
                </button>

                <div className="text-center mt-4">
                    <p className="text-md text-gray-600">Don't have a FlexWork account?</p>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/signup')
                        }}
                        className="text-primary font-medium hover:underline focus:outline-none"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
