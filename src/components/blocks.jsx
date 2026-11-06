import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { site, process as steps } from '../content.js';
import Icon from './Icon.jsx';
import { telHref } from './links.js';

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute('content', description);
  }, [title, description]);
}

export function SectionTitle({ children }) {
  return <h2 className="sec-title"><span>{children}</span></h2>;
}

export function Hero({ crumb, title, accent, intro, image, children }) {
  return (
    <section className="hero">
      <div className="hero-photo"><img src={`${import.meta.env.BASE_URL}images/${image}`} alt="" width="1400" height="933" /></div>
      <div className="wrap hero-in">
        <nav className="crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><Icon name="chevron" /><span>{crumb}</span>
        </nav>
        <h1>{title} <span className="accent">{accent}</span></h1>
        <span className="rule" />
        <p>{intro}</p>
        {children}
      </div>
    </section>
  );
}

export function ProcessSection({ tinted = true }) {
  return (
    <section className={tinted ? 'section tint' : 'section'}>
      <div className="wrap">
        <SectionTitle>How We Work</SectionTitle>
        <ol className="steps">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="num">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CallToAction({
  heading = 'Have a question about your compliance?',
  text = `Speak with ${site.name} about your requirement.`,
}) {
  return (
    <section className="cta">
      <div className="wrap cta-in">
        <div><h2>{heading}</h2><p>{text}</p></div>
        <div className="btns">
          <a className="btn gold" href={telHref}><Icon name="phone" />{site.phoneDisplay}</a>
          <Link className="btn line" to="/contact">Send an Enquiry</Link>
        </div>
      </div>
    </section>
  );
}

export function InfoCard({ item }) {
  return (
    <div className="card plain">
      <Icon name={item.icon} large />
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </div>
  );
}
