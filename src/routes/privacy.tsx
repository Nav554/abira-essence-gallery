import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionTitle } from "@/components/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Abira Fragrance" },
      { name: "description", content: "How Abira Fragrance handles your information when you inquire via WhatsApp, phone, email or Instagram." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:px-8">
      <SectionTitle eyebrow="Legal" title="Privacy Policy" />
      <Reveal>
        <div className="prose prose-invert mt-12 max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: {new Date().getFullYear()}</p>
          <p>
            Abira Fragrance ("we", "us") respects your privacy. This site does
            not collect personal data through forms, accounts, or e-commerce
            checkout. All inquiries happen directly through WhatsApp, phone,
            email or Instagram — and are governed by those platforms' own
            privacy policies.
          </p>
          <h3 className="font-serif text-xl text-primary">Information We Receive</h3>
          <p>
            When you contact us, you may voluntarily share your name, phone
            number, delivery address, or fragrance preferences. We use this
            information only to respond to your inquiry and fulfil requests.
          </p>
          <h3 className="font-serif text-xl text-primary">Analytics</h3>
          <p>
            We may use privacy-friendly analytics to understand aggregate visits
            to this site. No personally identifiable information is stored on
            our servers.
          </p>
          <h3 className="font-serif text-xl text-primary">Contact</h3>
          <p>
            For privacy concerns, please contact us at
            <a className="text-primary" href="mailto:murtazapindarma52@gmail.com"> murtazapindarma52@gmail.com</a>.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
