// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';

const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Bahar Khan - Flutter Developer</title>
        <meta
          name="description"
          content="Portfolio website of Bahar Khan, a Flutter Developer. Showcasing projects, skills, and professional experience in mobile app development."
        />
        <meta
          name="keywords"
          content="Bahar Khan, Flutter Developer, Mobile App Developer, Dart, Flutter, Portfolio, Cross-Platform Apps"
        />
        <meta name="author" content="Bahar Khan" />
        <meta property="og:title" content="Bahar Khan - Flutter Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore Bahar Khan's portfolio website. Projects, skills, and experience in Flutter mobile app development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baharkhan.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bahar Khan - Flutter Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Explore Bahar Khan's portfolio website. Projects, skills, and experience in Flutter mobile app development."
        />
        <link rel="canonical" href="https://baharkhan.vercel.app/" />

        {/* Structured Data for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Bahar Khan",
            "url": "https://baharkhan.vercel.app/",
            "sameAs": [
              "https://github.com/baharkhanbd",
              "https://www.linkedin.com/in/baharkhan/",
              "https://x.com/baharkhanbd"
            ],
            "jobTitle": "Flutter Developer",
            "description": "Portfolio website of Bahar Khan, Flutter Developer. Projects, skills, experience, and contact information."
          }
        `}</script>

        {/* Robots meta tag */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />

      <div className="main-content">
        <About />
        <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

export default App;
