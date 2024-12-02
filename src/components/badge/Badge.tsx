// Project files
import "./badge.css";

interface Props {
  /** A number to display in this notification badge. If is greater than 10 it will show 9+ instead. */
  number: number;
}

export default function Badge({ number }: Props) {
  // Props
  const finalNumber = number < 10 ? number : "9+";

  return <div className="badge">{finalNumber}</div>;
}
