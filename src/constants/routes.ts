const routes = {
  home: () => '/',
  catalog: () => '/catalog',
  catalogItem: (id: number | string) => `/catalog/${id}`,
};

export default routes;
