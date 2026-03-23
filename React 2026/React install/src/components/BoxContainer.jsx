import Box from "./Box";
import Button from "./Button";

function BoxContainer() {
  return (
    <>
      <Box boxCount={0}  boxName="BOX-1"/>
      <Button buttonName="Left"/>
      <Button buttonName="Right"/>
      <Box boxCount={10}  boxName="BOX-2"/>
    </>
  );
}

export default BoxContainer;
