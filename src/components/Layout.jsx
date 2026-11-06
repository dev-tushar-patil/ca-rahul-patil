import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { site, servicePages } from '../content.js';
import Icon from './Icon.jsx';
import { telHref, whatsappHref } from './links.js';

const navItems = [
  { path: '/', nav: 'Home' },
  ...servicePages,
  { path: '/about', nav: 'About' },
  { path: '/blog', nav: 'Blog' },
  { path: '/careers', nav: 'Career Opportunity' },
  { path: '/contact', nav: 'Contact Us' },
];

function Logo() {
  return (
    <svg className="logo" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="30.5" fill="#0f2747" />
      <circle cx="32" cy="32" r="26.5" fill="none" stroke="#c9a24a" strokeWidth="1.2" />
      <text x="32" y="41" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="25" fontWeight="700" fill="#e4c67c">RP</text>
    </svg>
  );
}

function Nav() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  const closeAll = (event) => {
    setMenuOpen(false);
    setOpenSub(null);
    event.currentTarget.blur(); // lets the desktop dropdown close after a click
  };

  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap nav-in">
        <button className="nav-toggle" type="button" aria-expanded={menuOpen} aria-controls="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bars" aria-hidden="true" />Menu
        </button>
        <ul className={menuOpen ? 'menu open' : 'menu'} id="menu">
          {navItems.map((item) => {
            const current = pathname === item.path;
            const link = (
              <Link to={item.path} className={current ? 'active' : undefined} aria-current={current ? 'page' : undefined} onClick={closeAll}>
                {item.nav}
              </Link>
            );
            if (!item.services) return <li key={item.path}>{link}</li>;
            const expanded = openSub === item.path;
            return (
              <li key={item.path} className={expanded ? 'has-sub open' : 'has-sub'}>
                {link}
                <button className="sub-toggle" type="button" aria-expanded={expanded} aria-label={`Show ${item.nav} services`} onClick={() => setOpenSub(expanded ? null : item.path)}>
                  <Icon name="chevron" />
                </button>
                <ul className="sub">
                  {item.services.map((s) => (
                    <li key={s.id}><Link to={`${item.path}#${s.id}`} onClick={closeAll}>{s.title}</Link></li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span className="tb-loc"><Icon name="pin" />{site.location}</span>
          <span className="tb-right">
            <Link to="/careers">Career Opportunity</Link><i />
            <Link to="/blog">Blog</Link>
            <span className="tb-social">
              {Object.entries(site.social).map(([name, url]) => (
                <a key={name} href={url} aria-label={name}><Icon name={name} /></a>
              ))}
            </span>
          </span>
        </div>
      </div>
      <header className="masthead">
        <div className="wrap masthead-in">
          <Link className="brand" to="/">
            <Logo />
            <span className="brand-text"><strong>{site.name}</strong><em>{site.role}</em></span>
          </Link>
          <a className="call" href={telHref} aria-label={`Call ${site.phoneDisplay}`}>
            <span className="call-ic"><Icon name="phone" /></span>
            <span className="call-text"><small>Call us</small>{site.phoneDisplay}</span>
          </a>
        </div>
      </header>
      <Nav />
      <main id="main">{children}</main>
      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <p className="f-brand">{site.name}</p>
            <p className="f-role">{site.role}, {site.city}</p>
            <p>Audit, taxation, business setup and compliance services for individuals and businesses.</p>
          </div>
          <div>
            <h2>Services</h2>
            <ul>{servicePages.map((p) => <li key={p.key}><Link to={p.path}>{p.nav}</Link></li>)}</ul>
          </div>
          <div>
            <h2>The Practice</h2>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/careers">Career Opportunity</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul className="f-contact">
              <li><Icon name="pin" />{site.location}</li>
              <li><Icon name="phone" /><a href={telHref}>{site.phoneDisplay}</a></li>
              <li><Icon name="chat" /><a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <div className="wrap">
            <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p>The information on this website is general in nature and is not professional advice. Please consult a professional about your specific situation.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
