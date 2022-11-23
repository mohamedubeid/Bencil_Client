import { styled, Box } from "@mui/material";

export const primaryButton = {
  marginTop: "44px",
  fontWeight: "700",
  fontSize: "15px",
  p: "13px 0px",
};
export const secondaryButton = {
  marginTop: "13px",
  fontWeight: "600",
  fontSize: "15px",
  p: "13px 0px",
  color: "black",
  border: "1px solid rgba(227, 227, 228, 1)",
  "&:hover": { background: "none", border: "1px solid rgba(227, 227, 228, 1)" },
};

export const InputFieldStyle = styled(Box)(() => ({
  border: "1px solid #ebebeb",
  marginTop: "20px",
  borderRadius: "5px",
  p: 0,
  input: {
    "&::placeholder": {
      fontSize: "16px",
      fontWeight: "400",
      opacity: "50%",
    },
  },
}));

export const StyledInputBase = {
  padding: "12px 1rem",
  fontSize: "13px",
};
