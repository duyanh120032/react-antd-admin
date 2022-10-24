import React from 'react'
import { Outlet } from 'react-router-dom'

const authLayout = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-slate/10'>
      <Outlet />
    </div>
  )
}

export default authLayout
