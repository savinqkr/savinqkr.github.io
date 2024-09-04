import { ICard } from "./card.interface";

const VCard: React.FC<ICard.IVProps> = (props) => {
  return (
    <div>
      <div className="left"></div>
      <div className="right">
        <p>Title</p>
        <p>This is contents of devlog ...</p>
        <div>
          <p>TAG1</p>
          <p>TAG2</p>
          <p>TAG3</p>
        </div>
        <p>YYYY-MM-DD hh:mm:ss</p>
      </div>
    </div>
  );
};

export default VCard;
