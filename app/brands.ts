import samsung from '@/public/images/samsung.jpg'
import lgSmartTv from '@/public/images/lg.jpg'
import vizio from '@/public/images/vizio.jpg'
import sony from '@/public/images/sony.jpg'
import xfinity from '@/public/images/xinfinity.jpg'
import roku from '@/public/images/roku.jpg'
import fireTv from '@/public/images/firetv.jpg'
import googleTv from '@/public/images/googletv.jpg'
import playStation from '@/public/images/playstation.jpg'
import xbox from '@/public/images/xbox.jpg'
import { StaticImageData } from 'next/image'

interface brandsData{
    poster:string | StaticImageData;
}


export const brandsData:brandsData[]=[
    {
        poster:samsung,
    },
    {
        poster:lgSmartTv,
    },
    {
        poster:vizio,
    },
    {
        poster:sony,
    },
    {
        poster:xfinity,
    },
    {
        poster:roku,
    },
    {
        poster:fireTv,
    },
    {
        poster:googleTv,
    },
    {
        poster:playStation,
    },
    {
        poster:xbox,
    },

]