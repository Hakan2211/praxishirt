import LegalPage from '@/components/ui/LegalPage';

export const metadata = {
  title: 'Impressum',
};

export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <h2>Anschrift & Erreichbarkeit:</h2>
      <div className="mt-4 flex flex-col gap-2">
        <p>Praxis für Psychotherapie und Neuropsychologie</p>
        <p>Filiz Hirt</p>
        <p>Styrumstr. 20</p>
        <p>76646 Bruchsal</p>
        <p>Telefon: 07251 / 7242112</p>
        <p>Fax: 07251 / 7242113</p>
        {/* <p>E-Mail: hirtpraxis@gmail.com</p> */}
        <p>
          Web:{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.praxishirt.de"
          >
            www.praxishirt.de
          </a>
        </p>
      </div>
      <h2 className="mt-10 font-bold">Verantwortlich für den Inhalt:</h2>
      <div className="mt-4 flex flex-col gap-2">
        <p>Dipl. Psych. Filiz Hirt</p>
        <p>Styrumstr. 20</p>
        <p>76646 Bruchsal</p>
      </div>
      <h2 className="mt-10 font-bold">Gesetzliche Berufsbezeichnung:</h2>
      <div className="mt-4 flex flex-col gap-2">
        <p>Filiz Hirt</p>
        <p>Diplom Psychologin (Universität Braunschweig)</p>
        <p>
          Psychologische Psychotherapeutin*/ Fachkunde (Verfahren):
          Verhaltenstherapie - Approbation verliehen in der Bundesrepublik
          Deutschland vom Regierungspräsidium Stuttgart. Klinische
          Neuropsychologin* – Weiterbildung über die Gesellschaft für
          Neuropsychologie e.V. (GNP e.V.; Fulda); Anerkennung über die
          Landespsychotherapeutenkammer Baden-Württemberg{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.lpk-bw.de"
          >
            (www.lpk-bw.de)
          </a>
        </p>
        {/* <p>Arztregister-Nummer: 5515798</p> */}
      </div>
      <p className="mt-10">
        * Die Titel „Psychologische Psychotherapeutin&quot; und „Klinische
        Neuropsychologin“ sind berufsrechtlich geschützt und dürfen nur von
        entsprechend qualifizierten Personen geführt werden.
      </p>
      <h2 className="mt-10 font-bold">Zuständige Aufsichtsbehörde:</h2>
      <div className="mt-4 flex flex-col gap-2">
        <p>
          Die zuständige Kammer ist die Landespsychotherapeutenkammer
          Baden-Württemberg, Jägerstr. 40, 70174 Stuttgart, Internet:{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.lpk-bw.de"
          >
            www.lpk-bw.de
          </a>
          .
        </p>
      </div>
      <h2 className="mt-10 font-bold">
        Zuständige Kassenärztliche Vereinigung:
      </h2>
      <div className="mt-4 flex flex-col gap-2">
        <p>
          Kassenärztliche Vereinigung Baden-Württemberg, Bezirksdirektion
          Karlsruhe, Keßlerstr. 1, 76185 Karlsruhe, Internet:{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.kvbawue.de"
          >
            www.kvbawue.de
          </a>
          .
        </p>
      </div>
      <h2 className="mt-10 font-bold">Berufsrechtliche Regelungen:</h2>
      <div className="mt-4 flex flex-col gap-2">
        <p>
          Unter diesem{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.lpk-bw.de/kammer/satzungen-ordnungen-richtlinien"
          >
            Link
          </a>{' '}
          können Sie die aktuelle Berufsordnung und das Psychotherapeutengesetz
          downloaden.
        </p>
      </div>
      <div className="mt-10">
        <span className="font-bold">Umsatzsteuer-Identifikation-Nr. </span>
        entfällt, denn psychotherapeutische Leistungen sind steuerbefreit, weil
        heilberuflich gemäß § 4 Nr. 14 Umsatzsteuergesetz
      </div>
      <h2 className="mt-10 font-bold">
        Webdesign & Webentwicklung:{' '}
        <a
          className="font-normal"
          target="_blank"
          rel="noopener noreferrer"
          href="https://hakanda.com/about"
        >
          Hakan Bilgic
        </a>
      </h2>
    </LegalPage>
  );
}
