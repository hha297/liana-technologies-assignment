import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
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
        font-size: 60px;
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
                    src="/404.jpg"
                    alt="notfound"
                    className="image"
                />
                <h1 className="heading">
                    404 - Looks like you're lost.
                </h1>
                <p className="description">
                    Maybe this page used to exist or you
                    just spelled something wrong. Chances
                    are your spelled something wrong, so can
                    you double check the URL?
                </p>
                <Button onClick={() => navigate('/')}>
                    Go Back
                </Button>
            </div>
        </NotFoundPageStyles>
    );
};

export default NotFoundPage;
