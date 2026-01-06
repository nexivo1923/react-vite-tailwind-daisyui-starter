// Sidebar bileşeni - Sol taraftaki menü
function Sidebar() {
  const casinoGames = [
    { id: 1, name: "Slot Makineleri", icon: "🎰", active: true },
    { id: 2, name: "Rulet", icon: "🎲" },
    { id: 3, name: "Blackjack", icon: "🃏" },
    { id: 4, name: "Poker", icon: "♠️" },
    { id: 5, name: "Bakkara", icon: "♦️" },
    { id: 6, name: "Kumarhane Oyunları", icon: "🕹️" },
    { id: 7, name: "Canlı Casino", icon: "📺" },
    { id: 8, name: "Spor Bahisleri", icon: "⚽" },
  ];

  return (
    <div className="w-64 bg-base-200 min-h-screen p-4 shadow-lg">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-yellow-400">🎯</span> Oyun Kategorileri
        </h2>
        <ul className="menu bg-base-100 rounded-box">
          {casinoGames.map((game) => (
            <li key={game.id}>
              <a className={game.active ? "active bg-red-600 text-white" : ""}>
                <span className="text-xl">{game.icon}</span>
                {game.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-yellow-400">🔥</span> Popüler Oyunlar
        </h2>
        <div className="space-y-3">
          <div className="bg-base-100 p-3 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <span>Mega Fortune</span>
              <span className="badge badge-success">Yeni</span>
            </div>
            <progress
              className="progress progress-warning w-full mt-2"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="bg-base-100 p-3 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <span>Gonzo's Quest</span>
              <span className="badge badge-primary">Sıcak</span>
            </div>
            <progress
              className="progress progress-warning w-full mt-2"
              value="90"
              max="100"
            ></progress>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gradient-to-r from-red-700 to-red-900 rounded-lg shadow">
        <h3 className="font-bold text-white mb-2">VIP Üyelik</h3>
        <p className="text-sm text-gray-300 mb-3">
          Özel bonuslar ve promosyonlar için VIP olun!
        </p>
        <button className="btn btn-warning btn-sm w-full">Hemen Katıl</button>
      </div>
    </div>
  );
}

export default Sidebar;