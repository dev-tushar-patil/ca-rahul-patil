import { icons } from './iconData.js';

// Two-tone line icons: navy strokes, with gold details on class "g".
export default function Icon({ name, large = false }) {
  return (
    <svg
      className={large ? 'icon lg' : 'icon'}
      viewBox="0 0 24 24"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  );
}
