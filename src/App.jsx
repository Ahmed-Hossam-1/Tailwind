import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route
          path="/*"
          element={
            <h1 className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-[70px] font-bold text-white">
              NOT FOUND
            </h1>
          }
        /> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
