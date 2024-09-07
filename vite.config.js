<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
>>>>>>> 7e1c700 (Initial commit)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
})
=======
  base: "/ToDoAppWithRedux/",
  build: {
    outDir: "./dist",
  },
});
>>>>>>> 7e1c700 (Initial commit)
