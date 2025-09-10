import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRouter() {
  const navigate = useNavigate();
  const [isLoged, setIsLoged] = useState<boolean>(false);
  if (isLoged === true) {
    navigate("/account");
  } else {
    navigate("/login")
  }
  return <div>
    Private Route
  </div>;
}
