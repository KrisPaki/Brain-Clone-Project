import React, { useState, useEffect } from "react";
import { Lock, Save, LogOut, RefreshCw, DollarSign, Phone, Mail, Facebook, LayoutDashboard, Globe } from "lucide-react";

interface ContentData {
  kontakt: {
    phone: string;
    phoneUrl: string;
    email: string;
    facebook: string;
    facebookUrl: string;
  };
  cennik: {
    its_etap1_price: string;
    its_etap1_href: string;
    its_etap2_price: string;
    its_etap2_href: string;
    its_school_price: string;
    its_school_href: string;
    terapeuta_price: string;
    terapeuta_href: string;
    karty_mowy_price: string;
    karty_mowy_href: string;
  };
}

const REPO = "KrisPaki/Brain-Clone-Project";
const FILE_PATH = "artifacts/gobrain/src/data/content.json";

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [content, setContent] = useState<ContentData | null>(null);
  const [sha, setSha] = useState("");
  const [activeTab, setActiveTab] = useState<"prices" | "contact">("prices");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  useEffect(() => {
    const savedToken = localStorage.getItem("gobrain_admin_token");
    if (savedToken) {
      setToken(savedToken);
      fetchContent(savedToken);
    }
  }, []);

  const showMessage = (msg: string, type: "success" | "error") => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 6000);
  };

  const fetchContent = async (authToken: string) => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
        headers: {
          Authorization: `token ${authToken}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      if (res.status === 200) {
        const data = await res.json();
        setSha(data.sha);
        const decoded = JSON.parse(decodeURIComponent(escape(atob(data.content))));
        setContent(decoded);
        setIsLoggedIn(true);
        localStorage.setItem("gobrain_admin_token", authToken);
      } else {
        localStorage.removeItem("gobrain_admin_token");
        setIsLoggedIn(false);
        showMessage("Błąd podczas pobierania danych. Upewnij się, że token jest poprawny.", "error");
      }
    } catch (err) {
      showMessage("Problem z połączeniem z GitHubem.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) return;
    fetchContent(token.trim());
  };

  const handleLogout = () => {
    localStorage.removeItem("gobrain_admin_token");
    setIsLoggedIn(false);
    setContent(null);
    setToken("");
    setSha("");
  };

  const handleSave = async () => {
    if (!content || !token || !sha) return;
    setSaving(true);

    try {
      const jsonString = JSON.stringify(content, null, 2);
      const base64Content = btoa(unescape(encodeURIComponent(jsonString)));

      const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
        method: "PUT",
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Update content.json via Admin Panel",
          content: base64Content,
          sha: sha,
          branch: "main",
        }),
      });

      if (res.status === 200 || res.status === 201) {
        const data = await res.json();
        setSha(data.content.sha); // Uaktualnienie sha do kolejnych edycji
        showMessage("Zmiany zostały pomyślnie zapisane! Strona zaktualizuje się automatycznie w ciągu 1–2 minut.", "success");
      } else {
        const errorData = await res.json();
        showMessage(`Błąd zapisu: ${errorData.message || res.statusText}`, "error");
      }
    } catch (err) {
      showMessage("Problem z wysłaniem zmian na serwer.", "error");
    } finally {
      setSaving(false);
    }
  };

  const updateField = (section: keyof ContentData, field: string, value: string) => {
    if (!content) return;
    setContent({
      ...content,
      [section]: {
        ...content[section],
        [field]: value,
      },
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Panel Administratora</h1>
            <p className="text-sm text-slate-400 mt-1">Zaloguj się za pomocą swojego klucza dostępu (GitHub PAT)</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Klucz dostępu (GitHub Token)
              </label>
              <input
                type="password"
                placeholder="ghp_..."
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-slate-50/50"
                required
              />
            </div>

            {message && (
              <div className={`p-3 rounded-xl text-xs font-medium ${messageType === "error" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-primary hover:bg-primary/95 text-white font-semibold rounded-2xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 text-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                "Zaloguj się"
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-10 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-slate-800 text-lg leading-tight">GoBrain Panel</h1>
            <p className="text-xs text-slate-400">Edycja cen i danych kontaktowych strony</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://krispaki.github.io/Brain-Clone-Project/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-primary transition-colors bg-slate-50 hover:bg-slate-100 px-3 py-2 rounded-xl border border-slate-100"
          >
            <Globe className="w-3.5 h-3.5" />
            Zobacz stronę
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs font-medium text-red-500 hover:bg-red-50 px-3 py-2 rounded-xl transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            Wyloguj
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-6">
        {message && (
          <div className={`mb-6 p-4 rounded-2xl shadow-sm text-sm border flex items-start gap-3 transition-all ${
            messageType === "error" 
              ? "bg-red-50 border-red-100 text-red-700" 
              : "bg-green-50 border-green-100 text-green-700"
          }`}>
            <p className="font-medium flex-1">{message}</p>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          {/* Sidebar Tabs */}
          <div className="w-full md:w-60 bg-slate-50/50 border-r border-slate-100 p-4 flex flex-col gap-1">
            <button
              onClick={() => setActiveTab("prices")}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-3 ${
                activeTab === "prices"
                  ? "bg-white text-primary shadow-sm border border-slate-100"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <DollarSign className="w-4 h-4" />
              Cennik i Linki
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-3 ${
                activeTab === "contact"
                  ? "bg-white text-primary shadow-sm border border-slate-100"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <Phone className="w-4 h-4" />
              Dane Kontaktowe
            </button>

            <div className="mt-auto pt-4 border-t border-slate-100 text-[10px] text-slate-400">
              <p>Repozytorium: {REPO}</p>
              <p className="truncate mt-1">Plik: {FILE_PATH}</p>
            </div>
          </div>

          {/* Form Content */}
          <div className="flex-1 p-6 flex flex-col">
            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center py-10">
                <RefreshCw className="w-8 h-8 text-primary animate-spin mb-3" />
                <p className="text-sm text-slate-400">Ładowanie danych z serwera...</p>
              </div>
            )}

            {!loading && content && (
              <div className="flex-1 space-y-6">
                {activeTab === "prices" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">
                      Cennik i Linki Automater
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Product 1: ITS GoBrain Etap 1 */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                        <h3 className="font-bold text-sm text-slate-700">ITS GoBrain - Etap 1</h3>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Cena (PLN)</label>
                          <input
                            type="text"
                            value={content.cennik.its_etap1_price}
                            onChange={(e) => updateField("cennik", "its_etap1_price", e.target.value)}
                            className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Link koszyka (Automater)</label>
                          <input
                            type="text"
                            value={content.cennik.its_etap1_href}
                            onChange={(e) => updateField("cennik", "its_etap1_href", e.target.value)}
                            className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                      </div>

                      {/* Product 2: ITS GoBrain Etap 2 */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                        <h3 className="font-bold text-sm text-slate-700">ITS GoBrain - Etap 2</h3>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Cena (PLN)</label>
                          <input
                            type="text"
                            value={content.cennik.its_etap2_price}
                            onChange={(e) => updateField("cennik", "its_etap2_price", e.target.value)}
                            className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Link koszyka (Automater)</label>
                          <input
                            type="text"
                            value={content.cennik.its_etap2_href}
                            onChange={(e) => updateField("cennik", "its_etap2_href", e.target.value)}
                            className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                      </div>

                      {/* Product 3: ITS School Licencja */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                        <h3 className="font-bold text-sm text-slate-700">ITS Pre & School</h3>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Cena (PLN)</label>
                          <input
                            type="text"
                            value={content.cennik.its_school_price}
                            onChange={(e) => updateField("cennik", "its_school_price", e.target.value)}
                            className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Link koszyka (Automater)</label>
                          <input
                            type="text"
                            value={content.cennik.its_school_href}
                            onChange={(e) => updateField("cennik", "its_school_href", e.target.value)}
                            className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                      </div>

                      {/* Product 4: Platforma Terapeuta */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                        <h3 className="font-bold text-sm text-slate-700">Platforma Terapeuta</h3>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Cena (PLN)</label>
                          <input
                            type="text"
                            value={content.cennik.terapeuta_price}
                            onChange={(e) => updateField("cennik", "terapeuta_price", e.target.value)}
                            className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Link koszyka (Automater)</label>
                          <input
                            type="text"
                            value={content.cennik.terapeuta_href}
                            onChange={(e) => updateField("cennik", "terapeuta_href", e.target.value)}
                            className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                      </div>

                      {/* Product 5: Karta Mowy */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3 md:col-span-2">
                        <h3 className="font-bold text-sm text-slate-700">Karta Mowy</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-1">Cena (PLN)</label>
                            <input
                              type="text"
                              value={content.cennik.karty_mowy_price}
                              onChange={(e) => updateField("cennik", "karty_mowy_price", e.target.value)}
                              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-1">Link koszyka (Automater)</label>
                            <input
                              type="text"
                              value={content.cennik.karty_mowy_href}
                              onChange={(e) => updateField("cennik", "karty_mowy_href", e.target.value)}
                              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "contact" && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">
                      Dane Kontaktowe
                    </h2>

                    <div className="space-y-4">
                      {/* Telefon */}
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-55 text-slate-500 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                          <Phone className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-1">Wyświetlany telefon</label>
                            <input
                              type="text"
                              value={content.kontakt.phone}
                              onChange={(e) => updateField("kontakt", "phone", e.target.value)}
                              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-1">Link (z prefiksem +48)</label>
                            <input
                              type="text"
                              value={content.kontakt.phoneUrl}
                              onChange={(e) => updateField("kontakt", "phoneUrl", e.target.value)}
                              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                        </div>
                      </div>

                      {/* E-mail */}
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-55 text-slate-500 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                          <Mail className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <label className="block text-xs font-semibold text-slate-400 mb-1">E-mail</label>
                          <input
                            type="email"
                            value={content.kontakt.email}
                            onChange={(e) => updateField("kontakt", "email", e.target.value)}
                            className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                      </div>

                      {/* Facebook */}
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-55 text-slate-500 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                          <Facebook className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-1">Wyświetlany Facebook</label>
                            <input
                              type="text"
                              value={content.kontakt.facebook}
                              onChange={(e) => updateField("kontakt", "facebook", e.target.value)}
                              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-1">Link URL</label>
                            <input
                              type="text"
                              value={content.kontakt.facebookUrl}
                              onChange={(e) => updateField("kontakt", "facebookUrl", e.target.value)}
                              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Save Button */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-end">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-6 py-3 bg-primary hover:bg-primary/95 text-white font-bold rounded-2xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 text-sm flex items-center gap-2"
                  >
                    {saving ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4" />
                    )}
                    Zapisz zmiany na serwerze
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
