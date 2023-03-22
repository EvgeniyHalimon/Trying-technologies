import { useState, useLayoutEffect } from "react";

const queries = [
    'screen and (max-width: 766px)',
    'screen and (min-width: 767px) and (max-width: 1199px)',
    'screen and (min-width: 1200px)',
]

interface HookResponse{
    isMobile: boolean,
    isTablet: boolean,
    isDesktop: boolean,
}

export const useMatchMedia = (): HookResponse  => {
    const medaiQueryLists = queries.map(query => matchMedia(query))

    const getValues = () => medaiQueryLists.map(values => values.matches)

    const [values, setValues] = useState(getValues)

    useLayoutEffect(() => {
        const handler = () => setValues(getValues)

        medaiQueryLists.forEach(mql => mql.addEventListener('change', handler))

        return () => medaiQueryLists.forEach(mql => mql.removeEventListener('change', handler))
    },[])

    return ['isMobile', 'isTablet', 'isDesktop'].reduce((acc, screen, index) => ({
        ...acc,
        [screen]: values[index]
    }), {} as HookResponse)
} 

