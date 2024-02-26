import About from "@/components/About";
import Navmenu from "@/components/Navmenu";
import Service from "@/components/Service";
import Department from "@/components/Department";
import Aboutpage from "@/components/Aboutpage";
import Doctors from "@/components/Doctors";
import Tesmonies from "@/components/Tesmonies";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navmenu />
      <Service />
      <Aboutpage />
      <About />
      <Department />
      <Doctors />
      <Tesmonies />
      <Appointment />
      <Footer />
    </div>
  );
}
