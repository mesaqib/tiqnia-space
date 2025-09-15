export default function Terms() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using TiqniaSpace services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily download one copy of the materials on TiqniaSpace&apos;s 
              website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The materials on TiqniaSpace&apos;s website are provided on an &apos;as is&apos; basis. TiqniaSpace 
              makes no warranties, expressed or implied, and hereby disclaims and negates all other 
              warranties including without limitation, implied warranties or conditions of merchantability, 
              fitness for a particular purpose, or non-infringement of intellectual property or other 
              violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us at 
              <a href="mailto:legal@tiqniaspace.com" className="text-blue-600 hover:underline"> legal@tiqniaspace.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
