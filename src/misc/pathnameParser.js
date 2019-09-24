export const pathnameParser = (pathname) => {
  if (
    pathname.includes('/country/') ||
    pathname.includes('/language/') ||
    pathname.includes('/continent/')
  ) {
    return pathname.slice(-2);
  }
  switch (pathname) {
    case '/':
      return 'Main';
    case '/favourites':
      return 'Favourites';
    case '/all':
      return 'All';
    case '/search':
      return 'Search';
    default:
      return 'Main';
  }
};
