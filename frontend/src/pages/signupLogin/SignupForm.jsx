import React from 'react'
import { useParams } from 'react-router-dom'

const SignupForm = () => {
    const { userType } = useParams();
    console.log(userType);
    return (
        <div className='flex flex-col items-center min-h-screen text-3xl gap-10 p-5'>
            <h1 className='text-6xl m-2'>Sign up to {userType == 'client' ? 'find work you love' : 'hire talent'}</h1>
            <div className='flex justify-center gap-10 text-3xl min-w-[50%]'>
                <button
                    className="w-full mt-2 py-4 px-20 border border-black rounded-full hover:bg-gray-300"
                >
                    Continue with Apple
                </button>
                <button
                    className="text-left w-full mt-2 py-4 px-20 border border-black rounded-full bg-blue-500 hover:bg-blue-400"
                >
                    Continue with Google
                </button>
            </div>
            <p>or</p>
            <form action="" method="post" className="flex flex-col gap-5 text-3xl w-full max-w-[50%]">
                <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        required
                        className="flex-1 p-3 border border-gray-400 rounded-xl w-full"
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        required
                        className="flex-1 p-3 border border-gray-400 rounded-xl w-full"
                    />
                </div>

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    className="p-3 border border-gray-400 rounded-xl w-full"
                />

                <input
                    type="password"
                    placeholder="Password (8 or more characters)"
                    name="password"
                    required
                    minLength={8}
                    className="p-3 border border-gray-400 rounded-xl w-full"
                />

                <select
                    name="country"
                    defaultValue="Pakistan"
                    required
                    className="p-3 border border-gray-400 rounded-xl w-full"
                >
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    {/* Add more countries as needed */}
                </select>

                <label className="flex items-center gap-2">
                    <input type="checkbox" name="subscribe" defaultChecked className="w-5 h-5 mr-5 scale-[200%]" />
                    Send me helpful emails to find rewarding work and job leads.
                </label>

                <label className="flex items-start gap-2">
                    <input type="checkbox" name="agree" required className="w-5 h-5 mt-1 mr-5 scale-[280%]" />
                    <span>
                        Yes, I understand and agree to the{' '}
                        <a href="#" className="text-green-600 underline">Upwork Terms of Service</a>, including the{' '}
                        <a href="#" className="text-green-600 underline">User Agreement</a> and{' '}
                        <a href="#" className="text-green-600 underline">Privacy Policy</a>.
                    </span>
                </label>

                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-full"
                >
                    Create my account
                </button>

                <p className="text-center text-2xl">
                    Already have an account? <a href="#" className="text-green-600 underline">Log In</a>
                </p>
            </form>

        </div>
    )
}

export default SignupForm