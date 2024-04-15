import { atom, useAtom } from 'jotai';
import { useEffect } from "react";
import { TemperatureUnit } from '@/types/TemperatureUnit';

const browser = typeof window !== 'undefined';
const defaultScale = (browser ? localStorage.getItem('scale') : 'Cº') as TemperatureUnit;
const atomScale = atom<TemperatureUnit>(defaultScale);

export default function useScale() {
    const [scale, setScale] = useAtom(atomScale);

    useEffect(() => {
        if (!browser) return;
        localStorage.setItem('scale', scale);       
    }, [scale]);

    return [scale, setScale] as const;
}