import { Fragment } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Categories } from "../components/Categories";
import { Newsletter } from "../components/Newsletter";
import { Announcement } from "../components/Announcement";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { SlideshowImage } from "../components/SlideShowImage/Index";

export default function Home() {
  return (
    <Fragment>
      <Announcement />
      <Navbar />
      <SlideshowImage />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </Fragment>
  );
}