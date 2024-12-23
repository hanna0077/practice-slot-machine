import styles from "./components.module.scss";
import ArrowIcon from "@assets/arrow.png";
import { SlotMachinSetBoardProp } from "./type";
export default function SlotMachinSetBoard({
  name,
  min,
  max,
  value,
  onChange,
}: SlotMachinSetBoardProp) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!newValue) {
      return;
    }
    if (value >= min && value <= max) {
      onChange(newValue);
    } else {
      onChange(max);
      alert(`Please enter a number between ${min} and ${max}.`);
    }
  };
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };
  return (
    <div className={styles.slotMachinSetBoardBox}>
      <h5>{name}</h5>
      <div className={`p1 ${styles.boardTextBox}`}>
        <button type="button" onClick={handleDecrement}>
          <img src={ArrowIcon} alt="" />
        </button>
        {/* 인풋값 직접 수정 가능하게 바꿔야함 */}
        <input
          name={name}
          type="number"
          value={value}
          className={`p1 ${styles.boardText}`}
          onChange={handleInputChange}
          min={min}
          max={max}
          // readOnly
        />
        <button type="button" onClick={handleIncrement}>
          <img src={ArrowIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
