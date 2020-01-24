// src/middleware/auth.js
export default function auth({ next, router }) {
    /* eslint-disable */
    console.log('test');
    if (!localStorage.getItem('isToken')) {
        return router.push({ name: 'login' });
    }

    return next();
}
