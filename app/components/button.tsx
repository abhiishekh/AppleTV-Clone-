import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string; 
};

export const Button = ({ children, size = "md", className }: Props) => {
  const sizeClassNames = {
    sm: "text-xs px-2 py-1", // 12px
    md: "text-sm px-5 py-3", // 14px
    lg: "text-base px-8 py-4", // 17px
  };

  return (
    <button className={twMerge("bg-white text-textblack rounded-full font-sans", sizeClassNames[size], className)}>
      {children}
    </button>
  );
};
