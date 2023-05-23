import SearchHeaderContainer from "../containers/SearchHeader";
import MainNavContainer from "../containers/MainNav";
import BlockContainer from "../containers/Block";
import Footer from "../comp/Footer";

const BlockPage = () => {
  return (
    <div>
      <SearchHeaderContainer />
      <MainNavContainer />
      <BlockContainer />
      <Footer />
    </div>
  );
};

export default BlockPage;
