'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryData = [
    { id: 1, image: "/images/galeri/kerjabakti.jpeg", caption: "Kerja Bakti Lingkungan", desc: "Gotong royong warga RW 16 dalam menjaga kebersihan lingkungan agar tetap asri dan nyaman." },
    { id: 2, image: "/images/galeri/perayaan.jpg", caption: "Perayaan 17 Agustus", desc: "Kemeriahan lomba dan pentas seni dalam rangka memperingati Hari Kemerdekaan RI ke-81." },
    { id: 3, image: "/images/galeri/futsal.jpg", caption: "Turnamen Futsal RW 16", desc: "Ajang silaturahmi antar pemuda melalui kompetisi futsal yang menjunjung tinggi sportivitas." },
    { id: 4, image: "/images/galeri/nobar.jpeg", caption: "Nonton Bareng Persib", desc: "Warga RW 16 berkumpul untuk menyaksikan pertandingan sepak bola persib sambil menikmati kebersamaan." },
];

export default function Galeri() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % galleryData.length);
        }, 10000);
    };

    useEffect(() => {
        startTimer();
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, []);

    const changeSlide = (newIndex: number) => {
        const validatedIndex = (newIndex + galleryData.length) % galleryData.length;
        setCurrentIndex(validatedIndex);
        startTimer();
    };

    return (
        // Gunakan mode="wait" pada AnimatePresence di layout agar transisi antar halaman mulus
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-32 md:pt-20 pb-20 px-4 relative overflow-hidden bg-[#FDFBF7]"
        >
            {/* Background Texture & Mesh Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.07]"
                    style={{ backgroundImage: 'radial-gradient(#800000 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#800000]/10 blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#800000]/20 blur-[120px]"
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-4">Galeri <span style={{ color: '#800000' }}>Kami</span></h2>
                    <p className="text-gray-500 font-medium px-2">Rekam jejak kegiatan dan momen kebersamaan warga RW 16</p>
                </div>

                <div className="relative w-full aspect-[4/5] md:aspect-[16/9] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={galleryData[currentIndex].id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }} // Durasi lebih pendek agar terasa responsif
                            className="absolute inset-0"
                        >
                            {/* Optimasi image dengan loading="lazy" agar tidak lag */}
                            <img
                                src={galleryData[currentIndex].image}
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-white text-2xl md:text-4xl font-black mb-2"
                                >
                                    {galleryData[currentIndex].caption}
                                </motion.h3>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-gray-200 text-sm md:text-lg max-w-xl line-clamp-3"
                                >
                                    {galleryData[currentIndex].desc}
                                </motion.p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigasi Overlay */}
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#800000" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => changeSlide(currentIndex - 1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 md:p-4 rounded-full transition-colors z-20"
                    >
                        <ChevronLeft size={28} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#800000" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => changeSlide(currentIndex + 1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 md:p-4 rounded-full transition-colors z-20"
                    >
                        <ChevronRight size={28} />
                    </motion.button>
                </div>
            </div>
        </motion.main>
    );
}