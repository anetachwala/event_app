import { useSelector } from "react-redux";
import "../../style/Header.css";

function Header() {
  const number = useSelector((state) => state.length);
  return (
    <div data-cy="Header" className="Header">
      <h1>
        You have <span>{number}</span> {number !== 1 ? "events" : "event"}
      </h1>
    </div>
  );
}

export default Header;
