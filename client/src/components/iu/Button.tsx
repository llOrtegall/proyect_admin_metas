interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button ({ children, ...props }: Props): JSX.Element {
  return (
    <button type="submit" className="p-2 rounded-md
    bg-gradient-to-b from-malibu-500 to-malibu-600 text-white
    hover:bg-gradient-to-b hover:from-malibu-600 hover:to-malibu-700
    " {...props}>
      {children}
    </button>
  )
}
