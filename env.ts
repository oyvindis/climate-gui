import { validateEnv } from './utils/common';

const NAMESPACE =  process.env.NAMESPACE! ?? 'dev';
const READING_BASE_URI = process.env.NEXT_PUBLIC_READING_BASE_URI! ?? 'https://www.oyvindis.com'

const env = {
  NAMESPACE,
  READING_BASE_URI
}

export default validateEnv(env);
