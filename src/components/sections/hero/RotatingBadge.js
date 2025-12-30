import "../../../styles/components/sections/hero/RotatingBadge.css";
import logo from "../../../assets/images/logod.png";

function RotatingBadge() {
  return (
    <div className="rb-container">
      <div className="rb-text-rotator">
        <svg viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="
                M 100, 100
                m -75, 0
                a 75,75 0 1,1 150,0
                a 75,75 0 1,1 -150,0
              "
            />
          </defs>

          <text>
            <textPath href="#circlePath">
              CHRONIC AI - ENDOCRINOLOGIST -
            </textPath>
          </text>
        </svg>
      </div>
      <div className="rb-center">
        <img src={logo} alt="AI Logo" />
      </div>
    </div>
  );
}

export default RotatingBadge;
