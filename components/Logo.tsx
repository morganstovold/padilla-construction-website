import { ViewLink } from "./ViewLink";

export default function Logo() {
  return (
    <ViewLink
      href="/"
      className="flex flex-shrink-0 items-center gap-2 uppercase tracking-wider transition-colors hover:cursor-pointer hover:text-tertiary sm:gap-4"
    >
      <h1 className="select-none font-medium text-2xl text-shadow-lg sm:text-3xl lg:text-4xl">
        Padilla
      </h1>
      <h2 className="select-none text-shadow-lg text-sm sm:text-base lg:text-lg">
        Design & Build
      </h2>
    </ViewLink>
  );
}
