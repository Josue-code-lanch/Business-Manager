import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Pagina de ejemplo para el curso de Next.js Learn. Simula un negocio de e-commerce, con una interfaz de usuario de alta calidad. "
        />
        <meta name="author" content="Josue Gonzalez" />
        <title>
          Acme - A comprehensive application designed to optimize the management
          of your business.
        </title>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
