import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './containers/layouts/default'
import AuthLayout from './containers/layouts/auth'
import Login from './containers/login'

const App = () => {
  return (
    <div className="antialiased">
      <Routes>
        {/* default routes */}
        <Route path="/" element={<DefaultLayout />} >
          <Route path="" element={<div>Home</div>} />
        </Route>
        {/* auth routes */}
        <Route
          path="/auth/*"
          element={<AuthLayout />}
        >
          <Route path="login" element={<Login/>} />
        </Route>
        {/* errors routes */}
        <Route path="/*" element={<div>Not found</div>} >

        </Route>
      </Routes>
    </div>
  )
}

export default App
