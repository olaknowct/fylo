import { ReactComponent as AccessAnywhere } from '../../images/icon-access-anywhere.svg';
import { ReactComponent as AnyFile } from '../../images/icon-any-file.svg';
import { ReactComponent as Colab } from '../../images/icon-collaboration.svg';
import { ReactComponent as Security } from '../../images/icon-security.svg';

type IconType = 'AccessAnywhere' | 'AnyFile' | 'Colab' | 'Security';

interface IconProps {
  type: IconType;
}

const Icon = ({ type }: IconProps) => {
  const Icons = {
    AccessAnywhere,
    AnyFile,
    Colab,
    Security,
  };

  const Component = Icons[type];

  return <Component />;
};

export default Icon;
