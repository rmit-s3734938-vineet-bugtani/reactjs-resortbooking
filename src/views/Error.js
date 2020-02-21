import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

export default function Error() {
    return <Hero hero='defaultHero'>
        <Banner title="404" subtitle="Page not found.">
            <Link to="/rooms" className="btn-primary"> Our rooms
            </Link>
        </Banner>
    </Hero>
}
