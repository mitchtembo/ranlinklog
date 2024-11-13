import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function StudentVisa() {
  return (
    <section id="student-visa" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Student Visa Services
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We provide comprehensive support for international students pursuing education in the USA, offering personalized guidance every step of the way.
            </p>
            
            <div className="mt-8 space-y-4">
              {[
                'Personalized university selection guidance',
                'Application requirement advisory',
                'Student visa application assistance',
                'Travel arrangement support',
                'Post-graduation career guidance',
                'Smooth transition into US job market'
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <h3 className="text-xl font-semibold text-gray-900">
                  Eligibility Requirements
                </h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">High School Certificate (O Level)</h4>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Minimum five subjects including Mathematics and English</li>
                      <li>Strong academic performance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Advanced Level</h4>
                    <p className="mt-2 text-gray-600">
                      Support for bachelor's degree applications at community colleges
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">US Permanent Residence</h4>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Employment-based visa (2nd Category)</li>
                      <li>Expedited processing compared to other green card categories</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}