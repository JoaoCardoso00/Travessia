import { Categories } from "@/components/Categories";
import { StarIcon } from "@heroicons/react/24/solid";

const products = [
  {
    id: 1,
    name: "Caminhada na Selva Amazônica",
    href: "#",
    price: "R$120",
    imageSrc:
      "https://images.unsplash.com/photo-1616430284384-62ba9ce6c11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    imageAlt: "Caminhada na Selva",
  },
  {
    id: 2,
    name: "Navegação pelo Rio Amazonas",
    href: "#",
    price: "R$250",
    imageSrc:
      "https://images.unsplash.com/photo-1556751003-a249a53dc9b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1456&q=80",
    imageAlt: "Navegação pelo Rio",
  },
  {
    id: 3,
    name: "Observação de Pássaros na Amazônia",
    href: "#",
    price: "R$180",
    imageSrc:
      "https://images.unsplash.com/photo-1499995909106-2d6741de64ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Observação de Pássaros",
  },
  {
    id: 4,
    name: "Expedição de Canoagem na Floresta Amazônica",
    href: "#",
    price: "R$320",
    imageSrc:
      "https://images.unsplash.com/photo-1598837218686-a456fdaa5cf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    imageAlt: "Expedição de Canoagem",
  },
  {
    id: 5,
    name: "Experiência Cultural Indígena",
    href: "#",
    price: "R$300",
    imageSrc:
      "https://memoria.ebc.com.br/sites/_portalebc2014/files/atoms_image/aldeia_annevilela-0019.jpg",
    imageAlt: "Experiência Cultural Indígena",
  },
  {
    id: 6,
    name: "Tour de Observação da Vida Selvagem",
    href: "#",
    price: "R$200",
    imageSrc:
      "https://images.unsplash.com/photo-1590324493291-747afe32ff58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFtYXpvbiUyMHJhaW5mb3Jlc3QlMjBhbmltYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    imageAlt: "Observação da Vida Selvagem",
  },
  {
    id: 7,
    name: "Aventura de Acampamento na Selva",
    href: "#",
    price: "R$280",
    imageSrc:
      "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Aventura de Acampamento",
  },
  {
    id: 8,
    name: "Passeio de Bicicleta pela Floresta Amazônica",
    href: "#",
    price: "R$170",
    imageSrc:
      "https://images.unsplash.com/photo-1621527225138-b4832a1b3992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpa2UlMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    imageAlt: "Passeio de Bicicleta",
  },
];

export default function Experiences() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <Categories />
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-2 flex items-center gap-1 text-black text-sm">
                <StarIcon color="black" className="h-4" />
                <span className=" font-light">5,0</span>
                <span className=" font-light">(14)</span>
                <span className="text-xl">·</span>
                <span className="font-light">2 horas</span>
              </div>
              <p className="text-lg font-medium text-gray-900">
                {product.name}
              </p>
              <h3 className="mt-2 text-sm text-gray-700">
                A partir de {product.price}/pessoa
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
