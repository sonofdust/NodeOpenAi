const {Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({apiKey: process.env.OPEN_AI_KEY});
const openai = new OpenAIApi(configuration);

const getResponse = async (req, res) => {
  try {
    const {prompt} = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 64,
      temperature: 0,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["/n"],
    });
    return res
      .status(200)
      .json({success: true, data: response.data.choices[0].text});
  } catch (e) {
    return res.status(400).json({
      success: false,
      error: e.response
        ? e.response.data
        : "There is an issue with the server.",
    });
  }
};

module.exports = {getResponse};
