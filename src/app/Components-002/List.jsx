"use client";

import style from "./List.module.css";

const STUDENTS = [
  {
    name: "علی",
    age: "29",
    job: "دکتر",
    city: "تهران",
  },
  {
    name: "شادی",
    age: "39",
    job: "بنا",
    city: "تهران",
  },
  {
    name: "صادق",
    age: "19",
    job: "راننده",
    city: "کرج",
  },
  {
    name: "علیرضا",
    age: "24",
    job: "بیکار",
    city: "مشهد",
  },
];
console.log("all");
const List = () => {
  return (
    <div>
      <div className={style.parentDiv}>
        <div>
          <h2>اسامی دانش آموزان</h2>
          <ul>
            {STUDENTS.map((student) => {
              return (
                <li>
                  {student.name} {student.age} {student.city} {""}
                  {student.job}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;
