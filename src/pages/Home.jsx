import { StarBG } from "../components/StarBG";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { ProjectsSection } from "../components/ProjectsSection";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <StarBG />
            <Navbar />
            <main>
                <HeroSection />
                <About />
                <Skills />
                <ProjectsSection />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default Home;