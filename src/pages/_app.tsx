import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ThemeProvider } from "~/components/theme-provider";
import { Toaster } from "~/components/ui/sonner";
import Header from "~/components/Header";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={GeistSans.className}>
        <Header />
        <Component {...pageProps} />
        <Toaster/>
      </div>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
