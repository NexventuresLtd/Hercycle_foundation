interface Props {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className = '' }: Props) {
  return (
    <img
      src="../logo.jpeg"
      alt="HerCycle Foundation"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      onError={(e) => {
        // Fallback if logo.jpeg is not yet in /public
        (e.currentTarget as HTMLImageElement).style.display = 'none';
      }}
    />
  );
}
