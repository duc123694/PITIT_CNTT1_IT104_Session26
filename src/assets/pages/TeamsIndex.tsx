import { Link } from "react-router-dom";

export default function TeamsIndex() {
  return (
    <div>
      <h3>Danh sách các team</h3>
      <nav>
        <Link to={"/teams/1"}>Team 1</Link>
        <Link to={"/teams/2"}>Team 2</Link>
      </nav>
    </div>
  );
}