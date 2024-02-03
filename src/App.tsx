import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomeScreen } from "./feat/home/Home"
import Navbar from "./components/navbar"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
