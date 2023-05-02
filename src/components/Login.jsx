import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='shop-container my-8'>
        <div className='max-w-[450px] mx-auto min-h-[80px] bg-white rounded p-5'>
            <div>
                <h1 className='text-2xl font-semibold font-poppins'>Login</h1>
                <hr className='bg-shopDarkBlue h-[5px] w-[28px] ml-[2px]' />
            </div>

           
            <form>
                <div className='mt-7'>
                    <label htmlFor="email" className='mb-1 block font-poppins'>Email</label>
                    <input type="email" className='input-control w-full' id="email" placeholder='Enter email' />
                </div>
                <div className='mt-7'>
                    <label htmlFor="password" className='mb-1 block font-poppins'>Password</label>
                    <input type="password" className='input-control w-full' id="email" placeholder='Enter password' />
                </div>

                <div className='text-center mt-7'>
                    <input type="submit" value="Login" className='bg-shopDarkBlue text-white px-4 py-2 rounded-md cursor-pointer' />
                </div>

            </form>
            
            <div className='mt-7 text-center'>
                <p>Don't have an Account? <Link to={'/signup'} className='text-blue-900 font-bold'>Register</Link></p>
            </div>

        </div>
    </div>
  )
}

export default Login