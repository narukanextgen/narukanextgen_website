import React from "react";
import { useParams } from "react-router";
import { careers } from "../data/careers";

function Job() {
  const { id } = useParams();
  const job = careers.find((career) => career.roles.id === id);
  return (
    <div className="max-h-96">
      <h2></h2>
    </div>
  );
}

export default Job;
