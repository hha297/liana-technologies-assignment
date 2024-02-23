import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    companyInfoList,
    lastestNewList,
} from '../utils/constants';

import Header from '../layout/Header';
import Banner from '../components/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import slugify from 'slugify';
import Card from '../components/Card';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            {/* Header */}
            <Header></Header>
            {/* Big banner */}
            <Banner
                onClick={() =>
                    navigate(
                        '/Software fueling digital marketing',
                    )
                }
                className={'h-[640px]'}
                imgUrl={'/banner-img.png'}
                title={'Software fueling digital marketing'}
                showButton={true}
            ></Banner>
            {/* Banner list */}
            <div className="flex flex-row w-3/4 my-12 mx-auto justify-between gap-x-8">
                <Banner
                    onClick={() => navigate('/company')}
                    className={
                        'h-[33%] w-[100%] rounded-lg'
                    }
                    imgUrl={'/banner-img.png'}
                    title={'Company'}
                    showButton={false}
                ></Banner>
                <Banner
                    onClick={() => navigate('/products')}
                    className={
                        'h-[33%] w-[100%] rounded-lg'
                    }
                    imgUrl={'/banner-img.png'}
                    title={'Products'}
                    showButton={false}
                ></Banner>
                <Banner
                    onClick={() => navigate('/contact')}
                    className={
                        'h-[33%] w-[100%] rounded-lg'
                    }
                    imgUrl={'/banner-img.png'}
                    title={'Contact Us'}
                    showButton={false}
                ></Banner>
            </div>
            {/* Company Info */}
            <div className="flex flex-row w-2/5 mx-auto mb-10 justify-between items-start space-x-4">
                {Object.values(companyInfoList).map(
                    (item, index) => (
                        <div
                            key={index}
                            className={`flex flex-row justify-center items-center h-20 ${
                                index === 1
                                    ? 'text-center'
                                    : ''
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={item.icon}
                                className="text-primary text-4xl"
                            />
                            <div className="flex flex-col ml-6">
                                <div className="text-black text-4xl">
                                    {item.number}
                                </div>
                                <div className="text-black text-sm">
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    ),
                )}
            </div>
            {/* Lastest New */}
            <div className="bg-gray-300 h-64 max-h-96 flex flex-col items-center mb-10">
                <h1 className="text-xl font-bold py-8">
                    Latest News
                </h1>
                <div className="flex flex-row w-3/4 h-32 max-h-60 space-x-8">
                    {Object.values(lastestNewList).map(
                        (item, index) => (
                            <div
                                key={index}
                                className="justify-around px-4 py-4 bg-white rounded-lg cursor-pointer"
                                onClick={() =>
                                    navigate(
                                        slugify(item.title),
                                    )
                                }
                            >
                                <div className="text-gray-600">
                                    {item.timestamps}
                                </div>
                                <div className="text-lg font-medium">
                                    {item.title}
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
            {/* References */}
            <div className="flex flex-col items-center pb-10">
                <h1 className="text-xl font-bold mb-10">
                    References
                </h1>
                <div className="flex flex-row gap-x-10 w-3/4">
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
            <div className="bg-primary h-40"></div>
        </div>
    );
};

export default HomePage;
