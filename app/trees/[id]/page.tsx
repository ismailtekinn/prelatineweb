"use client";

import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Droplets,
  TrendingUp,
  Leaf,
  Activity,
  Scissors,
  Sprout,
  Bug,
  Camera,
  Ruler,
  Heart,
} from "lucide-react";

const TreeDetailPage = () => {
  const [activeTab, setActiveTab] = useState("genel");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-8 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Zeytin Ağacı #Z-027</h1>
                <div className="flex items-center gap-4 text-green-50">
                  <span className="flex items-center gap-1">
                    <Leaf className="w-4 h-4" />
                    Gemlik (Zeytin)
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Parsel 3 - Satır 5, Sütun 2
                  </span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-center">
                <div className="text-3xl font-bold">15</div>
                <div className="text-sm">Yaşında</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Sol: Görsel */}
            <div className="md:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
              <div className="relative w-full h-80 bg-green-100 rounded-xl overflow-hidden shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Ağaç Görseli</p>
                    <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">
                      Fotoğraf Yükle
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ: Hızlı Bilgiler */}
            <div className="md:w-1/2 p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">2024 Verimi</span>
                  </div>
                  <p className="text-2xl font-bold text-green-700">36 kg</p>
                  <p className="text-xs text-green-600 mt-1">↑ %12.5 artış</p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-xl border-2 border-amber-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-amber-600" />
                    <span className="text-sm text-gray-600">Sağlık</span>
                  </div>
                  <p className="text-2xl font-bold text-amber-700">Sağlıklı</p>
                  <p className="text-xs text-amber-600 mt-1">Mükemmel durum</p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <textarea
                  defaultValue="2010 yılında Akhisar Fidancılık'tan alınan aşılı fidan. Killi-tınlı toprakta mükemmel gelişim gösteriyor."
                  className="w-full h-24 text-sm text-gray-700 leading-relaxed bg-white rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Ağaç hakkında notlar..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sekmeler */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="flex gap-0 border-b bg-gray-50 overflow-x-auto sticky top-0 z-10">
            {[
              { id: "genel", label: "Genel", icon: Leaf },
              { id: "fidan", label: "Fidan & Dikim", icon: Sprout },
              { id: "fiziksel", label: "Fiziksel", icon: Ruler },
              { id: "verim", label: "Verim", icon: TrendingUp },
              { id: "bakim", label: "Bakım", icon: Activity },
              { id: "saglik", label: "Sağlık", icon: Heart },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`py-4 px-4 flex items-center justify-center gap-2 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "bg-white text-green-700 border-b-4 border-green-600 font-semibold"
                    : "text-gray-600 hover:bg-white/50 hover:text-green-600"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="w-5 h-5" />
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="p-6 min-h-[600px]">
            {activeTab === "genel" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Genel Bilgiler</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { label: "Ağaç Numarası", value: "Z-027" },
                    { label: "Tür (Cins)", value: "Zeytin" },
                    { label: "Alt Tür / Varyete", value: "Gemlik" },
                    { label: "Dikim Tarihi", value: "15 Mart 2010" },
                    { label: "Yaş", value: "15 yıl" },
                    { label: "Dikim Alanı / Parsel", value: "Parsel 3" },
                    { label: "Konum (Satır/Sütun)", value: "Satır 5, Sütun 2" },
                    { label: "Koordinat", value: "38.4192°K, 27.1287°D" },
                    { label: "Toprak Türü", value: "Killi-tınlı" },
                    { label: "Sulama Türü", value: "Damla sulama" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 text-sm">{item.label}</span>
                      <span className="font-semibold text-gray-800 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "fidan" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Fidan ve Dikim Bilgileri</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { label: "Fidan Kaynağı", value: "Akhisar Fidancılık A.Ş." },
                    { label: "Alındığı Kişi/Firma", value: "Mehmet Yıldız" },
                    { label: "Fidan Tipi", value: "Aşılı Fidan" },
                    { label: "Anaç Türü", value: "Yabani Zeytin Anacı" },
                    { label: "Aşılama Tarihi", value: "10 Ocak 2010" },
                    { label: "Aşı Tipi", value: "T Aşısı" },
                    { label: "Kalem Bilgisi", value: "Sertifikalı Gemlik" },
                    { label: "Dikimi Yapan", value: "Ahmet Yılmaz Ekibi" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 text-sm">{item.label}</span>
                      <span className="font-semibold text-gray-800 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "fiziksel" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Fiziksel Özellikler</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { label: "Gövde Çapı", value: "32 cm" },
                    { label: "Yükseklik", value: "3.5 m" },
                    { label: "Taç Genişliği", value: "4.2 m" },
                    { label: "Kök Durumu", value: "Sağlam ve Güçlü" },
                    { label: "Genel Sağlık Durumu", value: "Sağlıklı" },
                    { label: "Son Ölçüm Tarihi", value: "15 Ekim 2024" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 text-sm">{item.label}</span>
                      <span className="font-semibold text-gray-800 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "verim" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Verim ve Hasat</h2>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <p className="text-sm text-gray-600 mb-1">Bu Yıl (2024)</p>
                    <p className="text-2xl font-bold text-green-700">36 kg</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Geçen Yıl (2023)</p>
                    <p className="text-2xl font-bold text-blue-700">32 kg</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                    <p className="text-sm text-gray-600 mb-1">Ortalama (5 Yıl)</p>
                    <p className="text-2xl font-bold text-purple-700">31.2 kg</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead className="bg-green-100">
                      <tr>
                        <th className="p-3 text-left font-semibold">Yıl</th>
                        <th className="p-3 text-left font-semibold">Verim</th>
                        <th className="p-3 text-left font-semibold">Kalite</th>
                        <th className="p-3 text-left font-semibold">Hasat</th>
                        <th className="p-3 text-left font-semibold">Yöntem</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { year: 2024, yield: "36 kg", quality: "İri-Yağ %22", harvest: "15 Kas", method: "Elle" },
                        { year: 2023, yield: "32 kg", quality: "Orta-Yağ %20", harvest: "10 Kas", method: "Elle" },
                        { year: 2022, yield: "28 kg", quality: "Orta-Yağ %19", harvest: "20 Kas", method: "Silkeleme" },
                      ].map((row, idx) => (
                        <tr key={idx} className="border-t hover:bg-gray-50">
                          <td className="p-3 font-medium">{row.year}</td>
                          <td className="p-3 font-bold text-green-700">{row.yield}</td>
                          <td className="p-3">{row.quality}</td>
                          <td className="p-3">{row.harvest}</td>
                          <td className="p-3">{row.method}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "bakim" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Bakım Kayıtları</h2>
                
                {[
                  { title: "Budama", date: "15 Mart 2024", type: "Form Budaması", person: "Ali Kaya", icon: Scissors, color: "blue" },
                  { title: "Gübreleme", date: "20 Mayıs 2024", type: "15 kg Organik Kompost", person: "-", icon: Sprout, color: "green" },
                  { title: "İlaçlama", date: "10 Haz 2024", type: "Zeytin Sineği İlacı", person: "Tarım İlaçlama", icon: Bug, color: "purple" },
                  { title: "Sulama", date: "Aktif", type: "Damla sulama sistemi", person: "Otomatik", icon: Droplets, color: "cyan" },
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-start gap-4 p-4 rounded-xl bg-${item.color}-50 border-l-4 border-${item.color}-500`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-600 flex-shrink-0 mt-1`} />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.type}</p>
                      {item.person !== "-" && <p className="text-xs text-gray-500 mt-1">{item.person}</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "saglik" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Sağlık Durumu</h2>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold text-gray-800">Genel Sağlık: Mükemmel</h3>
                  </div>
                  <p className="text-sm text-gray-600">Ağaç sağlıklı gelişim gösteriyor. Hastalık belirtisi yok.</p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-700">Hastalık ve Zararlı Geçmişi</h3>
                  {[
                    { year: "2023", issue: "Zeytin Sineği", action: "Koruyucu ilaçlama yapıldı", status: "Çözüldü" },
                    { year: "2021", issue: "Yaprak Biti", action: "Doğal yağ spreyi uygulandı", status: "Çözüldü" },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-gray-800">{item.issue}</span>
                        <span className="text-sm text-gray-500">{item.year}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{item.action}</p>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeDetailPage;