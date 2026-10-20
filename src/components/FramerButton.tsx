import React from 'react';

interface FramerButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'accent' | 'outline' | 'outline-white';
  className?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const FramerButton: React.FC<FramerButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  icon,
  href,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'accent':
        return 'bg-[#E6286B] text-white hover:bg-[#CF1757] border border-transparent shadow-md shadow-[#E6286B]/30 hover:shadow-lg hover:shadow-[#E6286B]/40';
      case 'outline':
        return 'bg-transparent text-[#204CB8] border border-[#204CB8]/30 hover:bg-[#204CB8]/8 hover:border-[#204CB8]/60';
      case 'outline-white':
        return 'bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/60';
      case 'primary':
      default:
        return 'bg-[#204CB8] text-white hover:bg-[#173C99] border border-transparent shadow-md shadow-[#204CB8]/25 hover:shadow-lg hover:shadow-[#204CB8]/35';
    }
  };

  const content = (
    <div className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out cursor-pointer active:scale-95 ${getVariantStyles()} ${className}`}>
      <span className="relative flex items-center gap-2">
        <span className="flex flex-col h-[1.3em] overflow-hidden leading-[1.3em]">
          <span className="transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
            {children}
          </span>
          <span className="transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-current">
            {children}
          </span>
        </span>
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  );
};
