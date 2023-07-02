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