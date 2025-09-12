import React from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const loggedIn = JSON.parse(localStorage.getItem("authToken"));

    // handle logout
    const handleLogout = async () => {
        try {
            await axios.post("/api/v1/auth/logout");
            localStorage.removeItem("authToken");
            toast.success("Logged out successfully");
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box
            width="100%"
            px="6%"
            py="1rem"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
                background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)", // dark gradient
                boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                position: "sticky",
                top: 0,
                zIndex: 1000,
            }}
        >
            {/* Logo / Title */}
            <Typography
                variant="h4"
                sx={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    color: "white",
                    "&:hover": { color: "#90caf9" }, // soft blue on hover
                    transition: "0.3s",
                }}
                onClick={() => navigate("/")}
            >
                🚀 AI GPT3 Clone
            </Typography>

            {/* Nav Buttons */}
            {loggedIn ? (
                <Box display="flex" gap="1rem">
                    <Button
                        component={NavLink}
                        to="/"
                        variant="text"
                        sx={{
                            fontWeight: "bold",
                            textTransform: "none",
                            color: "white",
                            "&.active": { color: "#90caf9" },
                            "&:hover": { color: "#64b5f6" },
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        onClick={handleLogout}
                        variant="contained"
                        color="error"
                        sx={{
                            borderRadius: "25px",
                            px: 3,
                            textTransform: "none",
                            fontWeight: "bold",
                            boxShadow: "0 3px 8px rgba(255,0,0,0.35)",
                            "&:hover": {
                                backgroundColor: "#d32f2f",
                            },
                        }}
                    >
                        Logout
                    </Button>
                </Box>
            ) : (
                <Box display="flex" gap="1rem">
                    <Button
                        component={NavLink}
                        to="/register"
                        variant="contained"
                        sx={{
                            borderRadius: "25px",
                            px: 3,
                            textTransform: "none",
                            fontWeight: "bold",
                            backgroundColor: "#9c27b0",
                            color: "white",
                            boxShadow: "0 3px 8px rgba(156,39,176,0.35)",
                            "&:hover": {
                                backgroundColor: "#7b1fa2",
                            },
                        }}
                    >
                        Sign Up
                    </Button>
                    <Button
                        component={NavLink}
                        to="/login"
                        variant="outlined"
                        sx={{
                            borderRadius: "25px",
                            px: 3,
                            textTransform: "none",
                            fontWeight: "bold",
                            color: "white",
                            borderColor: "white",
                            borderWidth: "2px",
                            "&:hover": {
                                borderColor: "#90caf9",
                                color: "#90caf9",
                                backgroundColor: "rgba(255,255,255,0.05)",
                            },
                        }}
                    >
                        Sign In
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default Navbar;
