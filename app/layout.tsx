import { AmplitudeProvider } from "@/analytics/amplitude";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AmplitudeProvider />
      {children}
    </>
  );
}
