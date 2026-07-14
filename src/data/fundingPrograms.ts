export type FundingStatus = 'Activ' | 'Urmează' | 'În implementare' | 'Închis';

export interface FundingProgram {
  id: string;
  title: string;
  officialName: string;
  category: string;
  status: FundingStatus;
  description: string;
  image: string;
  imageAlt: string;
  funding: string;
  cofinancing: string;
  deadline: string;
  keyFacts: [string, string][];
  eligibility: string[];
  process: string[];
  eligibleCosts: string[];
  obligations: string[];
  eligibleCaen?: [string, string][];
  sources: {
    label: string;
    url: string;
  }[];
}

export const fundingPrograms: FundingProgram[] = [
  {
    id: 'start-up-nation-2025',
    title: 'Start-Up Nation 2025',
    officialName: 'Denumire oficială: Start-Up Nation – România, ediția 2024; procedură aprobată în martie 2025.',
    category: 'Program național · Antreprenoriat',
    status: 'În implementare',
    description: 'Sprijin pentru înființarea și dezvoltarea unor întreprinderi noi de către absolvenții cursurilor de competențe antreprenoriale.',
    image: 'images/programs/start-up-nation-2025.jpg',
    imageAlt: 'Start-Up Nation, cursuri de pregătire antreprenorială și finanțări de până la 250.000 lei, ediția 2024–2025',
    funding: 'Până la 250.000 lei',
    cofinancing: 'Minimum 10%',
    deadline: 'Implementare până cel târziu la 18.09.2026',
    keyFacts: [
      ['Finanțare', 'max. 250.000 lei'],
      ['Aport propriu', 'min. 10%'],
      ['Curs antreprenorial', 'min. 40 ore'],
      ['Locuri de muncă', 'min. 2'],
    ],
    eligibility: [
      'Pilonul I: persoane între 18 ani și 30 de ani neîmpliniți, din toate regiunile țării, inclusiv București–Ilfov.',
      'Pilonul II: persoane între 30 și 35 de ani neîmpliniți sau persoane din categoriile eligibile prevăzute de procedură; proiectele sunt localizate în regiunile mai puțin dezvoltate, fără București–Ilfov.',
      'Finanțarea este solicitată de o societate nou-înființată de absolventul cursului, care trebuie să fie reprezentant legal, asociat unic/majoritar și administrator.',
    ],
    process: [
      'Înscrierea și absolvirea cursului de competențe antreprenoriale.',
      'Înființarea societății și pregătirea planului de afaceri și a bugetului.',
      'Depunerea electronică a cererii; punctajul minim pentru verificare este de 50 din 100.',
      'Evaluarea, contractarea și prezentarea dovezii cofinanțării.',
      'Realizarea achizițiilor, cererea de rambursare și monitorizarea obligațiilor asumate.',
    ],
    eligibleCosts: [
      'Echipamente tehnologice și active noi, necesare activității aferente codului CAEN finanțat.',
      'Sisteme pentru energie regenerabilă, economie de resurse, reciclare și reutilizarea deșeurilor.',
      'Website, magazin online, software, licențe, semnătură electronică și echipamente IT.',
      'Salarii, utilități, contabilitate și chirii pentru spații de producție — sumă forfetară de maximum 80.000 lei pentru crearea a două locuri de muncă.',
      'Consultanță pentru accesare și implementare — maximum 10.000 lei; înființarea societății — maximum 1.000 lei.',
      'Mobilier, mijloace de transport în limitele procedurii, costuri financiare eligibile și plăcuțele informative obligatorii.',
    ],
    obligations: [
      'Crearea a minimum două locuri de muncă și menținerea lor cel puțin 24 de luni; asumarea a 30 de luni aduce punctaj suplimentar.',
      'Menținerea activității întreprinderii timp de minimum trei ani de la plata integrală a ajutorului.',
      'Respectarea bugetului aprobat, a condițiilor de eligibilitate și a regulilor de informare și publicitate.',
    ],
    sources: [
      { label: 'Procedura oficială (.doc)', url: 'https://economie.gov.ro/wp-content/uploads/2025/03/Procedura-SUN-202413032025.doc' },
      { label: 'Forma consolidată', url: 'https://legislatie.just.ro/Public/DetaliiDocument/298759' },
      { label: 'Pagina oficială a programului', url: 'https://www.imm.gov.ro/start-up-nation-2024/' },
    ],
  },
  {
    id: 'pro-infra',
    title: 'PRO-INFRA',
    officialName: 'Schemă de ajutor de stat privind promovarea producției de materii prime, materiale și produse pentru susținerea implementării proiectelor de infrastructură de transport – „PRO INFRA”.',
    category: 'Ajutor de stat · Industrie pentru infrastructură',
    status: 'Urmează',
    description: 'Granturi pentru creșterea eficienței energetice a capacităților care produc materii prime, materiale și produse necesare infrastructurii de transport.',
    image: 'images/programs/pro-infra.jpg',
    imageAlt: 'Producție industrială modernă pentru infrastructură de transport, cu materiale de construcții, oțel, cabluri și tehnologii eficiente energetic',
    funding: 'Până la 15 mil. euro',
    cofinancing: 'Până la 100% eligibil',
    deadline: 'Consultarea publică s-a încheiat la 09.12.2025; perioada de depunere urmează să fie anunțată oficial de MTI',
    keyFacts: [
      ['Bugetul schemei', '200 mil. euro'],
      ['Ajutor maxim', '15 mil. euro / beneficiar'],
      ['Intensitate maximă', '100% din costurile eligibile'],
      ['Selecție', 'ofertare concurențială'],
    ],
    eligibility: [
      'Pot aplica microîntreprinderi, întreprinderi mici, mijlocii și mari, legal constituite și înregistrate la Registrul Comerțului din România cel târziu la data primei plăți.',
      'Investiția trebuie realizată în România, într-o activitate aferentă unuia dintre cele 17 coduri CAEN eligibile, și trebuie să înlocuiască instalații, utilaje sau echipamente existente.',
      'Solicitantul nu trebuie să fie întreprindere în dificultate, insolvență, faliment sau lichidare și trebuie să își fi achitat obligațiile fiscale.',
      'Este necesară capacitate tehnică și financiară. Raportul dintre datoriile totale și capitalurile proprii trebuie să fie pozitiv și sub 7,5; în situațiile prevăzute de schemă poate fi solicitată o scrisoare de confort bancar.',
      'Se pot depune mai multe proiecte într-o sesiune, dar maximum un proiect pentru fiecare locație.',
    ],
    process: [
      'Realizarea auditului energetic pentru conturul proiectului, raportat la ultimul an calendaristic încheiat înaintea deschiderii apelului, și pregătirea analizei de oportunitate.',
      'Definirea investiției: înlocuirea echipamentelor cu alternative eficiente energetic sau electrice și integrarea obligatorie a unui sistem de management al energiei (EMS).',
      'Depunerea solicitării înainte de demararea lucrărilor, în sesiunea de ofertare concurențială ce va fi anunțată de MTI.',
      'Clasificarea ofertelor: 90% din punctaj urmărește ajutorul solicitat per MWh economisit, iar 10% utilizarea energiei regenerabile.',
      'Contractarea proiectelor în ordinea punctajului, până la epuizarea bugetului, și implementarea investiției cel târziu la 30.06.2030.',
    ],
    eligibleCosts: [
      'Achiziționarea și instalarea instalațiilor de producție, utilajelor și echipamentelor eficiente din punct de vedere energetic.',
      'Achiziționarea și instalarea utilajelor și echipamentelor electrice, cu emisii zero la țeava de eșapament, care înlocuiesc echipamente cu ardere internă.',
      'Achiziționarea și integrarea sistemului de management al energiei (EMS) aferent investiției.',
      'TVA-ul și cheltuielile care nu se încadrează în categoriile de mai sus nu sunt eligibile și se suportă integral de beneficiar.',
    ],
    obligations: [
      'Instalarea și operaționalizarea unui sistem EMS care monitorizează în timp real consumul de energie și performanța proiectului.',
      'Prezentarea anuală, în perioada de monitorizare, a unui audit energetic care integrează și validează datele furnizate de EMS.',
      'Casarea instalației, utilajului sau echipamentului înlocuit în maximum 30 de zile de la recepția noului echipament.',
      'Menținerea investiției și a activității timp de cinci ani de la finalizarea implementării, fără înstrăinarea activelor sau modificări substanțiale.',
      'Interdicția dublei finanțări pentru aceleași cheltuieli eligibile și păstrarea evidențelor privind ajutorul primit pentru minimum zece ani.',
    ],
    eligibleCaen: [
      ['0811', 'Extracția pietrei ornamentale și a pietrei pentru construcții, extracția pietrei calcaroase, ghipsului, cretei și a ardeziei'],
      ['0812', 'Extracția pietrișului și nisipului, extracția argilei și caolinului'],
      ['2320', 'Fabricarea de produse refractare'],
      ['2343', 'Fabricarea de izolatori electrici și piese izolante din ceramică'],
      ['2352', 'Fabricarea varului și ipsosului'],
      ['2361', 'Fabricarea produselor din beton pentru construcții'],
      ['2363', 'Fabricarea betonului'],
      ['2364', 'Fabricarea mortarului'],
      ['2369', 'Fabricarea altor articole din beton, ciment și ipsos'],
      ['2370', 'Tăierea, fasonarea și finisarea pietrei'],
      ['2399', 'Fabricarea altor produse din minerale nemetalice, n.c.a.'],
      ['2431', 'Tragere la rece a barelor'],
      ['2432', 'Laminare la rece a benzilor înguste'],
      ['2433', 'Producția de profile obținute la rece'],
      ['2434', 'Trefilarea firelor la rece'],
      ['2511', 'Fabricarea de construcții metalice și părți componente ale structurilor metalice'],
      ['2732', 'Fabricarea altor fire și cabluri electrice și electronice'],
    ],
    sources: [
      {
        label: 'Schema PRO-INFRA (.pdf)',
        url: 'https://www.mt.ro/documente/comunicate-de-presa/2025/11/schema_pro_infra.pdf',
      },
      {
        label: 'Anunțul consultării publice',
        url: 'https://oportunitati-ue.gov.ro/consultare-publica-privind-schema-de-ajutor-de-stat-pentru-promovarea-productiei-de-materii-prime-materiale-si-produse-pentru-sustinerea-implementarii-proiectelor-de-infrastructura-de-transport/',
      },
    ],
  },
  {
    id: 'pr-bi-transformare-digitala-imm',
    title: 'Digitalizare avansată IMM',
    officialName: 'Programul Regional București-Ilfov 2021-2027, Prioritatea 1, Acțiunea 1.7 – Sprijin pentru transformarea digitală avansată a IMM.',
    category: 'Program regional · Digitalizare',
    status: 'Urmează',
    description: 'Granturi de minimis pentru adoptarea tehnologiilor digitale avansate, automatizarea proceselor și implementarea soluțiilor de securitate cibernetică în IMM-urile din București-Ilfov.',
    image: 'images/programs/pr-bi-digitalizare-imm.jpg',
    imageAlt: 'Companie modernă din București-Ilfov care utilizează automatizare, analiză de date, inteligență artificială și soluții de securitate cibernetică',
    funding: '25.000–200.000 euro',
    cofinancing: 'Minimum 10%',
    deadline: 'Consultare estimată în iulie 2026 și lansare estimată la 01.09.2026, conform calendarului orientativ ADR București-Ilfov',
    keyFacts: [
      ['Bugetul apelului', '25 mil. euro'],
      ['Grant nerambursabil', '25.000–200.000 euro'],
      ['Contribuție proprie', 'minimum 10%'],
      ['Plafon de minimis', '300.000 euro / 3 ani'],
    ],
    eligibility: [
      'Pot aplica microîntreprinderi, întreprinderi mici și întreprinderi mijlocii, inclusiv societăți cooperative, care se încadrează în categoria IMM împreună cu întreprinderile partenere și legate.',
      'Solicitantul trebuie să aibă sediul social în regiunea București-Ilfov, iar locația de implementare, urbană sau rurală, trebuie să fie în aceeași regiune cel târziu la momentul primei plăți.',
      'Este necesar minimum un an fiscal integral de activitate, fără suspendarea activității în anul depunerii și în anul fiscal anterior.',
      'Investiția trebuie să vizeze un singur cod CAEN eligibil, înscris în obiectul de activitate și autorizat la locația proiectului cel târziu la acordarea ajutorului.',
      'Solicitantul trebuie să dețină un drept valabil asupra locației pe întreaga perioadă de implementare și durabilitate și să nu fie în insolvență, faliment sau dificultate.',
    ],
    process: [
      'Realizarea auditului de maturitate digitală și pregătirea planului de digitalizare, cu descrierea situației inițiale, a nevoilor și a soluției digitale propuse.',
      'Configurarea proiectului și a bugetului; investițiile digitale de bază trebuie să reprezinte minimum 50% din bugetul eligibil.',
      'Depunerea cererii în MySMIS înainte de demararea procedurilor de achiziție, cu excepțiile prevăzute pentru documentația proiectului.',
      'Evaluarea tehnică și financiară, cu maximum 100 de puncte; proiectele sunt finanțate în ordinea descrescătoare a punctajelor.',
      'Contractarea, implementarea în maximum 24 de luni și efectuarea auditului IT final care confirmă funcționarea soluției digitale.',
    ],
    eligibleCosts: [
      'Active corporale și necorporale pentru soluții TIC, ERP, CRM, RPA, IoT, inteligență artificială, aplicații web, automatizarea producției și digitalizarea proceselor interne.',
      'Servicii pentru implementarea securității cibernetice la nivelul rețelelor, dispozitivelor, aplicațiilor și sistemelor, pe durata proiectului.',
      'Alte investiții directe necesare transformării digitale avansate, justificate prin auditul de maturitate digitală.',
      'Servicii pentru cererea de finanțare, planul de digitalizare și auditul de maturitate digitală.',
      'Costuri indirecte pentru management, audit IT, expertiză contabilă și comunicare, stabilite prin rata forfetară de 7% din costurile directe.',
      'TVA-ul nedeductibil aferent cheltuielilor eligibile poate fi eligibil, în condițiile legislației aplicabile.',
    ],
    obligations: [
      'Asigurarea unei contribuții proprii de minimum 10% din cheltuielile eligibile și acoperirea integrală a cheltuielilor neeligibile.',
      'Menținerea investiției, activității și activelor finanțate în regiunea București-Ilfov timp de trei ani de la plata finală.',
      'Evitarea dublei finanțări: proiectul nu poate primi simultan alte fonduri publice pentru aceleași cheltuieli și nu trebuie să fi beneficiat de finanțare publică pentru același tip de activități în ultimii trei ani.',
      'Respectarea plafonului cumulat de minimis de 300.000 euro pentru întreprinderea unică, calculat continuu pe o perioadă de trei ani.',
      'Respectarea cerințelor DNSH, de accesibilitate și de economie circulară, inclusiv trasabilitatea deșeurilor electrice și electronice rezultate din înlocuirea echipamentelor.',
      'Păstrarea evidențelor privind ajutorul primit pentru minimum zece ani și respectarea obligațiilor de comunicare și vizibilitate.',
    ],
    sources: [
      {
        label: 'Calendarul oficial al apelurilor ADRBI',
        url: 'https://regiobucuresti-ilfov.ro/calendar-apeluri',
      },
      {
        label: 'Criteriile de selecție aprobate (.pdf)',
        url: 'https://www.adrbi.ro/media/4122/anexa_decizia28_criteriiselectie_17_transformaredigitalaavansataimm.pdf',
      },
      {
        label: 'Grila de evaluare tehnică și financiară (.pdf)',
        url: 'https://prod-inafaceri-uploads.s3.eu-central-1.amazonaws.com/documente/2024/1a2cf5d3-f12a-4daa-bf2e-48405833f4ce/grila-etf-17.pdf',
      },
    ],
  },
];

export const fundingStatusStyles: Record<FundingStatus, string> = {
  Activ: 'border-[#0b6b49]/20 bg-[#dff1df] text-[#0b6b49]',
  'Urmează': 'border-[#c98716]/20 bg-[#fff1cf] text-[#94600c]',
  'În implementare': 'border-[#0a66c2]/20 bg-[#e6f2ff] text-[#0a5aa8]',
  'Închis': 'border-[#17352b]/10 bg-[#17352b]/7 text-[#17352b]/58',
};
