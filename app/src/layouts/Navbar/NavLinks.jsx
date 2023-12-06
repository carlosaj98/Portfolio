import { IconHome, IconAbout, IconWorks, IconBackground, IconContact } from "../../common/Icons/Icons"

const NavLinks = [
  {
    title: "Home",
    id: "home-section",
    icon: <IconHome color={"var(--gray-light)"} size={"25px"} />,
  },
  {
    title: "About me",
    id: "about-section",
    icon: <IconAbout color={"var(--gray-light)"} size={"25px"} />,
  },
  {
    title: "Works",
    id: "works-section",
    icon: <IconWorks color={"var(--gray-light)"} size={"25px"} />,
  },
  {
    title: "Contact",
    id: "contact-section",
    icon: <IconContact color={"var(--gray-light)"} size={"25px"} />,
  },
]

export default NavLinks
