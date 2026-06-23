/** Fixed animated background: grid + drifting aurora blobs. */
export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-accent-indigo/20 blur-[130px] animate-float" />
      <div
        className="absolute -right-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-accent-fuchsia/20 blur-[130px] animate-float"
        style={{ animationDelay: '-3s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-accent-cyan/10 blur-[130px] animate-float"
        style={{ animationDelay: '-6s' }}
      />
    </div>
  )
}
