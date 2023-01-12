import p1 from "../../images/property/p1.svg";
import bed from "../../images/icons/Bed.svg";
import shower from "../../images/icons/Shower.svg";
import size from "../../images/icons/Size.svg";

const Card = () => {
  return (
    <div className="card">
      <img src={p1} alt="name of property" />
      <div className="prop__info">
        <p className="prop__name">
          2578 Folsom street, san francisco, CA, 94110
        </p>
        <p className="prop__type">Private Room</p>
        <p className="prop__price">$1200/month</p>
        <div className="prop__features">
          <div className="prop__feature">
            <img src={bed} alt="no of beds" />
            <p>4</p>
          </div>
          <div className="prop__feature">
            <img src={shower} alt="shower" />
            <p>4</p>
          </div>
          <div className="prop__feature">
            <img src={size} alt="size" />
            <p>4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
