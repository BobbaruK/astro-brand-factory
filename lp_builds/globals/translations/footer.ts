import type { FooterTranslations, TranslationsType } from "../types/Translations";

export default function footerTranslations(brandName: string): FooterTranslations {
  const classic: TranslationsType = {
    en: `<p>Trading carries a high level of risk to your capital due to the volatility of the underlying market. Trading is not suitable for everyone and may result in you losing all your investment. ${brandName} products may not be suitable for all investors. Therefore, you should ensure that you understand the risks and seek advice from an independent and suitably licensed financial advisor.</p>`,
    it: `<p>Il trading ha un elevato livello di rischio per il capitale a causa della volatilità del mercato. Il trading non è adatto a tutti e può causare la perdita di tutto il tuo investimento. I segnali ${brandName} potrebbero non essere adatti a tutti gli investitori. Pertanto, è necessario assicurarsi di comprendere i rischi e richiedere consulenza da un consulente finanziario indipendente e adeguatamente autorizzato.</p>`,
    tr: "",
    ro: `<p>Tranzacționarea implică un nivel ridicat de risc pentru capitalul dumneavoastră din cauza volatilității pieței subiacente. Tranzacționarea nu este potrivită pentru toată lumea și poate duce la pierderea tuturor investițiilor. Este posibil ca produsele ${brandName} să nu fie potrivite pentru toți investitorii. Prin urmare, ar trebui să vă asigurați că înțelegeți riscurile și că solicitați sfatul unui consilier financiar independent și autorizat corespunzător.</p>`,
    ar: "",
    de: "",
    es: `<p>El comercio tiene un alto nivel de riesgo para el capital debido a la volatilidad del mercado. El comercio no es adecuado para todos y puede hacer que pierda toda su inversión. Las señales de ${brandName} pueden no ser adecuadas para todos los inversores. Por lo tanto, debe asegurarse de comprender los riesgos y buscar el asesoramiento de un asesor financiero independiente y debidamente autorizado.</p>`,
    sv: "<p>Handel innebär en hög risk för ditt kapital på grund av volatiliteten på den underliggande marknaden. Handel är inte lämpligt för alla och kan leda till att hela din investering går förlorad. TradeStrategyHub-produkter kanske inte är lämpliga för alla investerare. Därför bör du se till att du förstår riskerna och be om råd från en oberoende och lämpligt licensierad finansiell rådgivare.</p>",
    pt: "",
    fi: "",
    pl: `<p>Handel niesie ze sobą wysoki poziom ryzyka dla Twojego kapitału ze względu na zmienność rynku bazowego. Handel nie jest odpowiedni dla każdego i może doprowadzić do utraty wszystkich inwestycji. Produkty ${brandName} mogą nie być odpowiednie dla wszystkich traderów. Dlatego upewnij się, że rozumiesz ryzyko i zasięgnij porady niezależnego i odpowiednio licencjonowanego doradcy finansowego</p>`,
    hu: "",
    th: "",
    ms: "",
    vi: "",
  };

  const esma: TranslationsType = {
    en: `
      <p>CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. The vast majority of retail investor accounts lose money when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</p>
      <p>Engaging in the trading of financial instruments carries significant risks, including the potential loss of a portion or all of your invested capital. This activity may not be suitable for every investor. The prices of many financial instruments are highly volatile and can be influenced by external factors like financial, regulatory, or political events. Trading on margin amplifies the financial risks involved. Prior to making a decision to trade financial instruments or cryptocurrencies, it is important to be fully aware of the potential risks and costs associated with participating in financial markets. Take the time to carefully assess your investment objectives, level of experience, and risk tolerance. When necessary, seek professional advice to ensure informed decision-making.</p>`,
    it: `
      <p>I CFD sono strumenti complessi e comportano un alto rischio di perdere rapidamente denaro a causa della leva finanziaria. La stragrande maggioranza dei conti degli investitori al dettaglio perde denaro durante il trading di CFD. Dovresti considerare se comprendi come funzionano i CFD e se puoi permetterti di prendere il massimo rischio di perdere i tuoi soldi.</p>
      <p>La negoziazione di strumenti finanziari comporta rischi significativi, inclusa la potenziale perdita di una parte o di tutto il capitale investito. Questa attività potrebbe non essere adatta a tutti gli investitori. I prezzi di molti strumenti finanziari sono altamente volatili e possono essere influenzati da fattori esterni come eventi finanziari, normativi o politici. Il trading a margine amplifica i rischi finanziari coinvolti. Prima di prendere la decisione di negoziare strumenti finanziari o criptovalute, è importante essere pienamente consapevoli dei potenziali rischi e costi associati alla partecipazione ai mercati finanziari. Prenditi il tempo per valutare attentamente i tuoi obiettivi di investimento, il livello di esperienza e la tolleranza al rischio. Se necessario, cercare una consulenza professionale per garantire un processo decisionale informato.</p>`,
    tr: "",
    ro: `
      <p>CFD-urile sunt instrumente complexe și prezintă un risc mare de a pierde bani rapid din cauza efectului de levier. Marea majoritate a conturilor de investitori de retail pierd bani atunci când tranzacționați CFD-uri. Ar trebui să vă gândiți dacă înțelegeți cum funcționează CFD-urile și dacă vă puteți permite riscul de a pierde banii.</p>
      <p>Angajarea în tranzacționarea instrumentelor financiare implică riscuri semnificative, inclusiv pierderea potențială a unei părți sau a întregului capital investit. Este posibil ca această activitate să nu fie potrivită pentru orice investitor. Prețurile multor instrumente financiare sunt foarte volatile și pot fi influențate de factori externi, cum ar fi evenimente financiare, de reglementare sau politice. Tranzacționarea cu marjă amplifică riscurile financiare implicate. Înainte de a lua o decizie de a tranzacționa instrumente financiare sau criptomonede, este important să fiți pe deplin conștient de potențialele riscuri și costuri asociate cu participarea la piețele financiare. Acordați-vă timp pentru a vă evalua cu atenție obiectivele de investiții, nivelul de experiență și toleranța la risc. Când este necesar, solicitați sfaturi profesionale pentru a asigura luarea deciziilor în cunoștință de cauză.</p>`,
    ar: "",
    de: "",
    es: `
      <p>Los CFD son instrumentos complejos y conllevan un alto riesgo de perder dinero rápidamente debido al apalancamiento. La gran mayoría de las cuentas de inversores minoristas pierden dinero al operar con CFD. Usted debe considerar si entiende cómo funcionan los CFDs y si puede permitirse asumir el alto riesgo de perder su dinero.</p>
      <p>La Comisión Nacional del Mercado de Valores de España (la "CNMV") ha determinado que, debido a la complejidad de los CFD y a los riesgos que conllevan, la compra de este tipo de producto por parte de Clientes Minoristas no es apropiada/adecuada. En este sentido, de conformidad con los requisitos pertinentes introducidos por la CNMV, se le advierte de que está a punto de adquirir un producto que es complejo y difícil de entender: Contratos por Diferencias (CFDs). La CNMV ha determinado que, debido a su complejidad y a los riesgos que entraña, la adquisición de este producto por inversores minoristas no es apropiada/adecuada.</p>
      <p>Participar en la negociación de instrumentos financieros conlleva riesgos significativos, incluida la posible pérdida de una parte o la totalidad del capital invertido. Esta actividad puede no ser adecuada para todos los inversores. Los precios de muchos instrumentos financieros son muy volátiles y pueden verse influidos por factores externos como acontecimientos financieros, normativos o políticos. Operar con margen amplifica los riesgos financieros. Antes de tomar la decisión de operar con instrumentos financieros o criptomonedas, es importante ser plenamente consciente de los posibles riesgos y costes asociados a la participación en los mercados financieros. Tómese su tiempo para evaluar cuidadosamente sus objetivos de inversión, su nivel de experiencia y su tolerancia al riesgo. Cuando sea necesario, busque asesoramiento profesional para garantizar una toma de decisiones informada.</p>`,
    sv: `
      <p>CFD:er är komplexa instrument och medför en hög risk att snabbt förlora pengar på grund av hävstångseffekten. De allra flesta konton för icke-professionella investerare förlorar pengar när de handlar med CFD:er. Du bör överväga om du förstår hur CFD:er fungerar och om du har råd att ta den höga risken att förlora dina pengar.</p>
      <p>Att delta i handel med finansiella instrument medför betydande risker, inklusive den potentiella förlusten av en del av eller hela ditt investerade kapital. Denna verksamhet kanske inte är lämplig för alla investerare. Priserna på många finansiella instrument är mycket volatila och kan påverkas av externa faktorer som finansiella, regulatoriska eller politiska händelser. Handel på marginal förstärker de finansiella riskerna. Innan du fattar ett beslut om att handla med finansiella instrument eller kryptovalutor är det viktigt att du är fullt medveten om de potentiella risker och kostnader som är förknippade med att delta på finansmarknaderna. Ta dig tid att noggrant utvärdera dina investeringsmål, din erfarenhetsnivå och din risktolerans. Sök vid behov professionell rådgivning för att säkerställa ett välgrundat beslutsfattande.</p>`,
    pt: "",
    fi: "",
    pl: `
      <p>Kontrakty CFD są złożonymi instrumentami i wiążą się z wysokim ryzykiem szybkiej utraty pieniędzy z powodu dźwigni finansowej. Zdecydowana większość rachunków inwestorów detalicznych odnotowuje straty pieniężne podczas handlu kontraktami CFD. Powinieneś rozważyć, czy rozumiesz, jak działają kontrakty CFD i czy możesz sobie pozwolić na wysokie ryzyko utraty pieniędzy.</p>
      <p>Angażowanie się w handel instrumentami finansowymi niesie ze sobą znaczne ryzyko, w tym potencjalną utratę części lub całości zainwestowanego kapitału. Ta aktywność może nie być odpowiednia dla każdego inwestora. Ceny wielu instrumentów finansowych są bardzo zmienne i mogą na nie wpływać czynniki zewnętrzne, takie jak wydarzenia finansowe, regulacyjne lub polityczne. Handel na marży zwiększa związane z tym ryzyko finansowe. Przed podjęciem decyzji o handlu instrumentami finansowymi lub kryptowalutami ważne jest, aby być w pełni świadomym potencjalnych zagrożeń i kosztów związanych z uczestnictwem w rynkach finansowych. Poświęć trochę czasu, aby dokładnie ocenić swoje cele inwestycyjne, poziom doświadczenia i tolerancję ryzyka. W razie potrzeby zasięgnij profesjonalnej porady, aby zapewnić świadome podejmowanie decyzji.</p>`,
    hu: "",
    th: "",
    ms: "",
    vi: "",
  };

  const endorsed: TranslationsType = {
    en: `
      <p>Leveraged products such as CFDs and Forex are considered intricate financial assets and may not be suitable for all investors as they carry a high degree of risk and can lead to the loss of your investment. Before getting involved with trading, consider your financial goals, your skills and gage the possible risks associated with trading Company's Products. Independent advice might be sought.</p>
      <p>ORO FINTECH LIMITED is registered in Seychelles with registration number 8425077-1 and authorised by the Financial Services Authority (FSA) as Securities Dealer with license number SD046.</p>`,
    it: "",
    tr: "",
    ro: "",
    ar: "",
    de: "",
    es: `
      <p>Los productos apalancados como los CFD y Forex se consideran activos financieros complejos y pueden no ser adecuados para todos los inversores, ya que conllevan un alto grado de riesgo y pueden conducir a la pérdida de su inversión. Antes de involucrarse con el comercio, considere sus objetivos financieros, sus habilidades y evalúe los posibles riesgos asociados con el comercio de los Productos de la Compañía. Se puede buscar asesoramiento independiente.</p>
      <p>ORO Fintech Limited es una compañía financiera constituida y registrada bajo las leyes de la República de Seychelles con el número de registro 8425077-1 y autorizada por la Autoridad de Servicios Financieros (FSA) con el número de licencia SD046.</p>`,
    sv: "",
    pt: "",
    fi: "",
    pl: ``,
    hu: "",
    th: "",
    ms: "",
    vi: "",
  };

  const outbrain: TranslationsType = {
    en: `
      <p>CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. The vast majority of retail investor accounts lose money when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</p>`,
    it: "",
    tr: "",
    ro: "",
    ar: "",
    de: "",
    es: ``,
    sv: "",
    pt: "",
    fi: "",
    pl: ``,
    hu: "",
    th: "",
    ms: "",
    vi: "",
  };

  return {
    classic,
    esma,
    endorsed,
    outbrain,
  };
}
