import { TextField } from "@mui/material"

function InputTemplate({ field, errors, name, rest }) {
  return (
    <TextField
      {...field}
      {...rest}
      label=""
      error={!!errors[name]}
      helperText={
        <p className="custom-error-text">{errors[name]?.message || ""}</p>
      }
      InputProps={{
        sx: {
          color: "white",
          fontFamily: "var(--font-text)",
        },
      }}
      sx={{
        "& .MuiInputBase-root, .MuiInputBase-multiline": {
          "& fieldset": {
            transition: "all 0.3s ease-out",
            border: "2px solid var(--gray)",
            borderRadius: "12px",
            backgroundColor: "var(--gray-dark)",
            zIndex: "0",
          },
          "&:hover fieldset": {
            border: "2px solid white",
          },
          "&.Mui-focused fieldset": {
            boxShadow: "0 0 10px var(--primary-color-light)",
            border: "2px solid var(--primary-color-light)",
            backgroundColor: "var(--gray-dark)",
          },
        },
      }}
    />
  )
}
export default InputTemplate
