const dotenv = require("dotenv");
dotenv.config();
const Groq = require("groq-sdk");

// Initialize Groq client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// ✅ Summary
exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: `Summarize the following text clearly and concisely:\n\n${text}`
        },
      ],
      max_tokens: 300,
      temperature: 0.5,
    });

    return res.status(200).json({
      summary: response.choices[0].message?.content || "No response"
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error generating summary" });
  }
};


// ✅ Paragraph
exports.paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a helpful assistant that writes detailed paragraphs." },
        { role: "user", content: `Write a detailed paragraph about: ${text}` },
      ],
      max_tokens: 500,
      temperature: 0.5,
    });

    return res.status(200).json(response.choices[0].message.content);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error generating paragraph" });
  }
};

// ✅ Chatbot (normal English, no Yoda)
exports.chatbotController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a helpful assistant. Always reply in clear, fluent English." },
        { role: "user", content: text },
      ],
      max_tokens: 400,
      temperature: 0.7,
    });

    // ✅ Return plain string instead of { reply: "..." }
    return res.status(200).json(response.choices[0].message.content);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error generating chatbot response" });
  }
};


// ✅ JS Converter
exports.jsconverterController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a code assistant that converts instructions into JavaScript." },
        { role: "user", content: `Convert this into JavaScript: ${text}` },
      ],
      max_tokens: 400,
      temperature: 0.25,
    });

    return res.status(200).json(response.choices[0].message.content);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error converting to JavaScript" });
  }
};

// ⚠️ Groq does not yet support image generation directly
// exports.scifiImageController = async (req, res) => {
//   return res.status(501).json({ message: "Image generation not supported by Groq." });
// };
