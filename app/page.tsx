"use client";

import { useState } from "react";
import { ShoppingBag, Menu, X, Send, Sparkles, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

// ─── MOCK DATA ────────────────────────────────────────────────────────────────
const NAV_LINKS = ["Mais Vendidos", "Linho Tech", "Camisetas", "Calças", "Casacos", "Acessórios"];

const PRODUCTS = [
  {
    id: 1,
    name: "Camisa Social Manga Curta",
    price: 142.40,
    tag: "Mais Vendido",
    rating: 4.8,
    reviews: 312,
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    colors: ["#e8dcc8", "#2c2c2c", "#8b7355"],
  },
  {
    id: 2,
    name: "Camiseta Manga Curta",
    price: 189.90,
    tag: "Novo",
    rating: 4.9,
    reviews: 187,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    colors: ["#f5f0e8", "#1a1a1a", "#6b6b5a"],
  },
  {
    id: 3,
    name: "Calça Alfaiataria Tech",
    price: 265.90,
    tag: "Destaque",
    rating: 4.7,
    reviews: 256,
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    colors: ["#2c2c2c", "#8b7355", "#c4b99a"],
  },
  {
    id: 4,
    name: "Camiseta Gola Média",
    price: 161.40,
    tag: "Linho Tech",
    rating: 4.6,
    reviews: 143,
    img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
    colors: ["#f0ebe0", "#3d3d3d", "#a09070"],
  },
];

const AI_MESSAGES = [
  {
    from: "ai",
    text: "Olá! Sou o AI Stylist da Urbô. Me conta: qual é a ocasião? Trabalho, casual ou evento especial?",
  },
  {
    from: "user",
    text: "Quero um look casual para o fim de semana, confortável mas estiloso.",
  },
  {
    from: "ai",
    text: "Perfeito! Para um casual premium recomendo:\n\n🔹 Camiseta Gola Média (off-white) + Calça Alfaiataria Tech (areia)\n🔹 Finalize com um acessório minimalista\n\nEssa combinação eleva o casual sem esforço — é a essência da Urbô.",
  },
  {
    from: "user",
    text: "Gostei! Qual calçado combina?",
  },
  {
    from: "ai",
    text: "Para esse look, sugiro:\n\n👟 Tênis chunky neutro (bege ou branco)\n🥿 Loafer em couro natural\n\nAmbos elevam o conforto sem quebrar a paleta terrosa da composição. Quer ver mais combinações?",
  },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────
function PromoBar() {
  return (
    <div className="bg-[#1a1a1a] text-[#e8dcc8] text-xs py-2 px-4 text-center tracking-widest uppercase font-light">
      <span className="hidden sm:inline">
        Frete grátis acima de R$395 &nbsp;|&nbsp; Troca fácil &nbsp;|&nbsp; Brinde acima de R$1.000
      </span>
      <span className="sm:hidden">Frete grátis acima de R$395</span>
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f7f3ed]/95 backdrop-blur border-b border-[#e0d9cc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-[0.2em] text-[#1a1a1a] uppercase">
          Urbô
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs tracking-widest uppercase text-[#5c5447] hover:text-[#1a1a1a] transition-colors font-medium"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative text-[#1a1a1a]">
            <ShoppingBag size={20} />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-[#8b7355] text-white text-[9px] rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#1a1a1a]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f7f3ed] border-t border-[#e0d9cc] px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-3 text-sm tracking-widest uppercase text-[#5c5447] border-b border-[#e0d9cc] last:border-0"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[92vh] max-h-[860px] flex items-end overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=85')",
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/85 via-[#0d0d0d]/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 sm:pb-20 w-full">
        <p className="text-[#c4b99a] text-xs tracking-[0.4em] uppercase mb-4 font-light">
          Nova Coleção — Primavera 2026
        </p>
        <h1 className="text-white text-6xl sm:text-8xl font-bold tracking-tight leading-none mb-4">
          TEXTURAS
          <br />
          <span className="text-[#c4b99a]">EM ALTA</span>
        </h1>
        <p className="text-[#d4cfc6] text-base sm:text-lg font-light mb-8 max-w-md tracking-wide">
          Essência Urbana Sofisticada
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            size="lg"
            className="bg-white text-[#1a1a1a] hover:bg-[#c4b99a] hover:text-white transition-all duration-300 rounded-none px-10 py-6 text-xs tracking-widest uppercase font-semibold"
          >
            Comprar Agora
            <ChevronRight size={16} className="ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/50 text-white hover:bg-white/10 rounded-none px-10 py-6 text-xs tracking-widest uppercase font-semibold"
          >
            Ver Lookbook
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[0] }) {
  const [hovered, setHovered] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#ede8df] mb-4">
        <img
          src={product.img}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />
        {/* Badge */}
        <Badge className="absolute top-3 left-3 bg-[#1a1a1a] text-[#e8dcc8] text-[10px] tracking-widest uppercase rounded-none px-2 py-1 font-medium">
          {product.tag}
        </Badge>
        {/* Wishlist */}
        <button
          onClick={() => setWishlist(!wishlist)}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur hover:bg-white transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={wishlist ? "#8b7355" : "none"}
            stroke={wishlist ? "#8b7355" : "#1a1a1a"}
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        {/* Quick Add */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-[#1a1a1a] py-3 text-center transition-transform duration-300 ${
            hovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <span className="text-white text-xs tracking-widest uppercase font-medium">
            Adicionar ao Carrinho
          </span>
        </div>
      </div>

      {/* Info */}
      <div>
        <h3 className="text-sm font-medium text-[#1a1a1a] mb-1 tracking-wide">{product.name}</h3>
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.floor(product.rating) ? "fill-[#8b7355] text-[#8b7355]" : "text-[#d4cfc6]"}
              />
            ))}
          </div>
          <span className="text-[11px] text-[#8b7355]">({product.reviews})</span>
        </div>
        {/* Colors */}
        <div className="flex gap-1.5 mb-2">
          {product.colors.map((c) => (
            <div
              key={c}
              className="w-4 h-4 rounded-full border border-[#e0d9cc] cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <p className="text-base font-semibold text-[#1a1a1a]">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </p>
        <p className="text-[11px] text-[#8b7355]">
          ou 3x de R$ {(product.price / 3).toFixed(2).replace(".", ",")} sem juros
        </p>
      </div>
    </div>
  );
}

function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-[#8b7355] text-xs tracking-[0.4em] uppercase mb-2">Seleção Exclusiva</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] tracking-tight">
            Mais Vendidos
          </h2>
        </div>
        <a
          href="#"
          className="hidden sm:flex items-center gap-1 text-xs tracking-widest uppercase text-[#8b7355] hover:text-[#1a1a1a] transition-colors font-medium"
        >
          Ver todos <ChevronRight size={14} />
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="sm:hidden text-center mt-10">
        <Button
          variant="outline"
          className="border-[#1a1a1a] text-[#1a1a1a] rounded-none px-8 py-5 text-xs tracking-widest uppercase"
        >
          Ver todos os produtos
        </Button>
      </div>
    </section>
  );
}

function BannerStrip() {
  const items = [
    { icon: "🚚", label: "Frete Grátis", sub: "Acima de R$395" },
    { icon: "🔄", label: "Troca Fácil", sub: "Até 30 dias" },
    { icon: "🎁", label: "Brinde Especial", sub: "Acima de R$1.000" },
    { icon: "🔒", label: "Compra Segura", sub: "Certificado SSL" },
  ];
  return (
    <div className="bg-[#1a1a1a] py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 text-[#e8dcc8]">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase">{item.label}</p>
              <p className="text-xs text-[#8b7355] font-light">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIStylistButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#1a1a1a] text-[#e8dcc8] px-5 py-3.5 shadow-2xl hover:bg-[#8b7355] transition-all duration-300 group"
    >
      <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
      <span className="text-xs tracking-widest uppercase font-semibold">AI Stylist</span>
    </button>
  );
}

function AIStylistModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState(AI_MESSAGES);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    const aiReply = {
      from: "ai",
      text: "Ótima escolha! Com base no seu estilo, também recomendo nossa **Camisa Social Manga Curta** em linho natural — versátil para várias ocasiões. Posso montar um look completo para você?",
    };
    setMessages((prev) => [...prev, userMsg, aiReply]);
    setInput("");
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full sm:w-[420px] p-0 bg-[#f7f3ed] border-l border-[#e0d9cc] flex flex-col"
      >
        {/* Header */}
        <SheetHeader className="px-5 py-4 bg-[#1a1a1a] text-left shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#8b7355] flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <div>
              <SheetTitle className="text-[#e8dcc8] text-sm font-semibold tracking-widest uppercase">
                AI Stylist
              </SheetTitle>
              <p className="text-[#8b7355] text-[11px] tracking-wide">Monte seu look perfeito</p>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] text-[#8b7355]">Online</span>
            </div>
          </div>
        </SheetHeader>

        {/* Messages */}
        <ScrollArea className="flex-1 px-4 py-5">
          <div className="flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.from === "ai" && (
                  <div className="w-7 h-7 bg-[#8b7355] flex items-center justify-center shrink-0 mr-2 mt-0.5">
                    <Sparkles size={12} className="text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                    msg.from === "user"
                      ? "bg-[#1a1a1a] text-[#e8dcc8]"
                      : "bg-white text-[#2c2c2c] border border-[#e0d9cc]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="px-4 py-4 border-t border-[#e0d9cc] bg-white shrink-0">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Me pergunte sobre looks..."
              className="flex-1 bg-[#f7f3ed] border border-[#e0d9cc] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#a09070] outline-none focus:border-[#8b7355] transition-colors"
            />
            <button
              onClick={send}
              className="bg-[#1a1a1a] text-white px-4 hover:bg-[#8b7355] transition-colors"
            >
              <Send size={15} />
            </button>
          </div>
          <p className="text-[10px] text-[#a09070] mt-2 text-center tracking-wide">
            IA com base no seu histórico e preferências
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-[#8b7355] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-2xl font-bold tracking-[0.2em] text-[#e8dcc8] uppercase mb-3">Urbô</h3>
          <p className="text-xs leading-relaxed font-light text-[#6b6b5a]">
            Moda masculina premium. Conforto e estilo urbano com essência sofisticada.
          </p>
        </div>
        {[
          { title: "Loja", links: ["Mais Vendidos", "Linho Tech", "Camisetas", "Calças", "Casacos"] },
          { title: "Ajuda", links: ["Minha Conta", "Rastrear Pedido", "Trocas", "Fale Conosco"] },
          { title: "Info", links: ["Sobre nós", "Sustentabilidade", "Blog", "Trabalhe Conosco"] },
        ].map((col) => (
          <div key={col.title}>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#e8dcc8] mb-4 font-semibold">
              {col.title}
            </p>
            <ul className="flex flex-col gap-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-xs hover:text-[#c4b99a] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto border-t border-[#2c2c2c] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-[11px] tracking-widest">© 2026 URBÔ STORE. TODOS OS DIREITOS RESERVADOS.</p>
        <div className="flex gap-4 text-[11px]">
          <a href="#" className="hover:text-[#c4b99a] transition-colors">Privacidade</a>
          <a href="#" className="hover:text-[#c4b99a] transition-colors">Termos</a>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f3ed]">
      <PromoBar />
      <Navbar />
      <HeroSection />
      <BannerStrip />
      <ProductGrid />
      <Footer />
      <AIStylistButton onClick={() => setAiOpen(true)} />
      <AIStylistModal open={aiOpen} onClose={() => setAiOpen(false)} />
    </div>
  );
}
