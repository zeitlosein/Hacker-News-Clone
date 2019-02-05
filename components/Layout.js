import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title }) => (
	<div>
		<Head>
			<title>{title}</title>
		</Head>
		<div className="container">
			<nav>
				<Link>
					<a>
						<span className="title">{title}</span>
					</a>
				</Link>
			</nav>
			{children}
		</div>

		<style jsx>
			{`
				.container {
					max-width: 960px;
					margin: 0 auto;
					background: #f6f6ee;
				}
				nav {
					background: #ffa600;
					padding: 1em;
				}

				nav > * {
					display: inline-block;
					color: #000000;
				}
				nav a {
					text-decoration: none;
				}
				nav .main-title {
					font-weight: bold;
				}
				nav .main-title {
					font-weight: bold;
				}
			`}
		</style>
		<style global jsx>
			{`
				body {
					background: white;
				}
			`}
		</style>
	</div>
);

export default Layout;
