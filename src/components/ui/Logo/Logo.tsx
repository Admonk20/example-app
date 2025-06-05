import cx from 'classnames'
import { Href } from 'components/navigation'
import 'src/components/ui/styles.css'


type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props

  return (
    <Href to="/" className={cx('flex items-center justify-center', className)}>
      <span className="font-rookie font-bold text-white text-vookie spaced-text">
        VOOKIE
      </span>
    </Href>
  )
}

export default Logo
