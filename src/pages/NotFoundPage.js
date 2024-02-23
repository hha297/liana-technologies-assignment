import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const NotFoundPageStyles = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .page-content {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
    }
    .logo192 {
        display: inline-block;
        margin-bottom: 40px;
    }
    .heading {
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .description {
        max-width: 800px;
        margin: 0 auto 40px;
    }

    .image {
        max-width: 50%;
        margin: 0 auto 20px;
    }
`;
const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <NotFoundPageStyles>
            <div className="page-content">
                <img
                    src="/404.png"
                    alt="notfound"
                    className="image"
                />
                <h1 className="heading">Whoops</h1>
                <p className="description w-72">
                    We searched near and far, but we
                    couldn't find the page you were looking
                    for.
                </p>
                <Button
                    onClick={() => navigate(-1)}
                    className={
                        'mr-8 rounded-3xl font-normal'
                    }
                >
                    Go back to the previous page{' '}
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className="fa-xs ml-1"
                    ></FontAwesomeIcon>
                </Button>
                <Button
                    onClick={() => navigate('/')}
                    className={'rounded-3xl font-normal'}
                >
                    Go back to the home page{' '}
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className="fa-xs ml-1"
                    ></FontAwesomeIcon>
                </Button>
            </div>
        </NotFoundPageStyles>
    );
};

export default NotFoundPage;
