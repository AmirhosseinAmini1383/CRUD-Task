import { GoTrash } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { toPersianNumbers } from "../../utils/toPersianNumbers";

function ProductItem({ item, setItemId, setIsEditOpen, setIsDeleteOpen }) {
  return (
    <div
      key={item.id}
      className="grid grid-cols-4 grid-row-3 px-8 py-4 gap-x-10 bg-secondary-0 rounded-2xl"
    >
      <div>
        <img src={item.images} alt={item.title} className="w-auto h-auto" />
        <p className="my-4">
          {item.tags.map((tag) => (
            <span key={tag} className="badge badge--secondary mx-1">
              {tag}
            </span>
          ))}
        </p>
        <p className="text-xl text-secondary-900 font-bold pb-4">
          {item.title}
        </p>
      </div>

      <div className="col-span-2 flex flex-col items-start justify-center gap-y-8">
        <p className="text-xl text-secondary-600">{item.description}</p>
        <p className="text-lg text-secondary-900">
          <span className="font-bold">دسته بندی : </span>
          <span className="badge badge--secondary mr-2">{item.category}</span>
        </p>
        <p className="text-lg text-secondary-900">
          <span className="font-bold">قیمت : </span>
          <span className="mr-2">{toPersianNumbers(item.price)} دلار</span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-20">
        <button className="btn btn--primary py-4 text-white w-52">
          افزودن به سبد خرید
        </button>
        <div className="flex items-center justify-center gap-x-8">
          <BiEdit
            size={25}
            className="text-primary-700 cursor-pointer"
            onClick={() => {
              setItemId(item.id);
              setIsEditOpen(true);
            }}
          />
          <GoTrash
            size={25}
            className="text-error cursor-pointer"
            onClick={() => {
              setItemId(item.id);
              setIsDeleteOpen(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
