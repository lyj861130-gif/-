/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import CompanyIntro from './components/home/CompanyIntro';
import BusinessArea from './components/home/BusinessArea';
import ContactCTA from './components/home/ContactCTA';
import PRCenter from './components/home/PRCenter';
import GlobalNetwork from './components/home/GlobalNetwork';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CompanyIntro />
        <BusinessArea />
        <GlobalNetwork />
        <PRCenter />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
