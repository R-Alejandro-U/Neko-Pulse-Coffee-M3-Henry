import styles from "./style/HomeStyle.module.css";

export const HomeElement = () => {
  return (
    <main className={styles.homeContainer}>

      <div className={styles.homeBanner}></div>

      <div className={styles.homeHeader}>
        <h1>Neko Pulse Coffee</h1>
      </div>

      <div className={styles.homeSection}>
        <div className={styles.textContainer}>
          <h2>¿Por qué elegirnos?</h2>
          <p>
            Nuestro café combina tradición y vanguardia. Cada grano es
            cuidadosamente seleccionado de las mejores plantaciones, asegurando
            una calidad excepcional en cada taza. Somos más que un café: somos
            un espacio donde los fans del anime, el manga y la cultura pop
            pueden encontrarse, compartir y disfrutar en un ambiente único.
            Ven y descubre cómo transformamos cada sorbo en una experiencia.
          </p>
        </div>
        <img
          src="src/assets/img/interior.jpg"
          alt="interior de la cafeteria"
          className={styles.homeImage}
        />
      </div>

      <div className={styles.homeSection}>
        <img
          src="src/assets/img/taza.jpg"
          alt="taza café"
          className={styles.homeImage}
        />
        <div className={styles.textContainer}>
          <h2>Pasión en cada taza</h2>
          <p>
            Nuestra pasión se refleja en cada detalle: desde la elección de los
            ingredientes más frescos hasta la decoración de nuestras tazas. Nos
            esforzamos por crear una atmósfera cálida y acogedora, donde cada
            cliente se sienta en casa. Ya sea que prefieras un clásico espresso
            o un innovador latte temático inspirado en tu anime favorito,
            estamos aquí para ofrecerte lo mejor.
          </p>
        </div>
      </div>

      <div className={styles.homeSection}>
        <div className={styles.textContainer}>
          <h2>Un espacio para todos</h2>
          <p>
            Nuestro café no es solo para los amantes del café, sino para todos
            los que buscan un lugar para conectarse, relajarse y crear recuerdos.
            Ofrecemos eventos temáticos, noches de trivia de anime, sesiones de
            dibujo y más. Queremos ser ese lugar especial donde puedas sentirte
            libre de expresarte y encontrar a personas con tus mismos
            intereses.
          </p>
        </div>
        <img
          src="src/assets/img/mangas.jpg"
          alt="Mangas"
          className={styles.homeImage}
        />
      </div>

      <div className={styles.homeSection}>
        <img
          src="src/assets/img/arte-late.jpg"
          alt="arte-late"
          className={styles.homeImage}
        />
        <div className={styles.textContainer}>
          <h2>Explora nuestras especialidades</h2>
          <p>
            Desde frappuccinos decorados con arte de personajes famosos hasta
            postres inspirados en las series más queridas, nuestra carta es
            única. Nos enorgullece ser un lugar donde cada elemento refleja el
            amor por la cultura pop. Atrévete a probar nuestras ediciones
            limitadas y descubre los secretos detrás de cada receta, siempre
            con un toque de creatividad y dedicación.
          </p>
        </div>
      </div>
    </main>
  );
};
