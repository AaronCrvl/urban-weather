import { atom, useAtom } from 'jotai';
import { useEffect } from "react";
import { Lang } from '@/types/Lang';

const navegador = typeof window !== 'undefined';
const defaultLang = (navegador ? localStorage.getItem('lang') : 'en') as Lang;
const atomLANG = atom<Lang>(defaultLang);

export default function useLanguage() {
    const [lang, setLang] = useAtom(atomLANG);

    useEffect(() => {
        if (!navegador) return;
        localStorage.setItem('lang', lang);       
    }, [lang]);

    return [lang, setLang] as const;
}