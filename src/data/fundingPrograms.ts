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
];

export const fundingStatusStyles: Record<FundingStatus, string> = {
  Activ: 'border-[#0b6b49]/20 bg-[#dff1df] text-[#0b6b49]',
  'Urmează': 'border-[#c98716]/20 bg-[#fff1cf] text-[#94600c]',
  'În implementare': 'border-[#0a66c2]/20 bg-[#e6f2ff] text-[#0a5aa8]',
  'Închis': 'border-[#17352b]/10 bg-[#17352b]/7 text-[#17352b]/58',
};
