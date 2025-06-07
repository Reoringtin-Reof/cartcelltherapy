import React from 'react';
import { Mail, School, Target, Users, BookOpen, Heart } from 'lucide-react';

const AboutProject = () => {
  return (
    <div>
      <section className="relative py-24 bg-gradient-to-r from-theme-navy to-blue-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
              About This Project
            </h1>
            <p className="text-xl text-theme-teal-light mb-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              A Bio Expo Project exploring CAR-T Cell Immunotherapy
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-theme-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-theme-navy mb-6">Project Overview</h2>
                <p className="text-gray-600 mb-6">
                  This website was made as a part of the Biology Expo project at Sacred Heart Preparatory. For this project we had to decide on a topic to research, write a research paper and pick an additional medium to expand upon your topic. The topic I chose was CAR-T Cell Immunotherapy, which is what this website is about.
                </p>
              </div>
              
              <div>
                <h3 className="font-display text-2xl font-bold text-theme-navy mb-4">Target Audience</h3>
                <p className="text-gray-600 mb-6">
                  This resource is designed for high school and college students, educators, and individuals seeking to understand the science behind immunotherapy. While the content is scientifically accurate, it's presented in a way that makes complex concepts approachable for those with a basic understanding of biology.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-theme-navy mb-4">Educational Approach</h3>
                <p className="text-gray-600 mb-6">
                  Rather than advocating for or against CAR-T therapy, this project takes an objective, educational stance. The goal is to present accurate, well-researched information about the science, process, and implications of CAR-T cell therapy, allowing viewers to develop an informed understanding of this treatment approach.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-theme-teal mr-3" />
                  <a href="mailto:rshroff28@shschools.org" className="text-theme-teal hover:text-theme-teal-dark transition-colors">
                    rshroff28@shschools.org
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Scientific research" 
                className="rounded-2xl shadow-lg w-full h-auto hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-theme-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-theme-navy mb-8">Works Cited</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <ol className="list-decimal pl-5 space-y-4 text-gray-600">
              <li>"CAR T Cells: Engineering Patients' Immune Cells to Treat Their Cancers." National Cancer Institute, www.cancer.gov/about-cancer/treatment/research/car-t-cells. Accessed 30 Mar. 2025.</li>
              <li>"CAR T Cell Therapy." Penn Medicine, www.pennmedicine.org/cancer/navigating-cancer-care/treatment-types/immunotherapy/what-is-car-t-therapy#:~:text=What%20is%20CAR%20T%20Cell,destroying%20cancer%20cells%20more%20effectively.</li>
              <li>Grupp, Stephan A et al. "Chimeric antigen receptor-modified T cells for acute lymphoid leukemia." The New England journal of medicine vol. 368,16 (2013): 1509-1518. doi:10.1056/NEJMoa1215134</li>
              <li>Guzman G, Reed MR, Bielamowicz K, Koss B, Rodriguez A. CAR-T Therapies in Solid Tumors: Opportunities and Challenges. Curr Oncol Rep. 2023 May;25(5):479-489. doi: 10.1007/s11912-023-01380-x. Epub 2023 Feb 28. PMID: 36853475; PMCID: PMC10110629.</li>
              <li>Kunal C. Potnis, Mengyang Di, Iris Isufi, Lohith Gowda, Stuart E. Seropian, Francine M. Foss, Howard P. Forman, Scott F. Huntington; Cost-effectiveness of chimeric antigen receptor T-cell therapy in adults with relapsed or refractory follicular lymphoma. Blood Adv 2023; 7 (5): 801–810. doi: https://doi.org/10.1182/bloodadvances.2022008097</li>
              <li>Lonez C, Breman E. Allogeneic CAR-T Therapy Technologies: Has the Promise Been Met? Cells. 2024 Jan 12;13(2):146. doi: 10.3390/cells13020146. PMID: 38247837; PMCID: PMC10814647.</li>
              <li>Montalvo, M.J., Bandey, I.N., Rezvan, A. et al. Decoding the mechanisms of chimeric antigen receptor (CAR) T cell-mediated killing of tumors: insights from granzyme and Fas inhibition. Cell Death Dis 15, 109 (2024). https://doi.org/10.1038/s41419-024-06461-8</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutProject;