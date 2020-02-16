const PRODUCT_DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
    Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.  
    Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  
    Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.   
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <br>  <br> 
    Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.  
    Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  
    Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. <br>  <br> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
    Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.  
    Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  
    Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.`;

const PRODUCTS_MOCK = [
    {
        name: 'Paper clips',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Post-it notes',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Staples',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Writing utensils',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Hole punches',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Binders',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Staplers',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Computers',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Laminators',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Printers',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Paper',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Fax machines',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Photocopiers',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Cash registers',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Office furniture',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Cubicles',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Filing cabinet\n',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
    {
        name: 'Armoire desks',
        newPrice: 565,
        oldPrice: 670,
        currency: 'kr',
        variants: ['red', 'blue', 'yellow'],
        description: PRODUCT_DESCRIPTION,
    },
];

export const PRODUCTS = PRODUCTS_MOCK.map(product => ({
    ...product,
    id: Math.random(),
}));

export const CURRENT_PRODUCT =
    PRODUCTS.find(product => (product.name = 'Paper')) || PRODUCTS[0];
