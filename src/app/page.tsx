import prisma from "@/utils/prisma";

export default async function Page() {
  const notes = await prisma.note.findMany();

  return (
    <main>
      {notes.map((note) => {
        return <div key={note.id}>{note.content}</div>;
      })}
    </main>
  );
}
