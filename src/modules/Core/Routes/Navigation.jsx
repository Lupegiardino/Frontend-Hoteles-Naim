import { BrowserRouter, Route, Routes } from 'react-router'




export const Navigation = () => {
    return (
        <>
            <Helmet>
                <title>Hoteles Naim</title>
                <meta name="description" content="Hoteles Naim es una plataforma de búsqueda de alojamientos temporales." />
                <meta property="og:title" content="Hoteles Naim" />
                <meta property="og:description" content="Hoteles Naim es una plataforma de búsqueda de alojamientos temporales." />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Hoteles Naim" />

            </Helmet>
            <BrowserRouter>
                {/* <QueryParamProvider
                    adapter={ReactRouter6Adapter}
                >
                    <Routes>
                        {routesConfig.map(({ path, component: Component, layout: Layout, roles }, index) => (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    roles.length > 0 ? (
                                        <PrivateRoute roles={roles}>
                                            <Layout>
                                                <Component />
                                            </Layout>
                                        </PrivateRoute>
                                    ) : (
                                        (path === '/iniciar-sesion' || path === '/registro') ? (
                                            <PublicRoute>
                                                <Layout>
                                                    <Component />
                                                </Layout>
                                            </PublicRoute>
                                        ) : (
                                            <Layout>
                                                <Component />
                                            </Layout>
                                        )
                                    )
                                }
                            />
                        ))}
                    </Routes>
                </QueryParamProvider> */}
            </BrowserRouter>
        </>
    )
}