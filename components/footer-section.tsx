export default function FooterSection() {
  return (
    <div className="w-full pt-10 flex flex-col justify-start items-start">
      {/* Main Footer Content */}
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">
        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">
          {/* Brand Section */}
          <div className="self-stretch flex justify-start items-center gap-3">
            <div
              className="text-center text-xl font-semibold leading-4 font-sans font-serif"
              style={{ color: "var(--brand-heading)" }}
            >
              Evenza
            </div>
          </div>
          <div className="text-sm font-medium leading-[18px] font-sans" style={{ color: "var(--brand-text-light)" }}>
            ERP para rentales de mobiliario
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start items-start gap-4">
            {/* Twitter/X Icon */}
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    style={{ fill: "var(--brand-text-default)" }}
                  />
                </svg>
              </div>
            </div>

            {/* LinkedIn Icon */}
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                    style={{ fill: "var(--brand-text-default)" }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
          {/* Product Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div
              className="self-stretch text-sm font-medium leading-5 font-sans"
              style={{ color: "var(--brand-text-muted)" }}
            >
              Producto
            </div>
            <div className="flex flex-col justify-end items-start gap-2">
              {["Características", "Planes", "Integraciones", "Seguridad", "Chatbot IA"].map((item) => (
                <div
                  key={item}
                  className="text-sm font-normal leading-5 font-sans cursor-pointer transition-colors hover:opacity-80"
                  style={{ color: "var(--brand-heading)" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-sm font-medium leading-5 font-sans" style={{ color: "var(--brand-text-muted)" }}>
              Empresa
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              {["Quiénes somos", "Nuestro equipo", "Empleos", "Blog", "Contacto"].map((item) => (
                <div
                  key={item}
                  className="text-sm font-normal leading-5 font-sans cursor-pointer transition-colors hover:opacity-80"
                  style={{ color: "var(--brand-heading)" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-sm font-medium leading-5 font-sans" style={{ color: "var(--brand-text-muted)" }}>
              Recursos
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              {["Términos de uso", "Referencia API", "Documentación", "Comunidad", "Soporte"].map((item) => (
                <div
                  key={item}
                  className="self-stretch text-sm font-normal leading-5 font-sans cursor-pointer transition-colors hover:opacity-80"
                  style={{ color: "var(--brand-heading)" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Pattern */}
      <div
        className="self-stretch h-12 relative overflow-hidden border-t border-b"
        style={{ borderColor: "var(--brand-border-subtle)" }}
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[300px] h-16"
                style={{
                  left: `${i * 300 - 600}px`,
                  top: "-120px",
                  transform: "rotate(-45deg)",
                  transformOrigin: "top left",
                  borderWidth: "1px",
                  borderColor: "var(--brand-border-lighter)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
