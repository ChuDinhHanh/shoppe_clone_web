import UseRouteElements from './UseRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const routeElements = UseRouteElements()
  return (
    <div className='align-middle'>
      <ToastContainer />
      {routeElements}
    </div>
  )
}
// Schema Validation với Yup
