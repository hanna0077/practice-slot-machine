import SlotMachinSetBoard from "@src/components/SlotMachinSetBoard";
import { SlotSet } from "./type";
import { useState } from "react";
import styles from "./slotmachine.module.scss";
export default function Index() {
  const [slotSet, setSlotSet] = useState<SlotSet>({
    bet: 1,
    autospin: 1,
    lines: 1,
  });

  const handleBetChange = (newValue: number) => {
    setSlotSet((prev) => ({
      ...prev,
      bet: newValue,
    }));
  };
  const handleAutoSpinChange = (newValue: number) => {
    setSlotSet((prev) => ({
      ...prev,
      autospin: newValue,
    }));
  };
  const handleLinesChange = (newValue: number) => {
    setSlotSet((prev) => ({
      ...prev,
      lines: newValue,
    }));
  };
  return (
    <div className={styles.settingBox}>
      <SlotMachinSetBoard
        name="BET"
        min={1}
        max={10}
        value={slotSet.bet}
        onChange={handleBetChange}
      />
      <button type="button" className={styles.maxBetBtn}>
        <h2>
          MAX
          <br />
          BTN
        </h2>
      </button>
      <button type="button" className={styles.spinBtn} />
      <SlotMachinSetBoard
        name="AUTOSPIN"
        min={1}
        max={10}
        value={slotSet.autospin}
        onChange={handleAutoSpinChange}
      />
      <SlotMachinSetBoard
        name="LINES"
        min={1}
        max={10}
        value={slotSet.lines}
        onChange={handleLinesChange}
      />
    </div>
  );
}
