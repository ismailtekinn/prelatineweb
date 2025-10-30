// 'use client';
// import React, { useState } from "react";
// import { useSearchParams } from "next/navigation";

// interface Tree {
//   id: number;
//   treeNumber: string;
//   column: string;
//   row: number;
//   colIndex: number;
//   rowIndex: number;
// }

// const TreesScreen: React.FC = () => {
//   const params = useSearchParams();
//   const parcelId = params?.get("parcelId");

//   const [showMatrixModal, setShowMatrixModal] = useState<boolean>(false);
//   const [rows, setRows] = useState<string>("");
//   const [cols, setCols] = useState<string>("");
//   const [trees, setTrees] = useState<Tree[]>([]);
//   const [isMatrixCreated, setIsMatrixCreated] = useState<boolean>(false);

//   // Sütun harfi oluşturma (A, B, C, ... Z, AA, AB, ...)
//   const getColumnLabel = (index: number): string => {
//     let label = "";
//     let num = index;
//     while (num >= 0) {
//       label = String.fromCharCode(65 + (num % 26)) + label;
//       num = Math.floor(num / 26) - 1;
//     }
//     return label;
//   };

//   // Matris oluşturma
//   const handleCreateMatrix = (): void => {
//     const rowCount = parseInt(rows, 10);
//     const colCount = parseInt(cols, 10);

//     if (!rowCount || !colCount || rowCount <= 0 || colCount <= 0) {
//       alert("Lütfen geçerli satır ve sütun sayısı girin!");
//       return;
//     }

//     const newTrees: Tree[] = [];
//     let id = 1;

//     for (let col = 0; col < colCount; col++) {
//       const colLabel = getColumnLabel(col);
//       for (let row = 1; row <= rowCount; row++) {
//         newTrees.push({
//           id: id++,
//           treeNumber: `${colLabel}${row}`,
//           column: colLabel,
//           row: row,
//           colIndex: col,
//           rowIndex: row - 1,
//         });
//       }
//     }

//     setTrees(newTrees);
//     setIsMatrixCreated(true);
//     setShowMatrixModal(false);
//   };

//   // Matris sıfırlama
//   const handleResetMatrix = (): void => {
//     setTrees([]);
//     setIsMatrixCreated(false);
//     setRows("");
//     setCols("");
//     setShowMatrixModal(true);
//   };

//   // Sütuna göre ağaçları gruplama
//   const getTreesByColumn = () => {
//     const columnMap: { [key: string]: Tree[] } = {};
//     trees.forEach((tree) => {
//       if (!columnMap[tree.column]) {
//         columnMap[tree.column] = [];
//       }
//       columnMap[tree.column].push(tree);
//     });
    
//     // Sütunları alfabetik sıraya göre sırala
//     return Object.keys(columnMap)
//       .sort()
//       .map((col) => ({
//         column: col,
//         trees: columnMap[col].sort((a, b) => a.row - b.row),
//       }));
//   };

//   if (!params) {
//     return <div className="p-8">Hata: Parsel bilgisi bulunamadı.</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8">
//       {/* Header */}
//       <div className="max-w-7xl mx-auto mb-10">
//         <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-green-600">
//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <div>
//               <h1 className="text-4xl font-bold text-gray-800 mb-2">
//                 Parsel {parcelId} - Ağaç Yapısı 
//               </h1>
//               <p className="text-gray-600 text-lg">
//                 {isMatrixCreated
//                   ? `${cols} sütun × ${rows} satır matris oluşturuldu`
//                   : "Satır ve sütunları  belirleyin"}
//               </p>
//             </div>

//             <div className="flex items-center gap-3">
//               {isMatrixCreated ? (
//                 <button
//                   onClick={handleResetMatrix}
//                   className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
//                 >
//                   Matrisi Sıfırla
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => setShowMatrixModal(true)}
//                   className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
//                 >
//                   Matris Oluştur
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {showMatrixModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">
//               Parsel Boyutlarını Belirleyin
//             </h2>

//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Sütun Sayısı (Yatay)
//                 </label>
//                 <input
//                   type="number"
//                   value={cols}
//                   onChange={(e) => setCols(e.target.value)}
//                   placeholder="Örn: 23"
//                   min="1"
//                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors  text-black"
//                 />
//                 <p className="text-xs text-gray-500 mt-1">
//                   A, B, C... şeklinde sütunlar oluşturulacak
//                 </p>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Satır Sayısı (Dikey)
//                 </label>
//                 <input
//                   type="number"
//                   value={rows}
//                   onChange={(e) => setRows(e.target.value)}
//                   placeholder="Örn: 24"
//                   min="1"
//                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors  text-black"
//                 />
//                 <p className="text-xs text-gray-500 mt-1">
//                   1, 2, 3... şeklinde numaralandırılacak
//                 </p>
//               </div>

//               {cols && rows && (
//                 <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
//                   <p className="text-sm text-green-800 font-semibold">
//                     Toplam {parseInt(cols) * parseInt(rows)} ağaç oluşturulacak
//                   </p>
//                   <p className="text-xs text-green-600 mt-1">
//                     Örnek: {getColumnLabel(0)}1, {getColumnLabel(0)}2, ...{" "}
//                     {getColumnLabel(parseInt(cols) - 1)}
//                     {rows}
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div className="flex gap-3 mt-6">
//               <button
//                 onClick={() => setShowMatrixModal(false)}
//                 className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-colors"
//               >
//                 İptal
//               </button>
//               <button
//                 onClick={handleCreateMatrix}
//                 className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
//               >
//                 Oluştur
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Matris - Sütunlar yan yana, her sütun aşağıya doğru */}
//       {isMatrixCreated && trees.length > 0 && (
//         <div className="max-w-7xl mx-auto">
//           {/* Yatay scroll container */}
//           <div className="overflow-x-auto pb-4">
//             <div className="flex gap-8 min-w-max px-4">
//               {getTreesByColumn().map((columnData) => (
//                 <div key={columnData.column} className="flex flex-col gap-6">
//                   {/* Sütun başlığı */}
//                   <div className="text-center mb-2">
//                     <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
//                       Sütun {columnData.column}
//                     </div>
//                   </div>

//                   {/* Sütundaki ağaçlar */}
//                   {columnData.trees.map((tree) => (
//                     <div
//                       key={tree.id}
//                       className="flex flex-col items-center justify-end hover:scale-105 transition-transform duration-300 cursor-pointer"
//                       style={{ height: "240px", width: "160px" }}
//                     >
//                       <div
//                         className="relative flex flex-col items-center"
//                         style={{ width: "140px" }}
//                       >
//                         {/* Üst taç katmanı */}
//                         <div
//                           className="relative bg-gradient-to-b from-green-600 to-green-700 shadow-lg hover:shadow-2xl transition-shadow duration-300"
//                           style={{
//                             width: "110px",
//                             height: "80px",
//                             clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
//                           }}
//                         ></div>

//                         {/* Alt taç katmanı */}
//                         <div
//                           className="relative bg-gradient-to-b from-green-400 to-green-500 -mt-6 shadow-lg"
//                           style={{
//                             width: "140px",
//                             height: "80px",
//                             clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
//                           }}
//                         >
//                           <div className="absolute inset-0 flex items-center justify-center pt-10">
//                             <span className="text-white text-xl font-bold drop-shadow-lg">
//                               Ağaç
//                             </span>
//                           </div>
//                         </div>

//                         {/* Gövde */}
//                         <div
//                           className="bg-gradient-to-b from-amber-800 to-amber-900 shadow-md"
//                           style={{
//                             width: "45px",
//                             height: "50px",
//                             borderRadius: "0 0 8px 8px",
//                           }}
//                         >
//                           <div className="h-full flex items-center justify-center">
//                             <span className="text-amber-100 text-lg font-bold drop-shadow-lg">
//                               {tree.treeNumber}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Kaydırma ipucu */}
//           {parseInt(cols) > 5 && (
//             <div className="text-center mt-6">
//               <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
//                   />
//                 </svg>
//                 Sütunları görmek için yatay kaydırın
//               </p>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Boş Durum */}
//       {!isMatrixCreated && !showMatrixModal && (
//         <div className="max-w-2xl mx-auto text-center py-20">
//           <div className="bg-white rounded-2xl shadow-xl p-12">
//             <div className="text-6xl mb-4">🌳</div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-3">
//               Parselde ki Ağaçları Oluşturun
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Parseldeki ağaçlarınızı organize etmek için satır sütun oluşturun.
//               Her ağaç sütun harfi ve satır numarası ile isimlendirilecek.
//             </p>
//             <button
//               onClick={() => setShowMatrixModal(true)}
//               className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
//             >
//               Başla
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TreesScreen;



'use client';
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

interface Tree {
  id: number;
  treeNumber: string;
  column: string;
  row: number;
  colIndex: number;
  rowIndex: number;
}

const TreesScreen: React.FC = () => {
  const params = useSearchParams();
  const parcelId = params?.get("parcelId");

  const [showMatrixModal, setShowMatrixModal] = useState<boolean>(false);
  const [rows, setRows] = useState<string>("");
  const [cols, setCols] = useState<string>("");
  const [trees, setTrees] = useState<Tree[]>([]);
  const [isMatrixCreated, setIsMatrixCreated] = useState<boolean>(false);

  // Sütun harfi oluşturma (A, B, C, ... Z, AA, AB, ...)
  const getColumnLabel = (index: number): string => {
    let label = "";
    let num = index;
    while (num >= 0) {
      label = String.fromCharCode(65 + (num % 26)) + label;
      num = Math.floor(num / 26) - 1;
    }
    return label;
  };

  // Matris oluşturma
  const handleCreateMatrix = (): void => {
    const rowCount = parseInt(rows, 10);
    const colCount = parseInt(cols, 10);

    if (!rowCount || !colCount || rowCount <= 0 || colCount <= 0) {
      alert("Lütfen geçerli satır ve sütun sayısı girin!");
      return;
    }

    const newTrees: Tree[] = [];
    let id = 1;

    for (let col = 0; col < colCount; col++) {
      const colLabel = getColumnLabel(col);
      for (let row = 1; row <= rowCount; row++) {
        newTrees.push({
          id: id++,
          treeNumber: `${colLabel}${row}`,
          column: colLabel,
          row: row,
          colIndex: col,
          rowIndex: row - 1,
        });
      }
    }

    setTrees(newTrees);
    setIsMatrixCreated(true);
    setShowMatrixModal(false);
  };

  // Matris sıfırlama
  const handleResetMatrix = (): void => {
    setTrees([]);
    setIsMatrixCreated(false);
    setRows("");
    setCols("");
    setShowMatrixModal(true);
  };

  // Belirli bir hücredeki ağacı bul
  const getTreeAt = (colIndex: number, rowIndex: number): Tree | undefined => {
    return trees.find(t => t.colIndex === colIndex && t.rowIndex === rowIndex);
  };

  if (!params) {
    return <div className="p-8">Hata: Parsel bilgisi bulunamadı.</div>;
  }

  const colCount = parseInt(cols) || 0;
  const rowCount = parseInt(rows) || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-green-600">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Parsel {parcelId} - Ağaç Tablosu 
              </h1>
              <p className="text-gray-600">
                {isMatrixCreated
                  ? `${cols} sütun × ${rows} satır (Toplam ${colCount * rowCount} ağaç)`
                  : "Excel tablosu gibi ağaç düzeni"}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {isMatrixCreated ? (
                <button
                  onClick={handleResetMatrix}
                  className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
                >
                  Tabloyu Sıfırla
                </button>
              ) : (
                <button
                  onClick={() => setShowMatrixModal(true)}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
                >
                  Tablo Oluştur
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showMatrixModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tablo Boyutlarını Belirleyin
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sütun Sayısı (A, B, C...)
                </label>
                <input
                  type="number"
                  value={cols}
                  onChange={(e) => setCols(e.target.value)}
                  placeholder="Örn: 10"
                  min="1"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Satır Sayısı (1, 2, 3...)
                </label>
                <input
                  type="number"
                  value={rows}
                  onChange={(e) => setRows(e.target.value)}
                  placeholder="Örn: 15"
                  min="1"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors text-black"
                />
              </div>

              {cols && rows && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                  <p className="text-sm text-green-800 font-semibold">
                    Toplam {parseInt(cols) * parseInt(rows)} ağaç oluşturulacak
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    Excel gibi bir tablo görünümü
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowMatrixModal(false)}
                className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-colors"
              >
                İptal
              </button>
              <button
                onClick={handleCreateMatrix}
                className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                Oluştur
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Excel Tarzı Tablo */}
      {isMatrixCreated && trees.length > 0 && (
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-auto max-h-[70vh]">
              <table className="w-full border-collapse">
                <thead className="bg-green-600 text-white sticky top-0 z-10">
                  <tr>
                    <th className="border-2 border-green-700 p-2 font-bold text-sm w-16"></th>
                    {Array.from({ length: colCount }, (_, i) => (
                      <th key={i} className="border-2 border-green-700 p-2 font-bold text-sm min-w-[100px]">
                        {getColumnLabel(i)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: rowCount }, (_, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-green-50 transition-colors">
                      <td className="border-2 border-gray-300 p-2 text-center font-bold text-sm bg-green-100 text-green-800">
                        {rowIndex + 1}
                      </td>
                      {Array.from({ length: colCount }, (_, colIndex) => {
                        const tree = getTreeAt(colIndex, rowIndex);
                        return (
                          <td 
                            key={colIndex} 
                            className="border-2 border-gray-300 p-3 text-center hover:bg-green-100 cursor-pointer transition-all duration-200"
                          >
                            {tree && (
                              <div className="flex flex-col items-center gap-1">
                                {/* Ağaç İkonu */}
                                <div className="relative">
                                  {/* Taç */}
                                  <div className="relative flex flex-col items-center">
                                    <div
                                      className="bg-gradient-to-b from-green-600 to-green-700"
                                      style={{
                                        width: "30px",
                                        height: "25px",
                                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                                      }}
                                    ></div>
                                    <div
                                      className="bg-gradient-to-b from-green-500 to-green-600 -mt-2"
                                      style={{
                                        width: "38px",
                                        height: "25px",
                                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* Gövde */}
                                  <div
                                    className="bg-gradient-to-b from-amber-700 to-amber-800 mx-auto"
                                    style={{
                                      width: "12px",
                                      height: "18px",
                                      borderRadius: "0 0 3px 3px",
                                    }}
                                  ></div>
                                </div>
                                {/* Ağaç Numarası */}
                                <span className="text-xs font-bold text-gray-700">
                                  {tree.treeNumber}
                                </span>
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bilgi */}
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              Her hücre bir ağacı temsil eder • Tabloda gezinmek için kaydırın
            </p>
          </div>
        </div>
      )}

      {/* Boş Durum */}
      {!isMatrixCreated && !showMatrixModal && (
        <div className="max-w-2xl mx-auto text-center py-20">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="text-6xl mb-4">🌳</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Ağaç Tablosu Oluşturun
            </h3>
            <p className="text-gray-600 mb-6">
              Excel gibi bir tabloda ağaçlarınızı görüntüleyin.
              Her ağaç sütun harfi ve satır numarası ile isimlendirilir.
            </p>
            <button
              onClick={() => setShowMatrixModal(true)}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              Başla
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TreesScreen;