import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "RealiFi Inc. Privacy Policy and Data Processing Policy for Koqi platform users, agents, and brokerages.",
  alternates: {
    canonical: "https://koqi.ai/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-stone-bg">
      <header className="border-b border-stone-200 px-6 py-6">
        <nav className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl text-accent transition-colors hover:text-accent/80"
          >
            koqi
          </Link>
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            &larr; Back to home
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-display text-4xl text-ink md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">Effective 2026</p>

        <div className="prose-legal mt-12 space-y-8 text-base leading-relaxed text-ink/80">
          <p>
            This RealiFi Inc. Privacy Policy and Data Processing Policy (this
            &ldquo;Privacy Policy&rdquo;) reflects global privacy practices and
            standards for RealiFi Inc. and those of its subsidiaries listed here
            as of the effective date.
          </p>

          <Section title="To Whom This Privacy Policy Applies">
            <p>
              This Privacy Policy applies to all users of the Koqi Sites and
              Services, as defined below, Koqi real estate agents, Consultants
              (as defined below) and Koqi employees. If you reside in a
              geographic area that grants you additional rights and/or imposes
              additional obligations on Koqi, Koqi has supplemental privacy
              policies for such geographic areas that describe your privacy
              rights and our collection, use, and disclosure of your Personal
              Information. Please see our disclosures in this Privacy Policy
              regarding your rights based on your geographic location. A user is
              any visitor to the Koqi Sites (&ldquo;User&rdquo;).
            </p>
          </Section>

          <Section title="Who We Are">
            <p>
              RealiFi Inc. (&ldquo;Koqi&rdquo;) is a company for a
              technology-enabled global real estate business headquartered at
              2355 Westwood Blvd. #212 Los Angeles, CA 90064.
            </p>
            <p>
              Koqi is committed to protecting your privacy. This Privacy Policy
              defines the Personal Information and Usage Information (each as
              defined below) that we collect and describes how that information
              is collected, stored, used, and shared. This Privacy Policy also
              describes your choices regarding our use of that information and
              how you can review and correct your Personal Information.
            </p>
            <p>
              If you have a privacy question, you may contact our Privacy Officer
              any time at hello@koqi.ai. We appreciate the opportunity to address
              your questions and concerns.
            </p>
          </Section>

          <Section title="Our Data Values">
            <p className="font-medium text-ink">
              At Koqi, privacy is a priority.
            </p>
            <p>
              <strong>Purpose driven.</strong> We only collect, use, and share
              the information we need to provide and operate our solutions and to
              help our customers have the best experience with our staff, our
              Services, and our third-party solution providers.
            </p>
            <p>
              <strong>Responsible use.</strong> We help to promote responsible
              data use and stewardship among the agents, businesses, and
              suppliers we engage with around the world.
            </p>
            <p>
              <strong>Transparent use.</strong> Koqi&apos;s primary business is
              our cloud-based real estate platform. We know that certain
              information is required for us to provide our Services and help you
              with real estate transactions. Our goal is to design our products
              and systems with your expectations in mind, including how we use
              your data and enable our service providers to use your data.
            </p>
          </Section>

          <Section title="Data Rights">
            <p>
              Depending on the geographic location in which you reside, you may
              have rights related to our data processing. If you reside in a
              geographic location that provides you specific data rights, you may
              exercise those rights through our Individual Rights form, subject
              to applicable law, including Koqi&apos;s own legal obligations for
              our data processing activities.
            </p>
          </Section>

          <Section title="No Rights to Tokens or Implied Rights">
            <p>
              Koqi may utilize testnet tokens within its platform for testing and
              development purposes. These testnet tokens are solely for the
              purpose of simulating the functionalities of the platform and do
              not represent actual digital assets or cryptocurrencies.
            </p>
            <p>
              Users of Koqi&apos;s platform acknowledge and agree that the use
              of any testnet tokens does not grant any ownership, interest, or
              rights to any actual tokens, digital assets, or cryptocurrencies.
              Testnet tokens are provided for demonstration and testing purposes
              only.
            </p>
            <p>
              By accessing and using Koqi&apos;s services, users understand and
              accept that they do not have any implied rights to any form of
              actual tokens, shares, or ownership stakes in Koqi or any
              associated entities.
            </p>
          </Section>

          <Section title="What This Privacy Policy Covers">
            <p>
              This Privacy Policy applies to information collected from you
              through any of our web pages or mobile applications (singularly, a
              &ldquo;Koqi Site,&rdquo; and collectively, the &ldquo;Koqi
              Sites&rdquo;), and through any offering, events, services, and/or
              programs we offer, whether online or offline, including the real
              estate brokerage services (&ldquo;Real Estate Services&rdquo; and
              collectively with all other offerings, the &ldquo;Services&rdquo;).
            </p>
          </Section>

          <Section title="Your Consent to this Privacy Policy">
            <p>
              By using the Services, you consent to the collection, sale, and use
              of your information, including your Personal Information, by us in
              compliance with this Privacy Policy, unless you opt out as
              identified in this Privacy Policy. If we change this Privacy Policy
              or some part of it, we will post the updated Privacy Policy on this
              web page with an updated Effective Date so that you will always be
              able to understand what information we collect, how we use that
              information, and under what circumstances we may sell or disclose
              that information to others.
            </p>
          </Section>

          <Section title="What Information We Collect About You">
            <p>
              The data we collect, use, process, and share about you depends on
              who you are and how we interact with you. Generally, Personal
              Information is data that identifies you or that makes you
              identifiable. It includes data that could be used to identify,
              locate, track or contact you, as specified below.
            </p>
            <p>
              Koqi and any Affiliate or Independent Third Party we engage for the
              purpose of administering, operating, hosting, configuring,
              designing, maintaining, and providing internal support for the
              Services, may collect two types of information when you use the
              Services: Personal Information and Usage Information.
            </p>
          </Section>

          <Section title="Personal Information">
            <p>
              Generally, you can access the Koqi Sites without entering any
              Personal Information. In certain cases, we may ask you for Personal
              Information on Koqi Sites to provide a requested service, carry out
              a transaction that you have requested, or if you choose to set up a
              User Account. The types of information we collect may include
              contact information such as your name, email address, telephone
              number, and postal address; demographic information such as date of
              birth and country of residence; and information related to your
              purchases or transactions.
            </p>
          </Section>

          <Section title="Usage Information">
            <p>
              The types of usage information we collect may contain information
              about your visit to the Koqi Site, such as Internet Protocol (IP)
              address, browser language and type, domain name system requests,
              material and pages viewed, time and date of access, number of
              clicks per visit, operating system and platform, device type and
              identifiers, and MAC address or similar device-specific code.
            </p>
          </Section>

          <Section title="Cookies and Tracking Technologies">
            <p>
              From time to time, we may use &ldquo;cookies&rdquo; to keep track
              of your visit to and use of the Services. We may also use web
              analytics, web beacons, and unique identifiers. You have the
              ability to accept or decline most cookies, but some cookies may be
              required for us to administer the Services.
            </p>
          </Section>

          <Section title="How We Use the Collected Information">
            <p>
              We will only use your Personal Information for the purposes for
              which it was collected, unless otherwise required by law. This
              includes setting up and managing your User Account, delivering
              services or transactions you have requested, sending promotional
              information, enhancing the safety and security of Services,
              preventing fraud, and complying with legal obligations.
            </p>
          </Section>

          <Section title="Disclosure of Your Personal Information">
            <p>
              Koqi engages its Affiliates and Independent Third Parties to
              perform certain business-related functions and services on our
              behalf. These Affiliates and Independent Third Parties are provided
              with information required to perform their specific function, which
              may include Personal Information. We impose contractual obligations
              to limit their use of your Personal Information to specified
              purposes.
            </p>
            <p>
              In certain situations, we may be required to disclose your Personal
              Information without your consent to protect our rights, prevent or
              detect fraud, satisfy applicable laws, respond to legal process, or
              complete a merger or sale of assets.
            </p>
          </Section>

          <Section title="Choices with Your Personal Information">
            <p>
              You are under no obligation to create a User Account, and you may
              access the Koqi Sites and use some Services without submitting any
              Personal Information. You may also delete your User Account at any
              time.
            </p>
            <p>
              Each advertising email communication we send includes an
              unsubscribe link allowing you to stop delivery of that type of
              communication. If you elect to unsubscribe, we will remove you from
              the relevant list within ten (10) business days.
            </p>
          </Section>

          <Section title="&ldquo;Do Not Track&rdquo; Signals">
            <p>
              Your browser settings may allow you to automatically transmit a
              &ldquo;Do Not Track&rdquo; signal to websites and online services
              you visit. There is no consensus among industry participants as to
              what &ldquo;Do Not Track&rdquo; means in this context. Depending on
              the nature of the signal, certain features of the Koqi Sites and
              Services may not work as expected.
            </p>
          </Section>

          <Section title="Age Requirements; Children&apos;s Information">
            <p>
              The Koqi Site and Services are strictly intended for use by
              individuals who are at least 18 years old. We do not knowingly
              collect or solicit Personal Information from anyone under the age of
              18. If we become aware that we have collected Personal Information
              from a minor under 18, we will promptly delete such information.
            </p>
          </Section>

          <Section title="How We Transfer Data Across Country Borders">
            <p>
              The Koqi Sites and the Services are operated primarily in the
              United States. If you are located outside of the United States,
              please be aware that any information you provide to us will be
              transferred to and stored in the United States, where the data
              protection laws may be different from those of your country of
              residence.
            </p>
          </Section>

          <Section title="How We Keep and Secure Your Data">
            <p>
              Koqi intends to protect Personal Information and to maintain its
              quality. We have procedures in place designed to deal with any
              suspected and actual data security breach and will notify you and
              any applicable regulator of a suspected or actual data security
              breach where we are legally required to do so.
            </p>
            <p>
              You are ultimately responsible for safeguarding and ensuring the
              security of your username, password, and User Account information
              from unauthorized access, use or disclosure to others.
            </p>
          </Section>

          <Section title="Your Rights Based on Your Geographic Location">
            <p>
              You may have additional rights with regards to your Personal
              Information based on your geographic location.
            </p>
            <p>
              <strong>California:</strong> The CCPA provides California residents
              with the right to know what categories of personal information we
              have collected about them, and whether we disclosed that personal
              information for a business purpose in the preceding 12 months.
            </p>
            <p>
              <strong>Nevada:</strong> If you are a resident of Nevada, you have
              the right to opt-out of the sale of certain personal information to
              third parties who intend to license or sell that personal
              information.
            </p>
          </Section>

          <Section title="Accessibility">
            <p>
              We are committed to making our website and our products accessible
              for all our users. If you have difficulty accessing any portion of
              the Koqi Sites or Services, please contact us at hello@koqi.ai.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have additional questions or comments please let us know by
              sending your comments to{" "}
              <a
                href="mailto:hello@koqi.ai"
                className="text-accent hover:underline"
              >
                hello@koqi.ai
              </a>
              .
            </p>
          </Section>

          <p className="pt-8 text-sm text-muted">
            &copy; {new Date().getFullYear()} Koqi. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      {children}
    </div>
  );
}
