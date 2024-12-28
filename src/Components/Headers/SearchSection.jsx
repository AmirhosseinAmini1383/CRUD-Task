import { HiSearch } from "react-icons/hi";

function SearchSection() {
  return (
    <div className="relative">
      <input
        className="textField__input w-96"
        type="text"
        placeholder="جستجو"
      />
      <span className="absolute top-3 left-4">
        <HiSearch className="w-6 h-6 text-primary-900" />
      </span>
    </div>
  );
}

export default SearchSection;
