import React from 'react'
import Header from '../components/Header'
import HeaderSlider from '../components/HeaderSlider'
import FeaturedMovies from '../components/FeaturedMovies'
import TopCategories from '../components/TopCategories'
import AllCategories from '../components/AllCategories'
import Navbar from '../components/Navbar'
import PricingPlan from '../components/PricingPlan'
import CustomAccordion from '../components/CustomAccordion'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'

export default function Home() {
    return (
        <div>
            <div>
                <Navbar />
                <Header />
                <HeaderSlider />
            </div>
            <FeaturedMovies />
            <div className=' '>
                <TopCategories />
                <AllCategories />
                <PricingPlan />
                <CustomAccordion />
                <GetStarted />
            </div>
        </div>
    )
}
