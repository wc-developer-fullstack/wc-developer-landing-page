
import { GoogleGenAI } from "@google/genai";

/**
 * Handles communication with the Gemini API to provide technical assistance.
 * Follows strict @google/genai guidelines for initialization and model usage.
 */
export const getGeminiResponse = async (userPrompt: string) => {
  // The API key must be obtained exclusively from the environment variable process.env.API_KEY
  if (!process.env.API_KEY) return "Desculpe, o assistente está offline no momento. Por favor, entre em contato via WhatsApp!";
  
  try {
    // Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Using 'gemini-3-flash-preview' for basic text tasks
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `Você é o assistente virtual da WC Developer. 
        Sua personalidade é profissional, inovadora e focada em tecnologia web.
        WC Developer é um programador com 10+ anos de experiência em HTML, CSS e JavaScript.
        Responda perguntas sobre criação de sites, orçamentos (de forma genérica, sugerindo falar no WhatsApp para valores exatos), e tecnologias.
        Sempre que possível, incentive o usuário a clicar no botão de WhatsApp para falar diretamente com o desenvolvedor (Número 19998295069).
        Responda em Português do Brasil de forma concisa.`,
        temperature: 0.7,
      },
    });

    // Directly accessing the .text property as per guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao processar sua pergunta. Tente novamente mais tarde ou me chame no WhatsApp!";
  }
};
