export interface SlotMachinSetBoardProp {
  name: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}
