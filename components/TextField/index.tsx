import TextField from "@mui/material/TextField";

type InputProps = {
  radius?: String;
  label?: String;
  fullWidth?: Boolean;
  error?: Boolean;
  errorLabel?: String;
  multiline?: Boolean;
  rows?: number;
  onChange?: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};
export default function TextInput({
  radius,
  label,
  errorLabel,
  ...props
}: InputProps) {
  return (
    <>
      <TextField
        helperText={errorLabel}
        label={label}
        variant="outlined"
        {...props}
        sx={{
          border: "none",
          borderRadius: radius ? "15px" : "0",
          backgroundColor: "#F4F4F8",
          "& fieldset": {
            borderColor: "#ffc600",
            borderRadius: radius ? "15px" : "0",
          },
        }}
      />
    </>
  );
}
