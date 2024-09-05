'use client';

import React, { Suspense } from 'react';
import { View } from '@/components/canvas/View';
import Background from '@/components/background/Background';
import Lightsource from '@/components/background/Lightsource';
import dynamic from 'next/dynamic';
import { PositionalAudio } from '@react-three/drei';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';

import { useMobile } from '@/components/context/IsMobileProvider';

const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

function Impressum() {
  const { soundEnabled } = useSoundEnabled();
  const { isMobile } = useMobile();

  return (
    <div
      className={`w-full  ${
        isMobile
          ? 'overflow-y-auto h-[1860dvh]'
          : 'overflow-y-hidden h-[760dvh]'
      } `}
    >
      <View className=" !fixed  top-0 left-0 flex h-screen w-full ">
        {soundEnabled && (
          <PositionalAudio
            distance={2}
            autoplay
            loop
            url="../../../audio_background/audiocoffee.wav"
          />
        )}
        <Suspense fallback={null}>
          <Background />
          <Lightsource />
        </Suspense>
        <Common />
      </View>

      <div className="z-10 absolute grid min-w-full max-w-4xl grid-cols-[auto 1fr auto] px-4 gap-0 ">
        <div className="col-span-1"></div>
        <div className="col-start-2 max-w-[1000px]">
          <div className="flex flex-col gap-4 mt-8">
            <h2 className="text-4xl font-bold text-white underline underline-offset-4">
              Datenschutzerklärung
            </h2>

            <div className="mt-14 mb-14 text-2xl text-stone-50 dark:text-gray-400">
              <h1 className="text-3xl font-bold">
                1. Datenschutz auf einen Blick
              </h1>
              <h2 className="text-2xl mt-8 font-bold">Allgemeine Hinweise</h2>
              <div className="mt-4 flex flex-col gap-2">
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick
                  darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                  Sie diese Website besuchen. Personenbezogene Daten sind alle
                  Daten, mit denen Sie persönlich identifiziert werden können.
                  Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
                  unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
              </div>
              <h2 className="mt-20 font-bold">
                Datenerfassung auf dieser Website
              </h2>
              <h2 className="mt-8 font-bold">
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </h2>
              <div className="mt-4 flex flex-col gap-2">
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den
                  Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                  „Hinweis zur Verantwortlichen Stelle“ in dieser
                  Datenschutzerklärung entnehmen.
                </p>
              </div>
              <h2 className="mt-8 font-bold">Wie erfassen wir Ihre Daten?</h2>
              <div className="mt-4 flex flex-col gap-2">
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                  diese mitteilen. Hierbei kann es sich z. B. um Daten handeln,
                  die Sie in ein Kontaktformular eingeben. Andere Daten werden
                  automatisch oder nach Ihrer Einwilligung beim Besuch der
                  Website durch unsere ITSysteme erfasst. Das sind vor allem
                  technische Daten (z. B. Internetbrowser, Betriebssystem oder
                  Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                  automatisch, sobald Sie diese Website betreten.
                </p>
              </div>
              <h2 className="mt-8 font-bold">Wofür nutzen wir Ihre Daten?</h2>
              <div className="mt-4 flex flex-col gap-2">
                <p>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie
                  Bereitstellung der Website zu gewährleisten. Andere Daten
                  können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
              </div>
              <h2 className="mt-8 font-bold">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </h2>
              <div className="mt-4 flex flex-col gap-2">
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                  Herkunft, Empfänger und Zweck Ihrer gespeicherten
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                  Recht, die Berichtigung oder Löschung dieser Daten zu
                  verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                  erteilt haben, können Sie diese Einwilligung jederzeit für die
                  Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                  bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
                  ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
                  Sie sich jederzeit an uns wenden.
                </p>
              </div>
              <h1 className="text-3xl font-bold mt-20">2. Hosting</h1>
              <div className="mt-4 flex flex-col gap-2">
                <p>
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:{' '}
                  <a
                    className="text-red-300 hover:text-red-500"
                    target="_blank"
                    href="https://www.vercel.com"
                  >
                    Vercel
                  </a>
                </p>
                <p className="mt-4">Externes Hosting:</p>
                <p>
                  Diese Website wird extern gehostet. Die personenbezogenen
                  Daten, die auf dieser Website erfasst werden, werden auf den
                  Servern des Hosters{' '}
                  <a
                    className="text-red-300 hover:text-red-500"
                    target="_blank"
                    href="https://www.vercel.com"
                  >
                    Vercel
                  </a>{' '}
                  gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
                  Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
                  Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die
                  über eine Website generiert werden, handeln. Das externe
                  Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber
                  unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
                  lit. b DSGVO) und im Interesse einer sicheren, schnellen und
                  effizienten Bereitstellung unseres Online-Angebots durch einen
                  professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern
                  eine entsprechende Einwilligung abgefragt wurde, erfolgt die
                  Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1
                  lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung
                  die Speicherung von Cookies oder den Zugriff auf Informationen
                  im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne
                  des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                  Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
                  verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
                  erforderlich ist und unsere Weisungen in Bezug auf diese Daten
                  befolgen.
                </p>
                <p className="mt-4">
                  Wir setzen folgende(n) Hoster ein:{' '}
                  <a
                    className="text-red-300 hover:text-red-500"
                    target="_blank"
                    href="https://www.vercel.com"
                  >
                    Vercel
                  </a>{' '}
                </p>
                <h2 className="font-bold mt-4">
                  Name und Adresse des Hosters:
                </h2>
                <p>Vercel Inc.</p>
                <p>440 N Barranca Avenue #4133</p>
                <p>Covina, CA 91723</p>
                <p>United States</p>

                <h1 className="mt-20 text-3xl font-bold">
                  3. Allgemeine Hinweise und Pflichtinformationen
                </h1>
                <h2 className="text-2xl mt-8 font-bold">Datenschutz</h2>
                <div className="mt-4 flex flex-col gap-2">
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                    persönlichen Daten sehr ernst. Wir behandeln Ihre
                    personenbezogenen Daten vertraulich und entsprechend den
                    gesetzlichen Datenschutzvorschriften sowie dieser
                    Datenschutzerklärung. Wenn Sie diese Website benutzen,
                    werden verschiedene personenbezogene Daten erhoben.
                    Personenbezogene Daten sind Daten, mit denen Sie persönlich
                    identifiziert werden können. Die vorliegende
                    Datenschutzerklärung erläutert, welche Daten wir erheben und
                    wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem
                    Zweck das geschieht. Wir weisen darauf hin, dass die
                    Datenübertragung im Internet (z. B. bei der Kommunikation
                    per E-Mail) Sicherheitslücken aufweisen kann. Ein
                    lückenloser Schutz der Daten vor dem Zugriff durch Dritte
                    ist nicht möglich.
                  </p>
                  <h2 className="text-2xl mt-8 font-bold">
                    Hinweis zur verantwortlichen Stelle
                  </h2>
                  <p className="mt-4">
                    Die verantwortliche Stelle für die Datenverarbeitung auf
                    dieser Website ist:
                  </p>
                  <h2 className="mt-4 font-bold">
                    Praxis für Psychotherapie &amp; Neuropsychologie
                  </h2>
                  <div className="mt-4 flex flex-col gap-2">
                    <p>Filiz Hirt</p>
                    <p>Styrumstr. 20</p>
                    <p>76646 Bruchsal</p>
                    <p>Telefon: 07251 / 7242112</p>
                    <p>E-Mail: hirtpraxis@gmail.com</p>
                  </div>
                  <p className="mt-8">
                    Verantwortliche Stelle ist die natürliche oder juristische
                    Person, die allein oder gemeinsam mit anderen über die
                    Zwecke und Mittel der Verarbeitung von personenbezogenen
                    Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>
                  <h2 className="text-2xl mt-8 font-bold">Speicherdauer</h2>
                  <div className="mt-4 flex flex-col gap-2">
                    <p>
                      Soweit innerhalb dieser Datenschutzerklärung keine
                      speziellere Speicherdauer genannt wurde, verbleiben Ihre
                      personenbezogenen Daten bei uns, bis der Zweck für die
                      Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
                      Löschersuchen geltend machen oder eine Einwilligung zur
                      Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                      sofern wir keine anderen rechtlich zulässigen Gründe für
                      die Speicherung Ihrer personenbezogenen Daten haben (z. B.
                      steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                      letztgenannten Fall erfolgt die Löschung nach Fortfall
                      dieser Gründe.
                    </p>
                  </div>
                  <h2 className="text-2xl mt-8 font-bold">
                    Allgemeine Hinweise zu den Rechtsgrundlagen der
                    Datenverarbeitung auf dieser Website
                  </h2>
                  <div className="mt-4 flex flex-col gap-2">
                    <p>
                      Allgemeine Hinweise zu den Rechtsgrundlagen der
                      Datenverarbeitung auf dieser Website Sofern Sie in die
                      Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
                      personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1
                      lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
                      besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                      verarbeitet werden. Im Falle einer ausdrücklichen
                      Einwilligung in die Übertragung personenbezogener Daten in
                      Drittstaaten erfolgt die Datenverarbeitung außerdem auf
                      Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in
                      die Speicherung von Cookies oder in den Zugriff auf
                      Informationen in Ihr Endgerät (z. B. via Device-
                      Fingerprinting) eingewilligt haben, erfolgt die
                      Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1
                      TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind
                      Ihre Daten zur Vertragserfüllung oder zur Durchführung
                      vorvertraglicher Maßnahmen erforderlich, verarbeiten wir
                      Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
                      Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur
                      Erfüllung einer rechtlichen Verpflichtung erforderlich
                      sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
                      Datenverarbeitung kann ferner auf Grundlage unseres
                      berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
                      erfolgen. Über die jeweils im Einzelfall einschlägigen
                      Rechtsgrundlagen wird in den folgenden Absätzen dieser
                      Datenschutzerklärung informiert.
                    </p>
                  </div>
                  <h2 className="text-2xl mt-8 font-bold">
                    Empfänger von personenbezogenen Daten
                  </h2>
                  <div className="mt-4 flex flex-col gap-2">
                    <p>
                      Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit
                      verschiedenen externen Stellen zusammen. Dabei ist
                      teilweise auch eine Übermittlung von personenbezogenen
                      Daten an diese externen Stellen erforderlich. Wir geben
                      personenbezogene Daten nur dann an externe Stellen weiter,
                      wenn dies im Rahmen einer Vertragserfüllung erforderlich
                      ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B.
                      Weitergabe von Daten an Steuerbehörden), wenn wir ein
                      berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an
                      der Weitergabe haben oder wenn eine sonstige
                      Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz
                      von Auftragsverarbeitern geben wir personenbezogene Daten
                      unserer Kunden nur auf Grundlage eines gültigen Vertrags
                      über Auftragsverarbeitung weiter. Im Falle einer
                      gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame
                      Verarbeitung geschlossen.
                    </p>
                  </div>
                  <h2 className="text-2xl mt-8 font-bold">
                    Widerruf Ihrer Einwilligung zur Datenverarbeitung
                  </h2>
                  <div className="mt-4 flex flex-col gap-2">
                    <p>
                      Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                      ausdrücklichen Einwilligung möglich. Sie können eine
                      bereits erteilte Einwilligung jederzeit widerrufen. Die
                      Rechtmäßigkeit der bis zum Widerruf erfolgten
                      Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>
                  </div>
                  <h2 className="text-2xl mt-8 font-bold">
                    Widerspruchsrecht gegen die Datenerhebung in besonderen
                    Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                  </h2>
                  <div className="mt-4 flex flex-col gap-2">
                    <p>
                      WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1
                      LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS
                      RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
                      SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
                      PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT
                      AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING.
                      DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG
                      BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN
                      SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN
                      PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI
                      DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
                      VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND
                      FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER
                      GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
                      RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                      WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                      DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT,
                      JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
                      BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER
                      WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING,
                      SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.
                      WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN
                      DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER
                      DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2
                      DSGVO).
                    </p>
                  </div>
                  <h2 className="text-2xl mt-8 font-bold">
                    Beschwerderecht bei der zuständigen Aufsichtsbehörde
                  </h2>
                  <div className="mt-4 flex flex-col gap-2">
                    <p>
                      Im Falle von Verstößen gegen die DSGVO steht den
                      Betroffenen ein Beschwerderecht bei einer
                      Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
                      gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des
                      Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
                      besteht unbeschadet anderweitiger verwaltungsrechtlicher
                      oder gerichtlicher Rechtsbehelfe.
                    </p>
                  </div>
                  <h2 className="text-2xl mt-8 font-bold">
                    Recht auf Datenübertragbarkeit
                  </h2>
                  <div className="mt-4 flex flex-col gap-2">
                    <p>
                      Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                      Einwilligung oder in Erfüllung eines Vertrags
                      automatisiert verarbeiten, an sich oder an einen Dritten
                      in einem gängigen, maschinenlesbaren Format aushändigen zu
                      lassen. Sofern Sie die direkte Übertragung der Daten an
                      einen anderen Verantwortlichen verlangen, erfolgt dies
                      nur, soweit es technisch machbar ist.
                    </p>
                  </div>
                  <h2 className="text-2xl mt-8 font-bold">
                    Auskunft, Berichtigung und Löschung
                  </h2>
                  <div className="mt-4 flex flex-col gap-2">
                    <p>
                      Sie haben im Rahmen der geltenden gesetzlichen
                      Bestimmungen jederzeit das Recht auf unentgeltliche
                      Auskunft über Ihre gespeicherten personenbezogenen Daten,
                      deren Herkunft und Empfänger und den Zweck der
                      Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
                      Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum
                      Thema personenbezogene Daten können Sie sich jederzeit an
                      uns wenden.
                    </p>
                  </div>
                  <h2 className="text-2xl mt-8 font-bold">
                    Recht auf Einschränkung der Verarbeitung
                  </h2>
                  <div className="mt-4 flex flex-col gap-2">
                    <p>
                      Sie haben das Recht, die Einschränkung der Verarbeitung
                      Ihrer personenbezogenen Daten zu verlangen. Hierzu können
                      Sie sich jederzeit an uns wenden. Das Recht auf
                      Einschränkung der Verarbeitung besteht in folgenden
                      Fällen:
                    </p>
                    <p>
                      &#8226; Wenn Sie die Richtigkeit Ihrer bei uns
                      gespeicherten personenbezogenen Daten bestreiten,
                      benötigen wir in der Regel Zeit, um dies zu überprüfen.
                      Für die Dauer der Prüfung haben Sie das Recht, die
                      Einschränkung der Verarbeitung Ihrer personenbezogenen
                      Daten zu verlangen.{' '}
                    </p>
                    <p>
                      &#8226;Wenn die Verarbeitung Ihrer personenbezogenen Daten
                      unrechtmäßig geschah/geschieht, können Sie statt der
                      Löschung die Einschränkung der Datenverarbeitung
                      verlangen.
                    </p>
                    <p>
                      &#8226; Wenn wir Ihre personenbezogenen Daten nicht mehr
                      benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
                      Geltendmachung von Rechtsansprüchen benötigen, haben Sie
                      das Recht, statt der Löschung die Einschränkung der
                      Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    </p>
                    <p>
                      &#8226;Wenn Sie einen Widerspruch nach Art. 21 Abs. 1
                      DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren
                      und unseren Interessen vorgenommen werden. Solange noch
                      nicht feststeht, wessen Interessen überwiegen, haben Sie
                      das Recht, die Einschränkung der Verarbeitung Ihrer
                      personenbezogenen Daten zu verlangen.
                    </p>
                    <p>
                      Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                      eingeschränkt haben, dürfen diese Daten – von ihrer
                      Speicherung abgesehen – nur mit Ihrer Einwilligung oder
                      zur Geltendmachung, Ausübung oder Verteidigung von
                      Rechtsansprüchen oder zum Schutz der Rechte einer anderen
                      natürlichen oder juristischen Person oder aus Gründen
                      eines wichtigen öffentlichen Interesses der Europäischen
                      Union oder eines Mitgliedstaats verarbeitet werden.
                    </p>
                    <h2 className="text-2xl mt-8 font-bold">
                      Widerspruch gegen Werbe-E-Mails
                    </h2>
                    <div className="mt-4 flex flex-col gap-2">
                      <p>
                        Der Nutzung von im Rahmen der Impressumspflicht
                        veröffentlichten Kontaktdaten zur Übersendung von nicht
                        ausdrücklich angeforderter Werbung und
                        Informationsmaterialien wird hiermit widersprochen. Die
                        Betreiber der Seiten behalten sich ausdrücklich
                        rechtliche Schritte im Falle der unverlangten Zusendung
                        von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                      </p>
                    </div>
                    <p className="mt-8">
                      Quelle:{' '}
                      <a
                        className="text-red-300 hover:text-red-500"
                        target="_blank"
                        href="https://www.e-recht24.de"
                      >
                        www.e-recht24.de
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

export default Impressum;
