import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, History, Microscope, AlertTriangle, Clock } from 'lucide-react';

const About = () => {
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
              Understanding CAR-T Cell Therapy
            </h1>
          </div>
        </div>
      </section>

      {/* What is CAR-T Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is CAR-T Cell Therapy?</h2>
              <p className="text-gray-600 mb-4">
                Chimeric Antigen Receptor T-cell (CAR-T) therapy is a type of immunotherapy that uses a patient's own modified immune cells to fight cancer.
              </p>
              <p className="text-gray-600 mb-4">
                T cells are a type of white blood cell that plays a central role in the immune response. In CAR-T therapy, these cells are collected from the patient, genetically modified in a laboratory to express chimeric antigen receptors (CARs) on their surface, and then reinfused back into the patient.
              </p>
              <p className="text-gray-600 mb-4">
                The CARs enable the T cells to recognize and attach to specific proteins (antigens) on the surface of cancer cells. Once attached, the CAR-T cells become activated and begin to proliferate, leading to the killing of cancer cells that express the target antigen.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Medical research laboratory" 
                className="rounded-lg shadow-lg w-full h-auto hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-theme-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <History className="h-12 w-12 text-theme-teal mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-theme-navy mb-4">The History of CAR-T Therapy</h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Early Development (1980s-1990s)</h3>
              <p className="text-gray-600">
                The concept of genetically modifying T cells to target cancer cells was first proposed in the late 1980s. Researchers began exploring ways to enhance the natural ability of T cells to recognize and attack cancer cells by adding synthetic receptors.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Breakthrough Research (2000s)</h3>
              <p className="text-gray-600">
                In the early 2000s, researchers at the University of Pennsylvania made significant advances in CAR-T technology, developing more effective CAR designs and demonstrating remarkable results in treating patients with advanced leukemia.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">FDA Approvals (2017-Present)</h3>
              <p className="text-gray-600">
                The first CAR-T therapy, tisagenlecleucel (Kymriah), was approved by the FDA in 2017 for the treatment of children and young adults with acute lymphoblastic leukemia (ALL). This was followed by several other approvals for various blood cancers, marking a new era in cancer treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Clock className="h-12 w-12 text-theme-teal mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-theme-navy mb-4">Treatment Process</h2>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            <div className="space-y-12">
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Evaluation</h3>
                    <p className="text-gray-600">
                      The medical team evaluates candidacy for CAR-T therapy based on cancer type, previous treatments, and overall health status.
                    </p>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white">
                  <span className="font-bold">1</span>
                </div>
                <div className="flex-1 md:pl-12 hidden md:block"></div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-12 hidden md:block"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white">
                  <span className="font-bold">2</span>
                </div>
                <div className="flex-1 md:pl-12 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">T Cell Collection</h3>
                    <p className="text-gray-600">
                      T cells are collected through leukapheresis, which takes 3-6 hours. Blood flows through a machine that separates and collects T cells while returning other blood components.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">CAR-T Cell Manufacturing</h3>
                    <p className="text-gray-600">
                      The collected T cells are genetically modified to express CARs and multiplied in the laboratory. This process typically takes 2-4 weeks.
                    </p>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white">
                  <span className="font-bold">3</span>
                </div>
                <div className="flex-1 md:pl-12 hidden md:block"></div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-12 hidden md:block"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white">
                  <span className="font-bold">4</span>
                </div>
                <div className="flex-1 md:pl-12 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lymphodepleting Chemotherapy</h3>
                    <p className="text-gray-600">
                      Patients receive chemotherapy to reduce existing immune cells and create space for the CAR-T cells.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">CAR-T Cell Infusion</h3>
                    <p className="text-gray-600">
                      The modified CAR-T cells are infused back into the patient through an IV, typically taking 30-90 minutes.
                    </p>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white">
                  <span className="font-bold">5</span>
                </div>
                <div className="flex-1 md:pl-12 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side Effects Section */}
      <section className="py-16 bg-theme-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertTriangle className="h-12 w-12 text-theme-teal mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-theme-navy mb-4">Side Effects and Monitoring</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cytokine Release Syndrome (CRS)</h3>
              <p className="text-gray-600">
                CRS occurs when activated CAR-T cells release large amounts of cytokines. Symptoms range from mild flu-like symptoms to severe inflammatory responses requiring intensive care.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Neurological Effects</h3>
              <p className="text-gray-600">
                Some patients experience confusion, difficulty speaking, seizures, or other neurological symptoms. These effects are usually temporary and manageable with appropriate care.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">B-cell Aplasia</h3>
              <p className="text-gray-600">
                CAR-T cells targeting CD19 can affect healthy B cells, potentially requiring ongoing immunoglobulin replacement therapy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recovery and Monitoring</h3>
              <p className="text-gray-600">
                Patients are closely monitored for at least 4 weeks after infusion, with regular follow-up visits to track treatment response and manage any side effects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 text-center pb-16">
        <Link 
          to="/molecular-processes" 
          className="bg-theme-teal hover:bg-theme-teal-dark text-white px-8 py-4 rounded-full font-medium inline-flex items-center transition-all hover:shadow-lg hover-lift"
        >
          Learn About the Molecular Processes <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default About;