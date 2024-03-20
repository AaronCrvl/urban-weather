import { atom, useAtom } from 'jotai';
import { useEffect } from "react";

type LANG = string | 'pt-BR';
const navegador = typeof window !== 'undefined';
const jwtLogin = (navegador ? localStorage.getItem('lang') : 'pt-BR') as LANG;
const atomLANG = atom<LANG>(jwtLogin);

export default function useLanguage() {
    const [lang, setLang] = useAtom(atomLANG);

    useEffect(() => {
        if (!navegador) return;
        localStorage.setItem('lang', lang);       
    }, [lang]);

    return [lang, setLang] as const;
}