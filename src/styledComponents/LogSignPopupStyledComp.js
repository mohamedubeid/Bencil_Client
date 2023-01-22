import { styled, Box } from "@mui/material";

export const primaryButton = {
    marginTop: "5px",
    marginBottom: "5px",
    fontWeight: "700",
    fontSize: "15px",
    p: "11px 0px",
};
export const secondaryButton = {
    marginTop: "5px",
    fontWeight: "600",
    fontSize: "15px",
    p: "8px 0px",
    color: "black",
    border: "1px solid rgba(200, 200, 200, 1)",
    "&:hover": {
        background: "none",
        border: "1px solid rgba(227, 227, 228, 1)",
    },
};

export const InputFieldStyle = styled(Box)(() => ({
    border: "1px solid #ebebeb",
    marginTop: "15px",
    borderRadius: "5px",
    p: 0,
    "&: hover": {
        border: "1px solid black",
        input: {
            "&::placeholder": {
                fontSize: "16px",
                fontWeight: "400",
                opacity: "65%",
            },
        },
    },
    input: {
        "&::placeholder": {
            fontSize: "16px",
            fontWeight: "400",
            opacity: "50%",
        },
    },
}));

export const StyledInputBase = {
    margin: "10px 1rem",
    fontSize: "13px",
    overflow: "visible",
};

export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 200,
            width: 250,
            borderRadius: 5,
            border: "1px solid #00000033",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
    },
};
export const itemStyle = {
    fontSize: "2px",
    padding: "0px",
    margin: 0,
};
