import "./i18n"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
    <ThemeProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    <Analytics/>
    </>
  );
}

export default App;
