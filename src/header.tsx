import './header.scss';

export default function Header() {
    return (
        <header>
            <nav>
                <div className="top-bar">
                    <div className="lavender-text">
                        <h1><a href="/">The Lavender Room Beauty Salon</a></h1>
                    </div>
                    <button type="button" id="nav-toggle" className="nav-toggle" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div id="nav-outer" className="nav-outer">
                    <ul id="nav">
                        <li><a href="/about-the-lavender-room.html" className="active">About us</a></li>
                        <li><a href="/nails.html">Nails</a></li>
                        <li><a href="/waxing.html">Waxing</a></li>
                        <li><a href="/spray-tan.html">Spray tanning</a></li>
                        <li><a href="/facials-and-skincare.html">Facials and skincare</a></li>
                        <li><a href="/hands-and-feet.html">Hands and feet</a></li>
                        <li><a href="/make-up.html">Make-up</a></li>
                        <li><a href="/eye-treatments.html">Eye treatments</a></li>
                    </ul>
                    <div id="desktop-times" className="chew">
                        <table id="open-times" className="times">
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td>9am‑8pm</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>9am‑6pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>9am‑6pm</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>9am‑8pm</td>
                                </tr>
                                <tr className="today">
                                    <td>Friday</td>
                                    <td>9am‑6pm</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>9am‑6pm</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>12am‑6pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </nav>
        </header>
    )
}