import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, GraduationCap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const SESSION_KEY = "gobrain_training_popup_dismissed";

export default function TrainingPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Szkolenia GoBrain"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={dismiss}
      />

      <div className="relative z-10 bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
        <div className="bg-gradient-to-br from-primary to-blue-700 px-8 pt-8 pb-10 text-white text-center relative">
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label="Zamknij"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-2xl font-extrabold mb-2 leading-tight">
            {'Chcesz zostać terapeutą GoBrain?'}
          </h2>
          <p className="text-white/80 text-base">
            {'Dołącz do grona certyfikowanych specjalistów metody GoBrain.'}
          </p>
        </div>

        <div className="px-8 py-6">
          <div className="flex items-start gap-3 mb-5 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>{'Szkolenia stacjonarne i webinary online — sprawdź najbliższe terminy'}</span>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 rounded-xl"
              asChild
              onClick={dismiss}
            >
              <Link to="/szkolenia-i-webinary">
                Zapisz się na szkolenie
              </Link>
            </Button>

            <button
              onClick={dismiss}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              Nie teraz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
