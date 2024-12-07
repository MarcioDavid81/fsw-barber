const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="flex flex-col items-center justify-between bg-secondary px-5 py-2 sm:flex-row">
      <p className="text-xs text-gray-400">
        &copy; {year} FSW Barber. Todos os direitos reservados.
      </p>
      <p className="text-xs text-gray-400">
        Powered by:{" "}
        <a href="https://www.marciodavid.online/" target="_blank">
          Marcio David - Web Developer
        </a>
      </p>
    </footer>
  )
}

export default Footer
