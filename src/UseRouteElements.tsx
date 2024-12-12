import { useRoutes } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/Register'
import RegisterLayout from './layouts/registerLayout/RegisterLayout'
import MainLayout from './layouts/mainLayout'
import ProductList from './pages/ProductList'

export default function UseRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
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
