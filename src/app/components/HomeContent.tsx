import Link from 'next/link';

export default function HomeContent() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7] pt-24 md:pt-32">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] via-[#f5edea] to-[#dcd0cd]" />

        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#800000]/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#800000]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        {/* Grid Pattern */}
        <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            }}
        />

        {/* Content */}
        <div className="container relative z-10 mx-auto px-6 text-center max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-2 rounded-full
            text-xs md:text-sm font-bold
            uppercase tracking-[0.2em] mb-8 shadow-lg">
                Karang Taruna RW 16
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-[#1A1A1A]">
            BANGUN
            <br />
            <span className="relative text-[#800000]">
                AKSI
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#800000]/20 rounded-full" />
            </span>
            .
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-700 mb-12 leading-relaxed">
            Wadah kolaborasi pemuda RW 16 untuk menciptakan
            <span className="font-bold text-[#800000]"> perubahan nyata</span>, mempererat kebersamaan, dan membangun lingkungan yang lebih baik.
            </p>

            {/* CTA */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <Link href="#profil" className="bg-[#800000] text-white px-8 py-4 rounded-full font-bold hover:bg-[#650000] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Kenalan Lebih Jauh
            </Link>

            <Link href="#galeri" className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-full font-bold hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 hover:-translate-y-1">
                Intip Galeri Kami
            </Link>
            </div>
        </div>
        </section>
    );
}
