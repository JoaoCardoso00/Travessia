const values = [
  {
    name: "Enriquecimento Cultural",
    description:
      "Respeitamos e valorizamos a rica diversidade cultural da região amazônica e buscamos promover a preservação e a divulgação da sua história e tradições.",
  },
  {
    name: "Conhecimento da Floresta Amazônica",
    description:
      "Acreditamos na importância de educar as pessoas sobre a riqueza da floresta amazônica e seus habitantes, incentivando a conservação e o respeito pelo meio ambiente.",
  },
  {
    name: "Fortalecimento da Economia Local",
    description:
      "Estamos comprometidos em apoiar os empreendedores locais e suas iniciativas, promovendo o desenvolvimento sustentável e o crescimento econômico da região.",
  },
  {
    name: "Preservação Ambiental",
    description:
      "Somos defensores da conservação da floresta amazônica e trabalhamos para minimizar o impacto ambiental de nossas atividades, promovendo práticas sustentáveis e responsáveis.",
  },
  {
    name: "Empatia e Respeito",
    description:
      "Nós nos importamos com as pessoas, os animais e o meio ambiente, e nos esforçamos para tratar todos com respeito, compaixão e empatia.",
  },
  {
    name: "Excelência em Serviços",
    description:
      "Buscamos sempre oferecer serviços de alta qualidade, garantindo a satisfação e a felicidade de nossos clientes.",
  },
  {
    name: "Inovação e Criatividade",
    description:
      "Estamos sempre em busca de novas formas de promover experiências únicas e inesquecíveis na região amazônica, incentivando a criatividade e a inovação.",
  },
  {
    name: "Responsabilidade Social",
    description:
      "Acreditamos no poder da responsabilidade social e trabalhamos para contribuir positivamente com a comunidade local e o meio ambiente.",
  },
  {
    name: "Comprometimento com a Sustentabilidade",
    description:
      "Estamos comprometidos em promover práticas sustentáveis em todas as nossas atividades, visando garantir um futuro melhor para a região amazônica e as gerações futuras.",
  },
];

export function Values() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nossos valores
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Na Ecorota, estamos comprometidos em promover experiências autênticas
          e sustentáveis na região amazônica. Nossos valores fundamentais
          incluem:
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {values.map((value) => (
          <div key={value.name}>
            <dt className="font-semibold text-gray-900">{value.name}</dt>
            <dd className="mt-1 text-gray-600">{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
