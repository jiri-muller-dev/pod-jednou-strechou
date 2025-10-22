import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Pod jednou střechou',
        default: 'Pod jednou střechou'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="cs">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className="antialiased text-black bg-yellow-50">
                <div className="flex flex-col min-h-screen bg-noise">
                    <div className="flex flex-col grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
