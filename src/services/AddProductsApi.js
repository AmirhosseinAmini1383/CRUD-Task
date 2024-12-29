import toast from "react-hot-toast";

const AddProductsApi = async (url, product) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product,
      }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    toast.success("محصول با موفقیت اضافه شد!");
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    toast.error("خطا در ایجاد محصول!");
  }
};
export default AddProductsApi;
