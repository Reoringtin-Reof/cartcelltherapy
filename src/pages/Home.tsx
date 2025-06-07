import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, BookOpen, HeartPulse } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-theme-navy/90 to-theme-navy/70" />
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fadeInUp">
            Revolutionizing Cancer Treatment with CAR-T Cell Therapy
          </h1>
          <p className="text-xl md:text-2xl text-theme-teal-light mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            A groundbreaking approach that harnesses the power of the immune system to fight cancer.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/about" 
              className="bg-theme-teal hover:bg-theme-teal-dark text-white px-8 py-4 rounded-full font-medium inline-flex items-center justify-center transition-all hover:shadow-lg hover-lift"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/molecular-processes" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-medium inline-flex items-center justify-center transition-all hover:shadow-lg hover-lift"
            >
              Molecular Processes
            </Link>
          </div>
        </div>
      </section>

      {/* What is CAR-T Section */}
      <section className="py-24 bg-theme-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-theme-navy mb-6">What is CAR-T Cell Therapy?</h2>
            <p className="text-xl text-theme-navy/80 max-w-3xl mx-auto">
              Chimeric Antigen Receptor T-cell therapy is a form of immunotherapy that uses specially altered T cells to fight cancer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Laboratory scientist working with cells" 
                className="rounded-2xl shadow-2xl w-full h-auto hover-lift"
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-theme-navy mb-6">A Personalized Approach to Cancer Treatment</h3>
              <p className="text-lg text-theme-navy/80 mb-8">
                CAR-T cell therapy involves collecting a patient's own T cells, genetically modifying them in a laboratory to recognize and attack cancer cells, and then infusing them back into the patient.
              </p>
              <p className="text-lg text-theme-navy/80 mb-8">
                This revolutionary approach has shown remarkable success in treating certain blood cancers, including some forms of leukemia and lymphoma, particularly in patients who have not responded to other treatments.
              </p>
              <Link 
                to="/about" 
                className="text-theme-teal hover:text-theme-teal-dark font-medium inline-flex items-center transition-colors"
              >
                Discover how CAR-T works <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-theme-navy mb-6">Key Benefits of CAR-T Therapy</h2>
            <p className="text-xl text-theme-navy/80 max-w-3xl mx-auto">
              CAR-T cell therapy offers several advantages over traditional cancer treatments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-theme-cream p-8 rounded-2xl shadow-lg hover-lift">
              <Award className="h-12 w-12 text-theme-teal mb-6" />
              <h3 className="text-2xl font-semibold text-theme-navy mb-4">Targeted Approach</h3>
              <p className="text-theme-navy/80">
                CAR-T cells are engineered to recognize specific proteins on cancer cells, allowing for a highly targeted treatment that spares healthy cells.
              </p>
            </div>
            
            <div className="bg-theme-cream p-8 rounded-2xl shadow-lg hover-lift">
              <HeartPulse className="h-12 w-12 text-theme-teal mb-6" />
              <h3 className="text-2xl font-semibold text-theme-navy mb-4">Durable Responses</h3>
              <p className="text-theme-navy/80">
                Many patients experience long-lasting remissions, as CAR-T cells can persist in the body and provide ongoing surveillance against cancer recurrence.
              </p>
            </div>
            
            <div className="bg-theme-cream p-8 rounded-2xl shadow-lg hover-lift">
              <Users className="h-12 w-12 text-theme-teal mb-6" />
              <h3 className="text-2xl font-semibold text-theme-navy mb-4">Hope for Refractory Cases</h3>
              <p className="text-theme-navy/80">
                CAR-T therapy has shown effectiveness in patients whose cancer has returned or not responded to multiple previous treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-theme-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 text-theme-teal mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-6">Learn More About CAR-T Cell Therapy</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-theme-teal-light">
            Explore our comprehensive resources to understand this groundbreaking cancer treatment approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/molecular-processes" 
              className="bg-theme-teal hover:bg-theme-teal-dark text-white px-8 py-4 rounded-full font-medium inline-flex items-center justify-center transition-all hover:shadow-lg hover-lift"
            >
              Molecular Processes
            </Link>
            <Link 
              to="/future" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-medium inline-flex items-center justify-center transition-all hover:shadow-lg hover-lift"
            >
              Future of CAR-T
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;