import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './containers/layouts/default'
import AuthLayout from './containers/layouts/auth'

const App = () => {
  return (
    <div className="antialiased">
      <Routes>
        <Route path="/*" element={<DefaultLayout />} >
          <Route path="" element={<div>Home</div>} />
        </Route>
        <Route
          path="/auth/*"
          element={<AuthLayout />}
        >
          <Route path="login" element={<div>Login</div>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
