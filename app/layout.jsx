import Nav from "../components/Nav";
import "./globals.css";
import { ReduxProvider } from "../store/Provider";

export const metadata = {
  title: "BloggIn",
  description: "Discover and Write interesting Blogs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/blog-icon.png" />
      </head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <ReduxProvider>
          <main className="app">
            <Nav />
            {children}
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
