// src/components/Certifications.js
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { certifications } from '../data/certifications';

const Certifications = () => {
  // ডাইনামিক ফ্লিপ স্টেট তৈরি করা
  const [isFlipped, setIsFlipped] = useState(
    certifications.reduce((acc, cert, index) => {
      acc[index] = false;
      return acc;
    }, {})
  );

  const handleFlip = (index) => {
    setIsFlipped((prevState) => ({ ...prevState, [index]: !prevState[index] }));
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]">
      <div className="container text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Certifications</h2>
          <p className="mt-2 text-muted-foreground">Recognized achievements in the field of technology.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => (
            <ReactCardFlip key={index} isFlipped={isFlipped[index]} flipDirection="horizontal">
              {/* Front Side */}
              <div
                className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer"
                onClick={() => handleFlip(index)}
              >
                <img src={cert.image} alt={cert.name} className="w-16 h-16 mx-auto mb-3" loading="lazy" />
                <h3 className="text-lg font-semibold">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">Issued By: {cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.period}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-primary font-medium"
                >
                  View Certificate
                </a>
              </div>

              {/* Back Side */}
              <div
                className="rounded-md border border-border bg-foreground p-4 text-white cursor-pointer"
                onClick={() => handleFlip(index)}
              >
                <img src={cert.image} alt={cert.name} className="w-full h-auto rounded-md" loading="lazy" />
              </div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
