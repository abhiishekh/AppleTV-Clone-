import { twMerge } from "tailwind-merge";

type Props = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

export const Container = ({ children, className, style }: Props) => {
    return <div className={twMerge("mx-auto max-w-[1350px] px-6 py-2", className)} style={style}>{children}</div>;
};
