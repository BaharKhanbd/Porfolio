import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // X icon from react-icons/fa6

const social = {
  email: "baharkhan.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/baharkhan/",
  github: "https://github.com/baharkhanbd",
  x: "https://x.com/baharkhanbd",
};

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border bg-foreground/[0.02]">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Bahar Khan</h3>
            <p className="max-w-md text-sm text-muted-foreground">
              Flutter Developer with a passion for building beautiful, responsive, and high-performance mobile applications.

            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#about">About</a></li>
              <li><a className="hover:text-primary transition-colors" href="#experience">Experience</a></li>
              <li><a className="hover:text-primary transition-colors" href="#projects">Projects</a></li>
              <li><a className="hover:text-primary transition-colors" href="#skills">Skills</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="mt-3 flex items-center gap-4">
              <li>
                <a className="hover:text-primary transition-colors" href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub size={20} />
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href={`mailto:${social.email}`} aria-label="Email">
                  <FaEnvelope size={20} />
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href={social.x} target="_blank" rel="noopener noreferrer" aria-label="X">
                  <FaXTwitter size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bahar Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
