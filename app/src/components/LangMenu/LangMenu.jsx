import langList from "./LangList"
import LangMenuContainer from "./Style"
import { Stack } from "@mui/material"

function LangMenu() {
  const langStorage = localStorage.getItem("i18nextLng")

  const handleClick = (lang) => {
    langStorage && localStorage.setItem("i18nextLng", lang)
  }
  return (
    <LangMenuContainer>
      {langList.map((lang) => {
        return (
          <Stack key={lang.id} onClick={() => handleClick(lang.value)}>
            <p>{lang.title}</p>
          </Stack>
        )
      })}
    </LangMenuContainer>
  )
}
export default LangMenu
