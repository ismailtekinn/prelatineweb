import { GenericAddModalProps } from "@/interface/igenericadditem";
import React from "react";

const GenericAddModal: React.FC<GenericAddModalProps> = ({
  inputValue,
  setInputValue,
  handleAdd,
  placeholder = "Yeni öğe ekle...",
  buttonText = "Ekle",
}) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        onClick={handleAdd}
        className="bg-green-600 text-white font-semibold px-5 py-2 rounded-xl hover:bg-green-700 transition"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default GenericAddModal;
