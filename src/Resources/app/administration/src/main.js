const {Module} = Shopware;

Module.register('swag-custom-route', {
    routeMiddleware(next, currentRoute) {
        if (currentRoute.name !== 'sw.product.detail') {
            next(currentRoute);
            return;
        }

        console.log(currentRoute)

        currentRoute.children.forEach((childRoute) => {
            if (childRoute.name === 'sw.product.detail.base') {
                //childRoute.component = 'foobar';
            }
        });

        next(currentRoute);
    }
});
