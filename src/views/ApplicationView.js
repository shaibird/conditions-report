export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<Outlet />
				</>
			}>
				<Route path="home" element={ <Home /> } />
			</Route>
		</Routes>
	)
}
