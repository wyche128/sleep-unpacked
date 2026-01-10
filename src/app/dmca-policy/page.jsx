import React from 'react';
import Header from '../../components/Header';

export const metadata = {
    title: 'DMCA Policy | Sleep Unpacked',
    description: 'Digital Millennium Copyright Act Policy for Sleep Unpacked.',
};

export default function DmcaPolicyPage() {
    return (
        <>
            <Header />
            <main className="bg-white min-h-screen pt-32 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-jet-black mb-8">Digital Millennium Copyright Act Policy</h1>

                    <div className="prose prose-lg text-jet-black-800 max-w-none space-y-6">
                        <p>
                            We respect the intellectual property rights of others just as we expect others to respect our rights. Pursuant to Digital Millennium Copyright Act, Title 17, United States Code, Section 512(c), a copyright owner or their agent may submit a takedown notice to us via our DMCA Agent listed below. As an internet service provider, we are entitled to claim immunity from said infringement claims pursuant to the “safe harbor” provisions of the DMCA. To submit a good faith infringement claim to us, you must submit notice to us that sets forth the following information:
                        </p>

                        <h2 className="text-2xl font-semibold text-jet-black mt-8 mb-4">Notice of Infringement – Claim</h2>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>A physical or electronic signature of the copyright owner (or someone authorized to act on behalf of the owner).</li>
                            <li>Identification of the copyrighted work claimed to have been infringed.</li>
                            <li>Identification of the infringing material to be removed, and information reasonably sufficient to permit the service provider to locate the material. [Please submit the URL of the page in question to assist us in identifying the allegedly offending work]; Information reasonably sufficient to permit the service provider to contact the complaining party including your name, physical address, email address, phone number and fax number.</li>
                            <li>A statement that the complaining party has a good faith belief that the use of the material is unauthorized by the copyright agent and</li>
                            <li>A statement that the information in the notification is accurate, and, under penalty of perjury, that the complaining party is authorized to act on behalf of the copyright owner.</li>
                        </ol>

                        <p>
                            Title 17 USC §512(f) provides civil damage penalties, including costs and attorney fees, against any person who knowingly and materially misrepresents certain information in a notification of infringement under 17 USC §512(c)(3).
                        </p>
                        <p>
                            Send all takedown notices through our Contact page. Please send by email for prompt attention.
                        </p>
                        <p>
                            Please note that we may share the identity and information in any copyright infringement claim we receive with the alleged infringer. In submitting a claim, you understand accept and agree that your identity and claim may be communicated to the alleged infringer.
                        </p>

                        <h2 className="text-2xl font-semibold text-jet-black mt-8 mb-4">Counter Notification – Restoration of Material</h2>
                        <p>
                            If you have received a notice of material being takedown because of a copyright infringement claim, you may provide us with a counter notification in an effort to have the material in question restored to the site. Said notification must be given in writing to our DMCA Agent and must contain substantially the following elements pursuant to 17 USC Section 512(g)(3):
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Your physical or electronic signature.</li>
                            <li>A description of the material that has been taken down and the original location of the material before it was taken down.</li>
                            <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled.</li>
                            <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the federal district court for the judicial district in which the address is located (or if you are outside of the United States, that you consent to jurisdiction of any judicial district in which the service provider may be found), and that the you will accept service of process from the person or company who provided the original infringement notification.</li>
                            <li>Send your counter notice through our Contact page. Email is highly recommended.</li>
                        </ol>

                        <h2 className="text-2xl font-semibold text-jet-black mt-8 mb-4">Repeat Infringer Policy</h2>
                        <p>
                            We take copyright infringement very seriously. Pursuant to the repeat infringer policy requirements of the Digital Millennium Copyright Act, we maintain a list of DMCA notices from copyright holders and make a good faith effort to identify any repeat infringers. Those that violate our internal repeat infringer policy will have their accounts terminated.
                        </p>

                        <h2 className="text-2xl font-semibold text-jet-black mt-8 mb-4">Modifications</h2>
                        <p>
                            We reserve the right to modify the contents of this page and its policy for handling DMCA claims at any time for any reason. You are encouraged to check back to review this policy frequently for any changes.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
