import SearchHeaderContainer from "../containers/SearchHeader";
import MainNavContainer from "../containers/MainNav";
import NotFoundComp from "../comp/NotFound";
import Footer from "../comp/Footer";

const NotFoundPage = () => {
  return (
    <div>
      <SearchHeaderContainer />
      <MainNavContainer />
      <NotFoundComp />
      <Footer />
    </div>
  );
};

export default NotFoundPage;
