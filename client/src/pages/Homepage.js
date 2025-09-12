import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";

const Homepage = () => {
    const navigate = useNavigate();

    // Reusable card component
    const FeatureCard = ({ title, desc, icon, onClick }) => (
        <Card
            onClick={onClick}
            sx={{
                boxShadow: 4,
                borderRadius: 4,
                height: 220,
                width: 250,
                transition: "transform 0.25s, box-shadow 0.25s",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                p: 2,
                bgcolor: "rgba(30,30,30,0.9)", // dark glass look
                color: "white",
                backdropFilter: "blur(6px)",
                "&:hover": {
                    transform: "translateY(-6px) scale(1.03)",
                    boxShadow: 8,
                    cursor: "pointer",
                },
            }}
        >
            {icon}
            <Stack spacing={1} mt={2}>
                <Typography fontWeight="bold" variant="h6" sx={{ color: "white" }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray.300" }}>
                    {desc}
                </Typography>
            </Stack>
        </Card>
    );

    return (
        <Box
            sx={{
                minHeight: "100vh",
                px: 4,
                py: 6,
                background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // dark gradient
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography
                variant="h3"
                fontWeight="bold"
                textAlign="center"
                mb={5}
                sx={{ color: "#ffffff" }}
            >
                🚀 AI Tools Dashboard
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: 4,
                    justifyItems: "center",
                    width: "100%",
                    maxWidth: "1200px",
                }}
            >
                {/* Text Summary */}
                <FeatureCard
                    title="Text Summary"
                    desc="Summarize long text into short sentences"
                    icon={<DescriptionRounded sx={{ fontSize: 60, color: "#90caf9" }} />}
                    onClick={() => navigate("/summary")}
                />

                {/* Paragraph */}
                <FeatureCard
                    title="Paragraph"
                    desc="Generate a detailed paragraph"
                    icon={<FormatAlignLeftOutlined sx={{ fontSize: 60, color: "#81c784" }} />}
                    onClick={() => navigate("/paragraph")}
                />

                {/* Chatbot */}
                <FeatureCard
                    title="Chatbot"
                    desc="Chat with AI assistant"
                    icon={<ChatRounded sx={{ fontSize: 60, color: "#f48fb1" }} />}
                    onClick={() => navigate("/chatbot")}
                />

                {/* JS Converter */}
                <FeatureCard
                    title="JS Converter"
                    desc="Translate English to JavaScript"
                    icon={<ChatRounded sx={{ fontSize: 60, color: "#ffb74d" }} />}
                    onClick={() => navigate("/js-converter")}
                />
            </Box>
        </Box>
    );
};

export default Homepage;
