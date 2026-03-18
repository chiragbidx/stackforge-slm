export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Leads</h1>
      <div className="mt-12 flex flex-col items-center justify-center bg-muted/30 border border-dashed border-muted p-10 rounded-2xl">
        <span className="mb-4 text-muted-foreground">No leads found. Add a new lead to get started.</span>
        <button className="bg-primary text-primary-foreground px-5 py-2 rounded-xl mt-2 font-semibold shadow hover:bg-primary/90 transition-colors">
          Add Lead
        </button>
      </div>
    </div>
  );
}