import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collezioni | IO Sì Gioielli',
  description: 'Scopri le nostre collezioni di gioielli con diamanti lab grown: anelli, collane, orecchini e bracciali. Gioielli sostenibili made in Italy.',
};

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto py-8">
        {children}
      </div>
    </section>
  );
}
