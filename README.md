

# QuickCard Api


# Routes

This is a list of available routes in the project, their methods, inputs, and what they do.

## Auth routes

### Sign-up route

- **Route**: `/auth/sign_up`
- **Method**: `POST`
- **Input**: An object containing the user information
- **Action**: Registers a new user with the provided information.

### Sign-in route

- **Route**: `/auth/sign_in`
- **Method**: `POST`
- **Input**: An object containing user credentials (username and password)
- **Action**: Logs in an existing user with valid credentials and returns a JSON Web Token.

### Refresh token route

- **Route**: `/auth`
- **Method**: `GET`
- **Action**: Refreshes the current user's JSON Web Token.

## Order routes

### Get orders route

- **Route**: `/order`
- **Method**: `GET`
- **Action**: Allows a user to retrieve their personal order history.

### Place order route

- **Route**: `/order`
- **Method**: `POST`
- **Input**: An object containing order information
- **Action**: Allows a user to place a new order.

### Get all orders route

- **Route**: `/order/all`
- **Method**: `GET`
- **Action**: Allows an admin to retrieve all existing orders.

### Update an order route

- **Route**: `/order/:id`
- **Method**: `PUT`
- **Input**: An object containing the updated order information.
- **Action**: Allows an admin or moderator to update an existing order.

### Delete an order route

- **Route**: `/order/:id`
- **Method**: `DELETE`
- **Action**: Allows an admin to delete an existing order.

## Product routes

### Get products route

- **Route**: `/product`
- **Method**: `GET`
- **Action**: Allows a user to retrieve all available products.

### Get product by ID route

- **Route**: `/product/:id`
- **Method**: `GET`
- **Input**: The ID of the product to retrieve
- **Action**: Allows a user to retrieve a specific product by ID.

### Create product route

- **Route**: `/product`
- **Method**: `POST`
- **Input**: An object containing new product information
- **Action**: Allows an admin or moderator to create a new product.

### Update product route

- **Route**: `/product/:id`
- **Method**: `PUT`
- **Input**: An object containing the updated product information.
- **Action**: Allows an admin or moderator to update an existing product.

### Delete product route

- **Route**: `/product/:id`
- **Method**: `DELETE`
- **Input**: The ID of the product to delete
- **Action**: Allows an admin or moderator to delete an existing product.

## Role routes

### Get roles route

- **Route**: `/role`
- **Method**: `GET`
- **Action**: Allows an admin to retrieve all available user roles.
