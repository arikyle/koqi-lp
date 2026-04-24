import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Koqi.ai platform — RealiFi Inc. terms governing use of the Koqi Sites and Services.",
  alternates: {
    canonical: "https://koqi.ai/terms-of-use",
  },
};

export default function TermsOfUsePage() {
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
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-muted">Effective 2026</p>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-ink/80">
          <p>
            Welcome to Koqi.ai (the &ldquo;Site&rdquo;). These Terms of Use
            (&ldquo;Terms of Use&rdquo; or &ldquo;Terms&rdquo;) constitute a
            legally binding agreement between you and RealiFi Inc.
            (&ldquo;Koqi&rdquo;). Within these Terms, Koqi is referred to as
            &ldquo;Koqi&rdquo; &ldquo;us&rdquo;, &ldquo;we&rdquo;, or
            &ldquo;our.&rdquo; These Terms govern your use of the Sites,
            including without limitation any subdomains of the Sites, and the
            services made available through the Sites, including without
            limitation the software, tools, materials, and information
            (collectively, the &ldquo;Service&rdquo;).
          </p>

          <p className="rounded-lg border border-stone-300 bg-stone-bg p-4 text-sm font-medium text-ink">
            THIS TERMS OF USE CONTAINS A BINDING ARBITRATION CLAUSE AND A CLASS
            ACTION WAIVER WHICH MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS,
            INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT AND TO HAVE A JURY
            HEAR YOUR CLAIMS. PLEASE READ THESE TERMS CAREFULLY.
          </p>

          <Section title="Acceptance of Terms">
            <p>
              By accessing the Sites or using the Service, you: (a) acknowledge
              that you have read and understood these Terms; (b) accept and agree
              to be bound by these Terms; and (c) acknowledge that these Terms
              constitute a binding contract between Koqi and you. The Sites and
              Service are not intended for use by individuals under the age of
              18. By using the Sites or Service, you represent and warrant that
              you are at least 18 years of age, or over the age of majority in
              your jurisdiction and able to enter into these Terms.
            </p>
            <p>
              IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS, YOU MUST LEAVE THE
              SITE AND CEASE USING THE SERVICE IMMEDIATELY.
            </p>
          </Section>

          <Section title="Account Registration">
            <p>
              To use the Service, you may register or create a user account (your
              &ldquo;Account&rdquo;) by providing all required data or
              information in a complete and truthful manner. You may also use the
              Service without registering or creating an Account; however, this
              may cause limited availability of certain features or functions.
            </p>
            <p>
              By creating an Account or otherwise entering your email and
              telephone contact information on any form on the Sites you
              expressly consent to receive marketing communications about our
              Services at the email address and telephone number provided. You
              may revoke consent at any time by replying &ldquo;STOP&rdquo; to
              any text, unsubscribing from email communications, or by emailing
              hello@koqi.ai.
            </p>
            <p>
              You are responsible for any activity that occurs on your Account,
              regardless of whether such use was authorized by you. You must keep
              your login credentials confidential and safe from unauthorized use
              or disclosure.
            </p>
          </Section>

          <Section title="License and Restrictions">
            <p>
              Koqi hereby grants to you a limited, non-transferable,
              nonexclusive, revocable license to access and use the Site,
              Service, and any information on the Site or Service, including
              without limitation the text, photographs, drawings, graphics,
              software, audio, video, and other materials (collectively, the
              &ldquo;Content&rdquo;) for your own personal purpose of buying,
              selling, or renting real property, assessing the real estate
              market, or other limited purposes expressly authorized by these
              Terms.
            </p>
            <p>
              Except as authorized by Koqi in writing, you understand and agree
              you shall not, and shall not allow any third-party to: copy,
              reproduce, distribute, modify, translate, publish, transmit, sell,
              sublicense, or create derivative works from the Site, Service, or
              Content; decompile, disassemble, or reverse engineer the Service;
              commercially exploit or use the Site or Service to create
              competitive products; use the Site or Service to upload malicious
              software; or use the Site, Service, or Content for any unlawful
              purpose.
            </p>
          </Section>

          <Section title="User Content">
            <p>
              Throughout your use of the Sites and Service, you may enter
              information or content, such as your Account information, property
              search criteria, and communications (collectively, &ldquo;User
              Content&rdquo;). By entering any User Content, you grant Koqi a
              nonexclusive, royalty-free, worldwide license to use your User
              Content in accordance with our Privacy Policy and for the purpose
              for which you provided it.
            </p>
            <p>
              You represent and warrant that you own your User Content or are
              authorized to provide it, that it is true and accurate, that it
              will not infringe the rights of any third-party, and that it does
              not violate applicable laws or these Terms.
            </p>
          </Section>

          <Section title="Liability for User Content">
            <p>
              You are solely liable for User Content you upload, post, share, or
              provide. Koqi shall have the right, but not the obligation, to
              remove, delete, block, disable, or correct User Content at its own
              discretion without notice or liability to you.
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
              As a user of Koqi&apos;s platform, you acknowledge and agree that
              your use of any testnet tokens does not grant you any ownership,
              interest, or rights to any actual tokens or cryptocurrencies.
            </p>
          </Section>

          <Section title="Feedback">
            <p>
              Where you provide feedback, comments, reviews, or other information
              about your experience (collectively, the &ldquo;Feedback&rdquo;),
              you grant us a nonexclusive, sublicensable perpetual license to use
              your Feedback for any purpose permitted by applicable law,
              including to publish, reproduce, display, transform, translate,
              market and use in promotional materials, and create derivatives of
              your Feedback, without compensation to you.
            </p>
          </Section>

          <Section title="Third-party Resources">
            <p>
              Through the Site or the Service, you may have access to websites,
              software, content, or other external resources provided by third
              parties. Koqi has no control over and does not warrant or endorse
              such resources and is therefore not responsible for their function,
              content, accuracy, or availability.
            </p>
          </Section>

          <Section title="Intellectual Property Rights">
            <p>
              All title, interest, and intellectual property rights related to
              the Sites, the Content, or the Service and all data, software,
              programs, source code, algorithms, processes, documentation, and
              functionality contained within the Site or Service are the
              exclusive property of Koqi or its licensors. You acknowledge you
              only receive a license to use the Site, Content, and Service and do
              not acquire any interest in the Site, Content, or Service.
            </p>
            <p>
              The Koqi name, logo, and other marks, trade names, service marks,
              taglines, or logos (collectively, the &ldquo;Trademarks&rdquo;) are
              the exclusive property of Koqi or its licensors. You are prohibited
              from using the Trademarks without the prior written consent of
              Koqi.
            </p>
          </Section>

          <Section title="Termination">
            <p>
              You can stop using the Sites and Service at any time. If you wish
              to terminate your Account, contact Koqi at hello@koqi.ai.
            </p>
            <p>
              Koqi reserves the right, at its sole discretion, to disable,
              suspend, or terminate your access to and use of the Site and
              Service, and your Account, if applicable, at any time and without
              notice or liability, if Koqi determines you are in violation of
              these Terms or applicable law.
            </p>
          </Section>

          <Section title="Disclaimer of Warranties">
            <p className="text-sm font-medium uppercase">
              THE SITE, SERVICE, AND CONTENT ARE PROVIDED STRICTLY ON AN
              &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. USE OF
              THE SITE AND SERVICE IS AT YOUR OWN RISK. TO THE MAXIMUM EXTENT
              PERMITTED BY APPLICABLE LAW, KOQI EXPRESSLY DISCLAIMS ALL
              CONDITIONS, REPRESENTATIONS, AND WARRANTIES &mdash; WHETHER
              EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING, BUT NOT
              LIMITED TO, ANY IMPLIED WARRANTY OF ACCURACY, AVAILABILITY,
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET
              ENJOYMENT, OR NON-INFRINGEMENT OF THIRD-PARTY RIGHTS.
            </p>
          </Section>

          <Section title="Limitations of Liability">
            <p className="text-sm font-medium uppercase">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL KOQI, AND ITS SUBSIDIARIES, AFFILIATES, OFFICERS, DIRECTORS,
              LICENSORS, AGENTS, PARTNERS, SUPPLIERS, AND EMPLOYEES BE LIABLE
              FOR: (A) ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR EXEMPLARY DAMAGES; (B) THE ACTIONS OR OMISSIONS
              OF ANY THIRD-PARTY; (C) ANY ERRORS, MISTAKES, OR INACCURACIES OF
              CONTENT; (D) PERSONAL INJURY OR PROPERTY DAMAGE RESULTING FROM
              ACCESS TO OR USE OF THE SERVICE; (E) ANY DELAY, INTERRUPTION, OR
              CESSATION OF TRANSMISSION; (F) ANY BUGS, VIRUSES, OR SIMILAR
              HARMFUL CODE; OR (G) ANY USER CONTENT.
            </p>
            <p className="text-sm font-medium uppercase">
              IN NO EVENT SHALL KOQI BE LIABLE FOR ANY CLAIMS IN AN AMOUNT
              EXCEEDING THE AMOUNT PAID BY YOU TO KOQI IN THE PRECEDING TWELVE
              (12) MONTHS, OR THE PERIOD OF DURATION OF THESE TERMS, WHICHEVER
              IS SHORTER.
            </p>
          </Section>

          <Section title="Indemnification">
            <p>
              You agree to defend, indemnify, and hold Koqi and its subsidiaries,
              affiliates, officers, directors, shareholders, licensors, agents,
              partners, suppliers and employees harmless from and against any and
              all claims or demands, damages, obligations, losses, liabilities,
              costs, and expenses arising from or related to: (a) your use of the
              Site, Content, and/or Service; (b) your violation of these Terms;
              (c) your violation of any third-party rights; (d) your violation of
              any law; (e) your User Content; (f) your willful misconduct; or (g)
              unauthorized access resulting from sharing your credentials.
            </p>
          </Section>

          <Section title="No Professional Advice">
            <p>
              The Site and Service are provided for information purposes only and
              do not constitute legal, accounting, tax, employment, real estate,
              or other professional advice. You should engage the services of
              qualified professionals prior to making any decisions based on the
              Site, Service, or Content.
            </p>
          </Section>

          <Section title="Arbitration; Class Action Waiver">
            <p className="text-sm font-medium uppercase">
              YOU AGREE THAT ALL DISPUTES BETWEEN YOU AND KOQI ARISING OUT OF OR
              RELATING TO THESE TERMS, YOUR USE OF THE SITES OR SERVICE, YOUR
              RIGHTS OF PRIVACY, OR OUR RELATIONSHIP WILL BE RESOLVED BY BINDING
              ARBITRATION.
            </p>
            <p>
              Arbitration shall be conducted by the American Arbitration
              Association (AAA) in conjunction with its Consumer Arbitration
              Rules. You hereby expressly and knowingly waive your right to file
              a lawsuit in court or have a trial by jury. Arbitration shall be
              conducted in California by a single arbitrator. Any cause of action
              you may have under these Terms must be commenced within one (1)
              year after the claim or cause of action arises.
            </p>
            <p>
              By accessing and using the Site and/or Service, you agree any
              claims you bring against Koqi will be conducted only on an
              individual basis and not as part of a class, consolidated, or
              representative action. You hereby waive your right to participate
              in a class-action lawsuit or class-wide arbitration.
            </p>
          </Section>

          <Section title="DMCA">
            <p>
              Koqi respects the intellectual property rights of others. We comply
              with the applicable provisions of the Digital Millennium Copyright
              Act (DMCA). If you believe any information posted on our Site
              violates your copyright rights, send a notice to Koqi at
              hello@koqi.ai.
            </p>
          </Section>

          <Section title="Accessibility">
            <p>
              Koqi is committed to making the Site and Service accessible for all
              to use. Should you experience difficulty in accessing any portion of
              the Sites and/or Service, please contact us at hello@koqi.ai.
            </p>
          </Section>

          <Section title="Governing Law; Venue">
            <p>
              These Terms shall be governed by and interpreted in accordance with
              the laws of the State of California without giving effect to any
              choice or conflict of law provision or rule.
            </p>
          </Section>

          <Section title="Privacy Policy">
            <p>
              We may collect, use, and disclose personal information we receive
              about you through your use of the Sites or Service, as described in
              our{" "}
              <Link
                href="/privacy-policy"
                className="text-accent hover:underline"
              >
                Privacy Policy
              </Link>
              , which is hereby incorporated into and made a part of these Terms
              by reference.
            </p>
          </Section>

          <Section title="Changes to these Terms">
            <p>
              Koqi reserves the right to amend or otherwise modify these Terms at
              any time. We will notify you of changes by posting the new Terms
              here and updating the effective date. Your continued use of the
              Site and/or Service will signify your acceptance of the revised
              Terms.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              <a
                href="mailto:hello@koqi.ai"
                className="text-accent hover:underline"
              >
                hello@koqi.ai
              </a>
            </p>
            <p>
              2355 Westwood Blvd. #212
              <br />
              Los Angeles, CA 90064
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
