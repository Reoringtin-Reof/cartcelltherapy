import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Video, Download, ExternalLink, Users, Phone } from 'lucide-react';

const Resources = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CAR-T Therapy Resources
            </h1>
            <p className="text-xl mb-4">
              Educational materials, support services, and practical information for patients and caregivers.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Materials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Educational Materials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources to help you understand CAR-T cell therapy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <FileText className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient Guides</h3>
              <p className="text-gray-600 mb-4">
                Detailed guides explaining CAR-T therapy, from diagnosis through treatment and recovery.
              </p>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Download guides <Download className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <Video className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Library</h3>
              <p className="text-gray-600 mb-4">
                Educational videos featuring expert explanations, patient testimonials, and animated treatment overviews.
              </p>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Browse videos <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <FileText className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Articles</h3>
              <p className="text-gray-600 mb-4">
                Access to the latest scientific publications and clinical trial results on CAR-T therapy.
              </p>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                View research <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about CAR-T cell therapy.
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Is CAR-T therapy covered by insurance?</h3>
              <p className="text-gray-600">
                Many insurance plans, including Medicare, cover FDA-approved CAR-T therapies. However, coverage varies by plan and indication. Most treatment centers have financial counselors who can help navigate insurance coverage and identify financial assistance programs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How long does the entire CAR-T process take?</h3>
              <p className="text-gray-600">
                The entire process typically takes 3-4 weeks from T-cell collection to infusion. After infusion, patients are usually monitored in the hospital for 7-14 days and must stay near the treatment center for about 4 weeks for follow-up care.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What is the success rate of CAR-T therapy?</h3>
              <p className="text-gray-600">
                Success rates vary depending on the type of cancer and the specific CAR-T product. For certain blood cancers, complete remission rates range from 50-90% in clinical trials. However, long-term outcomes are still being studied as this is a relatively new therapy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can CAR-T therapy be repeated if cancer returns?</h3>
              <p className="text-gray-600">
                In some cases, patients can receive a second CAR-T cell infusion if their cancer returns. However, this depends on various factors including the patient's overall health, the type of CAR-T product used initially, and the specific circumstances of the cancer recurrence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Are there age restrictions for CAR-T therapy?</h3>
              <p className="text-gray-600">
                While some CAR-T products are approved for specific age groups, decisions about eligibility are typically based on a patient's overall health status rather than age alone. Many older adults have successfully received CAR-T therapy when they are otherwise healthy enough for the procedure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resources to help patients and families throughout the CAR-T journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Patient Support Organizations</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Leukemia & Lymphoma Society</a>
                  <p className="text-gray-600 mt-1">Offers education, support services, and financial assistance for blood cancer patients.</p>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Lymphoma Research Foundation</a>
                  <p className="text-gray-600 mt-1">Provides resources specifically for lymphoma patients considering CAR-T therapy.</p>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">CancerCare</a>
                  <p className="text-gray-600 mt-1">Offers counseling, support groups, and financial assistance for cancer patients.</p>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">American Cancer Society</a>
                  <p className="text-gray-600 mt-1">Provides information, resources, and support for all cancer patients.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Assistance Programs</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Patient Assistance Foundation</a>
                  <p className="text-gray-600 mt-1">Helps with treatment costs for eligible patients.</p>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Travel Assistance Program</a>
                  <p className="text-gray-600 mt-1">Provides lodging and transportation support for patients traveling for treatment.</p>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Medication Assistance Programs</a>
                  <p className="text-gray-600 mt-1">Help with the cost of medications needed during and after CAR-T therapy.</p>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Insurance Navigation Services</a>
                  <p className="text-gray-600 mt-1">Assistance with understanding insurance coverage and appealing denials.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Centers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CAR-T Treatment Centers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find certified centers offering CAR-T cell therapy across the country.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              CAR-T cell therapy is available at specialized treatment centers that have been certified to administer this complex treatment. These centers have teams of healthcare professionals specifically trained in cellular therapy.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Northeast Region</h3>
                <ul className="space-y-3">
                  <li className="text-gray-600">Dana-Farber Cancer Institute (Boston, MA)</li>
                  <li className="text-gray-600">Memorial Sloan Kettering Cancer Center (New York, NY)</li>
                  <li className="text-gray-600">University of Pennsylvania (Philadelphia, PA)</li>
                  <li className="text-gray-600">Johns Hopkins Sidney Kimmel Cancer Center (Baltimore, MD)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Midwest Region</h3>
                <ul className="space-y-3">
                  <li className="text-gray-600">Mayo Clinic (Rochester, MN)</li>
                  <li className="text-gray-600">University of Chicago Medicine (Chicago, IL)</li>
                  <li className="text-gray-600">Ohio State University Comprehensive Cancer Center (Columbus, OH)</li>
                  <li className="text-gray-600">University of Michigan Rogel Cancer Center (Ann Arbor, MI)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">South Region</h3>
                <ul className="space-y-3">
                  <li className="text-gray-600">MD Anderson Cancer Center (Houston, TX)</li>
                  <li className="text-gray-600">Moffitt Cancer Center (Tampa, FL)</li>
                  <li className="text-gray-600">Vanderbilt-Ingram Cancer Center (Nashville, TN)</li>
                  <li className="text-gray-600">Duke Cancer Institute (Durham, NC)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">West Region</h3>
                <ul className="space-y-3">
                  <li className="text-gray-600">Stanford Health Care (Stanford, CA)</li>
                  <li className="text-gray-600">UCLA Health (Los Angeles, CA)</li>
                  <li className="text-gray-600">Fred Hutchinson Cancer Center (Seattle, WA)</li>
                  <li className="text-gray-600">UC San Francisco Helen Diller Family Comprehensive Cancer Center (San Francisco, CA)</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="#" 
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
              >
                Find a Treatment Center Near You <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our patient navigators are available to answer your questions and connect you with resources.
          </p>
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="mb-6">Call our helpline at <span className="font-semibold">1-800-CAR-TCELL</span> (Monday-Friday, 9am-5pm EST) or fill out the form below:</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">Question/Comment</label>
                <textarea 
                  id="question" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;