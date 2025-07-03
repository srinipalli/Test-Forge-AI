export const getEnvVar = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    console.warn(`Environment variable ${key} is not set`);
    return '';
  }
  return value;
};

export const GOOGLE_API_KEY = getEnvVar('GOOGLE_GENERATIVE_AI_API_KEY'); 