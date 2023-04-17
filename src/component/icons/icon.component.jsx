import { ReactComponent as AccessAnywhere } from '../../images/icon-access-anywhere.svg';
import { ReactComponent as AnyFile } from '../../images/icon-any-file.svg';
import { ReactComponent as Colab } from '../../images/icon-collaboration.svg';
import { ReactComponent as Security } from '../../images/icon-security.svg';

const Icon = ({ type }) => {
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
