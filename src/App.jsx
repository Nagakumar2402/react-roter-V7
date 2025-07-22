import "./router.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import { About, Home, Products, NotFound, Jobs } from "./Pages";
import { HomeLayout, ContactLayout, JobsLayout } from "./Layout";
import { Info, Form, JobDetails, Error } from "./components";
import { jobData, jobDetails } from "./components/JobData";

const HydrateFallback = () => {
  return <h1>Loading .... </h1>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="product" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactLayout />}>
        <Route path="info" element={<Info />} />
        <Route path="form" element={<Form />} />
      </Route>
      <Route path="Jobs" element={<JobsLayout />} errorElement={<Error />}>
        <Route
          index
          element={<Jobs />}
          loader={jobData}
          hydrateFallbackElement={<h1>Loading ...</h1>}
        />
        <Route
          path=":id"
          element={<JobDetails />}
          loader={jobDetails}
          hydrateFallbackElement={<h1>Loading ...</h1>}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
