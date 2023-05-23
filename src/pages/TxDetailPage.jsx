import SearchHeaderContainer from "../containers/SearchHeader";
import MainNavContainer from "../containers/MainNav";
import TxDetailContainer from "../containers/TxDetail";
import Footer from "../comp/Footer";

const TxDetailPage = () => {
  return (
    <div>
      <SearchHeaderContainer />
      <MainNavContainer />
      <TxDetailContainer />
      <Footer />
    </div>
  );
};

export default TxDetailPage;
