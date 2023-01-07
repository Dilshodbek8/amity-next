import TextField from "@mui/material/TextField";

type InputProps = {
  radius?: string;
  label?: string;
  fullWidth?: boolean;
  error?: boolean;
  errorLabel?: string;
  multiline?: boolean;
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
        variant="outlined"
        // {...props}
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
