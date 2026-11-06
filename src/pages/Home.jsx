import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { site, home, articles } from '../content.js';
import Icon from '../components/Icon.jsx';
import { CallToAction, InfoCard, ProcessSection, SectionTitle, usePageMeta } from '../components/blocks.jsx';

export default function Home() {
  usePageMeta(
    `${site.name} | ${site.role} in ${site.city}`,
    `${site.name}, ${site.role} in ${site.location}. Audit, income tax, GST, business setup, registrations and MCA compliance services.`,
  );
  return (
    <>
      <section className="hero hero-home">
        <div className="hero-photo"><img src={`${import.meta.env.BASE_URL}images/home.jpg`} alt="" width="1400" height="933" /></div>
        <div className="wrap hero-in">
          <p className="eyebrow">
            {home.eyebrow.map((word, i) => <Fragment key={word}>{i > 0 && <i />}{word}</Fragment>)}
          </p>
          <h1>
            {home.heroLines.map((line) => <Fragment key={line}>{line}<br /></Fragment>)}
            &amp; <span className="accent">{home.heroAccent}</span>
          </h1>
          <p>{home.intro}</p>
          <div className="btns">
            <Link className="btn gold" to="/contact">Get a Consultation<Icon name="arrow" /></Link>
            <Link className="btn line" to="/#services">Our Services</Link>
          </div>
        </div>
      </section>

      <div className="wrap strip-wrap">
        <div className="strip" id="services">
          {home.strip.map((s) => (
            <Link key={s.href} to={s.href}>
              <Icon name={s.icon} large />
              <span><strong>{s.a}</strong><small>{s.b}</small></span>
            </Link>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap split">
          <div className="split-photo">
            <img src={`${import.meta.env.BASE_URL}images/about.jpg`} alt="Two professionals shaking hands" width="1400" height="933" loading="lazy" />
          </div>
          <div>
            <p className="kicker">{home.whyEyebrow}</p>
            <h2 className="big">{home.whyTitle[0]}<br />{home.whyTitle[1]}</h2>
            <p className="lede">{home.whyText}</p>
            <ul className="why-list compact">
              {home.why.map(([icon, label]) => <li key={label}><Icon name={icon} large /><span>{label}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionTitle>{home.whoTitle}</SectionTitle>
          <div className="cards four">{home.who.map((item) => <InfoCard key={item.title} item={item} />)}</div>
        </div>
      </section>

      <ProcessSection tinted={false} />

      <section className="section tint">
        <div className="wrap">
          <SectionTitle>From the Blog</SectionTitle>
          <div className="posts">
            {articles.slice(0, 3).map((a) => (
              <Link className="post" key={a.id} to={`/blog#${a.id}`}>
                <span className="topic">{a.topic}</span>
                <h3>{a.title}</h3>
                <p>{a.summary}</p>
                <span className="more">Read article<Icon name="arrow" /></span>
              </Link>
            ))}
          </div>
          <p className="center"><Link className="btn outline" to="/blog">View All Articles</Link></p>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
