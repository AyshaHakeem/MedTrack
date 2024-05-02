import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section className='w-full'>
        <div className='h-screen w-full md:w-1/2 mx-4 my-2 md:my-14  md:mx-auto'>
            {children}
        </div>s
    </section>
  )
}

export default AuthLayout