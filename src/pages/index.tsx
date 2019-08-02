import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// {/* <p>Welcome to your new Gatsby site.</p> */}
// {/* <p>Now go build something great.</p> */}
// {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
// {/* <Image /> */}
// {/* </div> */}
// {/* <Link to="/page-2/">Go to page 2</Link> */}

const IndexPage = () => (
  <Layout>
    <div className="nekolik-vet">
      <p>
        První měsíce roku 1989 znovu a jasně ukázaly, že i když se současné
        československé vedení velmi často zaklíná slovy přestavba a
        demokratizace, ve skutečnosti se dost zoufale vzpírá všemu, co
        demokracii vytváří nebo ji alespoň vzdáleně připomíná. Petice a
        iniciativy občanů, které samo nezorganizovalo, odmítá jako nátlakové
        akce, pokojná lidová shromáždění rozhání, do přípravy nových zákonů
        nedovoluje veřejnosti mluvit.
      </p>

      <p>
        Tytéž měsíce však zároveň ukázaly, že občanská veřejnost se už vymaňuje
        z letargie a že stále víc lidí má odvahu veřejně projevit svou touhu po
        společenských změnách. Pohyb ve společnosti se tak začíná stále
        povážlivěji srážet s nehybností moci, roste společenské napětí a začíná
        hrozit nebezpečí otevřené krize. Takovou krizi si nikdo z nás nepřeje.
        Proto vyzýváme vedení naší země, aby pochopilo, že nadešel čas ke
        skutečným a důkladným systémovým změnám a že tyto změny jsou svobodná a
        demokratická diskuse. Prvním krokem k jakýmkoli smysluplným změnám,
        novou ústavou počínaje a ekonomickou reformou konče, musí tedy být změna
        společenského klimatu v naší zemi, do kterého se musí vrátit duch
        svobody, důvěry, tolerance a plurality. Podle našeho názoru je k tomu
        třeba:
      </p>

      <ol>
        <li>Aby byli okamžitě propuštěni všichni političtí vězňové.</li>

        <li>Aby přestala být omezována svoboda shromažďovací.</li>

        <li>
          Aby přestaly být kriminalizovány a pronásledovány různé nezávislé
          iniciativy a začaly být konečně chápány i vládou jako to, čím v očích
          veřejnosti už dávno jsou, totiž jako přirozená součást veřejného
          života a legitimní výraz jeho různotvárnosti. Zároveň by neměly být
          kladeny překážky vznikání nových občanských hnutí, včetně nezávislých
          odborů, svazů a spolků.
        </li>

        <li>
          Aby byly sdělovací prostředky i veškerá kulturní činnost zbaveny všech
          forem politické manipulace a předběžné i následné skryté cenzury a
          otevřeny svobodné výměně názorů a aby byly legalizovány sdělovací
          prostředky, působící dosud nezávisle na oficiálních strukturách.
        </li>

        <li>
          Aby byly respektovány oprávněné požadavky všech věřících občanů.
        </li>

        <li>
          Aby byly všechny chystané a uskutečňované projekty, které mají
          natrvalo změnit životní prostředí v naší zemi a předurčit tak život
          budoucích generací, neodkladně předloženy k všestrannému posouzení
          odborníkům a veřejnosti.
        </li>

        <li>
          Aby byla zahájena svobodná diskuse nejen o padesátých letech, ale i o
          Pražském jaru, invazi pěti států Varšavské smlouvy a následné
          normalizaci. Je smutné, že zatímco v některých zemích, jejichž armády
          tehdy do československého vývoje zasáhly, se dnes už o tomto tématu
          začíná věcně diskutovat, u nás je to stále ještě velké tabu, a to jen
          proto, aby nemuseli odstoupit ti lidé z politického a státního vedení,
          kteří jsou odpovědní za dvacetileté upadání všech oblastí
          společenského života u nás.
        </li>
      </ol>

      <p>
        Každý, kdo s tímto stanoviskem souhlasí, je může podpořit svým podpisem.
      </p>

      <p>
        Vládu vyzýváme, aby s ním nenaložila tak, jak je dosud zvyklá s
        nepohodlnými názory nakládat. Zasadila by tím osudovou ránu nadějím,
        jimiž jsme vedeni, totiž nadějím na skutečný společenský dialog jako
        jediné možné východisko ze slepé uličky, v níž se dnes Československo
        nalézá.
      </p>
    </div>

    <p>
      <a href="https://cs.wikipedia.org/wiki/N%C4%9Bkolik_v%C4%9Bt#Signat%C3%A1%C5%99i">
        podepsali 1989
      </a>
    </p>

    <hr />

    <h2>Odkazy:</h2>

    <ul>
      <li>
        <a href="https://plus.rozhlas.cz/nekolik-vet-prohlaseni-ktere-v-lete-1989-posunulo-dejiny-7972311">
          Český rozhlas Plus: Několik vět. Prohlášení, které v létě 1989
          posunulo dějiny
        </a>
        {" (28. červen 2019)"}
      </li>
      <li>
        <a href="https://www.pametnaroda.cz/cs/magazin/stalo-se/zverejneni-petice-nekolik-vet">
          Paměť národa: Zveřejnění petice Několik vět{" "}
          <strong>Kdo seje vítr</strong>
        </a>
        {" (28. červen 2019)"}
      </li>
    </ul>
  </Layout>
)

export default IndexPage
