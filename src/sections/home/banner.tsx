import Image from "next/image";

export function Banner() {
  return (
    <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      <Image
        src="/amazon.jpg"
        alt=""
        height={500}
        width={1000}
        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
      />
    </div>
  );
}
