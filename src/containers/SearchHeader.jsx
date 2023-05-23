import { searchAll } from "../api";
import { useNavigate } from "react-router-dom";
import SearchHeaderComp from "../comp/SearchHeader";

const SearchHearderContainer = () => {
  const navigate = useNavigate();
  const search = async (inputTxt) => {
    const result = await searchAll(inputTxt);
    // console.log(result.isError);

    if (!result.isError) {
      if (result.findNumb) {
        navigate(`/block/${inputTxt}`);
      } else if (result.findHash) {
        navigate(`/tx/${inputTxt}`);
      } else if (result.addressHash) {
        navigate(`/address/${inputTxt}`);
      }
    } else if (result.isError) {
      navigate(`/search?${inputTxt}`);
    }
  };

  return <SearchHeaderComp search={search} />;
};

export default SearchHearderContainer;
