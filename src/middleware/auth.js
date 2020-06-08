// src/middleware/auth.js
export default function auth({ next, router }) {
    /* eslint-disable */
    if (!localStorage.getItem('isToken')) {
        return router.push({ name: 'login' });
    }

    return next();
}
