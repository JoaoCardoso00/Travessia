const stats = [
  {
    label:
      "Familias na região norte possuem experiencias unicas a serem expostas ao mundo",
    value: "650 mil",
  },
  {
    label: "possíveis experiencias a serem vivenciadas na região",
    value: "162 mil",
  },
  {
    label: "Das pessoas tem dificuldade em achar locais turisticos na amazonia",
    value: "70%",
  },
];

export function Content() {
  return (
    <section className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nossa missão
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl leading-8 text-gray-600">
              Nossa missão é conectar os entusiastas da natureza às comunidades
              locais e aos esforços de conservação na Floresta Amazônica e
              regiões próximas.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
              <p>
                Acreditamos que vivenciar essas experiências únicas pode ser uma
                força para o bem e que, ao promover o turismo sustentável,
                podemos ter um impacto positivo no meio ambiente e nas
                comunidades locais.
              </p>
              <br />
              <p>
                Nossa plataforma é projetada para capacitar os indivíduos a
                compartilhar sua paixão pela natureza e aventura com um público
                global. Ao se registrar em nossa plataforma, você pode mostrar
                suas experiências e se conectar com viajantes de todo o mundo.
                Fornecemos as ferramentas e recursos necessários para criar e
                promover suas experiências, para que você possa se concentrar no
                que faz de melhor: compartilhar seu amor pela região amazônica.
              </p>
            </div>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">
                    {stat.label}
                  </dt>
                  <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
