import { IconHome, IconAbout, IconWorks, IconBackground, IconContact } from "../../common/Icons/Icons"

const NavLinks = [
  {
    title: "Home",
    id: "home-section",
    icon: <IconHome color={"var(--primary-color-dark)"} size={"20px"} />,
  },
  {
    title: "About me",
    id: "about-section",
    icon: <IconAbout color={"var(--primary-color-dark)"} size={"20px"} />,
  },
  {
    title: "Works",
    id: "works-section",
    icon: <IconWorks color={"var(--primary-color-dark)"} size={"20px"} />,
  },
  {
    title: "Background",
    id: "background-section",
    icon: <IconBackground color={"var(--primary-color-dark)"} size={"20px"} />,
  },
  {
    title: "Contact",
    id: "contact-section",
    icon: <IconContact color={"var(--primary-color-dark)"} size={"20px"} />,
  },
]

export default NavLinks
