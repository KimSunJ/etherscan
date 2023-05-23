import SearchHeaderContainer from "../containers/SearchHeader";
import MainNavContainer from "../containers/MainNav";
import TxContainer from "../containers/Tx";
import Footer from "../comp/Footer";

const TxPage = () => {
  return (
    <div>
      <SearchHeaderContainer />
      <MainNavContainer />
      <TxContainer />
      <Footer />
    </div>
  );
};

export default TxPage;
