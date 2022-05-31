import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import StartingSection from '../StartingSection';

function Home () {
    return(
        <>
        <StartingSection />
        <Cards />
        <Footer />
        </>
    )
}

export default Home;