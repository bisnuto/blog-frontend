import styles from "./Animal.module.css";
import * as React from "react";

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
        <button className={styles.ButtonAnimals} onClick={addAnimal}>Add one {animal}</button>
        <button className={styles.ButtonAnimals} onClick={minusAnimal}>Subtract one {animal}</button>
      </div>
    </div>

  )
}
export {Animal};
