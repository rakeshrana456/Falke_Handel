import Header from '../components/Header';
import Hero from '../components/Hero';
import Snapshots from '../components/Snapshots';
import Workflow from '../components/Workflow';
import WhyChooseUs from '../components/WhyChooseUs';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <Hero />
      <Snapshots />
      <Workflow />
      <WhyChooseUs />
      <GetInTouch />
      <Footer />
    </main>
  );
}
