import { atom, useAtom } from 'jotai';
import { useEffect } from "react";
import { MeasurementScale } from '@/types/MeasurementScale';

const browser = typeof window !== 'undefined';
const defaultScale = (browser ? localStorage.getItem('scale') : 'Cº') as MeasurementScale;
const atomScale = atom<MeasurementScale>(defaultScale);

export default function useScale() {
    const [scale, setScale] = useAtom(atomScale);

    useEffect(() => {
        if (!browser) return;
        localStorage.setItem('scale', scale);       
    }, [scale]);

    return [scale, setScale] as const;
}