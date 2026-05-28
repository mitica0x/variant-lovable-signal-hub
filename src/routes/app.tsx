import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/app")({
  component: AppRedirect,
});

function AppRedirect() {
  useEffect(() => {
    window.location.href = "https://app.coinsiglieri.com";
  }, []);
  return (
    <main className="bg-bg min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="eyebrow text-cyan">Redirecting</div>
        <h1 className="mt-3 text-2xl font-semibold text-txt">Opening C<span className="text-cyan">0</span>insiglieri…</h1>
        <p className="mt-3 text-sm text-muted">
          If nothing happens,{" "}
          <a href="https://app.coinsiglieri.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-emerald">
            click here
          </a>.
        </p>
      </div>
    </main>
  );
}
