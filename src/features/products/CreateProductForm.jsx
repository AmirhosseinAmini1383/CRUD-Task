import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import TagsInputField from "../../ui/TagsInput";
import Loading from "../../ui/Loading";
import { useState } from "react";
import AddProductsApi from "../../services/AddProductsApi";
import { useProducts } from "../../context/ProductsContext";

function CreateProductForm({ onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const { setProducts } = useProducts();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const url = `https://dummyjson.com/products/add`;
    const newProduct = {
      id: new Date().getTime(),
      ...data,
      tags,
      category: "beauty",
    };
    await AddProductsApi(url, newProduct);
    setProducts((prev) => [...prev, newProduct]);
    setIsLoading(false);
    onClose();
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="عنوان"
          name="title"
          register={register}
          required
          validationSchema={{
            required: "عنوان محصول ضروری است",
            minLength: {
              value: 5,
              message: "حداقل ۵ کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />

        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات محصول ضروری است",
            minLength: {
              value: 15,
              message: "حداقل ۱۵ کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />

        <TextField
          label="قیمت"
          name="price"
          register={register}
          type="number"
          required
          validationSchema={{
            required: "قیمت محصول ضروری است",
          }}
          errors={errors}
        />

        <TextField
          label="لینک عکس"
          name="images"
          register={register}
          type="text"
          required
          validationSchema={{
            required: "لینک عکس محصول ضروری است",
          }}
          errors={errors}
        />

        <TagsInputField tags={tags} setTags={setTags} label="تگ" />

        <div className="!mb-4">
          {isLoading ? (
            <Loading />
          ) : (
            <button
              type="submit"
              className="btn btn--primary w-full text-white"
            >
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProductForm;
