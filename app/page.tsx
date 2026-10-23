import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectCarousel />
        
        {/* Education/Media Teaser */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-2xl mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                Technology Education in Somali
              </h2>
              <p className="text-xl text-secondary">
                I translate AI, technology, productivity and content-creation concepts into practical Somali educational content.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Teaser cards for education content would go here */}
              <div className="bg-white rounded-3xl p-8 border border-border shadow-sm flex flex-col justify-center items-center text-center h-64">
                <div className="w-16 h-16 rounded-full bg-accent-red/10 text-accent-red flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Video Content</h3>
                <p className="text-secondary text-sm">Educational tutorials on AI and development.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
