import React from 'react';
import { Dna, Microscope, Share2, Zap } from 'lucide-react';

const MolecularProcesses = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-theme-navy to-blue-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
              Molecular Structure & Processes
            </h1>
            <p className="text-xl text-theme-teal-light mb-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Understanding the cellular and molecular mechanisms behind CAR-T cell technology
            </p>
          </div>
        </div>
      </section>

      {/* Molecular Structure Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Dna className="h-12 w-12 text-theme-teal mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-theme-navy mb-4">CAR Molecular Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The chimeric antigen receptor combines elements from different proteins to create a novel immune receptor
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://bpsbioscience.com/media/wysiwyg/Landing_Pages/Custom_CAR-T_Diagram.png"
                alt="CAR-T Molecular Structure" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <p className="text-sm text-gray-500 mt-2 italic">
                Image credit: BPS Bioscience (bpsbioscience.com)
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Components of the CAR</h3>
                <p className="text-gray-600">
                  The chimeric antigen receptor consists of several key domains:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                  <li>Single-chain variable fragment (scFv) for antigen recognition</li>
                  <li>Hinge/spacer region for flexibility</li>
                  <li>Transmembrane domain</li>
                  <li>Intracellular signaling domains</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Evolution of CAR Design</h3>
                <p className="text-gray-600">
                  CAR design has evolved through multiple generations, each adding additional signaling domains to improve T cell function and persistence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cellular Processes Section */}
      <section className="py-16 bg-theme-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Share2 className="h-12 w-12 text-theme-teal mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-theme-navy mb-4">Cellular Mechanisms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The complex cellular processes involved in CAR-T cell function
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_article/public/cgov_infographic/100/600/9/files/CAR-T-Cell-therapy-infographic.jpg?itok=XAqeM_1H"
              alt="CAR-T Cell Therapy Process" 
              className="rounded-lg shadow-lg w-full h-auto max-w-4xl mx-auto"
            />
            <p className="text-sm text-gray-500 mt-2 italic text-center">
              Image credit: National Cancer Institute (www.cancer.gov)
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">T Cell Activation</h3>
              <p className="text-gray-600">
                When a CAR-T cell encounters its target antigen, it triggers a signaling cascade that leads to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                <li>Release of cytokines and chemokines</li>
                <li>T cell proliferation</li>
                <li>Enhanced cell survival</li>
                <li>Cytotoxic activity against target cells</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">Cytotoxic Mechanisms</h3>
              <p className="text-gray-600">
                Activated CAR-T cells eliminate target cells through multiple mechanisms:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                <li>Release of perforin and granzymes</li>
                <li>Fas/FasL-mediated apoptosis</li>
                <li>Cytokine-mediated effects</li>
                <li>Recruitment of other immune cells</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gene Engineering Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Microscope className="h-12 w-12 text-theme-teal mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-theme-navy mb-4">Genetic Engineering Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The molecular biology techniques used to create CAR-T cells
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-theme-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">Vector Design</h3>
              <p className="text-gray-600">
                Viral vectors, typically lentiviruses or retroviruses, are engineered to carry the CAR gene. These vectors include:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                <li>Promoter elements for gene expression</li>
                <li>CAR coding sequence</li>
                <li>Additional regulatory elements</li>
                <li>Safety features to prevent viral replication</li>
              </ul>
            </div>
            
            <div className="bg-theme-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">Gene Transfer</h3>
              <p className="text-gray-600">
                The process of introducing the CAR gene into T cells involves:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                <li>T cell activation to prepare for gene transfer</li>
                <li>Viral transduction or other gene transfer methods</li>
                <li>Integration of CAR gene into T cell genome</li>
                <li>Selection of successfully modified cells</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Applications Section */}
      <section className="py-16 bg-theme-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Zap className="h-12 w-12 text-theme-teal mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-theme-navy mb-4">Current Research Directions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ongoing research to understand and improve CAR-T cell technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">Target Identification</h3>
              <p className="text-gray-600">
                Research into new target antigens that are:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                <li>Highly expressed on target cells</li>
                <li>Minimally expressed on healthy tissues</li>
                <li>Stable and not prone to mutation</li>
                <li>Accessible to CAR-T cells</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">CAR Design Innovation</h3>
              <p className="text-gray-600">
                Development of advanced CAR designs:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                <li>Multi-specific CARs</li>
                <li>Switchable CAR systems</li>
                <li>Logic-gated CARs</li>
                <li>Novel costimulatory domains</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">Safety Mechanisms</h3>
              <p className="text-gray-600">
                Investigation of safety strategies:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                <li>Suicide genes</li>
                <li>ON/OFF switches</li>
                <li>Dual-targeting approaches</li>
                <li>Regulated expression systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MolecularProcesses;