export default function SelectNumber(props: arvonAlustus) {
  const arr = Array(props.maxValue).fill(0);

  return (
    <select
      onChange={(e) => {
        console.log(e.currentTarget.value);
        props.onSelected(parseInt(e.currentTarget.value, 10));
      }}
    >
      {arr.map((_, index) => (
        <option key={index + 1} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
  );
}

interface arvonAlustus {
  maxValue: number;
  onSelected(value: number): void;
}

SelectNumber.defaultProps = {
  maxValue: 15,
};
