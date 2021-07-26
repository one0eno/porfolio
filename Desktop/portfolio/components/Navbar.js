import Link from 'next/link'

export default function Navbar(){
 //nuevo
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            <Link href="/">
            <a className="navbar-brand" href="#">PortFolio</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link href="/">
                  <a className="nav-link" href="#">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/blog">
                      <a className="nav-link" href="#">Blog</a>
                  </Link>
                </li>
                <li className="nav-item">
                <Link href="/github">
                      <a className="nav-link" href="#">gitHub</a>
                  </Link>
                </li>
                
              </ul>
            </div>
            </div>
          </nav>
        </>

    )
}