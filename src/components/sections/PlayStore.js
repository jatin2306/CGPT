import svg from "../../assets/images/Mockup (1).svg";
import "../../styles/components/sections/PlayStore.css";

function PlayStore() {
  return (
    <div className="playstore-wrapper">
      <img src={svg} className="phone" alt="Phone mockup" />
    </div>
  );
}

export default PlayStore;
