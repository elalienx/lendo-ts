// Project files
import Product from "types/Product";

interface Props {
  item: Product;
}

export default function Header({ item }: Props) {
  const { brand, name, weight } = item;

  // Properties
  const details = `By ${brand} | Weight ${weight} kg`;

  return (
    <header className="header">
      <h1>{name}</h1>
      <small>{details}</small>
    </header>
  );
}
