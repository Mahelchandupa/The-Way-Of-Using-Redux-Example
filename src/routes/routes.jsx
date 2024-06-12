import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';
import Product from '../pages/Product';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/product/:productId',
                element: <Product />
            }
        ]
    },
])

export default router;