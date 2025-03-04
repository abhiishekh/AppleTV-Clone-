import { twMerge } from "tailwind-merge"

type Props= {
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
}
export const Button =({children, size="md"}:Props) =>{
    const sizeClasseNames={

        //12 px
        sm: 'text-xs px-2 py-1',
        //14 px
        md: 'text-sm px-5 py-3',
        //17px
        lg: 'text-base px-8 py-4'
    } 
    return <button className={twMerge("bg-white text-textblack rounded-full font-sans ", sizeClasseNames[size])}>
        {children}
    </button>
}