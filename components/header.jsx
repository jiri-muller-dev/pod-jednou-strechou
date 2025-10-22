import Image from 'next/image';
import Link from 'next/link';
import projectLogo from 'public/logo.png';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    /*{ linkText: 'Home', href: '/' }*/
];

export function Header() {
    return (
        <nav className="content flex flex-wrap items-center justify-between gap-4 pt-6 pb-8 sm:pt-12 md:pb-12">
            <Link href="/" className='no-underline'> 
                <Image src={projectLogo} className='inline-block me-4' alt="Netlify logo" />
                {/*<h1 className="uppercase text-lg tracking-wider inline-block">Pod jednou střechou</h1>*/}
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
