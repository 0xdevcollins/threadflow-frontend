import Image from 'next/image';
import React from 'react';

const CompanyLogos = () => {
  const companyLogos = [
    { src: '/lowes-companies-logo.svg', alt: "Lowe's Logo" },
    { src: '/indeed-logo.svg', alt: 'Indeed Logo' },
    { src: '/mobil-logo.svg', alt: 'Mobil Logo' },
    { src: '/sephora-logo.svg', alt: 'Sephora Logo' },
    { src: '/bianchi-logo.svg', alt: 'Bianchi Logo' },
    { src: '/logo.svg', alt: 'Bianchi Logo' },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 items-center justify-center">
          {companyLogos.map((logo) => (
            <div key={logo.src} className="flex justify-center items-center">
              <Image
                src={logo.src}
                width={120}
                height={60}
                alt={logo.alt}
                className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
