import styles from "./Animal.module.scss";
import * as React from "react";
import {Button} from "@/components/elements/Button";

type TAnimals = {
  animal : string;
}

const Animal = ({animal}:TAnimals): JSX.Element => {
  const [num,setNum] = React.useState(0)
  console.log(`${animal} rendered`);
  const addAnimal = () => {
    setNum(num + 1)
  }
  const minusAnimal = () => {
    if(num > 0){
      setNum(num - 1)
    }
  }
  return(
    <div>
      <div>
        <p>There are {num} {animal}s.</p>
      </div>
      <div className={styles.ButtonsBox}>
        <Button handleClick={addAnimal}>Add one {animal}</Button>
        <Button handleClick={minusAnimal}>Subtract one {animal}</Button>
      </div>
    </div>

  )
}
export {Animal};
