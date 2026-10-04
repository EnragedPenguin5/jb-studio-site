import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { getServicePage, serviceHead } from "@/lib/services";

export const Route = createFileRoute("/portrait-photography")({
  head: () => serviceHead(getServicePage("/portrait-photography")),
  component: PortraitPage,
});

function PortraitPage() {
  return <ServicePage page={getServicePage("/portrait-photography")} />;
}
