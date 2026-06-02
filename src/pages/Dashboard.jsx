import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import SectionHeader from "../components/SectionHeader";
import CategoryList from "../components/CategoryList";
import ExpertCard from "../components/ExpertCard";

import { categories, experts } from "../data/dashboardData";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-slate-50 pb-24 antialiased selection:bg-indigo-500 selection:text-white">
            <div className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
                <Header />
            </div>

            <main className="px-4 sm:px-6 lg:px-8 mt-6 space-y-10">
                <section aria-label="Welcome Banner">
                    <HeroBanner />
                </section>

                <section aria-label="Expert Categories">
                    <SectionHeader
                        title="Browse Categories"
                        action="View All"
                    />
                    <div className="mt-4">
                        <CategoryList categories={categories} />
                    </div>
                </section>

                <section aria-label="Available Experts">

                    <div className="mt-4 grid grid-cols-1 gap-4">
                        {experts.map((expert) => (
                            <ExpertCard
                                key={expert.id}
                                expert={expert}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}