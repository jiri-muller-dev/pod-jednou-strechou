import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';
import { BackgroundImage } from 'components/background-image';
import Image from 'next/image';

const projectDescription = `Ekumenický projekt *Pod jednou střechou* spojuje k hodnotovému dialogu a vzájemnému poznávání různé směry.  Projekt vznikl z inicitivy [**Žižkostela**](https://komunitnikostel.cz/) a nyní je do něho zapojeno šest skupin (křesťané, židé, muslimové, budhisté, ateisté, humanisté). V rámci této spolupráce se pořádají společné večeře pro členy našich komunit, přípravu programu si jednotlivé organizace střídají, ať už formou představení svého směru či uvedením zajímavého hosta.`;

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="content">
                <h1 className="mb-4">Pod jednou střechou</h1>
                <Markdown content={projectDescription} className="mb-6 text-lg" />
            </section>
            <img
                src="/images/IMG_4229.JPG"
                width="100%"
                className="object-cover h-52"
                alt="skupinová fotka lidí z PJS"
            />
            <section className="content">
                <div className="text-lg">
                    <h2 className="mb-4">Zúčastněné organizace:</h2>
                    <ul>
                        <li>Židovská obec Děčín</li>
                        <li>Ahmadíja Muslimský Spolek</li>
                        <li>Diakonie Českobratrské církve evangelické</li>
                        <li>Husitské centrum</li>
                        <li>Zenová škola Kwan Um</li>
                        <li>Čeští humanisté</li>
                        <li>Ateisté ČR</li>
                        <li>Skeptická společnost Atropos</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
