// src/app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | CASHBATE",
    description: "Privacy Policy for CASHBATE LLC.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            <div className="mx-auto max-w-5xl px-4 py-16 lg:py-20">
                <header className="mb-10">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Effective as of October 12, 2025
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                        CASHBATE LLC — https://www.cashbate.com
                    </p>
                </header>

                <div className="space-y-8 text-sm leading-relaxed text-slate-800">
                    <section>
                        <p>
                            This Privacy Policy (&quot;Policy&quot;) applies to{" "}
                            <a
                                href="https://www.cashbate.com"
                                className="text-blue-600 underline"
                            >
                                https://www.cashbate.com
                            </a>
                            , and CASHBATE LLC (&quot;Company&quot;) and governs data
                            collection and usage. For the purposes of this Privacy Policy,
                            unless otherwise noted, all references to the Company include{" "}
                            <a
                                href="https://www.cashbate.com"
                                className="text-blue-600 underline"
                            >
                                https://www.cashbate.com
                            </a>
                            . The Company&apos;s website is a marketing and service-based
                            website for the CASHBATE Home Incentive Program, a conditional,
                            risk-sharing solution that helps home sellers prepare their
                            properties for sale through approved cosmetic improvements. Users
                            can learn about eligibility and submit inquiries. No credit,
                            financing, or contractor services are provided. By using the
                            Company website, you consent to the data practices described in
                            this statement.
                        </p>
                    </section>

                    {/* California rights */}
                    <section>
                        <h2 className="text-lg font-semibold">
                            California Consumer Privacy Act and California Privacy Rights Act
                        </h2>
                        <p className="mt-2">
                            If you are a California resident, you have the following rights
                            under the California Consumer Privacy Act (&quot;CCPA&quot;) and
                            California Privacy Rights Act (&quot;CPRA&quot;):
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>
                                <strong>Right to Know.</strong> You may request details on what
                                personal data we collect, use, and share.
                            </li>
                            <li>
                                <strong>Right to Delete.</strong> You can request deletion of
                                personal data, subject to certain legal exceptions.
                            </li>
                            <li>
                                <strong>Right to Correct.</strong> You may request corrections
                                to inaccurate personal information.
                            </li>
                            <li>
                                <strong>Right to Opt-Out.</strong> You can opt out of the sale
                                or sharing of personal data for advertising.
                            </li>
                            <li>
                                <strong>Right to Restrict Sensitive Data Use.</strong> You may
                                limit the use of sensitive personal information.
                            </li>
                            <li>
                                <strong>Right Against Retaliation.</strong> The Company will not
                                discriminate against you for exercising your rights.
                            </li>
                        </ul>
                    </section>

                    {/* Collection */}
                    <section>
                        <h2 className="text-lg font-semibold">
                            Collection of Your Personal Information
                        </h2>
                        <p className="mt-2">
                            In order to better provide you with products and services offered,
                            the Company may collect personally identifiable information, such
                            as your:
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>First and last name</li>
                            <li>Mailing address</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>
                                Property address, basic property details (such as home type,
                                estimated condition, or features), and seller preferences
                                regarding timing or desired improvements. Information is
                                collected solely to evaluate eligibility for the CASHBATE Home
                                Incentive Program.
                            </li>
                        </ul>
                        <p className="mt-2">
                            We do not collect any personal information about you unless you
                            voluntarily provide it to us. However, you may be required to
                            provide certain personal information to us when you elect to use
                            certain products or services. These may include: (a) registering
                            for an account; (b) entering a sweepstakes or contest sponsored by
                            us or one of our partners; (c) signing up for special offers from
                            selected third parties; (d) sending us an email message; (e)
                            submitting your credit card or other payment information when
                            ordering and purchasing products and services. To wit, we will use
                            your information for, but not limited to, communicating with you in
                            relation to services and/or products you have requested from us. We
                            also may gather additional personal or non-personal information in
                            the future.
                        </p>
                    </section>

                    {/* Use */}
                    <section>
                        <h2 className="text-lg font-semibold">
                            Use of Your Personal Information
                        </h2>
                        <p className="mt-2">
                            The Company collects and uses your personal information in the
                            following ways:
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>to operate and deliver the services you have requested</li>
                            <li>
                                to provide you with information, products, or services that you
                                request from us
                            </li>
                            <li>to provide you with notices about your account</li>
                            <li>
                                to carry out the Company&apos;s obligations and enforce our rights
                                arising from any contracts entered between you and us, including
                                for billing and collection
                            </li>
                            <li>
                                to notify you about changes to https://www.cashbate.com or any
                                products or services we offer or provide through it
                            </li>
                            <li>in any other way we may describe when you provide the information</li>
                            <li>for any other purpose with your consent.</li>
                        </ul>
                        <p className="mt-2">
                            The Company may also use your personally identifiable information
                            to inform you of other products or services available from the
                            Company and its affiliates.
                        </p>
                    </section>

                    {/* Sharing */}
                    <section>
                        <h2 className="text-lg font-semibold">
                            Sharing Information with Third Parties
                        </h2>
                        <p className="mt-2">
                            The Company does not sell, rent, or lease its customer lists to
                            third parties.
                        </p>
                        <p className="mt-2">
                            The Company may, from time to time, contact you on behalf of
                            external business partners about a particular offering that may be
                            of interest to you. In those cases, your unique personally
                            identifiable information (email, name, address, phone number) is
                            transferred to the third party. The Company may share data with
                            trusted partners to help perform statistical analysis, send you
                            email or postal mail, provide customer support, or arrange for
                            deliveries. All such third parties are prohibited from using your
                            personal information except to provide these services to the
                            Company, and they are required to maintain the confidentiality of
                            your information.
                        </p>
                        <p className="mt-2">
                            The Company may disclose your personal information, without
                            notice, if required to do so by law or in the good faith belief
                            that such action is necessary to: (a) conform to the edicts of the
                            law or comply with legal process served on the Company or the
                            site; (b) protect and defend the rights or property of the Company;
                            and/or (c) act under exigent circumstances to protect the personal
                            safety of users of the Company, or the public.
                        </p>
                    </section>

                    {/* Opt-out */}
                    <section>
                        <h2 className="text-lg font-semibold">
                            Opt-Out of Disclosure of Personal Information to Third Parties
                        </h2>
                        <p className="mt-2">
                            In connection with any personal information we may disclose to a
                            third party for a business purpose, you have the right to know the
                            categories of personal information that we disclosed about you for
                            a business purpose.
                        </p>
                        <p className="mt-2">
                            You have the right under the CCPA and CPRA and certain other
                            privacy and data protection laws, as applicable, to opt out of the
                            disclosure of your personal information. If you exercise your right
                            to opt out of the disclosure of your personal information, we will
                            refrain from disclosing your personal information, unless you
                            subsequently provide express authorization for the disclosure of
                            your personal information.
                        </p>
                        <p className="mt-2">
                            To opt out of the disclosure of your personal information, visit
                            this web page <span className="font-mono">_______________</span>.
                        </p>
                    </section>

                    {/* Tracking */}
                    <section>
                        <h2 className="text-lg font-semibold">Tracking User Behavior</h2>
                        <p className="mt-2">
                            The Company may keep track of the websites and pages our users
                            visit within the Company, in order to determine what the Company
                            services are the most popular. This data is used to deliver
                            customized content and advertising within the Company to customers
                            whose behavior indicates that they are interested in a particular
                            subject area.
                        </p>
                        <p className="mt-2">
                            <span className="font-mono">_________________</span>
                        </p>
                    </section>

                    {/* Auto collected */}
                    <section>
                        <h2 className="text-lg font-semibold">
                            Automatically Collected Information
                        </h2>
                        <p className="mt-2">
                            The Company may automatically collect information about your
                            computer hardware and software. This information can include your
                            IP address, browser type, domain names, access times, and referring
                            website addresses. This information is used for the operation of
                            the service, to maintain quality of the service, and to provide
                            general statistics regarding the use of the Company&apos;s website.
                        </p>
                    </section>

                    {/* Cookies */}
                    <section>
                        <h2 className="text-lg font-semibold">Use of Cookies</h2>
                        <p className="mt-2">
                            The Company&apos;s website may use &quot;cookies&quot; to help you
                            personalize your online experience. A cookie is a text file that is
                            placed on your hard disk by a web page server. Cookies cannot be
                            used to run programs or deliver viruses to your computer. Cookies
                            are uniquely assigned to you, and can only be read by a web server
                            in the domain that issued the cookie to you.
                        </p>
                        <p className="mt-2">
                            One of the primary purposes of cookies is to provide a convenience
                            feature to save you time. The purpose of a cookie is to tell the
                            web server that you have returned to a specific page. For example,
                            if you personalize the Company&apos;s pages, or register with
                            Company&apos;s site or services, a cookie helps the Company to
                            recall your specific information on subsequent visits. This
                            simplifies the process of recording your personal information, such
                            as billing addresses, shipping addresses, and so on. When you
                            return to the same website, the information you previously
                            provided can be retrieved, so you can easily use the Company&apos;s
                            features that you customized.
                        </p>
                        <p className="mt-2">
                            You have the ability to accept or decline cookies. Most web
                            browsers automatically accept cookies, but you can usually modify
                            your browser settings to decline cookies if you prefer. If you
                            choose to decline cookies, you may not be able to fully experience
                            the interactive features of the Company&apos;s services or
                            websites you visit.
                        </p>
                    </section>

                    {/* Links */}
                    <section>
                        <h2 className="text-lg font-semibold">Links</h2>
                        <p className="mt-2">
                            This website contains links to other sites. Please be aware that
                            we are not responsible for the content or privacy practices of
                            such other sites. We encourage our users to be aware when they
                            leave our site and to read the privacy statements of any other
                            site that collects personally identifiable information.
                        </p>
                    </section>

                    {/* Security */}
                    <section>
                        <h2 className="text-lg font-semibold">
                            Security of Your Personal Information
                        </h2>
                        <p className="mt-2">
                            The Company secures your personal information from unauthorized
                            access, use, or disclosure. The Company uses the following methods
                            for this purpose:
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>SSL Protocol</li>
                            <li>
                                CASHBATE LLC uses industry-standard security measures to protect
                                user information, including secure servers, SSL encryption on
                                data submissions, and restricted internal access. Personal data
                                is stored in protected systems and is only accessible to
                                authorized personnel involved in program evaluation and
                                coordination.
                            </li>
                        </ul>
                        <p className="mt-2">
                            When personal information (such as a credit card number) is
                            transmitted to other websites, it is protected through the use of
                            encryption, such as the Secure Sockets Layer (SSL) protocol.
                        </p>
                        <p className="mt-2">
                            We strive to take appropriate security measures to protect against
                            unauthorized access to or alteration of your personal information.
                            Unfortunately, no data transmission over the Internet or any
                            wireless network can be guaranteed to be 100% secure. As a result,
                            while we strive to protect your personal information, you
                            acknowledge that: (a) there are security and privacy limitations
                            inherent to the Internet that are beyond our control; and (b) the
                            security, integrity, and privacy of any and all information and
                            data exchanged between you and us through this site cannot be
                            guaranteed.
                        </p>
                    </section>

                    {/* Right to deletion */}
                    <section>
                        <h2 className="text-lg font-semibold">Right to Deletion</h2>
                        <p className="mt-2">
                            Subject to certain exceptions set out below, on receipt of a
                            verifiable request from you, we will:
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>Delete your personal information from our records; and</li>
                            <li>
                                Direct any service providers to delete your personal information
                                from their records.
                            </li>
                        </ul>
                        <p className="mt-2">
                            Under the CCPA and CPRA, you have the right to request that the
                            Company, and any third parties with whom your personal information
                            is sold or shared, delete any personal information that has been
                            collected about you. To exercise your rights, contact us at{" "}
                            <a
                                href="mailto:contact@cashbate.com"
                                className="text-blue-600 underline"
                            >
                                contact@cashbate.com
                            </a>
                            .
                        </p>
                        <p className="mt-2">
                            Please note that we may not be able to comply with requests to
                            delete your personal information if it is necessary to:
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>
                                Complete the transaction for which the personal information was
                                collected, fulfill the terms of a written warranty or product
                                recall, provide a good or service requested by you, or otherwise
                                perform a contract between you and us;
                            </li>
                            <li>
                                Detect security incidents, protect against malicious, deceptive,
                                fraudulent, or illegal activity; or prosecute those responsible
                                for that activity;
                            </li>
                            <li>
                                Debug to identify and repair errors that impair existing
                                intended functionality;
                            </li>
                            <li>
                                Exercise free speech or ensure the right of another consumer to
                                exercise his or her right of free speech;
                            </li>
                            <li>Comply with the California Electronic Communications Privacy Act;</li>
                            <li>
                                Engage in public or peer-reviewed scientific, historical, or
                                statistical research in the public interest;
                            </li>
                            <li>
                                Enable solely internal uses that are reasonably aligned with your
                                expectations based on your relationship with us;
                            </li>
                            <li>Comply with an existing legal obligation; or</li>
                            <li>
                                Otherwise use your personal information internally in a lawful
                                manner that is compatible with the context in which you provided
                                the information.
                            </li>
                        </ul>
                    </section>

                    {/* Children */}
                    <section>
                        <h2 className="text-lg font-semibold">Children Under Thirteen</h2>
                        <p className="mt-2">
                            The Company does not knowingly collect personally identifiable
                            information from children under the age of 13. If you are under the
                            age of 13, you must ask your parent or guardian for permission to
                            use this website.
                        </p>
                    </section>

                    {/* Opt out / unsubscribe */}
                    <section>
                        <h2 className="text-lg font-semibold">
                            Opt Out and Unsubscribe from Third-Party Communications
                        </h2>
                        <p className="mt-2">
                            We respect your privacy and give you an opportunity to opt out of
                            receiving announcements of certain information. Users may opt out
                            of receiving any or all communications from third-party partners of
                            the Company by contacting us here:
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>
                                Web page: <span className="font-mono">_______________</span>
                            </li>
                            <li>
                                Email:{" "}
                                <a
                                    href="mailto:privacy@cashbate.com"
                                    className="text-blue-600 underline"
                                >
                                    privacy@cashbate.com
                                </a>
                            </li>
                            <li>
                                Phone: <span className="font-mono">_______________</span>
                            </li>
                        </ul>
                    </section>

                    {/* Email communications */}
                    <section>
                        <h2 className="text-lg font-semibold">Email Communications</h2>
                        <p className="mt-2">
                            From time to time, the Company may contact you via email for the
                            purpose of providing announcements, promotional offers, alerts,
                            confirmations, surveys, and/or other general communication. In
                            order to improve our services, we may receive a notification when
                            you open an email from the Company or click on a link therein.
                        </p>
                        <p className="mt-2">
                            If you would like to stop receiving marketing or promotional
                            communications via email from the Company, you may opt out of such
                            communications by clicking the unsubscribe link included in our
                            messages or by emailing{" "}
                            <a
                                href="mailto:privacy@cashbate.com"
                                className="text-blue-600 underline"
                            >
                                privacy@cashbate.com
                            </a>{" "}
                            with &quot;Unsubscribe&quot; in the subject line. CASHBATE may
                            continue to send administrative or transactional messages related
                            to active program participation.
                        </p>
                    </section>

                    {/* External storage */}
                    <section>
                        <h2 className="text-lg font-semibold">
                            External Data Storage Sites
                        </h2>
                        <p className="mt-2">
                            We may store your data on servers provided by third-party hosting
                            vendors with whom we have contracted.
                        </p>
                    </section>

                    {/* Changes */}
                    <section>
                        <h2 className="text-lg font-semibold">Changes to This Statement</h2>
                        <p className="mt-2">
                            The Company reserves the right to change this Policy from time to
                            time. For example, when there are changes in our services, changes
                            in our data protection practices, or changes in the law. When
                            changes to this Policy are significant, we will inform you. You may
                            receive a notice by sending an email to the primary email address
                            specified in your account, by placing a prominent notice on our
                            website, and/or by updating any privacy information. Your
                            continued use of the website and/or services available after such
                            modifications will constitute your: (a) acknowledgment of the
                            modified Policy; and (b) agreement to abide and be bound by that
                            Policy.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-lg font-semibold">Contact Information</h2>
                        <p className="mt-2">
                            The Company welcomes your questions or comments regarding this
                            Policy. If you believe that the Company has not adhered to this
                            Policy, please contact the Company at:
                        </p>
                        <p className="mt-2">
                            <strong>CASHBATE LLC</strong>
                            <br />
                            8179 Landfall Ct
                            <br />
                            Gainesville, Virginia 20155
                            <br />
                            Email:{" "}
                            <a
                                href="mailto:contact@cashbate.com"
                                className="text-blue-600 underline"
                            >
                                contact@cashbate.com
                            </a>
                            <br />
                            Phone: <span className="font-mono">_______________</span>
                        </p>
                        <p className="mt-4 text-xs text-slate-400">
                            This is a RocketLawyer.com document.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
