import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import {
    Box,
    Typography,
    useMediaQuery,
    TextField,
    Button,
    Alert,
    Collapse,
} from "@mui/material";

const Register = () => {
    const navigate = useNavigate();
    const isNotMobile = useMediaQuery("(min-width: 1000px)");

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/v1/auth/register", { username, email, password });
            toast.success("User Registered Successfully");
            navigate("/login");
        } catch (err) {
            if (err.response?.data?.error) {
                setError(err.response.data.error);
            } else if (err.message) {
                setError(err.message);
            }
            setTimeout(() => setError(""), 5000);
        }
    };

    return (
        <Box
            width={isNotMobile ? "40%" : "80%"}
            p={"2rem"}
            m={"2rem auto"}
            borderRadius={5}
            sx={{
                boxShadow: 5,
                background: "linear-gradient(145deg, #1e293b, #0f172a)",
                color: "white",
            }}
        >
            <Collapse in={!!error}>
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            </Collapse>

            <form onSubmit={handleSubmit}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    color="white"
                    align="center"
                >
                    📝 Sign Up
                </Typography>

                <TextField
                    label="Username"
                    required
                    margin="normal"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{
                        "& .MuiInputBase-root": {
                            backgroundColor: "#1e293b",
                            color: "white",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#64748b",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#90caf9",
                        },
                        "& .MuiInputLabel-root": {
                            color: "rgba(255,255,255,0.7)",
                        },
                    }}
                />

                <TextField
                    label="Email"
                    type="email"
                    required
                    margin="normal"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        "& .MuiInputBase-root": {
                            backgroundColor: "#1e293b",
                            color: "white",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#64748b",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#90caf9",
                        },
                        "& .MuiInputLabel-root": {
                            color: "rgba(255,255,255,0.7)",
                        },
                    }}
                />

                <TextField
                    label="Password"
                    type="password"
                    required
                    margin="normal"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                        "& .MuiInputBase-root": {
                            backgroundColor: "#1e293b",
                            color: "white",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#64748b",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#90caf9",
                        },
                        "& .MuiInputLabel-root": {
                            color: "rgba(255,255,255,0.7)",
                        },
                    }}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                        mt: 2,
                        borderRadius: "10px",
                        backgroundColor: "#2563eb",
                        fontWeight: "bold",
                        "&:hover": { backgroundColor: "#1d4ed8" },
                    }}
                >
                    Sign Up
                </Button>

                <Typography mt={2} align="center" color="rgba(255,255,255,0.7)">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        style={{
                            color: "#90caf9",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Login
                    </Link>
                </Typography>
            </form>
        </Box>
    );
};

export default Register;
