console.log("✅ openaiRoutes.js loaded");


const express = require("express");
const {
    summaryController,
    paragraphController,
    chatbotController,
    jsconverterController,
    scifiImageController,
} = require("../controllers/openaiController");

const router = express.Router();

//route
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
//router.post("/scifi-image", scifiImageController);

//temporary to test for postman
router.get("/test", (req, res) => {
    res.json({ message: "✅ OpenAI routes are working" });
});


module.exports = router;