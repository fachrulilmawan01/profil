import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fachrul Ilmawan | Project Manager & SAP SuccessFactors Consultant',
  description:
    'Executive personal portfolio of Fachrul Ilmawan, S.Kom., M.Kom. - Project Manager & SAP SuccessFactors Consultant specializing in enterprise technology, digital transformation, and delivering impactful business solutions.',
  keywords: [
    'Fachrul Ilmawan',
    'Project Manager',
    'SAP SuccessFactors',
    'SAP Consultant',
    'Enterprise IT',
    'Digital Transformation',
    'UAT',
    'Quality Assurance',
    'Jakarta',
    'Indonesia'
  ],
  authors: [{ name: 'Fachrul Ilmawan' }],
  creator: 'Fachrul Ilmawan',
  metadataBase: new URL('https://profile.fachrulilmawan.workers.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://profile.fachrulilmawan.workers.dev',
    title: 'Fachrul Ilmawan | Project Manager & SAP SuccessFactors Consultant',
    description:
      'Turning Complex Technology into Meaningful Business Impact. Project Manager and SAP IT Consultant with 11+ years of experience in enterprise systems.',
    siteName: 'Fachrul Ilmawan Executive Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fachrul Ilmawan | Project Manager & SAP SuccessFactors Consultant',
    description:
      'Turning Complex Technology into Meaningful Business Impact. Project Manager and SAP IT Consultant with 11+ years of experience in enterprise systems.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen executive-bg-light dark:executive-bg-dark">
        {children}
      </body>
    </html>
  );
}
