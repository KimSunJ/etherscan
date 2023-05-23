import HeaderContainer from "../containers/Header";
import MainNavContainer from "../containers/MainNav";
import MainSearchContainer from "../containers/MainSearch";
import MineContainer from "../containers/Mine";
import LatestContainer from "../containers/Latest";
import Footer from "../comp/Footer";

const MainPage = () => {
  return (
    <div>
      <HeaderContainer />
      <MainNavContainer />
      <MainSearchContainer />
      <MineContainer />
      <LatestContainer />
      <Footer />
    </div>
  );
};

export default MainPage;
