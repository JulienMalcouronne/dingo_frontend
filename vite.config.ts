import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [sveltekit()],
    server: {
      port: 3000,
      // proxy: {
      //   "/api": {
      //     target: process.env.VITE_API_URL,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ""),
      //   },
      // },
    },
  });
};
