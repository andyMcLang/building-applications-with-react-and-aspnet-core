export default function MapExample() {
  const arr = Array(100).fill(0);

  return (
    <>
      <h1>Iteration Example</h1>
      <select
        onChange={(e) => {
          console.log(e.currentTarget.value);
        }}
      >
        {arr.map((number, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </>
  );
}
