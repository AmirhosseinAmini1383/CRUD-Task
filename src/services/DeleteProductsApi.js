import toast from "react-hot-toast";

const DeleteProductsApi = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    toast.success("محصول با موفقیت حذف شد!");
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    toast.success("محصول اضافه شده توسط کاربر , حذف شد!");
  }
};
export default DeleteProductsApi;
