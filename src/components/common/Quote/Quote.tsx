interface QuoteProps {
    text: string;
    author?: string;
    className?: string;
  }
  
  const Quote = ({ text, author, className = '' }: QuoteProps) => {
    return (
      <blockquote className={`quote ${className}`}>
        <p>"{text}"</p>
        {author && <cite>— {author}</cite>}
      </blockquote>
    );
  };
  
  export default Quote;