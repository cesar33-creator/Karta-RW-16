'use client';
import { FaInstagram, FaWhatsapp, FaTiktok, FaEnvelope, FaChevronUp, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="relative bg-[#FDFBF7] pt-20 pb-10 px-4 overflow-hidden border-t border-[#800000]/10">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#800000]/50 to-transparent" />

            {/* Grid 2 Kolom Utama */}
            <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 text-center md:text-left">

                {/* Kolom 1: Branding & Alamat */}
                <div className="space-y-8 flex flex-col items-center md:items-start">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900">Karta <span style={{ color: '#800000' }}>RW 16</span></h3>
                        <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-xs">
                            Satu tekad, satu tujuan. Membangun lingkungan yang harmonis, guyub, dan inovatif bagi seluruh warga RW 16.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900 flex justify-center md:justify-start items-center gap-2">
                            <FaMapMarkerAlt className="text-[#800000]" /> Alamat
                        </h4>
                        <p className="text-sm text-gray-600 font-medium leading-relaxed">
                            Komplek Pos Giro RW 16<br />
                            Kecamatan Arcamanik,<br />
                            Kota Bandung, Jawa Barat.
                        </p>
                    </div>
                </div>

                {/* Kolom 2: Kontak Kami (Grid 2x2) */}
                <div className="space-y-4 flex flex-col items-center md:items-start">
                    <h4 className="text-lg font-bold text-gray-900">Kontak Kami</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[600px]">
                        {[
                            { icon: FaInstagram, label: "Instagram", link: "#" },
                            { icon: FaWhatsapp, label: "WhatsApp", link: "#" },
                            { icon: FaTiktok, label: "TikTok", link: "#" },
                            { icon: FaEnvelope, label: "Email", link: "#" },
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 px-4 py-3 rounded-[1rem] border border-[#800000]/10 bg-white hover:border-[#800000]/30 hover:bg-[#800000]/5 transition-all duration-300 group"
                            >
                                <div className="text-[#800000] shrink-0">
                                    <item.icon size={22} />
                                </div>
                                <div className="flex flex-col items-start overflow-hidden">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest transition-colors duration-300 group-hover:text-[#800000]">
                                        {item.label}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-[#800000]/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-xs font-bold text-gray-400">© 2026 Karang Taruna RW 16. All rights reserved.</p>
                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#800000]/20 bg-white/80 shadow-sm text-[#800000] font-bold hover:bg-[#800000] hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                    Back to Top <FaChevronUp size={14} />
                </button>
            </div>
        </footer>
    );
}