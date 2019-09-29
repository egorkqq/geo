export const pathnameParser = (pathname) => {
  if (
    pathname.includes('/country/') ||
    pathname.includes('/language/') ||
    pathname.includes('/continent/')
  ) {
    global.document.title = `Geo:${pathname.slice(-2)}`;

    return pathname.slice(-2);
  }
  switch (pathname) {
    case '/':
      global.document.title = `Geo:Main`;

      return 'Main';
    case '/favourites':
      global.document.title = `Geo:Favourites`;

      return 'Favourites';
    case '/all':
      global.document.title = `Geo:All`;

      return 'All';
    case '/search':
      global.document.title = `Geo:Search`;

      return 'Search';
    default:
      global.document.title = `Geo:Main`;

      return 'Main';
  }
};
