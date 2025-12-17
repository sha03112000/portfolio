import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

export default function App() {
  const handleDownloadResume = (fileUrl: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;       
    link.download = "Shabad_MK_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero onDownloadResume={handleDownloadResume} />
      <Skills />
      <Projects />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
