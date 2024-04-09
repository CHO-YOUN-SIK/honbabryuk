import "./globals.css";

export const metadata = {
  title: "혼밥력",
  description: "",
  icons: {
    icon: "/bookmark.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
