// Content bileşeni - Ana içerik alanı
function Content() {
  const [count, setCount] = useState(0);

  const featuredGames = [
    { id: 1, name: "Sweet Bonanza", provider: "Pragmatic Play", players: 1245, volatility: "Yüksek" },
    { id: 2, name: "Book of Dead", provider: "Play'n GO", players: 987, volatility: "Orta" },
    { id: 3, name: "Starburst", provider: "NetEnt", players: 2103, volatility: "Düşük" },
    { id: 4, name: "Gates of Olympus", provider: "Pragmatic Play", players: 876, volatility: "Yüksek" },
  ];

  return (
    <div className="flex-1 p-6 bg-gradient-to-b from-base-300 to-base-200">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          Hoş Geldiniz, <span className="text-yellow-400">Kraliyet Casino</span>'ya!
        </h1>
        <p className="text-gray-300">
          En iyi casino deneyimini yaşamaya hazır mısınız? Hemen oynamaya başlayın!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* İstatistik Kartları */}
        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-figure text-primary">
              <span className="text-3xl">🎰</span>
            </div>
            <div className="stat-title">Aktif Oyuncu</div>
            <div className="stat-value text-primary">4,235</div>
            <div className="stat-desc">↗︎ 230 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <span className="text-3xl">💰</span>
            </div>
            <div className="stat-title">Bugünkü Kazanç</div>
            <div className="stat-value text-secondary">1.2M ₺</div>
            <div className="stat-desc">↗︎ 40 (2%)</div>
          </div>
        </div>

        {/* Demo Oyun Kartı */}
        <div className="card bg-gradient-to-r from-purple-900 to-blue-900 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-white">Demo Oyun - Deneme Modu</h2>
            <p className="text-gray-300">Aşağıdaki butona tıklayarak demo oyunu deneyebilirsiniz</p>
            
            <div className="flex items-center justify-center my-4">
              <div className="text-center">
                <div className="text-6xl mb-2">🎲</div>
                <div className="text-3xl font-bold text-yellow-400">{count}</div>
              </div>
            </div>
            
            <div className="card-actions justify-center">
              <button
                className="btn btn-warning btn-lg"
                onClick={() => setCount((count) => count + 1)}
              >
                Zar At! <span className="ml-2">🎯</span>
              </button>
              <button
                className="btn btn-error"
                onClick={() => setCount(0)}
              >
                Sıfırla
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Öne Çıkan Oyunlar */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">🎮 Öne Çıkan Oyunlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredGames.map((game) => (
            <div key={game.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h3 className="card-title">{game.name}</h3>
                <p className="text-sm text-gray-500">{game.provider}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="badge badge-outline">{game.volatility} Risk</div>
                  <div className="text-sm">
                    <span className="text-yellow-500">👥 {game.players}</span>
                  </div>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">Demo Oyna</button>
                  <button className="btn btn-success btn-sm">Gerçek Oyna</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promosyonlar */}
      <div className="bg-gradient-to-r from-red-800 to-yellow-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">🎁 Özel Hoşgeldin Bonusu!</h2>
            <p className="text-gray-300">İlk para yatırma işleminizde %100 bonus + 100 ücretsiz dönüş!</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="btn btn-warning btn-lg">Bonusu Al!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;