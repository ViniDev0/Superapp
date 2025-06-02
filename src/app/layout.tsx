import '../styles/global.css';
import '../styles/miniappstyle.css';
import '../styles/style-home.css';
import '../styles/styleguide.css';
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
  
}
