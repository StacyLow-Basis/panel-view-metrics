import basisLogo from "@/assets/basis-logo.svg";

interface BasisLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const BasisLogo = ({
  className = "",
  width = 120,
  height = 28,
}: BasisLogoProps) => {
  return (
    <img
      src={basisLogo}
      alt="Basis"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default BasisLogo;
