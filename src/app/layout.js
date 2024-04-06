import "./globals.css";

export const metadata = {
  title: "혼밥력",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
