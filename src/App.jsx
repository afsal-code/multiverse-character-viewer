const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <FetchData /> },
        { path: 'detail/:id', element: <Detail /> }, // No slash at start
      ],
    },
  ],
  {
    basename: '/multiverse-character-viewer/', // ← Add basename
  }
);
