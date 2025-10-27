import "../../i18n";
import Link from "next/link";

export default async function RootLayout({ children, params }) {
  const { lng } = await params;

  return (
    <html lang={lng} dir={lng === "ar" ? "rtl" : "ltr"}>
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
