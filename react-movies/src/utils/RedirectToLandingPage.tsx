import React from "react";
import { useNavigate } from "react-router-dom";

export default function RedirecttoLandingPage() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
}
