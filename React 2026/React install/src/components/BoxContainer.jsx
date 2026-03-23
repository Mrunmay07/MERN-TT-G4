import { useState } from "react";
import Box from "./Box";
import Button from "./Button";

function BoxContainer() {

  const [leftCount , setLeftCount] = useState(10)
  const [rightCount , setRightCount] = useState(0)

  const handleLeftClick = () => {
    setLeftCount(leftCount + 1)
    setRightCount(rightCount - 1)
  }

  const handleRightClick = () => {
    setRightCount(rightCount + 1)
    setLeftCount(leftCount - 1)
  }

  return (
    <>
      <Box boxCount={leftCount}  boxName="BOX-1"/>
      <Button buttonName="Left" clickHandler={handleLeftClick}/>
      <Button buttonName="Right" clickHandler={handleRightClick}/>
      <Box boxCount={rightCount}  boxName="BOX-2"/>
    </>
  );
}

export default BoxContainer;
