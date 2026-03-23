function Counter() {

    let count = 0 ;

    const handleIncrement = () => {
       count++;
       console.log(count)
    }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>INCREMENT</button>
    </>
  );
}

export default Counter;
