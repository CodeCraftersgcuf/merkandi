import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar'
import News from '../components/News/News'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <TopNavbar/>
            <div className='w-full py-[100px] bg-gray-100 flex items-center justify-center'>
                <div className='form-can bg-white min-w-[300px] p-4 shadow rounded'>
                    <h1 className='font-bold text-2xl'>Login</h1>
                    <form action="" className='flex flex-col gap-4 mt-8'>
                        <input type="text" name='email' id='email' required  placeholder='Enter email' className='border text-lg p-2 focus:shadow outline-none'/>
                        <input type="password" name='password' id='password' placeholder='Enter password' required className='border text-lg p-2 focus:shadow outline-none' />
                        <button className='bg-blue-500 py-2 2xl:py-4 font-extrabold text-white' type='submit'>Log in</button>
                    </form>
                    <hr className='my-4 2xl:my-8'/>
                    <h2>
                    Don't you have an account yet? <Link to={'/register'} className='text-blue-500'>Register</Link>
                    </h2>
                </div>
            </div>
            <div className='bg-gray-200 text-center py-4 2xl:py-8 font-bold'>
                Do you need help? <span className='text-blue-500'>See footer</span>
            </div>
            <News/>
            <Footer/>
        </>
    )
}

export default Login
