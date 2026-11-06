import { Link } from 'react-router-dom';
import { site, articles } from '../content.js';
import { CallToAction, Hero, usePageMeta } from '../components/blocks.jsx';

export default function Blog() {
  usePageMeta(`Blog: Tax and Compliance Articles | ${site.name}`, 'Plain-language articles on income tax, GST, business setup and MCA compliance.');
  return (
    <>
      <Hero crumb="Blog" title="Articles &" accent="Insights" intro="Plain-language notes on tax, compliance and setting up a business." image="blog.jpg" />
      <section className="section">
        <div className="wrap blog-grid">
          <aside className="panel sticky">
            <h3>In This Section</h3>
            <ul className="toc">
              {articles.map((a) => (
                <li key={a.id}><Link to={`#${a.id}`}><span className="topic">{a.topic}</span>{a.title}</Link></li>
              ))}
            </ul>
          </aside>
          <div>
            {articles.map((a) => (
              <article className="article" id={a.id} key={a.id}>
                <span className="topic">{a.topic}</span>
                <h2>{a.title}</h2>
                {a.body.map((text) => <p key={text}>{text}</p>)}
              </article>
            ))}
          </div>
        </div>
      </section>
      <CallToAction heading="Need advice on your specific case?" text="These articles are general. Laws change and facts differ, so please ask before acting on them." />
    </>
  );
}
