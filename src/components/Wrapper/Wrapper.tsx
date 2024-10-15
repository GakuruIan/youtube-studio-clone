interface props {
  children: React.ReactNode;
}
const Wrapper: React.FC<props> = ({ children }) => {
  return (
    <div className="p-4 bg-light-200 dark:bg-dark-200  w-full rounded-md">{children}</div>
  );
};

export default Wrapper;
