"use client";

export function NewsletterForm() {
  return (
    <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
      <div className="flex gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Endereço de Email
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
          placeholder="Insira seu Email"
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
        >
          Inscrever-se
        </button>
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-900">
        Nós nos importamos com seus dados. Leia nossa <br />
        <a
          href="#"
          className="font-semibold text-green-800 hover:text-indigo-500"
        >
          politica de&nbsp;privacidade
        </a>
        .
      </p>
    </form>
  );
}
