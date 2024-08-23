interface ILayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: ILayoutProps) => (
  <div className='flex col md:row'>{children}</div>
)
