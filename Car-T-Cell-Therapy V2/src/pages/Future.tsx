import React from 'react';
import { Lightbulb, Target, AlertTriangle, Microscope, MessageCircle } from 'lucide-react';

const Future = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-theme-navy to-blue-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            Current Limitations & Future of CAR-T Cell Therapy
          </h1>
        </div>
      </section>

      {/* Current Limitations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertTriangle className="h-12 w-12 text-theme-teal mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-theme-navy mb-8">Current Limitations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-theme-cream p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">Side Effects</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Cytokine Release Syndrome (CRS)</li>
                <li>• Neurotoxicity</li>
                <li>• B-cell aplasia</li>
                <li>• Risk of infection during treatment</li>
              </ul>
            </div>
            
            <div className="bg-theme-cream p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">Cost Barriers</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• High manufacturing costs</li>
                <li>• Limited production capacity</li>
                <li>• Complex logistics and storage requirements</li>
                <li>• Insurance coverage challenges</li>
              </ul>
            </div>
            
            <div className="bg-theme-cream p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">Time Constraints</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 2-4 weeks manufacturing time</li>
                <li>• Patient may progress during production</li>
                <li>• Limited shelf life of product</li>
                <li>• Complex scheduling requirements</li>
              </ul>
            </div>
            
            <div className="bg-theme-cream p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">Technical Limitations</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Limited effectiveness in solid tumors</li>
                <li>• Antigen escape mechanisms</li>
                <li>• Variable quality of patient T cells</li>
                <li>• Manufacturing complexity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Applications Section */}
      <section className="py-16 bg-theme-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Lightbulb className="h-12 w-12 text-theme-teal mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-theme-navy mb-8">Future Applications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">CAR-T Based Vaccines</h3>
              <p className="text-gray-600">
                Researchers are exploring the potential of using CAR-T technology to develop therapeutic vaccines. By combining CAR-T cells with vaccine platforms, scientists aim to create more effective and personalized cancer treatments. This approach could lead to vaccines that not only target existing cancers but also prevent recurrence by maintaining a population of cancer-fighting immune cells.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">Autoimmune Diseases</h3>
              <p className="text-gray-600">
                Research is underway to adapt CAR-T technology for treating autoimmune conditions by targeting specific immune cells responsible for autoimmune responses. This could provide new treatment options for conditions like lupus and rheumatoid arthritis.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">Universal CAR-T Cell Bank</h3>
              <p className="text-gray-600">
                Development of "off-the-shelf" CAR-T products from healthy donors could significantly reduce production time and costs, making treatment more accessible to patients who need it urgently.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">Solid Tumor Treatment</h3>
              <p className="text-gray-600">
                New approaches are being developed to overcome the challenges of treating solid tumors, including enhanced CAR designs that can better penetrate tumor tissue and overcome the immunosuppressive microenvironment.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-theme-navy mb-4">Combination Therapies</h3>
              <p className="text-gray-600">
                Research is exploring the potential of combining CAR-T therapy with other treatments like checkpoint inhibitors or targeted therapies to enhance effectiveness and reduce resistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Insights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MessageCircle className="h-12 w-12 text-theme-teal mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-theme-navy mb-4">Expert Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              In the process of creating this website, I had the privilege of speaking with two experts who have had experience in immunotherapy. Their insights and expertise have provided valuable perspectives on the future of CAR-T cell therapy and its potential applications.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-theme-cream p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-6">
                <img 
                  src="https://pbs.twimg.com/profile_images/1555186121512042497/WKgBIfXe_400x400.jpg"
                  alt="Regeneron Logo"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-theme-navy">An Experienced Pharmaceutical Physician</h3>
                      <p className="text-gray-600">Senior Director, Global Patient Safety, Immuno-Oncology</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Regeneron</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic border-l-4 border-theme-teal pl-4 mt-4">
                    "Quite a few biotech companies and cancer centres are researching allogenic CAR-T therapies, and that's a way forward to mass produce CAR-T and increase access to patients in need. These allogenic CAR-T cells will overcome the need for manufacturing time required for autologous CAR-T because all you're getting is off the shelf CAR-T for use in any patient with that cancer."
                  </blockquote>
                  <p className="text-sm text-gray-500 mt-2">* The expert has requested anonymity for legal reasons.</p>
                </div>
              </div>
            </div>

            <div className="bg-theme-cream p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-6">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C5603AQFAWzzLpnoCLA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1654110358155?e=1752710400&v=beta&t=6Z56-ur1jB_QkX3VZt4jUY9fAmIf9nXC234hr5qXzwQ"
                  alt="Dr. Xiaobin Xu"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-theme-navy">Xiaobin Xu, PhD, MBA</h3>
                      <p className="text-gray-600">Biopharma/Biotech Equity Research</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Bernstein</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic border-l-4 border-theme-teal pl-4 mt-4">
                    "Researchers are developing [personalized mRNA cancer] vaccines tailored to individual patients by identifying unique mutations in their tumors. For instance, Moderna and Merck's mRNA-4157/V940 vaccine, combined with pembrolizumab, has shown promising results in reducing melanoma recurrence."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Future;