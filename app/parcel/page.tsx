"use client";
import React, { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";
import GenericAddModal from "@/component/GenericAddModal";
import { Parcel } from "@/interface/iparcel";
import { useRouter } from "next/navigation";


// ✅ 1. Veriyi dışarıda tanımlıyoruz
const initialParcels: Parcel[] = [
  { id: 1, title: "Parsel 1" },
  { id: 2, title: "Parsel 2" },
  { id: 3, title: "Parsel 3" },
  { id: 4, title: "Parsel 4" },
  { id: 5, title: "Parsel 5" },
  { id: 6, title: "Parsel 6" },
  { id: 7, title: "Parsel 7" },
  { id: 8, title: "Parsel 8" },
];

const ParcelScreen = () => {
  // ✅ 2. State başlangıç değerine dışarıdan tanımlanan diziyi veriyoruz
  const [parcels, setParcels] = useState<Parcel[]>(initialParcels);
  const [inputValue, setInputValue] = useState<string>("");

  const router = useRouter();

  // ✅ Yeni parsel ekleme
  const handleAddParcels = () => {
    const count = parseInt(inputValue);
    if (isNaN(count) || count <= 0) {
      alert("Lütfen geçerli bir sayı girin!");
      return;
    }

    const startId = parcels.length + 1;
    const newParcels: Parcel[] = Array.from({ length: count }, (_, i) => ({
      id: startId + i,
      title: `Parsel ${startId + i}`,
    }));

    setParcels((prev) => [...prev, ...newParcels]);
    setInputValue("");
  };

  // ✅ Parsel düzenleme
  const handleEdit = (id: number) => {
    const newTitle = prompt("Yeni parsel adı girin:");
    if (!newTitle) return;

    setParcels((prev) =>
      prev.map((p) => (p.id === id ? { ...p, title: newTitle } : p))
    );
  };

  // ✅ Parsel silme
  const handleDelete = (id: number) => {
    if (window.confirm("Bu parseli silmek istiyor musunuz?")) {
      setParcels((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-green-600">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Sol Kısım */}
            <div className="flex items-center gap-4">
              <div className="text-6xl">🌾</div>
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  Parseller
                </h1>
                <p className="text-gray-600 text-lg">
                  T.C. Tarım ve Orman Bakanlığı
                </p>
              </div>
            </div>

            {/* Sağ Kısım - Input ve Buton */}
            {/* <div className="flex items-center gap-3">
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Parsel ekle?"
                className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleAddParcels}
                className="bg-green-600 text-white font-semibold px-5 py-2 rounded-xl hover:bg-green-700 transition"
              >
                Ekle
              </button>
            </div> */}
            <div className="flex items-center gap-3">
              <GenericAddModal
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleAdd={handleAddParcels}
                placeholder="Parsel ekle?"
                buttonText="Ekle"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Grid */}
      <div className="max-w-7xl mx-auto">
        <div
          className="grid gap-6 auto-rows-fr"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          }}
        >
          {parcels.map((parcel) => (
            <div
              key={parcel.id}
            //   onClick={() => router.push(`/trees/${parcel.id}`)}
            onClick={() => router.push(`/trees?parcelId=${parcel.id}`)}
              className="relative group bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-green-700 hover:scale-105 cursor-pointer"
            >
              {/* İkonlar */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(parcel.id);
                  }}
                  className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition"
                  title="Düzenle"
                >
                  <Edit2 size={18} className="text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(parcel.id);
                  }}
                  className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition"
                  title="Sil"
                >
                  <Trash2 size={18} className="text-white" />
                </button>
              </div>

              {/* Kart İçeriği */}
              <div className="p-12 flex items-center justify-center min-h-[200px]">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">{parcel.title}</h3>
                  <p className="text-6xl font-bold group-hover:scale-110 transition-transform">
                    {parcel.id}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParcelScreen;
