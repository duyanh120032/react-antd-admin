import React from 'react'
import { Outlet } from 'react-router-dom'

const authLayout = () => {
  return (
    <>
      <div>auth</div>
      <Outlet />
    </>
  )
}

export default authLayout
