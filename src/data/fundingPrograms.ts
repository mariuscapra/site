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
  {
    id: 'pr-ne-modernizare-microintreprinderi',
    title: 'Modernizare microîntreprinderi Nord-Est',
    officialName: 'Programul Regional Nord-Est 2021-2027, Prioritatea 1, Obiectiv specific RSO 1.3 – Investiții pentru modernizarea microîntreprinderilor, apelul 2.',
    category: 'Program regional · Investiții productive',
    status: 'Urmează',
    description: 'Finanțare pentru modernizarea și diversificarea microîntreprinderilor prin construcții, echipamente, tehnologii noi, energie regenerabilă, digitalizare, marketing și branding.',
    image: 'images/programs/pr-ne-modernizare-microintreprinderi.jpg',
    imageAlt: 'Microîntreprindere modernizată din regiunea Nord-Est, cu echipamente tehnologice, automatizare, energie regenerabilă și dezvoltare comercială',
    funding: '100.000–300.000 euro',
    cofinancing: 'Minimum 10%',
    deadline: 'Consultarea publică s-a încheiat la 13.03.2026; lansarea este estimată pentru septembrie 2026, iar data exactă rămâne de confirmat prin ghidul final ADR Nord-Est',
    keyFacts: [
      ['Bugetul apelului', '20,37 mil. euro'],
      ['Grant nerambursabil', '100.000–300.000 euro'],
      ['Finanțare maximă', '90% din costurile eligibile'],
      ['Prag minim', '70 puncte'],
    ],
    eligibility: [
      'Pot aplica societăți comerciale care se încadrează în categoria microîntreprinderilor și îndeplinesc toate condițiile prevăzute de ghidul final.',
      'Sediul social și locația de implementare trebuie să fie în regiunea Nord-Est, în mediul urban sau rural, într-unul dintre județele Bacău, Botoșani, Iași, Neamț, Suceava și Vaslui.',
      'Solicitantul trebuie să fi desfășurat activitate pentru cel puțin un an fiscal integral și să fi înregistrat profit din exploatare mai mare de zero în anul fiscal anterior depunerii.',
      'Investiția trebuie să vizeze o activitate eligibilă și să fie realizată la o locație adecvată, asupra căreia solicitantul deține drepturile solicitate prin ghid.',
      'Proiectul trebuie să prevadă crearea a cel puțin unui loc de muncă după semnarea contractului de finanțare.',
    ],
    process: [
      'Verificarea încadrării ca microîntreprindere, a sediului și locației, a profitului din exploatare, a codului CAEN și a capacității de cofinanțare.',
      'Definirea investiției și pregătirea planului de afaceri, a bugetului, ofertelor și, dacă este cazul, a documentației tehnice pentru lucrări.',
      'Depunerea cererii după publicarea ghidului final, fără demararea lucrărilor sau plasarea unei comenzi ferme pentru bunurile incluse în proiect înainte de depunere.',
      'Evaluarea competitivă; proiectul trebuie să obțină minimum 70 de puncte, iar finanțarea se acordă în ordinea descrescătoare a punctajului, în limita bugetului.',
      'Contractarea, realizarea achizițiilor, implementarea investiției, cererile de rambursare și monitorizarea indicatorilor asumați.',
    ],
    eligibleCosts: [
      'Construirea, extinderea sau modernizarea spațiilor de producție și prestări servicii, inclusiv utilitățile generale și lucrările conexe eligibile.',
      'Echipamente tehnologice, utilaje, instalații de lucru, mobilier, echipamente informatice și alte dotări încadrate ca mijloace fixe.',
      'Sisteme pentru producerea energiei din surse regenerabile sau alternative, precum panouri fotovoltaice, sisteme solare termice și pompe de căldură.',
      'Active necorporale: brevete, licențe, mărci comerciale, programe informatice și alte drepturi sau active similare.',
      'Servicii de marketing și branding, inclusiv evaluarea pieței, dezvoltarea produselor, promovarea vânzărilor, social media, strategie și identitate de brand.',
      'Activități pentru creșterea intensității digitale și valorificarea produselor sau serviciilor întreprinderii.',
      'Costuri indirecte pentru consultanță, management, audit financiar, achiziții, proiectare, avize, asistență tehnică și comunicare, printr-o rată forfetară de maximum 7% din costurile directe eligibile.',
    ],
    obligations: [
      'Asigurarea unei contribuții proprii de minimum 10% din cheltuielile eligibile și suportarea integrală a cheltuielilor neeligibile.',
      'Crearea a cel puțin unui loc de muncă după semnarea contractului și menținerea indicatorilor de ocupare asumați în condițiile ghidului final.',
      'Investiția nu poate fi demarată înainte de depunerea cererii: nu se începe execuția lucrărilor și nu se lansează comenzi ferme care fac proiectul ireversibil.',
      'Menținerea investiției, activității și activelor finanțate pe întreaga perioadă de durabilitate stabilită prin contractul de finanțare.',
      'Respectarea regulilor de achiziții, a cerințelor de mediu și DNSH, a obligațiilor de comunicare și vizibilitate și a condițiilor de evitare a dublei finanțări.',
      'Echipamentele second-hand, autovehiculele și mijloacele de transport sunt neeligibile, cu excepțiile expres prevăzute pentru utilaje și instalații de transportat și ridicat.',
    ],
    sources: [
      {
        label: 'Pagina oficială a apelului 2',
        url: 'https://regionordest.ro/prioritatea-1/modernizare-microintreprinderi/',
      },
      {
        label: 'Ghid și anexe în consultare (.zip)',
        url: 'https://regionordest.ro/wp-content/uploads/2026/01/Ghidul-Solicitantului-de-finantare-Investitii-microintreprinderi_Apel-2_in_consultare_30_01_2026.zip',
      },
      {
        label: 'Calendarul orientativ ADR Nord-Est',
        url: 'https://regionordest.ro/calendar-orientativ-lansari-apeluri-proiecte/',
      },
    ],
  },
  {
    id: 'dr-12-consolidare-exploatatii',
    title: 'DR-12 · Consolidarea exploatațiilor',
    officialName: 'Intervenția DR-12 – Investiții în consolidarea exploatațiilor tinerilor fermieri instalați și a fermierilor cu vârsta de maximum 45 de ani, PS PAC 2023–2027.',
    category: 'AFIR · Investiții agricole',
    status: 'Urmează',
    description: 'Sprijin pentru ferme mai competitive prin construcții, utilaje, procesare la nivelul fermei, agricultură de precizie, energie regenerabilă și soluții pentru reducerea impactului asupra mediului.',
    image: 'images/programs/dr-12-consolidare-exploatatii.jpg',
    imageAlt: 'Fermă românească modernă cu utilaje, spații protejate, zootehnie, agricultură de precizie și energie regenerabilă',
    funding: 'Până la 200.000 euro',
    cofinancing: 'Minimum 20% sau 35%',
    deadline: 'Lansare estimată în perioada august–septembrie 2026; AFIR nu a publicat încă anunțul oficial și intervalul exact de depunere',
    keyFacts: [
      ['Grant nerambursabil', 'max. 200.000 euro'],
      ['Intensitate', 'maximum 80% / 65%'],
      ['Dimensiune fermă', 'minimum 12.000 SO'],
      ['Prag de calitate', '75 p. / 45 p.'],
    ],
    eligibility: [
      'Pot aplica tinerii fermieri care au cel mult 40 de ani, înainte de împlinirea vârstei de 41 de ani, sunt șefi ai exploatației și dețin competențele profesionale solicitate.',
      'Sunt eligibili și fermierii care au finalizat planul de afaceri finanțat prin submăsura 6.1, indiferent de vârsta actuală, precum și fermierii instalați care au cel mult 45 de ani, înainte de împlinirea vârstei de 46 de ani.',
      'Solicitantul trebuie să fie organizat ca PFA, întreprindere individuală, întreprindere familială sau SRL; persoana fizică neautorizată nu este eligibilă.',
      'Exploatația trebuie să aibă minimum 12.000 euro SO, să fie înregistrată pe forma solicitantului și să aibă cod de exploatație și cel puțin o cerere unică de plată IACS/APIA depusă.',
      'Solicitantul trebuie să figureze, după caz, în bazele APIA, ANSVSA/DSVSA și ANZ înainte de depunere, iar toate suprafețele și animalele exploatației trebuie declarate corect.',
    ],
    process: [
      'Verificarea profilului solicitantului, a formei juridice, a vârstei, competențelor profesionale, dimensiunii SO și înregistrărilor exploatației.',
      'Alegerea componentei – sector zootehnic sau alte sectoare – și realizarea unui prescoring realist. Ghidul consultativ prevede două etape lunare, cu praguri de 75 și 45 de puncte.',
      'Definirea investiției, a devizului și a fluxului tehnologic, obținerea drepturilor asupra terenurilor/clădirilor și pregătirea studiului de fezabilitate și a avizelor.',
      'Depunerea online pe platforma AFIR, după publicarea ghidului final și a notei de lansare, utilizând semnătură electronică calificată.',
      'Contractarea, dovada cofinanțării, achizițiile și implementarea proiectului în maximum trei ani, urmate de perioada de monitorizare.',
    ],
    eligibleCosts: [
      'Construcții noi, extinderi și modernizări, inclusiv spații protejate, utilități, facilități pentru condiționarea și depozitarea producției proprii.',
      'Utilaje agricole, remorci și semiremorci tehnologice, echipamente performante, automatizări și dotări pentru gestionarea îngrășămintelor și produselor de protecție a plantelor.',
      'Unități de procesare la nivelul fermei și dotările aferente, numai ca o componentă secundară a proiectului, pentru creșterea valorii produselor agricole.',
      'Sisteme și echipamente de irigații la nivelul fermei, ca o componentă secundară și cu respectarea condițiilor specifice privind utilizarea și economia de apă.',
      'Soluții integrate de agricultură de precizie: senzori, drone, FMIS, IoT, telemetrie, roboți, GPS integrat, aplicare variabilă a inputurilor și sisteme automate de monitorizare.',
      'Producerea și stocarea energiei regenerabile pentru consumul propriu al fermei, fără introducerea energiei în Sistemul Energetic Național și fără calitatea de prosumator.',
      'Software, patente, licențe, sisteme de management al calității, marketingul produselor obținute – în limita a 5% – și costuri generale/consultanță în limitele ghidului.',
    ],
    obligations: [
      'Asigurarea contribuției private de minimum 20% pentru intensitatea de 80% sau de minimum 35% pentru intensitatea de 65%, plus acoperirea cheltuielilor neeligibile.',
      'Prezentarea dovezii cofinanțării la contractare prin extras de cont și/sau contract de credit, în condițiile stabilite de AFIR.',
      'Implementarea investiției în maximum trei ani și menținerea acesteia, a activității și a condițiilor contractuale pe perioada de monitorizare de cinci ani.',
      'Menținerea drepturilor de folosință asupra terenurilor și clădirilor pe durata implementării și monitorizării și păstrarea suprafețelor deținute în proprietate dacă au adus punctaj.',
      'Evitarea dublei finanțări și a creării de condiții artificiale; aceeași cheltuială nu poate fi solicitată prin alte intervenții sau scheme de sprijin.',
      'Sprijinul funcționează în principal prin rambursarea cheltuielilor eligibile plătite; beneficiarul poate solicita un avans de până la 50% din contribuția publică, în condițiile ghidului.',
    ],
    sources: [
      {
        label: 'Ghidul solicitantului DR-12 – versiune consultativă (.pdf)',
        url: 'https://www.afir.ro/api/file?filename=Ghidul+Solicitantului+DR+12+-+versiunea+consultativ%C4%83&filetype=pdf&url=%2Fmedia%2Flm3fg4k1%2Fghidul-solicitantului-dr-12.pdf',
      },
      {
        label: 'Comunicatul oficial AFIR despre DR-12',
        url: 'https://www.afir.ro/comunicate/consultare-publica-pentru-consolidarea-exploatatiilor-tinerilor-fermieri/',
      },
      {
        label: 'Pașii de aplicare – material orientativ',
        url: 'https://fermierinformat.ro/pasii-pentru-aplicarea-cu-succes-la-masura-dr-12/',
      },
      {
        label: 'Sesiuni de proiecte AFIR',
        url: 'https://www.afir.ro/instrumente/sesiuni/sesiuni-primire-proiecte/',
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
