import {ReactComponent as IconGitH} from 'assets/img/github.svg';
import './styles.css';
function Navbar() {

    return(
    <header>
        <nav className="container">
          <div className="jfmovie-nav-content"> 
            <h1>
              JfMovie
            </h1>
            <a href="https://github.com/jeftst">
              <div className="jfmovie-contact-container">
                <IconGitH />
                <p className="jfmovie-contact-link">/jeftst</p>
              </div>
            </a>
          </div>
        </nav>
    </header>
    )
}

export default Navbar;