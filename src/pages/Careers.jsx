import { site, careers } from '../content.js';
import { whatsappHref } from '../components/links.js';
import { CallToAction, Hero, SectionTitle, usePageMeta } from '../components/blocks.jsx';

export default function Careers() {
  usePageMeta(`${careers.metaTitle} | ${site.name}, ${site.city}`, careers.intro);
  return (
    <>
      <Hero crumb="Career Opportunity" title="Career" accent="Opportunity" intro={careers.intro} image="careers.jpg" />
      <section className="section">
        <div className="wrap narrow">
          <SectionTitle>{careers.heading}</SectionTitle>
          <p className="lede center">{careers.text}</p>
          <div className="roles">
            {careers.roles.map((role) => {
              const message = encodeURIComponent(`Hello, I am interested in the ${role.title} role at ${site.name}.`);
              return (
                <article className="role" key={role.title}>
                  <div>
                    <h3>{role.title}</h3>
                    <span className="topic">{role.type}</span>
                    <p>{role.text}</p>
                  </div>
                  <a className="btn outline" href={`${whatsappHref}?text=${message}`} target="_blank" rel="noopener noreferrer">Apply on WhatsApp</a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <CallToAction heading="Do not see a suitable role?" text="Call us to tell us about your background and what you are looking for." />
    </>
  );
}
