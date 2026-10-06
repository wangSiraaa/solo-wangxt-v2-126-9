import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 纯前端本地应用：无后端、无网络请求
export default defineConfig({
  plugins: [react()],
  base: './'
});
