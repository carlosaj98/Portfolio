import { useTranslation } from "react-i18next"

const worksTemplate = () => {
  const { t } = useTranslation()
  return {
    artist: [
      {
        id: "work-3d-phone",
        image: "/works-images/work-3d-phone.jpg",
        title: t("works_section.artist_works.title_phone"),
        description: t("works_section.artist_works.desc_phone"),
        link: "https://www.artstation.com/artwork/Ar3W2W",
      },

      {
        id: "work-3d-akm",
        image: "/works-images/work-3d-akm.jpg",
        title: t("works_section.artist_works.title_ak"),
        description: t("works_section.artist_works.desc_ak"),
        link: "https://www.artstation.com/artwork/03qog4",
      },

      {
        id: "work-3d-knight",
        image: "/works-images/work-3d-knight.jpg",
        title: t("works_section.artist_works.title_knight"),
        description: t("works_section.artist_works.desc_knight"),
        link: "https://www.artstation.com/artwork/Jeg3GZ",
      },

      {
        id: "work-3d-creature",
        image: "/works-images/work-3d-creature.jpg",
        title: t("works_section.artist_works.title_creature"),
        description: t("works_section.artist_works.desc_creature"),
        link: "https://www.artstation.com/artwork/Ar9EVN",
      },

      {
        id: "work-3d-kid",
        image: "/works-images/work-3d-kid.jpg",
        title: t("works_section.artist_works.title_kid"),
        description: t("works_section.artist_works.desc_kid"),
        link: "https://www.artstation.com/artwork/03XdAE",
      },
    ],

    developer: [
      {
        id: "work-dev-flights",
        image: "/works-images/work-dev-flights.jpg",
        title: t("works_section.dev_works.title_flights"),
        description:
        t("works_section.dev_works.desc_flights"),
        link: "https://airtracker.vercel.app",
        linkGit: "https://github.com/carlosaj98/flights-tracking",
      },
      {
        id: "work-dev-feedback",
        image: "/works-images/work-dev-feedback.jpg",
        title: t("works_section.dev_works.title_feedback"),
        description:
        t("works_section.dev_works.desc_feedback"),
        link: "https://productfeedback-carlosalvarez.onrender.com/",
        linkGit: "https://github.com/carlosaj98/Project-ProductFeedback",
      },
      {
        id: "work-dev-cultural",
        image: "/works-images/work-dev-cultural.jpg",
        title: t("works_section.dev_works.title_cultural"),
        description:
        t("works_section.dev_works.desc_cultural"),
        link: "https://culturalfit-desafio.onrender.com",
        linkGit: "https://github.com/carlosaj98/desafioBootcamp",
      },
      {
        id: "work-dev-cuphead",
        image: "/works-images/work-dev-cuphead.jpg",
        title: t("works_section.dev_works.title_cuphead"),
        description:
        t("works_section.dev_works.desc_cuphead"),
        link: "https://cuphead-gameproject.onrender.com",
        linkGit: "https://github.com/carlosaj98/Cuphead_gameProject",
      },
    ],
  }
}

export default worksTemplate
