import { TextField } from "@mui/material"
import { useCustomTheme } from "../../context/CustomThemeContext"

function InputTemplate({ field, errors, name, rest }) {
  const { theme } = useCustomTheme()
  return (
    <TextField
      {...field}
      {...rest}
      label=""
      error={!!errors[name]}
      helperText={errors[name]?.message || ""}
      fullWidth
      autoComplete="off"
      InputProps={{
        sx: {
          color: "var(--texts-color)",
          fontFamily: "var(--font-text)",
          fontSize: "var(--font-size-XS)",
        },
      }}
      FormHelperTextProps={{ className: "custom-error-text" }}
      sx={{
        "& .MuiInputBase-root, .MuiInputBase-multiline": {
          "& fieldset": {
            transition: "all 0.3s ease-out",
            border: "2px solid transparent",
            borderRadius: "12px",
            backgroundColor:
              theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0, 0, 0, 0.1)",
            boxShadow:
              theme === "dark"
                ? "0 0px 3px var(--neutral-400)"
                : "0 0px 3px var(--neutral-600)",
          },
          "&:hover fieldset": {
            border: "2px solid var(--neutral-500)",
            boxShadow: "0 0 6px var(--neutral-500)",
          },
          "&.Mui-focused fieldset": {
            boxShadow:
              theme === "dark"
                ? "0 0 6px var(--primary-color-light)"
                : "0 0 6px var(--primary-color-dark)",
            border:
              theme === "dark"
                ? "2px solid var(--primary-color-light)"
                : "2px solid var(--primary-color-dark)",
            backgroundColor: "var(--gray-dark)",
          },
        },
      }}
    />
  )
}
export default InputTemplate
