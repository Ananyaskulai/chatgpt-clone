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
    Card,
} from "@mui/material";

const ChatBot = () => {
    const navigate = useNavigate();
    const isNotMobile = useMediaQuery("(min-width: 1000px)");

    const [text, settext] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/openai/chatbot", { text });
            setResponse(data);
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
                background: "linear-gradient(145deg, #1e293b, #0f172a)", // dark gradient bg
                color: "white",
            }}
        >
            <Collapse in={!!error}>
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            </Collapse>

            <form onSubmit={handleSubmit}>
                <Typography variant="h4" fontWeight="bold" mb={2} color="white">
                    💬 Ask with Chatbot
                </Typography>

                <TextField
                    placeholder="Type your question..."
                    type="text"
                    multiline
                    required
                    margin="normal"
                    fullWidth
                    value={text}
                    onChange={(e) => settext(e.target.value)}
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
                    Chat
                </Button>

                <Typography mt={2} color="gray.300">
                    Not this tool?{" "}
                    <Link
                        to="/"
                        style={{
                            color: "#90caf9",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Go Back
                    </Link>
                </Typography>
            </form>

            <Card
                sx={{
                    mt: 4,
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: 0,
                    height: "500px",
                    borderRadius: 5,
                    backgroundColor: "#0f172a",
                    color: "white",
                    overflowY: "auto",
                }}
            >
                {response ? (
                    <Typography p={2}>{response}</Typography>
                ) : (
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            lineHeight: "500px",
                            color: "rgba(255,255,255,0.4)",
                        }}
                    >
                        Bot Response
                    </Typography>
                )}
            </Card>
        </Box>
    );
};

export default ChatBot;
