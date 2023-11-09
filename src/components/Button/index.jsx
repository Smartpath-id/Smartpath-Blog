import Link from "next/link";

const Button = ({ name, toPage, width, className = "" }) => {
  return (
    <button
      className={`w-${width} elementor-size-sm rounded-md px-4 py-2 bg-[#FFA700] text-white ${className}`}
    >
      <Link href={`/${toPage}`}>{name}</Link>
    </button>
  );
};

export default Button;
