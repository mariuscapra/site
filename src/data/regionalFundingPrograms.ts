export const developmentRegions = [
  { code: 'RO11', name: 'Nord-Vest', shortName: 'NV', counties: 'Bihor, Bistrița-Năsăud, Cluj, Maramureș, Satu Mare, Sălaj' },
  { code: 'RO12', name: 'Centru', shortName: 'C', counties: 'Alba, Brașov, Covasna, Harghita, Mureș, Sibiu' },
  { code: 'RO21', name: 'Nord-Est', shortName: 'NE', counties: 'Bacău, Botoșani, Iași, Neamț, Suceava, Vaslui' },
  { code: 'RO22', name: 'Sud-Est', shortName: 'SE', counties: 'Brăila, Buzău, Constanța, Galați, Tulcea, Vrancea' },
  { code: 'RO31', name: 'Sud-Muntenia', shortName: 'SM', counties: 'Argeș, Călărași, Dâmbovița, Giurgiu, Ialomița, Prahova, Teleorman' },
  { code: 'RO32', name: 'București–Ilfov', shortName: 'BI', counties: 'Municipiul București și județul Ilfov' },
  { code: 'RO41', name: 'Sud-Vest Oltenia', shortName: 'SVO', counties: 'Dolj, Gorj, Mehedinți, Olt, Vâlcea' },
  { code: 'RO42', name: 'Vest', shortName: 'V', counties: 'Arad, Caraș-Severin, Hunedoara, Timiș' },
] as const;

export type DevelopmentRegionCode = (typeof developmentRegions)[number]['code'];

const allRegions: DevelopmentRegionCode[] = developmentRegions.map((region) => region.code);

export interface RegionalFundingProgram {
  id: string;
  title: string;
  officialTitle: string;
  scope: 'Național' | 'Regional';
  regions: DevelopmentRegionCode[];
  domain: string;
  opened: string;
  budget: string;
  url: string;
}

export const regionalFundingPrograms: RegionalFundingProgram[] = [
  {
    id: 'servicii-produse-tehnologii-avansate',
    title: 'Inovare și tehnologii avansate',
    officialTitle: 'Dezvoltarea de noi servicii/aplicații/produse prin inovare și adoptarea de tehnologii avansate',
    scope: 'Național',
    regions: allRegions,
    domain: 'Cercetare, dezvoltare și inovare',
    opened: '30 iunie 2026',
    budget: '36.578.803 EUR fonduri UE',
    url: 'https://oportunitati-ue.gov.ro/apel/ghidul-solicitantului-dezvoltarea-de-noi-servicii-aplicatii-produse-prin-inovare-si-adoptarea-de-tehnologii-avansate/',
  },
  {
    id: 'schema-granturi-tehnologii-avansate',
    title: 'Granturi pentru inovare și tehnologii avansate',
    officialTitle: 'Schema de ajutor de stat și de minimis pentru dezvoltarea de noi servicii/aplicații/produse prin inovare și adoptarea de tehnologii avansate',
    scope: 'Național',
    regions: allRegions,
    domain: 'Antreprenoriat și inovare',
    opened: '15 iunie 2026',
    budget: '36.578.803 EUR fonduri UE',
    url: 'https://oportunitati-ue.gov.ro/apel/schema-de-ajutor-de-stat-si-de-minimis-referitoare-la-granturi-pentru-dezvoltarea-de-noi-servicii-aplicatii-produse-prin-inovare-si-adoptarea-de-tehnologii-avansate/',
  },
  {
    id: 'proiecte-tehnologice-inovative',
    title: 'Proiecte tehnologice inovative',
    officialTitle: 'Sprijin pentru Proiecte Tehnologice Inovative – Acțiunea 1.1, Măsura 1.1.2',
    scope: 'Național',
    regions: allRegions,
    domain: 'Cercetare, dezvoltare și inovare',
    opened: '29 mai 2026',
    budget: '37.785.964 EUR fonduri UE',
    url: 'https://oportunitati-ue.gov.ro/apel/ghidul-solicitantului-sprijin-pentru-proiecte-tehnologice-inovative-aferent-actiunii-1-1-sprijin-pentru-sectorul-privat-si-pentru-colaborarea-intre-actorii-din-sistemul-pub/',
  },
  {
    id: 'energie-regenerabila-autoconsum-agri',
    title: 'Energie regenerabilă pentru autoconsum',
    officialTitle: 'Sprijinirea investițiilor în noi capacități de producere a energiei electrice din surse regenerabile pentru autoconsumul întreprinderilor agricole și din industria alimentară',
    scope: 'Național',
    regions: allRegions,
    domain: 'Energie, agricultură și industrie alimentară',
    opened: '15 iunie 2026',
    budget: '265.000.000 EUR',
    url: 'https://oportunitati-ue.gov.ro/apel/schema-de-ajutor-privind-sprijinirea-investitiilor-in-noi-capacitati-de-producere-a-energiei-electrice-produsa-din-surse-regenerabile-pentru-autoconsumul-intreprinderilor-din-cadrul-sectorului-agricol/',
  },
  {
    id: 'granturi-industria-prelucratoare-702',
    title: 'Granturi pentru industria prelucrătoare',
    officialTitle: 'Ghidul solicitantului privind acordarea de granturi în industria prelucrătoare, HG nr. 702/2024',
    scope: 'Național',
    regions: allRegions,
    domain: 'Industrie',
    opened: '21 iunie 2024',
    budget: '447.000.000 EUR',
    url: 'https://oportunitati-ue.gov.ro/apel/ghidul-solicitantului-privind-acordarea-de-granturi-in-industria-prelucratoare-elaborat-in-baza-hotararii-guvernului-nr-702-2024/',
  },
  {
    id: 'schema-minimis-cdi',
    title: 'Ajutor de minimis pentru cercetare și inovare',
    officialTitle: 'Schema de ajutor de minimis pentru activități de cercetare-dezvoltare și inovare prin Prioritatea 1',
    scope: 'Național',
    regions: allRegions,
    domain: 'Antreprenoriat și cercetare-dezvoltare',
    opened: '6 martie 2024',
    budget: '160.000.000 EUR',
    url: 'https://oportunitati-ue.gov.ro/apel/schema-de-ajutor-de-minimis-pentru-activitati-de-cercetare-dezvoltare-si-inovare-prin-prioritatea-1-sustinerea-si-promovarea-unui-sistem-de-cdi-atractiv-si-competitiv-in-ro/',
  },
  {
    id: 'sinergii-orizont-europa',
    title: 'Sinergii cu Orizont Europa',
    officialTitle: 'Finanțarea proiectelor care vizează sinergii cu acțiunile Orizont Europa și alte programe europene',
    scope: 'Național',
    regions: allRegions,
    domain: 'Antreprenoriat și inovare',
    opened: '19 septembrie 2023',
    budget: '44.081.352 RON buget național',
    url: 'https://oportunitati-ue.gov.ro/apel/ghidul-solicitantului-finantarea-proiectelor-care-vizeaza-sinergii-cu-actiunile-orizont-europa-si-alte-programe-europene/',
  },
  {
    id: 'inovare-patrimoniu-cultural',
    title: 'Granturi pentru inovare în patrimoniul cultural',
    officialTitle: 'CR. UE. IN. PATRIMONIU: Granturi pentru Inovare în Patrimoniul Cultural',
    scope: 'Național',
    regions: allRegions,
    domain: 'Antreprenoriat și patrimoniu cultural',
    opened: '1 octombrie 2025',
    budget: '1.970.000 EUR',
    url: 'https://oportunitati-ue.gov.ro/apel/cr-ue-in-patrimoniu-granturi-pentru-inovare-in-patrimoniul-cultural-2/',
  },
  {
    id: 'apia-acciza-motorina',
    title: 'Reducerea accizei la motorina utilizată în agricultură',
    officialTitle: 'APIA – Ghidul solicitantului privind acordarea ajutorului de stat pentru reducerea accizei la motorina utilizată în agricultură',
    scope: 'Național',
    regions: allRegions,
    domain: 'Agricultură',
    opened: '1 decembrie 2023',
    budget: 'Conform alocărilor APIA',
    url: 'https://oportunitati-ue.gov.ro/apel/ghidul-solicitantului-privind-acordarea-ajutorului-de-stat-pentru-reducerea-accizei-la-motorina-utilizata-in-agricultura/',
  },
  {
    id: 'centru-clustere-inovative-ghid',
    title: 'Clustere inovative – apel regional',
    officialTitle: 'Ghidul Solicitantului 1.2.2 – Clustere inovative',
    scope: 'Regional',
    regions: ['RO12'],
    domain: 'Antreprenoriat și inovare',
    opened: '6 iulie 2026',
    budget: '9.915.168 EUR fonduri UE',
    url: 'https://oportunitati-ue.gov.ro/apel/ghidul-solicitantului-1-2-2-clustere-inovative/',
  },
  {
    id: 'centru-management-clustere',
    title: 'Sprijin pentru managementul clusterelor',
    officialTitle: 'Clustere inovative – Sprijin pentru entitățile de management ale clusterelor',
    scope: 'Regional',
    regions: ['RO12'],
    domain: 'Antreprenoriat și inovare',
    opened: '5 iunie 2026',
    budget: '8.051.115,40 EUR fonduri UE',
    url: 'https://oportunitati-ue.gov.ro/apel/schema-de-ajutor-de-stat-si-de-minimis-clustere-inovative-sprijin-pentru-entitatile-de-management-ale-clusterelor/',
  },
  {
    id: 'centru-parteneri-imm-clustere',
    title: 'Clustere inovative – parteneri IMM',
    officialTitle: 'Clustere inovative – sprijin pentru parteneri IMM-uri',
    scope: 'Regional',
    regions: ['RO12'],
    domain: 'Antreprenoriat și inovare',
    opened: '5 iunie 2026',
    budget: '4.412.249,10 EUR fonduri UE',
    url: 'https://oportunitati-ue.gov.ro/apel/schema-de-ajutor-de-stat-si-de-minimis-clustere-inovative-sprijin-pentru-parteneri-imm-uri/',
  },
  {
    id: 'centru-participare-imm-cdi',
    title: 'Participarea IMM în parteneriate CDI',
    officialTitle: 'Intervenția 1.2.1 – Participarea IMM și organizațiilor de CDI în structuri, parteneriate și programe de colaborare',
    scope: 'Regional',
    regions: ['RO12'],
    domain: 'Cercetare, dezvoltare și inovare',
    opened: '20 septembrie 2025',
    budget: '52.704.710 RON buget național',
    url: 'https://oportunitati-ue.gov.ro/apel/interventia-1-2-1-participarea-imm-si-organizatiilor-de-cdi-in-structuri-parteneriate-si-programe-de-colaborare/',
  },
  {
    id: 'nord-vest-parcuri-specializare',
    title: 'Investiții IMM în parcuri de specializare inteligentă',
    officialTitle: 'Sprijinirea dezvoltării unor investiții inițiale ale IMM-urilor în cadrul parcurilor de specializare inteligentă',
    scope: 'Regional',
    regions: ['RO11'],
    domain: 'Investiții productive și antreprenoriat',
    opened: '10 iunie 2024',
    budget: '49.507.054 EUR',
    url: 'https://oportunitati-ue.gov.ro/apel/pr-nord-vest-lanseaza-apelul-132-a-2-sprijinirea-dezvoltarii-unor-investitii-initiale-ale-unor-imm-uri-in-cadrul-parcurilor-de-specializare-inteligenta/',
  },
  {
    id: 'vest-eit-mobilitate-urbana',
    title: 'EIT Mobilitate urbană',
    officialTitle: 'Ghidul Solicitantului – EIT Mobilitate urbană',
    scope: 'Regional',
    regions: ['RO42'],
    domain: 'Mobilitate și inovare',
    opened: '30 martie 2026',
    budget: '4.075.920 RON buget național',
    url: 'https://oportunitati-ue.gov.ro/apel/ghidul-solicitantului-eit-mobilitate-urbana/',
  },
];

export const officialFundingPortalUrl = 'https://oportunitati-ue.gov.ro/apeluri/?_sft_beneficiar=imm&_sfm_status=activ';
export const fundingMapUpdatedAt = '22 iulie 2026';
