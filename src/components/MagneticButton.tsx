interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  strength?: number;
}

export function MagneticButton({ children, className = "", href }: MagneticButtonProps) {
  const Tag = href ? "a" : "div";

  return (
    <Tag
      href={href}
      className={`inline-block ${className}`}
    >
      {children}
    </Tag>
  );
}
