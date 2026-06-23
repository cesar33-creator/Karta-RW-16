import Head from 'next/head'; // Tambahkan ini
import Navbar from './components/Navbar';
import HomeContent from './components/HomeContent';
import Profil from './profil/page';
import Struktur from './struktur/page';
import Galeri from './galeri/page';
import Berita from './berita/page';
import Footer from './components/Footer'; // Impor Footer Anda

export default function Home() {
    return (
        <>
        <Head>
            <title>Karang Taruna RW 16</title>
            <meta name="description" content="Website resmi Karang Taruna RW 16" />
        </Head>
        <main className="bg-[#ffffff]">
            <Navbar />

            <section id="home">
                <HomeContent />
            </section>

            <section id="profil">
                <Profil />
            </section>

            <section id="struktur">
                <Struktur />
            </section>

            <section id="galeri">
                <Galeri />
            </section>

            <section id="berita">
                <Berita />
            </section>

            {/* Footer ditambahkan di sini */}
            <Footer />
        </main>
        </>
    );
}