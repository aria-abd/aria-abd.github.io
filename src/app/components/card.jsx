import classes from "./Card.module.css";

function Card({ title, number, theme, score }) {
  let x = 10;
  return (
    <div className={theme === "light" ? classes.lightCard : classes.darkCard}>
      <img src="next.svg"></img>
      <h3>
        {title}
        <br />
        {number}
      </h3>
      <p>gdsiugfsdgbsbgjsbndfgvnb sgbjn sgjspgns sodgjns jng</p>
      <a
        href="#"
        className={
          score >= 50
            ? classes.bottonBackgroundGreen
            : classes.ottonBackgroundYellow
        }
      >
        click here
      </a>
    </div>
  );
}

export default Card;
