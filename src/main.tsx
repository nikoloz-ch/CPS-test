import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] mt-16 fixed"
        )}
      />
      <App />
    </ThemeProvider>
  </StrictMode>
);
