import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import EditProductsApi from "../../services/EditProductsAPI";
import { useProducts } from "../../context/ProductsContext";
import Loading from "../../ui/Loading";
import { useState } from "react";

function ConfirmEdit({ itemId, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const { products, setProducts } = useProducts();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const url = `https://dummyjson.com/products/${itemId}`;
    await EditProductsApi(url, data);
    setIsLoading(false);
    const updatedProducts = products.map((product) =>
      product.id === itemId ? { ...product, title: data.title } : product
    );
    setProducts(updatedProducts);
    onClose();
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="title"
          label="عنوان محصول"
          type="text"
          validationSchema={{
            required: "عنوان محصول ضروری است",
          }}
          errors={errors}
          register={register}
          required
        />
        <div className="!mb-4">
          {isLoading ? (
            <Loading />
          ) : (
            <button
              type="submit"
              className="btn btn--primary text-white w-full"
            >
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ConfirmEdit;
