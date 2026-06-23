import Navbar from './components/Navbar';
import HomeContent from './components/HomeContent';
import Profil from './profil/page';
import Struktur from './struktur/page';
import Galeri from './galeri/page';
import Berita from './berita/page';


export default function Home() {
    return (
        <>
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
        </main>
        </>
    );
}
