/** Latin wordmark in every language (brand name is never translated). */
export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span dir="ltr" className={`inline-flex flex-col leading-none ${className}`}>
      <span className="font-serif text-[1.55rem] font-semibold tracking-[0.01em] md:text-[1.7rem]">Pistachio</span>
      <span className="mt-0.5 font-sans text-[0.56rem] font-medium uppercase tracking-[0.42em] opacity-80">
        Weddings
      </span>
    </span>
  )
}
