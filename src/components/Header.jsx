// Header bileşeni - Üst navigasyon çubuğu
function Header() {
  return (
    <header className="navbar bg-base-300 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Ana Sayfa</a>
            </li>
            <li>
              <a>Slot Makineleri</a>
            </li>
            <li>
              <a>Rulet</a>
            </li>
            <li>
              <a>Blackjack</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-red-500 font-bold">
          <span className="text-yellow-400">♠</span> Royal Casino{" "}
          <span className="text-yellow-400">♥</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-white hover:text-yellow-300">Ana Sayfa</a>
          </li>
          <li>
            <a className="text-white hover:text-yellow-300">Slot Makineleri</a>
          </li>
          <li>
            <a className="text-white hover:text-yellow-300">Rulet</a>
          </li>
          <li>
            <a className="text-white hover:text-yellow-300">Blackjack</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-2">
          <div className="badge badge-warning p-3">
            <span className="font-bold">500.00 ₺</span>
          </div>
          <button className="btn btn-success">Giriş Yap</button>
        </div>
      </div>
    </header>
  );
}

export default Header;