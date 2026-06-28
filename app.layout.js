export const metadata = {
  title: "CLAY Coffee",
  description: "AIU University Café"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
