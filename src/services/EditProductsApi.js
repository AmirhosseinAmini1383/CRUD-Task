import toast from "react-hot-toast";

const EditProductsApi = async (url, title) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
      }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    toast.success("محصول با موفقیت ویرایش شد!");
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    toast.success("محصول اضافه شده توسط کاربر , ویرایش شد!");
  }
};
export default EditProductsApi;
