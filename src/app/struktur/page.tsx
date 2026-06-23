'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants, useInView } from 'framer-motion';
import { ChevronDown, Users, Shield, Zap } from 'lucide-react';


interface Member {
    id: number;
    nama: string;
    role: string;
    bio: string;
    image?: string;
}

// --- DATA PENGURUS MASA BAKTI 2025 - 2030 ---
const strukturData = [
    {
        id: "pengurus-inti",
        title: "PENGURUS INTI",
        subtitle: "Badan Pengurus Harian (BPH)",
        icon: <Shield className="w-5 h-5 text-[#800000]" />,
        members: [
            { id: 1, nama: "Cesar Rais Akhtar", role: "Ketua", bio: "Ketua Karang Taruna RW 16 periode 2025-2030.", image: "/images/profil/cesar.jpg" },
            { id: 2, nama: "Fikrie Ahmad Fauzi", role: "Wakil Ketua", bio: "Wakil Ketua Karang Taruna RW 16.", image: "" },
            { id: 3, nama: "Ridho Alfarizi", role: "Sekretaris", bio: "Sekretaris 1 Karang Taruna RW 16.", image: "" },
            { id: 4, nama: "Syahla Ghaaitsa K.", role: "Sekretaris", bio: "Sekretaris 2 Karang Taruna RW 16.", image: "" },
            { id: 5, nama: "Khairunisa Najwa Akbar", role: "Bendahara", bio: "Bendahara 1 Karang Taruna RW 16.", image: "" },
            { id: 6, nama: "Indira Putri Agustina", role: "Bendahara", bio: "Bendahara 2 Karang Taruna RW 16.", image: "" },
        ]
    },
    {
        id: "humas-kemitraan",
        title: "HUMAS & KEMITRAAN",
        subtitle: "Divisi Humas & Dana Usaha/Kemitraan",
        icon: <Zap className="w-5 h-5 text-orange-600" />,
        members: [
            { id: 7, nama: "Nazril Langit Alkhalifi", role: "Humas", bio: "Staff Humas Karang Taruna RW 16.", image: "" },
            { id: 8, nama: "Anggi Putri Fandryani", role: "Humas", bio: "Staff Humas Karang Taruna RW 16.", image: "" },
            { id: 9, nama: "Nizma Aisha Putri", role: "Humas", bio: "Staff Humas Karang Taruna RW 16.", image: "" },
            { id: 10, nama: "Rakha Naufal Fawaz", role: "Dana Usaha", bio: "Staff Dana Usaha Karang Taruna RW 16.", image: "" },
            { id: 11, nama: "Arya Syafiq Fakhriansyah", role: "Dana Usaha", bio: "Staff Dana Usaha Karang Taruna RW 16.", image: "" },
            { id: 12, nama: "Hanif Yoga Sriwardana", role: "Dana Usaha", bio: "Staff Dana Usaha Karang Taruna RW 16.", image: "" },
        ]
    },
    {
        id: "olahraga-kerohanian",
        title: "OLAHRAGA & KEROHANIAN",
        subtitle: "Divisi Olahraga, Kesenian & Kerohanian",
        icon: <Users className="w-5 h-5 text-blue-600" />,
        members: [
            { id: 13, nama: "Rivaldy Bagus Setiawan", role: "Olahraga & Kesenian", bio: "Staff Olahraga & Kesenian.", image: "" },
            { id: 14, nama: "Muhammad Rizky Januar", role: "Olahraga & Kesenian", bio: "Staff Olahraga & Kesenian.", image: "" },
            { id: 15, nama: "Diniyatisailmi", role: "Olahraga & Kesenian", bio: "Staff Olahraga & Kesenian.", image: "" },
            { id: 16, nama: "Muhammad Alif Alfatih", role: "Kerohanian", bio: "Staff Kerohanian Karang Taruna RW 16.", image: "" },
            { id: 17, nama: "Nadhifa Nurul Aini", role: "Kerohanian", bio: "Staff Kerohanian Karang Taruna RW 16.", image: "" },
        ]
    }
];

const RingSection = ({ data }: { data: typeof strukturData[0] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMember, setActiveMember] = useState<Member | null>(null);

    return (
        <div className="relative mb-6">
            <div className={`border transition-colors duration-300 rounded-2xl md:rounded-3xl overflow-hidden ${isOpen ? 'border-[#800000]/20 bg-white' : 'border-gray-200 bg-white hover:bg-gray-50'}`}>
                {/* Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 md:p-8 cursor-pointer select-none" onClick={() => setIsOpen(!isOpen)}>
                    <div className="flex items-center gap-3 md:gap-5">
                        <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center border ${isOpen ? 'bg-[#800000]/10 border-[#800000]/30' : 'bg-gray-50 border-gray-100'}`}>
                            {data.icon}
                        </div>
                        <div>
                            <div className="flex flex-wrap items-center gap-2">
                                <h2 className="text-lg md:text-2xl font-black text-gray-900 tracking-widest">{data.title}</h2>
                                <span className="bg-gray-100 text-gray-600 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full">{data.members.length} Orang</span>
                            </div>
                            <p className="text-gray-500 text-xs md:text-sm font-medium">{data.subtitle}</p>
                        </div>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                </div>

                {/* ANIMASI SUPER SMOOTH DENGAN CSS GRID (Tanpa Lag) */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                        transition: 'grid-template-rows 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                >
                    <div className="overflow-hidden">
                        <div className="p-4 sm:p-6 md:p-8 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {data.members.map((member) => (
                                <div key={member.id} className="bg-[#FDFBF7] border border-gray-100 rounded-xl p-4 cursor-pointer hover:border-[#800000]/30 transition-all flex items-center gap-3" onClick={() => setActiveMember(member)}>
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0 bg-gray-200">
                                        {member.image ? <img src={member.image} alt={member.nama} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center font-bold text-xs text-gray-500">{member.nama.charAt(0)}</div>}
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-bold text-sm">{member.nama}</h3>
                                        <p className="text-gray-500 text-xs">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {activeMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]"
                        onClick={() => setActiveMember(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 10 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 10 }}
                            // Border dibuat sangat tipis (p-[1px]) dan transparan (border-[#800000]/10)
                            className="bg-white p-[3px] rounded-[2rem] max-w-[280px] w-full shadow-xl border border-[#800000]/10 overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Bagian Utama - Foto dengan Teks Overlay */}
                            <div className="relative h-80 rounded-[1.8rem] overflow-hidden">
                                {/* Foto */}
                                {activeMember.image ? (
                                    <img src={activeMember.image} alt={activeMember.nama} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-4xl font-black text-gray-400">
                                        {activeMember.nama.charAt(0)}
                                    </div>
                                )}

                                {/* Overlay Text */}
                                <div className="absolute inset-0 p-5 flex flex-col justify-between bg-gradient-to-b from-black/40 via-transparent to-black/80 text-white text-center">
                                    <div className="flex justify-center pt-2">
                                        <span className="bg-[#800000] px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest text-white shadow-md">
                                            {activeMember.role}
                                        </span>
                                    </div>
                                    <div className="pb-2">
                                        <h2 className="text-xl font-black mb-1 leading-tight">{activeMember.nama}</h2>
                                        <p className="text-[11px] text-gray-200 leading-tight mb-4 px-2 line-clamp-2">
                                            {activeMember.bio}
                                        </p>
                                        <button
                                            className="w-full py-2 bg-white text-[#800000] rounded-xl font-bold text-[11px] hover:bg-gray-100 transition-colors"
                                            onClick={() => setActiveMember(null)}
                                            >
                                            TUTUP
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function Struktur() {
    const ref = useRef(null);
    // isInView akan bernilai true saat div ini masuk ke layar
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    }as Variants;

return (
        <main className="min-h-screen bg-[#FDFBF7] pt-28 md:pt-36 pb-20 px-4 font-sans selection:bg-[#800000] selection:text-white relative overflow-hidden">

            {/* --- BACKGROUND LAYER (TEMA MARUN YANG BERBEDA) --- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* 1. Pola Background: Berita pakai Grid (Kotak), Struktur pakai Diagonal Lines (Sangat Beda) */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, #800000, #800000 1px, transparent 1px, transparent 10px)',
                        backgroundSize: '30px 30px'
                    }}
                />
                <motion.div
                    animate={{ y: [0, -40, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-[#800000]/5 blur-[80px] rounded-full"
                />
            </div>
            {/* ---------------------------------------------------- */}

            <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-14"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                        Struktur <span style={{ color: '#800000' }}>Organisasi</span>
                    </h1>

                    {/* Paragraf Penjelasan yang dikembalikan */}
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto font-medium">
                        Susunan pengurus Karang Taruna RW 16 <strong style={{ color: '#800000' }}>Masa Bakti 2025 - 2030</strong>.
                        Para pemuda-pemudi penggerak yang mendedikasikan waktu dan tenaga untuk kemajuan lingkungan RW 16.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {strukturData.map((ring) => (
                        <motion.div key={ring.id} variants={itemVariants}>
                            <RingSection data={ring} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}