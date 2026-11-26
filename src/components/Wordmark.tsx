/**
 * Latin wordmark in every language (brand name is never translated).
 * `mark` adds the logo emblem beside it: 'brand' on light surfaces, 'light' over dark photos.
 * The lockup is always LTR, so the emblem stays left of the name in Hebrew too.
 */
export function Wordmark({ className = '', mark }: { className?: string; mark?: 'brand' | 'light' }) {
  return (
    <span dir="ltr" className={`inline-flex items-center gap-2.5 leading-none ${className}`}>
      {mark && (
        <img
          src="/media/brand/pistachio-emblem.png"
          alt=""
          width={190}
          height={240}
          className={`h-10 w-auto transition-[filter] duration-500 ease-brand md:h-11 ${
            mark === 'light' ? 'brightness-0 invert' : ''
          }`}
        />
      )}
      <span className="inline-flex flex-col">
        <span className="font-serif text-[1.55rem] font-semibold tracking-[0.01em] md:text-[1.7rem]">Pistachio</span>
        <span className="mt-0.5 font-sans text-[0.56rem] font-medium uppercase tracking-[0.42em] opacity-80">
          Weddings
        </span>
      </span>
    </span>
  )
}
