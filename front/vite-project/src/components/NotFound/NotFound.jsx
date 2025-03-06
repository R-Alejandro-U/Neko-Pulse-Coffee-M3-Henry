import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      navigate("/home");
    }

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.message}>
        La página que estás buscando no existe. Redirigiendo al inicio en {countdown} segundos...
      </p>
    </div>
  );
};

export default NotFound;
