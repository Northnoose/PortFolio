export function BaseBackground() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      {/* Base dark canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1016] via-[#070a10] to-[#000000]" />

      {/* Primary color field */}
      <div
        className="
          absolute top-1/3 left-[20%]
          w-[900px] h-[900px]
          bg-[radial-gradient(circle,rgba(99,102,241,0.12),transparent_65%)]
          blur-3xl
        "
      />
      

      {/* Secondary color field */}
      <div
        className="
          absolute top-[15%] right-[10%]
          w-[800px] h-[800px]
          bg-[radial-gradient(circle,rgba(56,189,248,0.09),transparent_65%)]
          blur-3xl
        "
      />

      {/* Global vignette */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(120%_100%_at_50%_40%,transparent_0%,rgba(0,0,0,0.45)_85%,rgba(0,0,0,0.75)_100%)]
        "
      />
      {/* Global depth darkening */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-black
        "
      />
    </div>
  )
}
