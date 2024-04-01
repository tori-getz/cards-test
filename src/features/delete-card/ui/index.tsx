import { MdDelete } from "react-icons/md";
import { deleteCard } from "~/entities/card";
import { Button } from "~/shared/ui/button";

interface IDeleteCardProps {
  id: string;
}

export const DeleteCard: React.FC<IDeleteCardProps> = ({
  id
}) => {
  const onDelete = () => {
    deleteCard(id);
  };

  return (
    <Button
      left={<MdDelete />}
      onClick={onDelete}  
    >
      Удалить
    </Button>
  );
};
