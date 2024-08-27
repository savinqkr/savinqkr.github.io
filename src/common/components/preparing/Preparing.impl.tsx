import { IPreparing } from "./Preparing.interface";
import VPreparing from "./Preparing.view";

const Preparing: React.FC<IPreparing.IProps> = (props) => {
  return <VPreparing {...props} />;
};

export default Preparing;
