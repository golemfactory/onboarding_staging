import { ReactNode } from 'react'

type Props = {
  header: ReactNode
  footer: ReactNode
  main: ReactNode
}

export const TemplateOnboarding = ({ header, footer, main }: Props) => {
  return (
    <main>
      <header className="bg-blue-500">{header}</header>
      <section>{main}</section>
      <footer>{footer}</footer>
    </main>
  )
}
