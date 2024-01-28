import { RouterProvider,  createBrowserRouter } from 'react-router-dom'
import './App.css'
import Root from './page/Root'
import { ConfigProvider } from 'antd'
import Timetable from './page/Timetable';
const menu = [

]
function App() {

  const router = createBrowserRouter ([ {
    path:'/',
    element:<Root />,
    children : [
   
      {
         path:'pupil',
         element: <Timetable />
      }
    ]
  }])

  return (
    <>
     <ConfigProvider theme={{
      token:{
        colorPrimary:'#bc8e5c'
      }
     }}>
           <RouterProvider router={router}>

     </RouterProvider>
     </ConfigProvider>
    </>
  )

    }
export default App
