import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
