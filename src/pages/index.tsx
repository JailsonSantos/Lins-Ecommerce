import { Navbar } from "../components/Navbar";
import { Slider } from "../components/Slider";
import { Footer } from "../components/Footer";
import { Products } from "../components/Products";
import { Categories } from "../components/Categories";
import { Newsletter } from "../components/Newsletter";
import { Announcement } from "../components/Announcement";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}