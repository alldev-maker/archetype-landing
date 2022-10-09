import { Accordion } from '../accordion';

const faqs = [
  {
    question: 'Why use Archetype?',
    answer: "Our core theses revolve around reliability, speed and ease-of-use for you and your engineers. Integrating with payment processors has been the biggest challenges for most companies and we want to empower them to deploy, adjust complex bespoke plans in seconds. We also don't use API gateways so you can actually be super flexible about whatever gateway service you decide to use."
  },
  {
    question: 'What languages do you support?',
    answer: "Our core theses revolve around reliability, speed and ease-of-use for you and your engineers. Integrating with payment processors has been the biggest challenges for most companies and we want to empower them to deploy, adjust complex bespoke plans in seconds. We also don't use API gateways so you can actually be super flexible about whatever gateway service you decide to use."
  }, {
    question: 'How will you help us optimize our revenue?',
    answer: "Our core theses revolve around reliability, speed and ease-of-use for you and your engineers. Integrating with payment processors has been the biggest challenges for most companies and we want to empower them to deploy, adjust complex bespoke plans in seconds. We also don't use API gateways so you can actually be super flexible about whatever gateway service you decide to use."
  },
  {
    question: 'How easy is it to integrate Archetype into our stack?',
    answer: "Our core theses revolve around reliability, speed and ease-of-use for you and your engineers. Integrating with payment processors has been the biggest challenges for most companies and we want to empower them to deploy, adjust complex bespoke plans in seconds. We also don't use API gateways so you can actually be super flexible about whatever gateway service you decide to use."
  },
]

export const Faq = () => (
  <section className="container section-gap">
    <h2 className="mb-10 text-4xl uppercase text-[#575757] lg:text-[57px] lg:mb-16">Frequently Asked Questions</h2>
    <div className="w-full">
      {faqs.map((item, idx) => (
        <Accordion key={idx} {...item} />
      ))}
    </div>
  </section>
);
