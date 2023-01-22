import React, { useContext } from "react";
import { DialogTitle, Dialog, Typography, Box } from "@mui/material";
import PopupProfessions from "./PopupProfessions";
import authContext from "../../auth-context.js";
const ChooseProfessionPopup = (props) => {
    const { onClose, open, Topics } = props;
    const auth = useContext(authContext);
    return (
        <Dialog
            open={open}
            sx={{
                "& .MuiDialog-paper": {
                    borderRadius: "20px",
                    paddingTop: "33px",
                    paddingBottom: "30px",
                    paddingLeft: { xs: "5%", sm: "41px" },
                    paddingRight: "5px",
                    width: { xs: "85%", sm: "427px" },
                },
            }}
        >
            <DialogTitle
                sx={{
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24.38px",
                    p: 0,
                    m: 0,
                }}
            >
                Choose your profession
            </DialogTitle>
            <Typography
                sx={{
                    fontWeight: 600,
                    fontSize: "12px",
                    paddingLeft: "4px",
                    paddingTop: "14px",
                }}
            >
                Bencil connects you with people just like you.
            </Typography>
            <Box sx={{ marginTop: "21px" }}>
                {Topics.map((topic, i) => {
                    return (
                        <PopupProfessions
                            key={i}
                            topic={topic}
                            onClose={onClose}
                        />
                    );
                })}
            </Box>
            <Typography
                sx={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#000",
                    mt: "35px",
                }}
                component="div"
            >
                Have an account?
                <Typography
                    sx={{
                        fontSize: "12px",
                        fontWeight: "700",
                        ml: "5px",
                        cursor: "pointer",
                    }}
                    color="primary"
                    display="inline"
                    onClick={() => {
                        auth.login();
                        onClose();
                    }}
                >
                    Login here.
                </Typography>
            </Typography>
        </Dialog>
    );
};

export default ChooseProfessionPopup;
