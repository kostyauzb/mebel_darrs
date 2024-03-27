import About from "@/components/About";
import AllFurniture from "@/components/AllFurniture";
import BottomNav from "@/components/BottomNav";
import Compnay from "@/components/Compnay";
import Footer from "@/components/Footer";
import Furniture from "@/components/Furniture";
import Navbar from "@/components/Navbar";
import TopFooter from "@/components/TopFooter";
function page() {
  return (
    <div>
      <main className="container">
      <Navbar />
        <BottomNav />
        <Compnay />
        <About />
        <Furniture />
        <AllFurniture />
        <TopFooter />
      </main>
      <Footer />
    </div>
  );
}

export default page;
