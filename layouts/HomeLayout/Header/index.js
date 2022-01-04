import style from './Header.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <header className={style['header-container-style']}>
            <div className="flex justify-between">
                <h2 className={style['logo']}>Logo</h2>
                <div className={'pr-10'}>
                    <Link href={'/'}>
                        <a className={style.link}>
                            Home
                        </a>
                    </Link>

                    <Link href={'/list'}>
                        <a className={style.link}>
                            List
                        </a>
                    </Link>

                </div>
            </div>

        </header>
    )
}

export default Header