import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateProductForm from "./CreateProductForm";

function AddProduct() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div>
      <div>
        <button
          onClick={() => setIsAddOpen(true)}
          className="btn btn--primary text-white w-56 py-4 text-lg mt-16"
        >
          افزودن محصول
        </button>
      </div>
      <Modal
        title="افزودن محصول"
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
      >
        <CreateProductForm onClose={() => setIsAddOpen(false)} />
      </Modal>
    </div>
  );
}

export default AddProduct;
