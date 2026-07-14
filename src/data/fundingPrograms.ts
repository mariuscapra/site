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
  officialUrl: string;
  consolidatedUrl: string;
  programUrl: string;
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
    officialUrl: 'https://economie.gov.ro/wp-content/uploads/2025/03/Procedura-SUN-202413032025.doc',
    consolidatedUrl: 'https://legislatie.just.ro/Public/DetaliiDocument/298759',
    programUrl: 'https://www.imm.gov.ro/start-up-nation-2024/',
  },
];

export const fundingStatusStyles: Record<FundingStatus, string> = {
  Activ: 'border-[#0b6b49]/20 bg-[#dff1df] text-[#0b6b49]',
  'Urmează': 'border-[#c98716]/20 bg-[#fff1cf] text-[#94600c]',
  'În implementare': 'border-[#0a66c2]/20 bg-[#e6f2ff] text-[#0a5aa8]',
  'Închis': 'border-[#17352b]/10 bg-[#17352b]/7 text-[#17352b]/58',
};
