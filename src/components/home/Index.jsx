import React from "react";
import Why from "../about/Why";
import Blog from "../blog/Blog";
import Download from "../application/Download";
import Services from "../services/Services";
import Counter from "../counter/Counter";
import Testmonial from "../testmonial/Testmonial";
import Partners from "../partners/Partners";
import Contact from "../contact/Contact";
import Header from "../../include/header/Header";

export default function index() {
  return (
    <div className="index">
      <header>
        <Header />
      </header>
      <Blog />
      <Why />
      <Download />
      <Services />
      <Counter />
      <Testmonial />
      <Partners />
      <Contact />
    </div>
  );
}
