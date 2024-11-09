import { useRouter } from 'next/router'
import { useEffect } from 'react'

function ScrollToTop() {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url) => {
            window.scrollTo(0, 0)
        }

        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return null
}

export default ScrollToTop
