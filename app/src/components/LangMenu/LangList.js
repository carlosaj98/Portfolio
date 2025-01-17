import { useTranslation } from "react-i18next"

const LangList = () => {
  const {t} = useTranslation()
  return [
    {
      id: "lang-es",
      value: "es",
      title: t("lang_button.spanish"),
      flag: "/flags/es.png",
    },

    {
      id: "lang-en",
      value: "en",
      title: t("lang_button.english"),
      flag: "/flags/en.png",
    },
  ]
}

export default LangList
