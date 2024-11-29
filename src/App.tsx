import UseRouteElements from './UseRouteElements'

export default function App() {
  const routeElements = UseRouteElements()
  return <div className='align-middle'>{routeElements}</div>
}
