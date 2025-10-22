import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';
import { BackgroundImage } from 'components/background-image';
import Image from 'next/image';
import { LinkIcon } from 'components/link-icon';

const projectDescription = `Ekumenický projekt *Pod jednou střechou* spojuje k hodnotovému dialogu a vzájemnému poznávání různé směry.  Projekt vznikl z inicitivy [**Žižkostela**](https://komunitnikostel.cz/) a nyní je do něho zapojeno šest skupin (křesťané, židé, muslimové, budhisté, ateisté, humanisté). V rámci této spolupráce se pořádají společné večeře pro členy našich komunit, přípravu programu si jednotlivé organizace střídají, ať už formou představení svého směru či uvedením zajímavého hosta.`;
const contanctInformation = `Stránky připravuje:  Jiří Müller [jiri.muller@humanists.cz](mailto:jiri.muller@humanists.cz)\n
Koordinátorka projektu: Mgr. Adéla Dluhošová [adela.dluhosova@husitskecentrum.cz](mailto:adela.dluhosova@husitskecentrum.cz)`;

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
                        <li>
                            Židovská obec Děčín <LinkIcon url="http://www.zidovskaobecdecin.cz/" />
                        </li>
                        <li>
                            Ahmadíja Muslimský Spolek <LinkIcon url="https://www.ahmadija.cz/" />
                        </li>
                        <li>
                            Diakonie Českobratrské církve evangelické <LinkIcon url="https://diakonie.cz/" />
                        </li>
                        <li>
                            Husitské centrum <LinkIcon url="https://www.zizkostel.cz/husitske-centrum-ops/" />
                        </li>
                        <li>
                            Zenová škola Kwan Um <LinkIcon url="https://www.kwanumzen.cz/" />
                        </li>
                        <li>
                            Čeští humanisté <LinkIcon url="https://humanismus.cz/" />
                        </li>
                        <li>
                            Ateisté ČR <LinkIcon url="https://ateisti.cz/" />
                        </li>
                        <li>
                            Skeptická společnost Atropos <LinkIcon url="https://mosl.cz/o-nas/" />
                        </li>
                    </ul>
                </div>
            </section>
            <div className="flex flex-row justify-center w-full overflow-hidden flex-wrap">
                <img src="/images/minigallery/img02.png" alt="" />
                <img src="/images/minigallery/img03.png" alt="" />
                <img src="/images/minigallery/img04.png" alt="" />
                <img src="/images/minigallery/img07.png" alt="" />
                <img src="/images/minigallery/img01.png" alt="" />
                <img src="/images/minigallery/img06.png" alt="" />
                <img src="/images/minigallery/img05.png" alt="" />
                <img src="/images/minigallery/img08.png" alt="" />
            </div>
            <section className="content">
                <Card title="Kontakt">
                    <Markdown content={contanctInformation} />
                </Card>
            </section>
        </div>
    );
}
