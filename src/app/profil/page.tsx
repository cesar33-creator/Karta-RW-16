'use client';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Profil() {
    // Animasi yang sudah dioptimalkan agar gesit dan ringan
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, when: "beforeChildren" },
        },
    };

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const imageReveal: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <main className="relative bg-[#FDFBF7] selection:bg-[#800000] selection:text-white z-0 overflow-hidden min-h-screen">

            {/* --- BACKGROUND LAYER --- */}
            {/* 1. Header Marun: Height disesuaikan untuk mobile (45vh) dan desktop (75vh) agar proporsional */}
            <div className="absolute top-0 left-0 w-full h-[45vh] lg:h-[75vh] bg-gradient-to-br from-[#800000] via-[#6e0000] to-[#4a0000] -z-20 shadow-inner" />

            {/* 2. Giant Typography: Ukuran font dikecilkan drastis di mobile (text-[6rem]) agar tidak terpotong jelek */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full overflow-hidden flex justify-center -z-10 pointer-events-none select-none">
                <h1 className="text-[6rem] md:text-[10rem] lg:text-[16rem] font-black text-white/[0.04] whitespace-nowrap tracking-tighter mt-16 md:mt-10">
                    KARANG TARUNA
                </h1>
            </div>
            {/* ------------------------ */}

            {/* Padding atas (pt) disesuaikan agar card naik sedikit di versi mobile */}
            <section className="relative pt-24 md:pt-40 lg:pt-48 pb-16 md:pb-24 z-10">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        // Card Padding: P-6 untuk HP, P-20 untuk Desktop. Rounded juga disesuaikan.
                        className="bg-white rounded-[24px] md:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] lg:shadow-[0_30px_100px_rgba(0,0,0,0.15)] p-6 sm:p-8 md:p-14 lg:p-20 relative overflow-hidden"
                    >
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">

                            {/* KIRI: BAGIAN GAMBAR */}
                            <motion.div variants={imageReveal} className="relative order-2 lg:order-1 mt-6 lg:mt-0">
                                {/* Border Background: Offset (-top, -left) didekatkan di mobile agar tidak keluar batas layar */}
                                <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-full h-full border-4 border-gray-100 rounded-[20px] md:rounded-[32px]" />

                                <div className="relative overflow-hidden rounded-[20px] md:rounded-[32px] shadow-xl lg:shadow-2xl group">
                                    <Image
                                        src="/images/galeri/profil-karta.jpeg"
                                        alt="Tentang Karang Taruna"
                                        width={700}
                                        height={700}
                                        // Tinggi gambar: 280px di HP, 520px di layat besar
                                        className="w-full aspect-[4/5] lg:h-[520px] lg:aspect-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Floating Badge: Ukuran font, padding, dan posisinya disesuaikan agar rapi di HP */}
                                <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 bg-[#1A1A1A] text-white px-5 py-4 lg:px-8 lg:py-6 rounded-[16px] lg:rounded-[24px] shadow-xl z-20 border-2 lg:border-4 border-white">
                                    <p className="text-2xl lg:text-4xl font-black mb-1 text-[#FDFBF7]">RW 16</p>
                                    <div className="w-8 lg:w-10 h-1 bg-[#800000] mb-1.5 lg:mb-2 rounded-full" />
                                    <p className="text-[10px] lg:text-xs font-bold tracking-widest opacity-80 uppercase">Pemuda Berkarya</p>
                                </div>
                            </motion.div>

                            {/* KANAN: BAGIAN KONTEN */}
                            <div className="order-1 lg:order-2">
                                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 lg:gap-3 mb-6 lg:mb-8">
                                    <span className="w-6 lg:w-8 h-[2px] bg-[#800000]" />
                                    <span className="text-[#800000] text-xs lg:text-sm font-bold tracking-[0.2em] uppercase">
                                        Tentang Kami
                                    </span>
                                </motion.div>

                                {/* Tipografi: text-3xl untuk mobile agar tidak memakan terlalu banyak baris */}
                                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 lg:mb-8">
                                    Karang Taruna <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800000] to-[#b30000]">
                                        RW 16
                                    </span>
                                </motion.h2>

                                <motion.div variants={fadeInUp} className="space-y-4 lg:space-y-6">
                                    {/* Paragraf: Ukuran font sedikit dikecilkan di mobile */}
                                    <p className="text-gray-800 leading-relaxed text-base lg:text-xl font-medium">
                                        Karang Taruna RW 16 merupakan organisasi kepemudaan yang menjadi wadah pengembangan generasi muda dalam meningkatkan kepedulian sosial, semangat gotong royong, dan partisipasi aktif dalam pembangunan lingkungan.
                                    </p>

                                    <p className="text-gray-500 leading-relaxed text-sm md:text-base lg:text-lg">
                                        Melalui berbagai kegiatan sosial, olahraga, pendidikan, dan lingkungan, kami berkomitmen menciptakan pemuda yang produktif, kreatif, bertanggung jawab, dan mampu memberikan dampak positif bagi masyarakat.
                                    </p>
                                </motion.div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}