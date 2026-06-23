'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const beritaData = [
    { id: 1, title: "Turnamen Futsal RW 16 Berjalan Sukses", date: "22 Juni 2026", excerpt: "Antusiasme pemuda sangat tinggi dalam gelaran turnamen futsal tahunan kali ini...", content: "Turnamen futsal tahunan RW 16 sukses digelar dengan antusiasme tinggi dari para pemuda. Pertandingan berlangsung sportif dan mempererat tali silaturahmi antarwarga.", image: "/images/berita/futsal.jpg" },
    { id: 2, title: "Program Kerja Bakti Bulanan", date: "15 Juni 2026", excerpt: "Warga RW 16 kompak membersihkan saluran air jelang musim hujan...", content: "Aksi gotong royong warga RW 16 dalam membersihkan saluran air dan lingkungan sekitar sebagai langkah antisipasi memasuki musim penghujan agar lingkungan tetap bersih dan terhindar dari banjir.", image: "/images/berita/kerjabakti.jpeg" },
    { id: 3, title: "Peringatan Hari Kemerdekaan", date: "01 Juni 2026", excerpt: "Persiapan matang untuk perayaan 17 Agustus mendatang sudah dimulai...", content: "Panitia perayaan Hari Kemerdekaan RW 16 telah memulai rapat persiapan untuk berbagai lomba dan kegiatan puncak peringatan HUT RI ke-81.", image: "/images/berita/perayaan.jpg" },
];

export default function Berita() {
    const [activeBerita, setActiveBerita] = useState<typeof beritaData[0] | null>(null);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen pt-32 pb-20 px-4 bg-[#FDFBF7] relative overflow-hidden"
        >
            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* 1. Base Grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #800000 1px, transparent 1px), linear-gradient(to bottom, #800000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                {/* 2. Geometric Bars (Balok Samping) */}
                <div className="absolute top-[15%] -left-6 w-12 h-64 bg-gradient-to-b from-[#800000]/15 to-transparent rounded-r-full" />
                <div className="absolute bottom-[15%] -right-6 w-12 h-64 bg-gradient-to-t from-[#800000]/15 to-transparent rounded-l-full" />

                {/* 3. Frame Corners (Aksen Sudut) */}
                <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-[#800000]/20 rounded-tl-xl" />
                <div className="absolute bottom-10 right-10 w-16 h-16 border-b-2 border-r-2 border-[#800000]/20 rounded-br-xl" />

                {/* 4. Vertical Accents (Desktop only) */}
                <div className="hidden lg:block absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#800000]/10 to-transparent" />
                <div className="hidden lg:block absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#800000]/10 to-transparent" />
            </div>

            {/* --- CONTENT --- */}
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                        Kabar <span style={{ color: '#800000' }}>Terbaru</span>
                    </h2>
                    <p className="text-gray-500 font-medium">Informasi terkini kegiatan warga RW 16</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {beritaData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-4 left-4 bg-[#800000] text-white text-xs font-bold px-3 py-1 rounded-full">Berita</div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <span className="text-[#800000] text-sm font-bold tracking-wider">{item.date}</span>
                                <h3 className="text-2xl font-black text-gray-900 mt-2 mb-4 leading-snug transition-colors duration-300 group-hover:text-[#800000]">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">{item.excerpt}</p>

                                <button
                                    onClick={() => setActiveBerita(item)}
                                    className="w-full py-3 rounded-xl border-2 border-gray-950 font-bold text-gray-950 hover:bg-[#800000] hover:border-[#800000] hover:text-white transition-all duration-300"
                                >
                                    Baca Selengkapnya
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            <AnimatePresence>
                {activeBerita && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setActiveBerita(null)}>
                        <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white p-4 rounded-[2rem] max-w-md w-full shadow-2xl border border-[#800000]/10 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <div className="relative h-56 rounded-[1.5rem] overflow-hidden mb-6">
                                <img src={activeBerita.image} alt={activeBerita.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="px-2">
                                <span className="text-[#800000] font-bold">{activeBerita.date}</span>
                                <h2 className="text-2xl font-black text-gray-900 mt-1 mb-4 leading-tight">{activeBerita.title}</h2>
                                <p className="text-gray-700 mb-6 font-medium">{activeBerita.content}</p>
                                <button onClick={() => setActiveBerita(null)} className="w-full py-3 bg-[#800000] text-white rounded-xl font-bold hover:bg-black transition-colors">
                                    Tutup Detail
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.main>
    );
}