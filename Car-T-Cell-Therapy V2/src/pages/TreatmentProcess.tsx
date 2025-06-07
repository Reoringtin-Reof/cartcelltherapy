import React from 'react';
import { Clock, Beaker, Activity, AlertTriangle } from 'lucide-react';

const TreatmentProcess = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The CAR-T Cell Therapy Process
            </h1>
            <p className="text-xl mb-4">
              Understanding the stages and procedures involved in CAR-T cell therapy.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Process Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CAR-T cell therapy involves multiple stages spanning several weeks.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
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
              
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-12 hidden md:block"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white">
                  <span className="font-bold">2</span>
                </div>
                <div className="flex-1 md:pl-12 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">T Cell Collection (Leukapheresis)</h3>
                    <p className="text-gray-600">
                      T cells are collected through leukapheresis, which takes 3-6 hours. Blood flows through a machine that separates and collects T cells while returning other blood components.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">CAR-T Cell Manufacturing</h3>
                    <p className="text-gray-600">
                      The collected T cells undergo genetic modification in a laboratory to express chimeric antigen receptors (CARs) that target cancer cells. This process typically takes 2-4 weeks.
                    </p>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white">
                  <span className="font-bold">3</span>
                </div>
                <div className="flex-1 md:pl-12 hidden md:block"></div>
              </div>
              
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-12 hidden md:block"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white">
                  <span className="font-bold">4</span>
                </div>
                <div className="flex-1 md:pl-12 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lymphodepleting Chemotherapy</h3>
                    <p className="text-gray-600">
                      Prior to CAR-T cell infusion, lymphodepleting chemotherapy reduces existing immune cells to create space for the CAR-T cells and improve their effectiveness.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">CAR-T Cell Infusion</h3>
                    <p className="text-gray-600">
                      The modified CAR-T cells are infused into the bloodstream through an IV. The procedure is similar to a blood transfusion and typically takes 30-90 minutes.
                    </p>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white">
                  <span className="font-bold">5</span>
                </div>
                <div className="flex-1 md:pl-12 hidden md:block"></div>
              </div>
              
              {/* Step 6 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-12 hidden md:block"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white">
                  <span className="font-bold">6</span>
                </div>
                <div className="flex-1 md:pl-12 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring Period</h3>
                    <p className="text-gray-600">
                      Close monitoring occurs for 7-14 days following infusion to observe the treatment response and manage any side effects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side Effects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Considerations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the effects and responses associated with CAR-T cell therapy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cytokine Release Syndrome (CRS)</h3>
              <p className="text-gray-600">
                CRS occurs when activated CAR-T cells release large amounts of cytokines. Symptoms range from mild inflammatory responses to more severe systemic effects. Management typically involves targeted treatments to modulate the immune response.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Neurological Effects</h3>
              <p className="text-gray-600">
                Neurological symptoms may occur with or without CRS. These effects are typically temporary and can be managed with appropriate medical intervention.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">B-cell Aplasia</h3>
              <p className="text-gray-600">
                CAR-T cells targeting CD19 can affect healthy B cells, potentially leading to decreased antibody production. This effect may require ongoing management through immunoglobulin replacement therapy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Response</h3>
              <p className="text-gray-600">
                Response to CAR-T therapy is typically evaluated at specific intervals post-infusion through various diagnostic methods including blood tests and imaging studies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentProcess;