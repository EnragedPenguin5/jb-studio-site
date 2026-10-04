import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { getServicePage, serviceHead } from "@/lib/services";

export const Route = createFileRoute("/maternity-photography")({
  head: () => serviceHead(getServicePage("/maternity-photography")),
  component: MaternityPage,
});

function MaternityPage() {
  return <ServicePage page={getServicePage("/maternity-photography")} />;
}
