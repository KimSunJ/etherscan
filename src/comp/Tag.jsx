import { Link } from "react-router-dom";

export const TdTag = ({ children, to, className }) => {
  return (
    <td className={className || ""}>
      <Link to={to}>{children}</Link>
    </td>
  );
};
