import React from "react";
import Why from "../about/Why";
import Blog from "../blog/Blog";
import Download from "../application/Download";
import Services from "../services/Services";

export default function index() {
  return (
    <div className="container">
      <Blog />
      <Why />
      <Download />
      <Services />
    </div>
  );
}
