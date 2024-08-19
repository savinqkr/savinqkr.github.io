import { IFooter } from "./Footer.interface";
import VFooter from "./Footer.view";

const Footer: React.FC<IFooter.IProps> = (props) => {
  return <VFooter {...props} />;
};

export default Footer;
