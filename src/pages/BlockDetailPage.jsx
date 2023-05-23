import SearchHeaderContainer from "../containers/SearchHeader";
import MainNavContainer from "../containers/MainNav";
import BlockDetailContainer from "../containers/Detail";
import Footer from "../comp/Footer";

const BlockDetailPage = () => {
  return (
    <div>
      <SearchHeaderContainer />
      <MainNavContainer />
      <BlockDetailContainer />
      <Footer />
    </div>
  );
};

export default BlockDetailPage;
