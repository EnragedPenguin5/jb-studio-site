import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { getServicePage, serviceHead } from "@/lib/services";

export const Route = createFileRoute("/nightlife-photography")({
  head: () => serviceHead(getServicePage("/nightlife-photography")),
  component: NightlifePage,
});

function NightlifePage() {
  return <ServicePage page={getServicePage("/nightlife-photography")} />;
}
