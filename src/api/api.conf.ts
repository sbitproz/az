import { globalEnv } from '@/globalEnv';
import axios from 'axios';

export const api = axios.create({
  baseURL: `${globalEnv.BASEURL}`,
  timeout: 1000,
});

