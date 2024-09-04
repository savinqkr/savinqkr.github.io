import { ICard } from "./card.interface";
import VCard from "./card.view";

const Card: React.FC<ICard.IProps> = (props) => {
  return <VCard {...props} />;
};

export default Card;
