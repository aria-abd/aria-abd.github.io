"use client";

import CardList from "./CardList";
// import aks from "."
const Card2 = () => {
  const Products = [
    {
      title: "samsung a21",
      price: "$2100",
      freeShiping: "yes",
      company: "samsung",
      imageSrc: "untitled.png",
    },
    {
      title: "Iphone12 mini",
      price: "$3100",
      freeShiping: "no",
      company: "Apple",
      imageSrc: "Untitled.png",
    },
    {
      title: "Iphone13 pro",
      price: "$4100",
      freeShiping: "no",
      company: "Apple",
      imageSrc: "untitled.png",
    },
  ];

  return (
    <div>
      {Products.map((Product) => {
        const { title, price, freeShiping, company, imageSrc } = Product;
        return (
          <CardList
            title={title}
            price={price}
            freeShiping={freeShiping}
            company={company}
            imageSrc={imageSrc}
          />
        );
      })}
    </div>
  );
};

export default Card2;
