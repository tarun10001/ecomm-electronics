import React from "react";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

interface AdminProductTileProps {
  product: any;
  setFormData: any;
  setCurrentEditedId: React.Dispatch<React.SetStateAction<string | null>>;
  setOpenCreateProductsDialog: React.Dispatch<React.SetStateAction<boolean>>;
  isEditMode: boolean;
  handleDelete: (getCurrentProductId: string) => void;
}

const AdminProductTile: React.FC<AdminProductTileProps> = ({
  product,
  setFormData,
  setCurrentEditedId,
  setOpenCreateProductsDialog,
  handleDelete,
}) => {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover round-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              ${product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-bold text-primary">
                ${product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
          >
            Edit
          </Button>
          <Button onClick={() => handleDelete(product?._id)}>Delete</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default AdminProductTile;
