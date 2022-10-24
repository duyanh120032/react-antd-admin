import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
      <div>
        default layout
      </div>
      <Outlet />
    </>
  )
}

export default DefaultLayout
