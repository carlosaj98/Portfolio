import {
  IconHome,
  IconAbout,
  IconWorks,
  IconContact,
} from "../../common/Icons/Icons"
import { useTranslation } from "react-i18next"

const NavLinks = () => {
  const { t } = useTranslation()

  const links = [
    {
      title: t("navbar.nav_home"),
      id: "home-section",
      icon: <IconHome color={"var(--gray-light)"} size={"25px"} />,
    },
    {
      title: t("navbar.nav_about"),
      id: "about-section",
      icon: <IconAbout color={"var(--gray-light)"} size={"25px"} />,
    },
    {
      title: t("navbar.nav_works"),
      id: "works-section",
      icon: <IconWorks color={"var(--gray-light)"} size={"25px"} />,
    },
    {
      title: t("navbar.nav_contact"),
      id: "contact-section",
      icon: <IconContact color={"var(--gray-light)"} size={"25px"} />,
    },
  ]

  return links
}

export default NavLinks
