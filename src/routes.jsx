import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import GalleryView from "./Gallery/index.jsx";
import BilliardsManagement from "./BilliardsManagement/BilliardsManagement.jsx";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "gallery",
    element: <GalleryView />,
  },
  {
    path: "billiards",
    element: <BilliardsManagement />,
  },
]);

export default appRoutes;
