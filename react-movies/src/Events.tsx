export default function Events() {
    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        console.log(e.currentTarget.value)
    }
    
  return (
    <>
      <h1>Events Example</h1>
      <input type="text" onKeyUp={handleKeyUp} />
    </>
  );
}
