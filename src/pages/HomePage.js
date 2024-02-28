import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    companyInfoList,
    lastestNewList,
} from '../utils/constants';
import Header from '../layout/Header';
import Banner from '../components/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import slugify from 'slugify';
import Card from '../components/Card';

import Footer from '../layout/Footer';
import NewsletterSubscription from '../components/NewsletterSubscription';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            {/* Header */}
            <Header></Header>
            {/* Big banner */}
            <Banner
                className={
                    'h-[640px] mb-max:h-96 sm-max:h-[480px]'
                }
                imgUrl={'/banner-img.png'}
                title={'Software fueling digital marketing'}
                showButton={true}
            ></Banner>
            {/* Banner list */}
            <div className="flex flex-row w-3/4 my-12 md-max:my-4 mx-auto justify-between gap-x-8 md-max:flex-col md-max:gap-y-4">
                <Banner
                    onClick={() => navigate('/company')}
                    className={
                        'h-[33%] w-[100%] rounded-lg md-max:w-[100%] md-max:h-32'
                    }
                    imgUrl={'/banner-img.png'}
                    title={'Company'}
                    showButton={false}
                    size={'small'}
                ></Banner>
                <Banner
                    onClick={() => navigate('/products')}
                    className={
                        'h-[33%] w-[100%] rounded-lg md-max:w-[100%] md-max:h-32 xl-max:text-3xl'
                    }
                    imgUrl={'/banner-img.png'}
                    title={'Products'}
                    showButton={false}
                    size={'small'}
                ></Banner>
                <Banner
                    onClick={() => navigate('/contact')}
                    className={
                        'h-[33%] w-[100%] md-max:w-[100%] md-max:h-32 rounded-lg xl-max:text-3xl'
                    }
                    imgUrl={'/banner-img.png'}
                    title={'Contact Us'}
                    showButton={false}
                    size={'small'}
                ></Banner>
            </div>
            {/* Company Info */}
            <div className="flex flex-row md-max:flex-col md-max:items-center md-max:justify-center md-max:text-center w-1/2 mx-auto mb-10 justify-between items-start xl-max:w-2/3">
                {Object.values(companyInfoList).map(
                    (item, index) => (
                        <div
                            key={index}
                            className={`flex flex-row justify-center text-center items-center h-20 xl-max:w-full`}
                        >
                            <FontAwesomeIcon
                                icon={item.icon}
                                className={`text-primary text-4xl xl-max:text-3xl lg-max:text-2xl `}
                            />
                            <div className="flex flex-col ml-6 xl-max:ml-4 md-max:ml-8">
                                <div className="text-black text-4xl  xl-max:text-3xl lg-max:text-2xl">
                                    {item.number}
                                </div>
                                <div className="text-black text-sm lg-max:text-[12px]">
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    ),
                )}
            </div>
            {/* Lastest New */}
            <div className="bg-gray-300 min-h-72 md-max:min-h-auto md-max:min-h-96 sm-max:min-h-[416px] mb-max:min-h-[468px] lw-max:min-h-[480px] xs-max:min-h-[540px] flex flex-col items-center mb-10">
                <h1 className="text-xl font-bold py-8 md-max:py-4">
                    Latest News
                </h1>
                <div className="flex flex-row md-max:flex-col md-max:space-x-0 md-max:space-y-4 w-3/4 h-40 max-h-60 space-x-8">
                    {Object.values(lastestNewList).map(
                        (item, index) => (
                            <div
                                key={index}
                                className="justify-around px-4 py-4 bg-white rounded-lg cursor-pointer flex-grow"
                                onClick={() =>
                                    navigate(
                                        slugify(item.title),
                                    )
                                }
                            >
                                <div className="text-gray-600 text-lg xl-max:text-base lg-max:text-sm">
                                    {item.timestamps}
                                </div>
                                <div className="text-lg font-medium xl-max:text-base lg-max:text-sm">
                                    {item.title}
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
            {/* References */}
            <div className="flex flex-col items-center pb-10">
                <h1 className="text-xl font-bold mb-10 md-max:mb-8">
                    References
                </h1>
                <div className="flex flex-row md-max:flex-col md-max:items-center gap-x-10 w-3/4">
                    <Card
                        imgUrl={'/bosch-logo.jpg'}
                        title={'Robert Bosch'}
                        description={
                            'Bosch is a multinational engineering and electronics company.'
                        }
                        href={'https://www.bosch.fi/'}
                    ></Card>
                    <Card
                        imgUrl={'/the-body-shop-logo.png'}
                        title={'The Body Shop'}
                        description={
                            'The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries.'
                        }
                        href={'https://www.thebodyshop.fi/'}
                        className={'h-48 py-10'}
                    ></Card>
                    <Card
                        imgUrl={'/lapland-hotel.png'}
                        title={'Lapland Hotels'}
                        description={
                            'Lapland Hotels is the largest and the most diverse hotel chain in Lapland. '
                        }
                        href={
                            'https://www.laplandhotels.com/FI/etusivu.html'
                        }
                    ></Card>
                    <Card
                        imgUrl={'/Ikea-logo.png'}
                        title={'IKEA'}
                        description={
                            'IKEA is a multinational furniture store.'
                        }
                        href={'https://www.ikea.com/fi/fi/'}
                    ></Card>
                </div>
            </div>

            {/* Newsletter subscription */}
            <NewsletterSubscription></NewsletterSubscription>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default HomePage;
