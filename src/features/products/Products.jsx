import { useState } from "react";
import Loading from "../../ui/Loading";
import Modal from "../../ui/Modal";
import AddProduct from "./AddProduct";
import ConfirmDelete from "./ConfirmDelete";
import ConfirmEdit from "./ConfirmEdit";
import DeleteProductsApi from "../../services/DeleteProductsApi";
import { useProducts } from "../../context/ProductsContext";
import ProductItem from "./ProductItem";

export default function Products() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const { products, setProducts, isLoading, error } = useProducts();

  if (isLoading)
    return (
      <div className="mt-20">
        <Loading />;
      </div>
    );
  if (error)
    return <p className="text-secondary-900 text-lg font-bold">{error}</p>;

  const handleDelete = async (id) => {
    const url = `https://dummyjson.com/products/${id}`;
    await DeleteProductsApi(url);
    setProducts(products.filter((product) => product.id !== id));
    setIsDeleteOpen(false);
  };

  return (
    <div>
      <AddProduct />
      <div className="grid grid-cols-1 gap-8 mt-8">
        {products && products.length > 0 ? (
          products.map((item) => (
            <ProductItem
              key={item.id}
              item={item}
              setItemId={setItemId}
              setIsEditOpen={setIsEditOpen}
              setIsDeleteOpen={setIsDeleteOpen}
            />
          ))
        ) : (
          <div className="text-center text-secondary-600 py-8">
            محصولی یافت نشد!
          </div>
        )}

        <Modal
          open={isDeleteOpen}
          title="حذف محصول"
          onClose={() => setIsDeleteOpen(false)}
        >
          <ConfirmDelete
            resourceName={
              itemId ? products.find((p) => p.id === itemId)?.title : ""
            }
            onClose={() => setIsDeleteOpen(false)}
            onConfirm={() => handleDelete(itemId)}
            disabled={false}
          />
        </Modal>

        <Modal
          open={isEditOpen}
          title="ویرایش محصول"
          onClose={() => setIsEditOpen(false)}
        >
          <ConfirmEdit
            onClose={() => setIsEditOpen(false)}
            itemId={itemId}
            disabled={false}
          />
        </Modal>
      </div>
    </div>
  );
}
