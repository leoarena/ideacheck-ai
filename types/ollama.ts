export interface OllamaGenerateRequest {
  model: string;
  prompt: string;
  stream: false;
}

export interface OllamaGenerateResponse {
  response?: string;
  error?: string;
  done?: boolean;
}
