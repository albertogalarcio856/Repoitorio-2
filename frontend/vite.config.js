import { defineconfig } from `vite`;
import taildwindcss from `@tailwindcss/vite`;

export default defineconfig({
    plugins : [
        taildwindcss(),
    ],
});
