import { IHeader } from "./Header.interface";
import VHeader from "./Header.view";

const Header: React.FC<IHeader.IProps> = (props) => {
  return <VHeader {...props} />;
};

export default Header;
