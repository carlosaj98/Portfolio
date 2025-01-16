import langList from "./LangList"
import LangMenuContainer from "./Style"
import { Box, Stack } from "@mui/material"
import { useTranslation } from "react-i18next"

function LangMenu() {
  const { i18n } = useTranslation()

  const handleClick = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem("i18nextLng", lang)
  }
  return (
    <LangMenuContainer>
      {langList.map((lang) => {
        return (
          <Stack
            key={lang.id}
            className="lang-item"
            onClick={() => handleClick(lang.value)}
            flexDirection={"row"}
            gap={"12px"}
          >
            <p>{lang.title}</p>
            <Box width={"20px"} height={"20px"} sx={{ objectFit: "contain" }}>
              <img src={lang.flag} width={"100%"} height={"100%"} />
            </Box>
          </Stack>
        )
      })}
    </LangMenuContainer>
  )
}
export default LangMenu
