export default function IntentionCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="card bg-white dark:bg-slate-800">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
