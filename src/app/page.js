import Image from "next/image";
import styles from "./page.module.css";
import classes from "./page.module.css";
import Card from "./components/card";
import Wellcome from "./components/Wellcome";
import Dastebandi from "./components/Dastebandi";
import List from "./List";

export default function Home() {
  return (
    <div>
      <Wellcome title="bro aziyatam nakon"></Wellcome>
      <Card title="harchi 1" number={100} theme="light" score={100}></Card>
      <Card title="harchi 2" number={54} theme="dark" score={20}></Card>
      <Card title="harchi 3" number={61} theme="light" score={11}></Card>
      <Dastebandi></Dastebandi>
      <List srca="../public/charge.png"></List>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
    </div>
  );
}
