import "../styles/pages/sample.css";
import yd1 from "../assets/images/yd1.png";
import yd2 from "../assets/images/yd2.png";
import yd3 from "../assets/images/yd3.png";
import yd4 from "../assets/images/yd4.png";
import yd5 from "../assets/images/yd5.png";
import yd6 from "../assets/images/yd6.png";

const data = [
  { text: "Paragraph 1", img: yd1, className: "box1" },
  { text: "Paragraph 2", img: yd2, className: "box2" },
  { text: "Paragraph 3", img: yd3, className: "box3" },
  { text: "Paragraph 4", img: yd4, className: "box4" },
  { text: "Paragraph 5", img: yd5, className: "box5" },
  { text: "Paragraph 6", img: yd6, className: "box6" },
];

function Sample() {
  return (
    <div className="sample-boxes">
      {data.map((item, i) => (
        <div
          key={i}
          className={`box ${item.className}`}
        >
          <div className="sample-left">
            <p>{item.text}</p>
          </div>
          <div className="sample-right">
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sample;
