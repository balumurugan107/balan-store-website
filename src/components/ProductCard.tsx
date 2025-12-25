interface ProductCardProps {
  name: string;
  description: string;
  emoji: string;
  category: string;
}

const ProductCard = ({ name, description, emoji, category }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-medium">
      {/* Category Badge */}
      <span className="absolute top-4 right-4 rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary">
        {category}
      </span>

      {/* Emoji Icon */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-muted text-4xl transition-transform duration-300 group-hover:scale-110">
        {emoji}
      </div>

      {/* Content */}
      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

      {/* Decorative Line */}
      <div className="mt-4 h-1 w-12 rounded-full bg-primary/20 transition-all duration-300 group-hover:w-full group-hover:bg-primary/40"></div>
    </div>
  );
};

export default ProductCard;
