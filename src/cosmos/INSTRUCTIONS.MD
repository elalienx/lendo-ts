# About Cosmos

Cosmos is a lightweight alternative to Storybook. To check all the possible states a component may have.
It allows me to quickly iterate the components with:

- Not needing to fetch data from a real server.
- No need for global state for simpler components. And detect if a component could skip global state at all.

## Cosmos Styles CSS

This CSS stylesheet centers the components on the screen. Without it, the components will:

1. Align to the top left corner of the screen, touching the sidebar.
2. Stretch across the full width of the screen.

## The Link tag

Components that use the `<Link>` tag from React Router DOM must be wrapped in a `<BrowserRouter/>` component; otherwise, they will throw an error.

## The Product page

The Product page is unique in that it reads the browser URL from the address bar to retrieve the product `id`, which is then used to request the associated product.

To simulate the browser's address bar, we use a modified version of the BrowserRouter called `<MagiciRouter>`, which allows us to pass text that can be interpreted as URL variables.
