import Header from './Header.js';

const Layout = ({children, title}) => <div>
    <Header />
    <main>
        <h2>{title}</h2>
        <section>{children}</section>
    </main>
    <footer>@ 2022 KeepCoding</footer>
</div>

export default Layout;