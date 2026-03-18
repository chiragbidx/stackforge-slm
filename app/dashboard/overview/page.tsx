export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Sales Overview</h1>
      <p className="text-muted-foreground">
        View your sales performance at a glance.
      </p>
      <div className="mt-12 flex flex-col items-center justify-center bg-muted/30 border border-dashed border-muted p-8 rounded-2xl">
        <span className="text-lg text-muted-foreground">Dashboard metrics and charts coming soon.</span>
      </div>
    </div>
  );
}