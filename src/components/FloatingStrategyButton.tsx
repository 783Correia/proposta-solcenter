import { Link } from "react-router-dom";

const FloatingStrategyButton = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-6 sm:w-auto">
      <Link
        to="/plano-60-dias"
        className="block w-full sm:w-auto rounded-2xl border border-primary/20 bg-white/90 backdrop-blur-xl px-6 py-4 text-center text-sm font-bold tracking-wide text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_4px_20px_hsl(28_90%_48%/0.3)] shadow-[0_2px_12px_hsl(28_90%_48%/0.15)]"
      >
        Bônus — Plano de Ação 60 Dias
      </Link>
    </div>
  );
};

export default FloatingStrategyButton;
