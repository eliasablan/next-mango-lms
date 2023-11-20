import Image from "next/image";

export const Logo = () => {
  return (
    <p className="flex justify-start align-center gap-x-2">
      <Image height={30} width={30} alt="logo" src="/icon_logo.png" />
      <span className="mt-0.5 font-medium text-indigo-900 text-xl">
        Mango LMS
      </span>
    </p>
  );
};
