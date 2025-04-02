import { Link } from 'react-router-dom';
import './AuthLayout.css';

export const AuthLayout = ({ children }) => {
    return (
        <main className='authLayout'>
            <section className='auth-info__section'>
                <h1><Link to="/">Hoteles Naim</Link></h1>
                <p> Elije el hotel de tus sueños</p>
            </section>
            <section className='auth-form__section'>
                {children}
            </section>
        </main>
    )
}
