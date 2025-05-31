// Components/PageDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const PageDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Page ID: {id}</h1>
      <p>This is a detail page for item {id}</p>
    </div>
  );
};

export default PageDetails;
