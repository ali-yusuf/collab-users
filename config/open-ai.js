import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });



const configuration = new Configuration({
    apiKey: "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",
    organization: "YOURE_OPENAI_OGRANIZATION",
});

configuration.baseOptions.headers = {
    Authorization: "Bearer " + "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",
};
const openai = new OpenAIApi(configuration);

export default openai;