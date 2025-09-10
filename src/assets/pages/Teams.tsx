import { Outlet } from "react-router-dom";
import TeamsIndex from "./TeamsIndex";

export default function Teams() {
  return (
    <div>
        <TeamsIndex/>
      <Outlet />
    </div>
  );
}