import { useRoutes } from 'react-router-dom'
import Login from './pages/login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import RegisterLayout from './layouts/registerLayout/RegisterLayout'

export default function UseRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])

  return routeElements
}
