import React from 'react';
import ContactHeader from './ContactHeader';
import CommissionBeacon from './CommissionBeacon';
import RainAlleyPlate from './RainAlleyPlate';
import CommsDirectory from './CommsDirectory';
import ContactForm from './ContactForm';
import BentoFaq from './BentoFaq';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full relative px-4 sm:px-8 lg:px-16 py-12">
      {/* Section Header */}
      <ContactHeader />

      {/* Main Two-Column Tactical Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Comms Status, Channel Directory, Visual Plate */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <CommissionBeacon />
          <RainAlleyPlate />
          <CommsDirectory />
        </div>

        {/* Right Column: Interactive Cyberpunk Transmission Form */}
        <div className="lg:col-span-7 flex flex-col">
          <ContactForm />
        </div>
      </div>

      {/* Bottom Secondary Info / FAQ Bento Tiles */}
      <BentoFaq />
    </section>
  );
}
