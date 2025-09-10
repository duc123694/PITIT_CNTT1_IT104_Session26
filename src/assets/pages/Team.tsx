import { useParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();
  return <h3>Team ID: {teamId}</h3>;
}