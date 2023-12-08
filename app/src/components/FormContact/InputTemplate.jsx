import { TextField } from "@mui/material"

function InputTemplate({ field, errors, name, rest }) {
  return (
    <TextField
      {...field}
      {...rest}
      label=""
      error={!!errors[name]}
      helperText={errors[name]?.message || ""}
      fullWidth
      InputProps={{
        sx: {
          color: "white",
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
            backgroundColor: "var(--gray-dark)",
          },
          "&:hover fieldset": {
            border: "2px solid white",
            boxShadow: "0 0 10px white",
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
