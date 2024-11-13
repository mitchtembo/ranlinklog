import React from 'react';
import { GraduationCap, FileCheck, Plane, Building2, BookOpen } from 'lucide-react';

const services = [
  {
    title: 'University Selection',
    description: 'Expert guidance in choosing the right university based on your academic goals and preferences.',
    icon: GraduationCap,
  },
  {
    title: 'Application Support',
    description: 'Comprehensive assistance with university applications, documentation, and requirements.',
    icon: FileCheck,
  },
  {
    title: 'Visa Application Support',
    description: 'Step-by-step guidance through the student visa application process.',
    icon: Building2,
  },
  {
    title: 'Travel Arrangements',
    description: 'Support with travel planning and pre-departure preparation.',
    icon: Plane,
  },
  {
    title: 'Post Graduate Career Guidance',
    description: 'Career counseling and job market transition support after graduation.',
    icon: BookOpen,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive support for your educational journey in the USA
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}