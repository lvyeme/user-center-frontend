import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {UNIVERSE_LINK} from "@/constant";
const Footer: React.FC = () => {
  const defaultMessage = 'Lvye';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Never give you up',
          title: 'Hello World',
          href: UNIVERSE_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />Lvye Github</>,
          href: 'https://github.com/lvyeme',
          blankTarget: true,
        },
        {
          key: 'Never give you up',
          title: 'NGYU',
          href: UNIVERSE_LINK,
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
