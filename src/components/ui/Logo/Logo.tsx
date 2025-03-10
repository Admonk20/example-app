import cx from 'classnames';
import { Href } from 'components/navigation';
import NewLogoSVG from 'vookie.svg'; // Import your new SVG file

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props;

  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <img
        src={NewLogoSVG}
        alt="Logo"
        className="h-full"
      />
    </Href>
  );
};

export default Logo;
