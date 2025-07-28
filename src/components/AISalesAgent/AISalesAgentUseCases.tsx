import { Users, Send, Database, Calendar, FileText } from "lucide-react";

export const AISalesAgentUseCases = () => {
  const useCases = [
    {
      icon: Users,
      useCase: "Inbound Lead Qualification",
      description: "Qualify form submissions or chats in real-time"
    },
    {
      icon: Send,
      useCase: "Cold Outreach",
      description: "AI writes and schedules multi-touch email campaigns"
    },
    {
      icon: Database,
      useCase: "CRM Auto-Updating",
      description: "Sync notes, outcomes, and follow-ups"
    },
    {
      icon: Calendar,
      useCase: "Meeting Scheduling",
      description: "Coordinate calendars and follow up on invites"
    },
    {
      icon: FileText,
      useCase: "Proposal Generation",
      description: "Build proposals using lead + pricing data"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
            Use Cases
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Use Case</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Description</th>
                </tr>
              </thead>
              <tbody>
                {useCases.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <item.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="font-medium text-slate-900">{item.useCase}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};