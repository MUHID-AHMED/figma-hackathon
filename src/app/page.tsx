
import BrowseRange from "./components/Browsing";
import Explore from "./components/Explore";
import OurProducts from "./components/Products";
import Promotion from "./components/Promotion";
import PromotionalPage from "./components/Promotion2";


export default function Home() {
  return (
    <div>
    <Promotion/>
    <BrowseRange/>
    <OurProducts/>
    <Explore/>
    <PromotionalPage/>
    </div>
  );
}
