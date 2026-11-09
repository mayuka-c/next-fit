export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 uppercase">Members Section</h2>
      {children}
    </div>
  );
}
