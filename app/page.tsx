import { ComparisonForm } from "@/components/ComparisonForm";
import { IdeaForm } from "@/components/IdeaForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-8 sm:px-8 lg:min-h-screen lg:justify-center lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <aside className="space-y-5">
            <p className="text-sm font-semibold uppercase text-accent">IdeaCheck AI</p>
            <div className="space-y-4">
              <h1 className="max-w-xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Avaliação inicial de ideias de negócio com apoio de IA.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted">
                Informe uma ideia para receber uma análise estruturada ou compare duas alternativas para obter uma
                recomendação justificada com vantagens, riscos, público-alvo e próximos passos.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-panel p-4 text-sm leading-6 text-muted shadow-soft">
              <strong className="font-semibold text-ink">Foco do produto:</strong> apoiar decisões iniciais com uma
              visão clara sobre potencial, riscos e próximos passos.
            </div>
          </aside>

          <div className="space-y-6">
            <IdeaForm />
            <ComparisonForm />
          </div>
        </div>
      </section>
    </main>
  );
}
