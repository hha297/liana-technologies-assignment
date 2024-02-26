import {
    Route,
    Routes,
    useLocation,
    useNavigate,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import ProductPage from './pages/ProductPage';
import { useEffect } from 'react';
import { routeTitles } from './utils/routes';
import { Helmet } from 'react-helmet';
function App() {
    let location = useLocation();
    useEffect(() => {
        const currentPath = location.pathname;
        const title =
            routeTitles[currentPath] || '404 - Not Found';
        document.title = title;
    }, [location]);
    return (
        <div>
            <Helmet>
                <title>
                    {routeTitles[location.pathname] ||
                        '404 - Not Found'}
                </title>
            </Helmet>
            <Routes>
                <Route
                    path=""
                    element={<HomePage></HomePage>}
                ></Route>
                <Route
                    path="/products"
                    element={<ProductPage></ProductPage>}
                ></Route>
                <Route
                    path="*"
                    element={<NotFoundPage></NotFoundPage>}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
