import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Acme - A comprehensive application designed to optimize the management of your business.",
  description:
    "Acme is a state-of-the-art, all-in-one business management application tailored to streamline and enhance the efficiency of your operations. Whether you run a small business or a large enterprise, Acme provides robust tools and features to ensure your business runs smoothly and efficiently.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
