import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BackButtonHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackOrEsc = (event) => {
      if (event.type === "popstate" || (event.type === "keydown" && event.key === "Escape")) {
        navigate("/"); // Redirect to home page
      }
    };

    window.addEventListener("popstate", handleBackOrEsc);
    window.addEventListener("keydown", handleBackOrEsc);

    return () => {
      window.removeEventListener("popstate", handleBackOrEsc);
      window.removeEventListener("keydown", handleBackOrEsc);
    };
  }, [navigate]);

  return null; // This component does not render anything
};

export default BackButtonHandler;
