import React, { useEffect } from 'react';
import {
    useLocation,
    useNavigate,
    useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
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
                <div className="sm-max:flex sm-max:flex-col sm-max:w-1/2 sm-max:mx-auto sm-max:gap-y-2">
                    <Button
                        onClick={() => navigate(-1)}
                        className={
                            'mr-8 sm-max:mr-0 rounded-3xl font-normal'
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
                        className={
                            'rounded-3xl font-normal'
                        }
                    >
                        Go back to the home page{' '}
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="fa-xs ml-1"
                        ></FontAwesomeIcon>
                    </Button>
                </div>
            </div>
        </NotFoundPageStyles>
    );
};

export default NotFoundPage;
