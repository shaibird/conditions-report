export const ApplicationViews = () => {
    return (
		<Routes>
			<Route path="/" element={
				<>
					<Outlet />
				</>
			}>
                <Route path="crags" element={ <Explore/>} />
    
                <Route path="crags/:cragId" element={ <CragDetails />} />
                <Route path="profile" element={ <Profile />} />
				<Route path="home" element={ <Home /> } />
			</Route>
		</Routes>
	)
}