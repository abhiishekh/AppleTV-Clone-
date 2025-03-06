import appletv from '@/public/images/appletvlogo.png'
import iphone from '@/public/images/iphone.png'
import ipad from '@/public/images/ipad.png'
import mac from '@/public/images/mac.png'
import appleVisonpro from '@/public/images/visonpro.png'
import airplay from '@/public/images/airplay.png'
import android from '@/public/images/android.png'
import pc from '@/public/images/mac.png'
import { StaticImageData } from 'next/image'
    
interface data {
    poster: string | StaticImageData;
    title: string;
    link?:string;
}



export const data:data[] = [
    {
        poster: appletv,
        title:"Apple Tv",
        link:''
    },
    {
        poster: iphone,
        title:"iphone",
        link:''
    },
    {
        poster: ipad,
        title:"ipad",
        link:''
    },
    {
        poster: mac,
        title:"Mac",
        link:''
    },
    {
        poster: appleVisonpro,
        title:"Apple Vision Pro",
        link:''
    },
    {
        poster: airplay,
        title:"Air Play",
        link:''
    },
    {
        poster: android,
        title:"Android",
        link:'Download on Google Play'
    },
    {
        poster: pc,
        title:"PC",
        link:'Download on Microsoft Store'
    },

]

