import React from 'react';
import Navbar from '../components/Navbar';
import ExplorHeader from '../components/ExplorHeader';
import TrendingMoviesSection from '../components/TrendingMoviesSection';
import TopMoviesInAWeek from '../components/TopMoviesInAWeek';
import WatchlistSlider from '../components/WatchlistSlider';
import PopularCelebrities from '../components/PopularCelebrities';
import Footer from '../components/Footer';

export default function ExploreMovies() {
    return (
        <div>
            <Navbar />
            <ExplorHeader />
            <TrendingMoviesSection />
            <TopMoviesInAWeek />
            <WatchlistSlider />
            <PopularCelebrities />
            <Footer />
        </div>
    );
}
