export const metadata = {
  title: 'Disclaimer — TiqniaSpace',
  description: 'General information, professional disclaimer, external links policy, and limitation of liability for TiqniaSpace.',
  alternates: { canonical: '/disclaimer' },
  openGraph: { title: 'Disclaimer — TiqniaSpace', description: 'Legal disclaimers and limitations.' }
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Disclaimer</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
            <p className="text-gray-700">The information provided by TiqniaSpace (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) on this website is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding accuracy, adequacy, validity, reliability, availability, or completeness of any information.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links</h2>
            <p className="text-gray-700">This site may contain links to third‑party websites. Such links are provided for convenience only. We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third‑party sites or services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Disclaimer</h2>
            <p className="text-gray-700">The site cannot and does not contain legal, financial, or professional advice. Any information provided is for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with appropriate professionals.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700">Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided. Your use of the site and your reliance on any information is solely at your own risk.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700">For questions about this disclaimer, contact us at <a href="mailto:legal@tiqniaspace.com" className="text-blue-600 hover:underline">legal@tiqniaspace.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}


