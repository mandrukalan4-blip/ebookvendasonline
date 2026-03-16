export default function SalesPage() {
  return (
    <div>
      <section id="conteudo" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold">O que você vai aprender</h2>
          <p className="mt-4 text-lg text-slate-600 leading-8">
            Um conteúdo pensado para tirar você da dúvida e colocar em movimento com estratégias possíveis para quem está começando.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[
            'Como começar a vender online mesmo saindo do zero',
            'Como escolher o que vender na internet',
            'Diferença entre produtos próprios, afiliados, infoprodutos e dropshipping',
            'Como divulgar sem investir em tráfego pago',
            'Como usar Instagram, TikTok, Shorts e WhatsApp para atrair clientes',
            'Como criar uma oferta simples e atrativa',
            'Como transformar conteúdo em oportunidade de venda',
            'Plano de ação prático para dar os primeiros passos'
          ].map((item) => (
            <div key={item} className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">✓</div>
                <p className="text-lg text-slate-700 leading-7">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-emerald-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Você não precisa começar perfeito. Precisa começar com direção.</h2>
            <p className="mt-5 text-lg text-slate-700 leading-8">
              Esse eBook foi criado para mostrar um caminho simples, possível e direto para quem quer entrar no mercado digital com mais clareza e menos confusão.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white border shadow-lg p-8">
            <h3 className="text-2xl font-semibold">Você receberá</h3>
            <ul className="mt-5 space-y-4 text-slate-700 text-lg">
              <li>• 1 eBook digital em PDF</li>
              <li>• conteúdo prático para iniciantes</li>
              <li>• estratégias para vender sem anúncios</li>
              <li>• ideias de produtos e modelos de negócio online</li>
              <li>• orientações para usar canais gratuitos de divulgação</li>
              <li>• plano de ação para começar</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="rounded-[2rem] bg-slate-900 text-white p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Ideal para quem quer começar no digital com mais confiança</h2>
              <p className="mt-5 text-lg text-slate-300 leading-8">
                Seja para buscar renda extra, vender como afiliado, criar um produto próprio ou estruturar um negócio online, este material ajuda você a dar o primeiro passo com clareza.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white text-slate-900 p-8">
              <div className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Oferta digital</div>
              <div className="mt-4 text-5xl font-bold">Seu eBook</div>
              <p className="mt-3 text-slate-600 leading-7">Entrega digital imediata após a compra.</p>
              <a id="comprar" href="#" className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-orange-500 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:scale-[1.02] transition">Comprar agora</a>
              <p className="mt-4 text-sm text-slate-500 text-center">Substitua o botão pelo seu link da Hotmart, Kiwify ou Gumroad.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}