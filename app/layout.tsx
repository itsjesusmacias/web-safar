import { AmplitudeProvider } from "@/analytics/amplitude";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AmplitudeProvider />
      {children}
      <Toaster />
    </>
  );
}
