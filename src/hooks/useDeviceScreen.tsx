import { useState, useEffect} from "react"

const useIsMobileScreen: ()=> boolean = () => {

    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(()=> {
            const mobileMediaQuery = window.matchMedia('(max-width: 576px)')
            setIsMobile(mobileMediaQuery.matches)

            const handleMediaQuery = (event: MediaQueryListEvent) => {
                setIsMobile(event.matches)
            }

            mobileMediaQuery.addEventListener('change',handleMediaQuery)

            return ()=> mobileMediaQuery.removeEventListener('change', handleMediaQuery)
    }, [])

    return isMobile
}

export default useIsMobileScreen