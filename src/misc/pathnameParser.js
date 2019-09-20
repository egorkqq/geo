export const pathnameParser = (pathname) => {
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
