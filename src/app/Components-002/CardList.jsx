import style from "./Card2.module.css";

const CardList = (props) => {
  const { imageSrc, title, price, freeShiping, company } = props;
  return (
    <div className={style.parent}>
      {" "}
      <img src={imageSrc} />
      <h3>اسم محصول: {title} </h3>
      <h3>قیمت : {price}</h3> <h3>ارسال رایگان: {freeShiping}</h3>
      <h3>شرکت سازنده : {company}</h3>
    </div>
  );
};

export default CardList;
