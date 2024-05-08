import { Button } from '../ui/button'; // Import your Button component
import  {Product}  from '../../app/lib/types/prduct'; // Import your Product type

interface Props {
  product: Product;
  onDelete: (product: Product) => void;
}

const TableRow: React.FC<Props> = ({ product, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(product); // Call the onDelete function with the product to delete
  };

  return (
    <tr>
      <td>
        <img
          alt="Product Image"
          className="aspect-square object-cover"
          height={100}
          src={product.images}
          width={100}
        />
      </td>
      <td className="font-medium">{product.title}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            Edit
          </Button>
          <Button size="sm" variant="destructive" onClick={handleDeleteClick}>
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;