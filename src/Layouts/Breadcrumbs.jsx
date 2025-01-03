import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) {
    return null; // Bosh sahifa uchun breadcrumb ko'rsatmaydi
  }

  // Breadcrumb uchun itemlar ro'yxatini yaratamiz
  const breadcrumbItems = [
    {
      title: <Link to="/">Home</Link>,
    },
    ...pathnames.map((value, index) => {
      const url = `/${pathnames.slice(0, index + 1).join("/")}`;
      return {
        title:
          index === pathnames.length - 1 ? (
            decodeURIComponent(value)
          ) : (
            <Link to={url}>{decodeURIComponent(value)}</Link>
          ),
      };
    }),
  ];

  return <Breadcrumb items={breadcrumbItems} />;
};

export default Breadcrumbs;
