import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import WaterPuzzle from "./pages/WaterPuzzle";
import ReactApp from "./pages/ReactApp";

// 移除 basename，Hash 路由中通常不需要這個設定
const router = createHashRouter([
  {
    path: "/",
    element: <App />,    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "waterpuzzle", element: <WaterPuzzle /> },
      { path: "reactapp", element: <ReactApp /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;