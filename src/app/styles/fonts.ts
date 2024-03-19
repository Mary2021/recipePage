import { Outfit, Young_Serif } from "next/font/google";

const outfit = Outfit({
    weight: ['400', '600', '700'],
    subsets: ["latin"],
    display: 'swap'
});

const young_serif = Young_Serif({ 
    weight: '400', 
    subsets: ["latin"],
    display: 'swap',
    adjustFontFallback: false
})

export { outfit, young_serif }
