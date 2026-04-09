import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />

      <section className="max-w-6xl w-full px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          我们的核心服务
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="美国公司注册"
            description="快速注册 LLC、Corp，提供 EIN、地址、银行开户协助。"
          />
          <ServiceCard
            title="美国报税服务"
            description="专业 CPA/EA 团队，提供个人与企业报税、税务规划。"
          />
          <ServiceCard
            title="税务咨询"
            description="跨境税务、公司结构规划、合规咨询。"
          />
        </div>
      </section>
    </main>
  );
}
