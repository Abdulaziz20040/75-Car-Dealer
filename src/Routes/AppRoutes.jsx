import { createBrowserRouter } from "react-router-dom";
import Home1 from "../pages/Home/Home";
import ListV1 from "../pages/List/ListV1";
import Shop from "../pages/Shop/Shop";
import Loancalculator from "../pages/Others/Loancalculator";
import Pricing from "../pages/Pricing/Pricing";
import Services from "../pages/Servici/Services";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Auth/Login";
import About from "../pages/About/About";
import RootLayout from "../Layouts/RootLayout";
import BlogV1 from "../pages/Blog/BlogV1";
import BlogV2 from "../pages/Blog/BlogV2";
import Faqs from "../pages/Others/Faqs";
import Profil from "../pages/Profil/Profil";
import DetailsV1 from "../pages/Details/DetailsV1";

const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home1 />,
      },
      {
        path: "Home-1",
        element: <Home1 />,
      },

      // details

      {
        path: "details/:id",
        element: <DetailsV1 />,
      },

      // Listings1

      {
        path: "Listings",
        element: <ListV1 />,
      },

      // Blog

      {
        path: "blog",
        element: <BlogV1 />,
      },
      {
        path: "blog-v1",
        element: <BlogV1 />,
      },
      {
        path: "blog-v2",
        element: <BlogV2 />,
      },

      // Pages
      {
        path: "pags",
        element: <Shop />,
      },
      {
        path: "ShopPage",
        element: <Shop />,
      },
      {
        path: "faqssPage",
        element: <Faqs />,
      },
      {
        path: "loanCalculator",
        element: <Loancalculator />,
      },
      {
        path: "pricingPage",
        element: <Pricing />,
      },
      {
        path: "servicesPage",
        element: <Services />,
      },

      {
        path: "profile",
        element: <Profil />,
      },

      // others

      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "submitListing",
        element: <Login />,
      },
    ],
  },
]);

export default Router;
