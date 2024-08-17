import "./CardComponent.css";
import Img1 from "../../assets/images/icon-calculator.svg";
import Img2 from "../../assets/images/icon-karma.svg";
import Img3 from "../../assets/images/icon-supervisor.svg";
import Img4 from "../../assets/images/icon-team-builder.svg";
import CardItemComponent from "./CardItemComponent/CardItemComponent";
function CardComponent() {
  const ArrayofObject = [
    {
      card: "card1",
      header: "Supervisor",
      description:
        "uses data from past projects to provide better delivery estimates",
      img: Img3,
      id: 1,
    },
    {
      card: "card2",

      header: "Team Builder",
      description:
        "uses data from past projects to provide better delivery estimates",
      img: Img4,
      id: 2,
    },
    {
      card: "card3",

      header: "Karma",
      description:
        "uses data from past projects to provide better delivery estimates",
      img: Img2,
      id: 3,
    },
    {
      card: "card4",

      header: "Calculator",
      description:
        "uses data from past projects to provide better delivery estimates",
      img: Img1,
      id: 4,
    },
  ];
  return (
    <div id="grid-container">
      {ArrayofObject.map((item) => {
        return (
          <CardItemComponent
            key={item.id}
            card={item.card}
            header={item.header}
            description={item.description}
            img={item.img}
          ></CardItemComponent>
        );
      })}
    </div>
  );
}
export default CardComponent;
