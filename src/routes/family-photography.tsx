import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { getServicePage, serviceHead } from "@/lib/services";

export const Route = createFileRoute("/family-photography")({
  head: () => serviceHead(getServicePage("/family-photography")),
  component: FamilyPage,
});

function FamilyPage() {
  return <ServicePage page={getServicePage("/family-photography")} />;
}
