import { useRouter } from "next/router";
import Button from "@/components/common/Button";
import { PageRouteProps } from "@/interface";

export default function Home() {
  const router = useRouter();

  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute);
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <Button
        action={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
        buttonLabel="Go"
        buttonBackgroundColor="blue"
      />
    </div>
  );
}
