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
                Avaliação inicial de ideias de negócio com apoio de IA local.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted">
                Informe uma ideia e prepare a solicitação para uma análise estruturada com problema resolvido,
                público-alvo, concorrência básica e pontos de atenção. A integração real com Ollama será conectada
                na próxima etapa.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-panel p-4 text-sm leading-6 text-muted shadow-soft">
              <strong className="font-semibold text-ink">Planejamento do MVP:</strong> execução local com Next.js,
              TypeScript, Tailwind CSS e futura chamada ao modelo <code>llama3.2:3b</code> via Ollama.
            </div>
          </aside>

          <IdeaForm />
        </div>
      </section>
    </main>
  );
}
